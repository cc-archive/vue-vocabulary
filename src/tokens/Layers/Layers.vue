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
     * ∈ {`'hue'`, `'tone'`, `'context'`, `'overlay'`}
     */
    category: {
      type: String,
      validator: val => ['hue', 'tone', 'context', 'overlay'].includes(val),
      required: true
    }
  },
  data: function () {
    return {
      colors: this.extractColors(designTokens.props)
    }
  },
  computed: {
    spanSet: function () {
      if (this.category === 'context') {
        return [12, 6, 4, 4, 4]
      } else {
        return [12, 6, 3, 3, 3]
      }
    }
  },
    methods: {
      extractColors: function (data) {
        return sortBy(
          data,
          [
            'category',
            function (color) {
              let shadeLevels = [
                'tone_white', 'near_white', 'lighter', 'light',
                'white_low', 'white_high',
                'normal',
                'black_high', 'black_low',
                'dark', 'darker', 'near_black', 'tone_black'
              ]
              for (let i = 0; i < shadeLevels.length; i++) {
                if (color.name.endsWith(shadeLevels[i])) {
                  return i
                }
              }
              return Math.floor(shadeLevels.length / 2)
            }
          ]
        ).filter(
          token => token.type === 'color' &&
            token.category.includes(`color-group-${this.category}`)
        )
      }
    }
  }
</script>
