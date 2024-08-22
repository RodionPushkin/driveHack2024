<template>
  <div class="wrapper">
    <l-map ref="map" style="height: 100vh;width: 100vw;" v-model:zoom="zoom" v-model:center="center" :useGlobalLeaflet="false">
<!--      <l-tile-layer url="https://tiles-eu.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"-->
      <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    layer-type="base"
                    name="hackers54"></l-tile-layer>
      <l-marker
          v-if="this.cities.length > 0"
          v-for="city in this.cities"
          :key="city.id"
          :name="city.title"
          :lat-lng="getCoord(city.location.lat,city.location.lng)">
        <l-icon icon-url="/city_point.png" :icon-size="[56,56]" />
        <l-popup :content="city.description"></l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css"
import { latLng, Icon} from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LIcon } from "@vue-leaflet/vue-leaflet"
export default {
  name: "home",
  components: { LMap, LTileLayer, LMarker, LPopup, LIcon},
  data() {
    return {
      zoom: 13,
      center: [55.75579833984375, 37.61759948730469],
      cities: []
    }
  },
  mounted() {
    this.$api.get('cities').then(res=>{
      console.log(res.cities)
      this.cities.push(...res.cities)
    })
  },
  methods: {
    getCoord(a,b){
      return latLng(a,b)
    },
  }
}
</script>

<style lang="scss" scoped>
.container{
  //flex: 1 0 auto;
  .leaflet-control-attribution a{
    display: none;
    position: absolute;
    top: -9999;
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
</style>
