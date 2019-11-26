<template>
  <Grid density="sparse">
    <GridCell
      :span-set="[12]"
      v-for="(prop, index) in values"
      :key="index">
      <layer
        :property="property"
        :name="prop.name"
        :value="prop.value"
        :comment="prop.comment"/>
    </GridCell>
  </Grid>
</template>

<script>
  import sortBy from 'lodash/sortBy'

  import Layer from '@/tokens/Layers/Layer'
  import Grid from '@/layouts/Grid/Grid'
  import GridCell from '@/layouts/Grid/GridCell'

  import designTokens from '@/assets/tokens/tokens.raw.json'

  /**
   * ### Layers show you what you want to see when you want to see them.
   *
   * CC Vocabulary is the design system of Creative Commons, and all of its
   * page content has spatial relationships. These realationships our defined by the css
   * property z-index. There is a diffrent stacking level for all page content and when 
   * layers our used you wont need to worry about elements disappering from view or
   * stacking on top of other elements where they dont belong.  
   */
  export default {
    name: 'Layer',
    components: {
      GridCell,
      Grid,
      Layer
  },
  props: {
    /**
     * _the substring of the category to filter based on_
     *
     * ∈ {`'level'`}
     */
    category: {
      type: String,
      validator: val => ['level'].includes(val),
      required: true
    }
  },
  data: function () {
    return {
      layers: this.extractLayers(designTokens.props)
    }
  },
    methods: {
      extractLayers: function (data) {
        return sortBy(
          data,
          [
            'value'
          ]
        ).filter(
          token => token.category.includes(`font-${this.property}`)
        )
      }
    }
  }
</script>
