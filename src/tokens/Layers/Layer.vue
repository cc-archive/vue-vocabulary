<template>  
    <Card
      class="vocab layer"
      :heading="properName"
      :subheading="comment"
      is-decked
      is-raised>
      <div
        class="swatch"
        :style="swatchStyles"
        @click="toggleOverlay"></div>
      <template #foot>
        <code>{{ value }}</code><br/>
        <code>${{ styleName }}</code>
      </template>
  </Card>
</template>

<script>
  import startCase from 'lodash/startCase'

  import Card from '@/patterns/Card/Card'

  export default {
    name: 'Layer',
    components: {
      Card
    },
    data: function () {
      return {
        showOverlay: true
      }
    },
    props: {
      /**
       * _the category of the Layer being showcased_
       */
      category: {
        type: String,
        required: true
      },
      /**
       * _the name of the layer being showcased_
       */
      name: {
        type: String,
        required: true
      },
      /**
       * _the layer being showcased_
       */
      value: {
        type: String,
        required: true
      },
      /**
       * _some description of the layer being showcased_
       */
      comment: {
        type: String,
        required: true
      }
    },
    computed: {
      /**
       * the capitalised name to show to the viewer
       */
      properName: function () {
        return startCase(
          this.name.replace(/_/g, ' ').replace(/layer/g, '')
        )
      },
      /**
       * the stylesheet variable name for this layer
       */
      styleName: function () {
        return this.name.replace(/_/g, '-')
      },
      /**
       * the JSS style dictionary to apply to the swatch
       */
      swatchStyles: function () {
        let styleDict = {}
        if (this.category !== 'overlay') {
          styleDict.backgroundColor = this.value
        } else {
          styleDict.backgroundColor = 'rgb(0, 38, 77)'
          if (this.showOverlay) {
            styleDict.backgroundImage = 'linear-gradient(' +
              '135deg,' +
              `transparent 50%, ` +
              `${this.value} 50%` +
              ')'
          }
        }
        return styleDict
      }
    },
    methods: {
      toggleOverlay: function () {
        this.showOverlay = !this.showOverlay
      }
    }
  }
</script>

<style lang="stylus" src="./Layer.styl">
</style>
