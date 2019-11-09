<template>
  <div class="welcome-story">
    <GitHubCorner
      repo="creativecommons/cc-vocabulary"
      position="absolute">
    </GitHubCorner>
    <p>
      <a
        href="https://creativecommons.org/"
        class="readme-cc-logo">
        <img
          alt="Creative Commons logo"
          src="https://raw.githubusercontent.com/creativecommons/cc-vocabulary/master/readme_assets/cc_logo.png"
          height="62px"
        />
      </a>
    </p>
    <p>
      <a
        href="https://creativecommons.github.io/cc-vocabulary/"
        class="readme-vocabulary-logo">
        <img
          alt="Vocabulary logo"
          src="https://raw.githubusercontent.com/creativecommons/cc-vocabulary/master/readme_assets/vocabulary_logo.svg?sanitize=true"
          height="65px"/>
      </a>
    </p>
    <h4>
      This is an interractive playground for vocabulary components.
    </h4>
  </div>
</template>

<script>
  import GitHubCorner from '@/elements/GitHubCorner/GitHubCorner'

  export default {
    name: 'welcome',
    components: {
      GitHubCorner
    },
    data () {
      return {
        msg: 'Welcome to storybook!'
      }
    }
  }
</script>

<style lang="stylus" src="./Welcome.styl">
</style>
