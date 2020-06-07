<template>
  <div class="vocab locale">
    <!-- TODO -->
    Languages available
    <div class="control has-icons-left">

      <div class="select">
        <select v-model="selected" @change="setLang">
          <option disabled>select</option>
          <option v-for="(langCode,index) in langs.locales" v-bind:value="langCode" :key="index">
            {{index}} - {{langCode}}
          </option>
        </select>
      </div>
      <div class="icon is-small is-left">
        <!-- TODO Add icons here -->
      </div>
    </div>
  </div>
</template>

<script>
  /**
   * ### Locale brings the content to you.
   *
   * When exploring an app that has translations defined, the user can
   * switch between locales using this component.
   */
  export default {
    name: 'Locale',
    props: {
      langs: {
        type: Object
      }
    },
    data: function () {
      return {
        selected: this.langs.defaultLang || navigator.language.split('-')[0] || 'en'
      }
    },
    methods: {
      setLang: function () {
        this.$root.$i18n.locale = this.selected
      }
    }
  }
</script>
