<template>
  <div class="vocab slider" :style="cssVars">
    <div id="left-progressBar"></div>
    <div id="right-progressBar"></div>
    <input id="faderLeft" type="range" v-model="faderLeftValue"
      v-bind:min="sliderMin"
      v-bind:max="sliderMax"
      v-bind:step="sliderStep"
      v-bind:aria-valuemin="sliderMin"
      v-bind:aria-valuemax="sliderMax"
      v-bind:aria-valuenow="faderLeftValue">
    <input id="faderRight" type="range" v-model="faderRightValue"
      v-bind:min="sliderMin"
      v-bind:max="sliderMax"
      v-bind:step="sliderStep"
      v-bind:aria-valuemin="sliderMin"
      v-bind:aria-valuemax="sliderMax"
      v-bind:aria-valuenow="faderRightValue">
  </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faKeyboard } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import Colored from '@/mixins/colored'
  import Indicating from '@/mixins/indicating'
  import Joined from '@/mixins/joined'
  import Rounded from '@/mixins/rounded'
  import Scaled from '@/mixins/scaled'
  import Simplified from '@/mixins/simplified'

  import Invertible from '@/mixins/invertible'
  import Unactionable from '@/mixins/unactionable'

  library.add(faKeyboard)

  /**
   * ### The double range slider is a input field very much like the regular range slider.
   * the big diffrence is a double range slider allows users
   * to select both a min and max.
   * exp. The range slider can be useful for allowing users to select
   * a specific price range when browsing products.
   */
  export default {
    name: 'DoubleSlider',
    data: function () {
      return {
        faderLeftValue: 90,
        faderRightValue: 100
      }
    },
    components: {
      FontAwesomeIcon
    },
    props: {
      sliderMax: {
        type: Number,
        default: 100
      },
      sliderMin: {
        type: Number,
        default: 0
      },
      sliderStep: {
        type: Number,
        default: 1
      },
      nobColor: {
        type: String,
        default: '#ff0000'
      },
      sliderColor: {
        type: String,
        default: '#000000'
      }
    },
    mixins: [
      Colored,
      Indicating,
      Joined,
      Rounded,
      Scaled,
      Simplified,

      Invertible,
      Unactionable
    ],
    methods: {
      reverseNum: function (numToReverse) {
        let reversedNumberRange = []
        let reversed = 0
        for (let i = 101; i > -1; i--) {
          reversedNumberRange.push(i)
          reversed = reversedNumberRange[numToReverse]
        }
        return reversed
      }
    },
    watch: {
      faderLeftValue: function leftFaderCollision () {
        const leftFader = parseInt(this.faderLeftValue)
        const rightFader = parseInt(this.faderRightValue)
        let behind = rightFader - 4

        if (leftFader >= behind) {
          this.faderRightValue = Math.min(leftFader + 5, 100)
        }
      },
      faderRightValue: function rightFaderCollision () {
        const leftFader = parseInt(this.faderLeftValue)
        const rightFader = parseInt(this.faderRightValue)
        let infront = leftFader + 4

        if (rightFader <= infront) {
          this.faderLeftValue = Math.max(rightFader - 5, 0)
        }
      }
    },
    computed: {
      cssVars () {
        return {
          '--leftFaderX': '.01' * parseFloat(this.faderLeftValue),
          '--rightFaderX': '.01' * this.reverseNum(Math.max(parseInt(this.faderRightValue)))
        }
      }
    }
  }
</script>

<style lang="stylus" src="./DoubleSlider.styl">
</style>
