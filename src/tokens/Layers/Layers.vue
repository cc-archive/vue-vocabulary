<template>
  <Grid density="sparse">
    <GridCell
      :span-set="[12]"
      v-for="(prop, index) in values"
      :key="index">
      <layer
        :value="prop.value"
        :comment="prop.comment"
        :left="prop.left"
        :right="prop.right"
        :top="prop.top"
        :bottom="prop.bottom"/>
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
   * ### Layers show you what you want to see when you want to see it.
   *
   * CC Vocabulary is the design system of Creative Commons, and all of its
   * page content has spatial relationships. These realationships our defined by the css
   * property z-index. There is a diffrent stacking level for all page content and when 
   * layers our used you wont need to worry about elements disappering from view or
   * stacking on top of other elements where they dont belong.  
   */
  export default {
    name: 'Layers',
    components: {
      GridCell,
      Grid,
      Layer
    },
    computed: {
      spanSet: function () {
        if (this.category === 'context') {
          return [12, 6, 4, 4, 4]
        } else {
          return [12, 6, 3, 3, 3]
        }
      }
    }
  }
</script>
