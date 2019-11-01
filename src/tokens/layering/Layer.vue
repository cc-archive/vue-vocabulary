<template>
  <Section>
  color="red"
  roundness="rounded"
  is-raised>
  <Heading :level="1" color="red">Z-index stack</Heading>
  <Paragraph color="blue" shade="dark">
    This is an example of 
  </Paragraph>
    <div class="demo" :style="demoStyles">
      When we share, everyone wins.
    </div>
    <template #foot>
      <code>{{ value }}</code><br/>
      <code>${{ styleName }}</code>
    </template>
   </Section>
</template>

<script>
  import Section from 'layouts/Section/Section'

  import startCase from 'lodash/startCase'

  import Card from '@/patterns/Card/Card'

  export default {
    name: 'Layer',
    components: {
      Card
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