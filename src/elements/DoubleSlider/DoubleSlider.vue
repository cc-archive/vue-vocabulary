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
    mixins: [
      Colored
    ]
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
      faderLeftValue: function() {
        const leftFader = parseInt(this.faderLeftValue)
        const rightFader = parseInt(this.faderRightValue)
        let behind = rightFader - 4

        if (leftFader >= behind) {
          this.faderRightValue = Math.min(leftFader + 5, 100)
        }
      },
      faderRightValue: function() {
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
          '--right-fader-x': '.01' * parseFloat(this.faderLeftValue),
          '--left-fader-x': '.01' * this.reverseNum(Math.max(parseInt(this.faderRightValue)))
        }
      }
    }
  }
</script>

<style lang="stylus" src="./DoubleSlider.styl">
</style>
