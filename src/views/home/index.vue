<template>
  <div class="container-messenger">

  </div>
</template>

<script>

export default {
  name: "home",
  data() {
    return {
      // text: '',
      // user: this.$store.getters.USER,
      // folder: {
      //   selected: 0,
      //   list: [
      //     ''
      //   ]
      // },
      // chats: {
      //   page: 0,
      //   selected: undefined,
      //   messages: [],
      //   list: {
      //     0: {}
      //   },
      // },
      // finded: [
      //
      // ],
      // searchText: ''
    }
  },
  mounted() {
    // this.loadData()
    // // this.folder.list = [
    // //   '', ...this.$store.getters.FOLDER
    // // ]
    // this.$emitter.on("longpool", type => {
    //   console.log(type)
    //   this.loadData()
    // });
    // this.$emitter.on("update", type => {
    //   console.log(type)
    //   this.loadData()
    // });
    // setInterval(()=>{
    //   if(this.chats.selected){
    //     this.$api.get(`messages/${this.chats.selected.id}`).then(res=>{
    //       this.chats.messages = []
    //       this.chats.messages = res.messages
    //     })
    //   }
    // },200)
    // this.$refs.body.scrollTo(0, this.$refs.messages.scrollHeight);
  },
  methods: {
    // loadData() {
    //   this.$api.get(`chat?page=${this.chats.page}&folder=${this.folder.selected}`).then(res => {
    //     console.log(res)
    //     this.chats.list[res.folder] = res.chats
    //     // let chats = []
    //     // if(this.chats.list[String(res.folder)]){
    //     //   Object.keys(this.chats.list[String(res.folder)]).forEach(key=>{
    //     //     console.log(String(key),String(res.folder),typeof this.chats.list[String(res.folder)][String(key)],this.chats.list[String(res.folder)][String(key)])
    //     //     chats.push(...this.chats.list[String(res.folder)][String(key)])
    //     //   })
    //     //   this.chats.list[String(res.folder)] = chats
    //     // }
    //   })
    //   if(this.chats.selected){
    //     this.$api.get(`messages/${this.chats.selected.id}`).then(res=>{
    //       this.chats.messages = []
    //       this.chats.messages = res.messages
    //       setTimeout(()=>{
    //         this.$refs.body.scrollTo(0, this.$refs.messages.scrollHeight);
    //       },100)
    //     })
    //   }
    // },
    // selectFolder(){
    //   this.loadData()
    // },
    // selectChat(id) {
    //   this.chats.selected = id
    //   this.loadData()
    // },
    // call() {
    //   this.$store.dispatch('SET_CONNECT_TO', this.text)
    //   console.log(this.$peer);
    //   this.$peer.call(this.text)
    // },
    // copy() {
    //   navigator.clipboard.writeText(this.$store.getters.PEERID)
    // },
    // sendMessage(){
    //   if(this.$refs.message.value.replaceAll(' ','').replaceAll('\n','').length > 0){
    //     this.$api.post(`messages/${this.chats.selected.id}`,{},{
    //       content: this.$refs.message.value,
    //     }).then(()=>{
    //       this.$refs.message.value = ""
    //       this.loadData()
    //     })
    //   }
    // },
    // search(){
    //   if(this.$refs.search.value.replaceAll(' ','').length > 0){
    //     this.$api.get(`user/search?text=${this.$refs.search.value}`).then(res=>{
    //       this.finded = res.users
    //     })
    //   }
    // },
    // callTo(){
    //   this.$api.get(`user/callinfo/${this.chats.selected.id}`).then(res=>{
    //     console.log(res.callinfo[0].peer)
    //   })
    // }
  }
}
</script>

<style lang="scss" scoped>

</style>
