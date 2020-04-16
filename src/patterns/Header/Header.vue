<template>
  <header>
      <nav class="navbar" :class="size">
        <div class="navbar-brand">
          <a class="has-text-black">
            <svg
              class="logo"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidyMid meet"
              viewBox="0 0 304 73">
              <use href="logos/cc/logomark.svg#logomark"></use>
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
              <a class="navbar-link is-arrowless">Dropdown<i class="icon caret-down"></i></a>
              <div class="navbar-dropdown">
                <a class="navbar-item">Item 1</a>
                <a class="navbar-item">Item 2</a>
                <a class="navbar-item">Item 3</a>
              </div>
            </div>
            <a class="navbar-item">
              No dropdown
            </a>
          </div>
        </div>
      </nav>
    </header>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      size: {
        type: Number
      }
    }
  }
</script>
