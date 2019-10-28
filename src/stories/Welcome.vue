<template>

  <div class="main">
      <GitHubCorner repo="creativecommons/cc-vocabulary"> </GitHubCorner>
    <p align="center">
  <a href="https://creativecommons.org/" class="readme-cc-logo">
    <img
      alt="Creative Commons logo"
      src="https://raw.githubusercontent.com/creativecommons/cc-vocabulary/master/readme_assets/cc_logo.png"
      height="62px"/>
  </a>
</p>
<p align="center">
  <a href="https://creativecommons.github.io/cc-vocabulary/" class="readme-vocabulary-logo">
    <img
      alt="Vocabulary logo"
      src="https://raw.githubusercontent.com/creativecommons/cc-vocabulary/master/readme_assets/vocabulary_logo.svg?sanitize=true"
      height="65px"/>
  </a>
</p>
    <h4>
      This is an interractive playground for vocabulary components.
    </h4>
    <div class="help">
      <p>
        A story is a single state of one or more UI components. Here you can test on different backgrounds, screen sizes, for accessibility and more.
        <br />
      </p>
      <em>(Basically a story is like a visual test case.)</em>

    </div>
  </div>
</template>

<script>
  import GitHubCorner from '@/assets/GitHubCorner/GitHubCorner'

  const log = () => console.log('Welcome to storybook!')
  export default {
    name: 'welcome',
    components: {
      GitHubCorner
    },
    props: {
      showApp: {
        type: Function,
        default: log
      }
    },
    methods: {
      onClick (event) {
        event.preventDefault()
        this.showApp()
      }
    }
  }
</script>

<style>
  .main {
    margin: 15px;
    max-width: 600px;
    margin: auto;
    line-height: 1.4;
    font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif;
    text-align: center;
  }
  .logo {
    width: 400px;
  }
  .help {
    border: 1px solid silver;
    padding: 10px 20px;
    text-align: left;
    font-size: 14px;
    border-radius: 10px;
  }
  .link {
    color: #1474f3;
    text-decoration: none;
    border-bottom: 1px solid #1474f3;
    padding-bottom: 2px;
  }
  .code {
    font-size: 15px;
    font-weight: 600;
    padding: 2px 5px;
    border: 1px solid #eae9e9;
    border-radius: 4px;
    background-color: #f3f2f2;
    color: #3a3a3a;
    display: inline-block;
  }
  .note {
    opacity: 0.5;
  }
  hr {
    margin: 15px -20px;
    height: 0;
    border: 0;
    border-bottom: 1px solid silver;
  }
</style>
