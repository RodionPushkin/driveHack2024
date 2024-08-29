<template>
  <div class="wrapper">
    <l-map ref="map" style="height: 100vh;width: 100vw;" v-model:zoom="zoom" v-model:center="center" :useGlobalLeaflet="false">
<!--      <l-tile-layer url="https://tiles-eu.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"-->
      <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    layer-type="base"
                    name="hackers54"></l-tile-layer>
      <l-marker
          :ref="`cameraMarker${camera.id}`"
          v-for="camera in this.cameras"
          :key="camera.id"
          :name="camera.title"
          :lat-lng="getCoord(camera.location.lat,camera.location.lng)"
          @click="openPopup(camera)"
      >
        <l-icon icon-url="/dot-green.png" :icon-size="[50,50]"/>
        <l-tooltip>
          Нажмите чтобы просмотреть изображение с камеры
        </l-tooltip>
      </l-marker>
    </l-map>
    <searchComponent :hint="hint" @searchsubmit="submit" @searchinput="search"></searchComponent>
    <div class="popup" v-show="popup.isActive" @click="closePopup()">
      <div>
        <p class="title">{{popup?.camera?.title}}</p>
        <p class="description" v-html="description"></p>
        <button class="button" @click="closePopup()">Закрыть</button>
      </div>
      <img ref="videoPlayer">
    </div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css"
import { latLng, Icon} from "leaflet";
import searchComponent from "@/components/search.component.vue";
import {LMap, LTileLayer, LMarker, LPopup, LIcon, LTooltip} from "@vue-leaflet/vue-leaflet"
export default {
  name: "home",
  components: {LTooltip, LMap, LTileLayer, LMarker, LPopup, LIcon, searchComponent},
  data() {
    return {
      zoom: 13,
      center: [55.75579833984375, 37.61759948730469],
      cities: [],
      cameras: [],
      socket: null,
      videos: [],
      description: '',
      popup: {
        isActive: false,
        camera: null
      },
      hint: ''
    }
  },
  mounted() {
    this.$api.get('cities').then(res=>{
      // console.log(res.cities)
      this.cities.push(...res.cities)
    })
    this.$api.get('camera').then(res=>{
      // console.log(res.cameras)
      this.cameras.push(...res.cameras)
    })
    setInterval(()=>{
      this.$api.get('camera').then(res=>{
        this.cameras.push(...res.cameras)
        for (let i = 0; i < this.cameras.length; i++) {
          if(this.cameras[i].id == this.popup.camera.id){
            this.description = this.cameras[i].description
          }
        }
      })
    }, 1000)
  },
  methods: {
    getCoord(a,b){
      return latLng(a,b)
    },
    initializeWebSocket(url){
      this.socket = new WebSocket(url);
      this.socket.binaryType = 'arraybuffer';
      const mediaSource = new MediaSource();
      this.$refs.videoPlayer.src = URL.createObjectURL(mediaSource);
      this.socket.onopen = () => {
        console.log('WebSocket connection established');
      };
      this.socket.onmessage = (event) => {
        try {
          if (event.data instanceof ArrayBuffer) {
            const blob = new Blob([event.data], { type: 'image/jpeg' });
            const url = URL.createObjectURL(blob);
            this.$refs.videoPlayer.src = url;
          }
        }catch {
          this.$refs.videoPlayer.src = '/__Iphone-spinner-1.gif';
        }
      };
      this.socket.onclose = () => {
        console.log('WebSocket connection closed');
      };
    },
    openPopup(camera){
      console.log(camera)
      this.popup.isActive = true
      this.popup.camera = camera
      this.description = camera.description
      this.initializeWebSocket(camera.source)
    },
    closePopup(){
      this.popup.camera = null
      this.popup.isActive = false
      this.socket.close()
    },
    search({search}){
      if(search.length == 0){
        this.hint = ''
        return
      }
      const names = [...this.cities, ...this.cameras]
      for (let i = 0; i < names.length; i++) {
        if(names[i].title.slice(0,search.length).toLowerCase() == search.toLowerCase()){
          this.hint = search+names[i].title.slice(search.length,names[i].title.length);
          break
          return
        }else this.hint = ''
      }
    },
    submit(text){
      const names = [...this.cities, ...this.cameras]
      for (let i = 0; i < names.length; i++){
        if(names[i].title.toLowerCase() == text.hint.toLowerCase()){
          this.center = this.getCoord(names[i].location.lat,names[i].location.lng)
          break
        }
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.popup{
  width: 100vw;
  height: 100vh;
  background: #000;
  position: absolute;
  z-index: 99999;
  top: 0;
  left: 0;
  border-radius: 8px;
  background: rgba(236, 236, 236, 0.5);
  backdrop-filter: blur(4px);
  padding: 56px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  //box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  .title{
    font-size: 20px;
  }
  img{
    //width: 80vw;
    height: 80vh;
    width: 100%;
    max-width: 720px;
    max-height: 480px;
    border-radius: 16px;
    background: #000;
    object-fit: contain;
    margin: 0 auto;
  }
  .button{
    margin: 16px 0 16px auto;
  }
}
</style>
<style>
.leaflet-control-attribution a{
  display: none;
}
.leaflet-control-zoom{
  margin-top: calc(100vh - 80px) !important;
}
.search{
  position: absolute;
  z-index: 99999;
  bottom: 10vh;
  left: 50%;
  max-width: 80vw;
  height: 80px;
  margin-left: -40vw;
  border-radius: 16px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  input{
    background: rgba(247, 247, 247, 0.95);
    border-radius: 8px;
    height: 100%;
    color: #0B0000;
  }
}
</style>
