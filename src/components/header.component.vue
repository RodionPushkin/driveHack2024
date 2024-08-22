<template>
  <header class="header">
    <div class="container">
      <router-link class="logo" to="/" @click="isMenuOpened = false">
        <svg height="16" viewBox="0 0 648 92" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M34.672 21.776C49.52 21.776 61.296 31.12 61.296 49.296V90H47.472V50.704C47.472 40.08 41.712 34.064 32.624 34.064C23.024 34.064 14.064 40.336 14.064 52.752V90H0.240001V3.088L14.064 0.783997V32.016C14.064 32.016 18.544 21.776 34.672 21.776ZM109.93 91.92C89.706 91.92 75.37 76.304 75.37 56.976C75.37 37.648 89.706 21.904 109.93 21.904C119.53 21.904 127.594 25.616 132.202 30.224V23.824H145.898V90H131.946L132.074 83.216C127.722 87.696 120.682 91.92 109.93 91.92ZM110.954 79.632C123.242 79.632 132.97 71.312 132.97 56.848C132.97 42.512 123.242 34.192 110.954 34.192C98.538 34.192 89.194 44.304 89.194 56.848C89.194 69.392 98.538 79.632 110.954 79.632ZM198.874 91.92C174.17 91.92 161.37 76.176 161.37 56.848C161.37 37.52 176.09 21.904 197.594 21.904C205.786 21.904 215.386 24.336 221.274 29.84V44.048C221.274 44.048 213.466 34.064 197.594 34.064C184.538 34.064 174.81 44.304 174.81 56.848C174.81 70.544 184.154 79.76 198.874 79.76C214.362 79.76 222.554 72.848 222.554 72.848V85.648C216.538 90.384 205.658 91.92 198.874 91.92ZM284.216 90L257.208 56.976L251.064 62.224V90H237.24V3.088L251.064 0.783997V47.12L278.968 23.824H296.888L267.448 48.528L302.008 90H284.216ZM338.603 91.92C315.307 91.92 301.995 75.92 301.995 56.848C301.995 37.008 317.227 21.904 337.707 21.904C356.907 21.904 368.043 37.776 368.043 53.776V60.176H315.179C316.715 70.416 323.883 79.632 338.859 79.632C355.115 79.632 364.971 72.72 365.099 72.72V85.136C365.099 85.136 357.931 91.92 338.603 91.92ZM315.819 49.424H354.219C353.707 44.304 350.379 33.168 335.915 33.168C321.451 33.168 316.587 44.304 315.819 49.424ZM383.365 90V23.696H397.189V36.496C400.261 28.432 410.245 21.776 424.325 21.776V33.168C407.557 33.168 397.445 42.768 397.189 56.848V90H383.365ZM449.079 91.92C437.815 91.92 429.495 85.648 429.495 85.648V72.08C429.495 72.08 438.199 79.632 448.951 79.632C457.783 79.632 462.263 76.944 462.263 72.592C462.263 67.728 457.783 64.784 449.975 60.432C441.271 55.568 433.335 51.344 433.335 40.336C433.335 29.072 443.191 21.904 455.223 21.904C463.287 21.904 469.175 24.336 472.375 26.256V39.824C469.431 37.008 463.543 34.192 456.887 34.192C449.463 34.192 446.391 36.624 446.391 40.08C446.391 44.304 449.975 45.712 461.367 52.368C470.199 57.488 475.191 61.84 475.191 71.824C475.191 81.936 467.639 91.92 449.079 91.92Z" fill="#000312"/>
          <path d="M549.724 91.92C533.212 91.92 519.9 79.12 519.9 63.248H534.364C534.364 71.696 540.892 78.48 549.724 78.48C558.556 78.48 565.084 71.696 565.084 63.248C565.084 54.672 558.556 47.888 549.724 47.888C546.908 47.888 544.476 48.528 542.428 49.68L535.772 46.992V3.088H578.652V15.248H549.724V34.448C553.82 34.448 557.788 35.216 561.372 36.752C572.124 41.104 579.548 51.344 579.548 63.248C579.548 79.12 566.236 91.92 549.724 91.92ZM633.006 89.872V60.944H591.15L623.534 3.088H638.51L613.294 48.912H647.982V89.872H633.006Z" fill="#00C572"/>
        </svg>

      </router-link>
      <input id="burger" v-model="isMenuOpened" type="checkbox">
      <label for="burger">
        <svg class="feather feather-menu" fill="none" height="24" stroke="currentColor" stroke-linecap="round"
             stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
             xmlns="http://www.w3.org/2000/svg">
          <line x1="3" x2="21" y1="12" y2="12"></line>
          <line x1="3" x2="21" y1="6" y2="6"></line>
          <line x1="3" x2="21" y1="18" y2="18"></line>
        </svg>
      </label>
      <nav class="nav">
        <router-link to="/" @click="isMenuOpened = false">главная</router-link>
        <!--        <router-link @click="isMenuOpened = false" to="/panel">панель</router-link>-->
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "header.component",
  data() {
    return {
      isMenuOpened: false
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(22px);
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 997;
  padding: 12px 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-size: 24px;
    font-weight: 500;
    user-select: none;

    span:first-child {
      color: #0c5fff;
    }

    span:last-child {
      color: var(--main-color);
    }
  }

  .nav {
    display: flex;
    gap: 32px;
    align-items: center;
    font-size: 18px;

    a {
      user-select: none;
    }
  }

  input {
    display: none;
  }

  label {
    display: none;
  }

  @media screen and (max-width: 768px) {
    background: var(--bg-color);
    backdrop-filter: none;
    .logo {
      z-index: 999;
    }
    .nav {
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 100vw;
      height: 100vh;
      left: 100vw;
      top: 0;
      opacity: 0;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(22px);
    }
    label {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      position: relative;
      z-index: 999;
      cursor: pointer;
      transition: 0.2s;
    }
    input:checked ~ label {
      transform: rotate(-90deg);
    }
    input:checked ~ .nav {
      display: flex;
      left: 0;
      opacity: 1;
      transition: opacity 0.4s linear, left 0.3s linear;
      z-index: 998;
    }
  }
}
</style>
<style lang="scss">
.header .nav a {
  user-select: none;
  transition: opacity 0.2s linear;
  padding: 6px;

  &.router-link-active {
    //border-bottom: 1px solid var(--font-color);
    //color: var(--main-color);
  }

  @media screen and (max-width: 768px) {
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
