<template>
  <div class="search">
    <input ref="name" maxlength="200" placeholder="поиск" type="text" @keyup="search" @submit="submit" @keydown.enter="submit">
    <p>{{hint}}</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Search",
  emits: ["searchinput","searchsubmit"],
  props:{
    hint: String
  },
  data() {
    return {
      isFiltersOpened: true,
      timer: 0,
      filters: {},
      name: ''
    }
  },
  methods: {
    search() {
      // clearTimeout(this.timer);
      // this.$props.hint = ''
      // this.timer = setTimeout(() => {
        this.name = this.$refs.name?.value.split(0, 200)
        this.$emit('searchinput', {search: this.name[0]})
      // }, 700);
    },
    submit() {
      this.$emit('searchsubmit', {search: this.name[0], hint: this.hint})
    }
  },
  computed: {}
}
</script>

<style lang="scss" scoped>

.search {
  width: 100%;
  //position: relative;
  p{
    position: absolute;
    top: 50%;
    margin: -7px 0 0 56px;
    pointer-events: none;
    user-select: none;
  }
  > svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: var(--font-color4);
    z-index: 1;
    pointer-events: none;
    left: 16px;
    transition: color 0.3s linear;
    opacity: 0.5;
  }

  .settings {
    right: 0;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: var(--font-color4);
    z-index: 1;
    height: 56px;
    width: 56px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      color: var(--font-color4);
      transform: rotate(0deg);
      transition: 0.6s ease-in-out, color 0.3s linear;
    }

    @media screen and (min-width: 768px) {
      &:hover {
        svg {
          transform: rotate(360deg);
        }
      }
    }
  }

  > input {
    width: 100%;
    padding: 0 56px;
    position: relative;
    z-index: 0;
    font-weight: 500;

    &::placeholder {
      user-select: none;
    }
  }

  > input:focus {
    ~ svg {
      color: var(--main-color);
    }

    ~ div > svg {
      color: var(--main-color);
    }
  }
}

.filters {
  width: 100%;
  padding: 16px;
  background: var(--font-color);
  color: var(--font-color4);
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  @media screen and (max-width: 1285px) {
    justify-content: center;
  }

  > p {
    width: 100%;
    font-weight: 600;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
  }

  label {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;

    input[type="checkbox"] {
      min-height: 32px;
      min-width: 32px;
    }

    input[type="number"] {
      border-bottom: 1px solid var(--bg-color);
      border-radius: 0px;
      min-height: 20px;
    }
  }
}

</style>
<style lang="scss">
.filters {
  label {
    color: var(--font-color4) !important;
  }
}
</style>
