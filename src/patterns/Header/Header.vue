<template>
  <header>
      <nav class="navbar" :class = size>
        <div class="navbar-brand">
          <a class="has-text-black">
            <svg
              class="logo"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 304 73">
              <use :href="`${svg}#logomark`"></use>
            </svg>
          </a>
          <a role="button" class="navbar-burger is-active" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu is-active">
          <div class="navbar-end">
            <div class="navbar-item has-dropdown is-hoverable">
              <div v-for="item in drop" :key="item">
                <a class="navbar-link is-arrowless"> {{ item.title }} <i class="icon caret-down"></i></a>
                <div class="navbar-dropdown">
                  <a class="navbar-item" v-for="item in item.items" :key="item">{{ item }}</a>
                </div>
              </div>
            </div>
            <a class="navbar-item" v-for="item in nonDrop" :key="item.title">
              {{ item.title }}
            </a>
          </div>
        </div>
      </nav>
    </header>
</template>

<script>
  import svg from '@creativecommons/vocabulary/assets/logos/cc/logomark.svg'
  export default {
    name: 'Header',
    props: {
      size: {
        type: Number
      },
      nonDrop: {
        type: Array
      },
      drop: {
        type: Array
      }
    },
    computed: {
      svg () {
        return svg
      }
    }
  }
</script>
