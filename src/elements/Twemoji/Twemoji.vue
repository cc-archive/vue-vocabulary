<template>
  <div ref="emoji">
    <slot></slot>
  </div>
</template>

<script>
  import twemoji from 'twemoji'
  export default {
    name: 'Twemoji',
    mounted () {
      twemoji.parse(this.$refs.emoji)
    }
  }
</script>

<style lang="stylus" src="./Twemoji.styl"></style>
