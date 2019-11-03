<template>
    <div class="square">
      hello
    </div>  
</template>

<script>

  import startCase from 'lodash/startCase'

  import Card from '@/patterns/Card/Card'

  export default {
    name: 'Layer',
    components: {
      Card,
      Container
    },
    props: {
      /**
       * _the layer property being showcased_
       */
      property: {
        type: String,
        required: true
      },
      /**
       * _the name of the value being showcased_
       */
      name: {
        type: String,
        required: true
      },
      /**
       * _the value being showcased_
       */
      value: {
        type: [String, Number],
        required: true
      },
      /**
       * _some description of the value being showcased_
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
          this.name.replace(/_/g, ' ').replace(this.property, '')
        )
      },
      /**
       * the stylesheet variable name for this value
       */
      styleName: function () {
        return this.name.replace(/_/g, '-')
      },
      /**
       * the JSS style dictionary to apply to the demo
       */
      demoStyles: function () {
        let styleDict = {}
        styleDict[`font${startCase(this.property)}`] = this.value
        return styleDict
      }
    }
  }
</script>

<style lang="stylus" src="./Layering.styl">
</style>
