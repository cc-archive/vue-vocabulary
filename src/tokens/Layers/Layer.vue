<template>
    <div class="vocab layer">
      <Heading :level="6">
        {{name}}
      </Heading>
      <template #foot>
        <code>{{ value }}</code><br/>
        <code>${{ zindexValue }}</code>
      </template>
    </div>
</template>

<script>

  import startCase from 'lodash/startCase'

  export default {
    name: 'Layer',
    props: {
      /**
       * _the name of the value being showcased_
       */
      name: {
        type: String,
        required: true
      },
      /**
       * _the Z index value being showcased_
       */
      value: {
        type: Number,
        required: true
      },
      /**
       * _some description of the value being showcased_
       */
      comment: {
        type: String,
        required: true
      },
      /**
       * _postioning of element_
       */
      left: {
        type: Number,
        required: true
      },
      right: {
        type: Number,
        required: true
      },
      top: {
        type: Number,
        required: true
      },
      bottom: {
        type: Number,
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
       * the variable name for this value
       */
      zindexValue: function () {
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

<style lang="stylus" src="./Layer.styl">
</style>
