<template>
  <div ref="preloader" class="preloader">
    <svg class="cicle" v-for="i in cicleCount" :key="i" :width="48+32*(i-1)" :height="48+32*(i-1)" :viewBox="`0 0 ${48+32*(i-1)} ${48+32*(i-1)}`" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle :cx="24+16*(i-1)" :cy="24+16*(i-1)" :r="20+16*(i-1)" stroke="#E42828" stroke-width="8"/>
    </svg>
    <svg v-if="this.cicleCount <= 3" class="logo" width="112" height="132" viewBox="0 0 112 132" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="56" cy="56" r="20" stroke="#D9232E" stroke-width="8"/>
      <path d="M80.118 82.8175L77.4352 79.8506L77.3606 79.918L77.2895 79.989L80.118 82.8175ZM28.1826 84.8326C29.769 86.3701 32.3013 86.3305 33.8388 84.7442C35.3763 83.1579 35.3367 80.6255 33.7504 79.088L28.1826 84.8326ZM24 56.0518C24 38.3447 38.3323 24 56 24V16C33.9032 16 16 33.9372 16 56.0518H24ZM56 24C73.6677 24 88 38.3447 88 56.0518H96C96 33.9372 78.0968 16 56 16V24ZM82.8008 85.7844C90.9013 78.4595 96 67.8485 96 56.0518H88C88 65.4955 83.9276 73.9798 77.4352 79.8506L82.8008 85.7844ZM16 56.0518C16 67.3462 20.6743 77.5555 28.1826 84.8326L33.7504 79.088C27.7338 73.2567 24 65.095 24 56.0518H16ZM77.2895 79.989L42.107 115.172L47.7639 120.828L82.9464 85.6459L77.2895 79.989Z" fill="#D9232E"/>
      <path d="M90.8371 94.255L88.1621 91.281L88.0863 91.3491L88.0141 91.4211L90.8371 94.255ZM17.0643 95.9032C18.6547 97.4364 21.1869 97.3901 22.7202 95.7997C24.2534 94.2093 24.2071 91.677 22.6167 90.1438L17.0643 95.9032ZM8 55.7986C8 29.4148 29.4757 8 56 8V0C25.0867 0 0 24.9672 0 55.7986H8ZM56 8C82.5243 8 104 29.4148 104 55.7986H112C112 24.9672 86.9133 0 56 0V8ZM93.512 97.229C104.857 87.0247 112 72.2416 112 55.7986H104C104 69.8733 97.8958 82.526 88.1621 91.281L93.512 97.229ZM0 55.7986C0 71.5418 6.54845 85.7652 17.0643 95.9032L22.6167 90.1438C13.5965 81.4478 8 69.2761 8 55.7986H0ZM88.0141 91.4211L53.134 126.166L58.7799 131.834L93.66 97.0889L88.0141 91.4211Z" fill="#D9232E"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: "preloader",
  data() {
    return {
      cicleCount: 100,
    }
  },
  mounted() {
    this.open()
    const interval = setInterval(() => {
      this.cicleCount--
      if(this.cicleCount==0) {
        clearInterval(interval)
        this.close()
      }
    }, 10)
  },
  methods: {
    open() {

    },
    close() {
      this.$refs.preloader.classList.toggle('closed', true)
    }
  }
}
</script>

<style lang="scss" scoped>
.preloader {
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 999999;
  background: var(--color-main);
  transition: opacity 0.3s;
  transition-delay: 0.6s;
  display: flex;
  align-items: center;
  justify-content: center;
  .cicle, .logo{
    position: absolute;
  }
  .logo{
    margin-top: 20px;
  }


  &.closed {
    opacity: 0;
    pointer-events: none;

    img:nth-of-type(1) {
      transform: translateX(-100%);
    }

    img:nth-of-type(2) {
      transform: translateX(100%);
    }

    img:nth-of-type(3) {
      transform: translateX(-100%);
    }
  }
}
</style>
