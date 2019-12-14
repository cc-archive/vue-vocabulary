export default {
  props: {
    /**
     * _the primary color for the component_
     *
     * ∈ {`'blue'`, `'green'`, `'magenta'`, `'olive'`, `'orange'`, `'purple'`,
     * `'red'`, `'sand'`, `'yellow'`}
     *
     * If the color is not specified, a default one is chosen as described.
     */
    color: {
      type: String,
      validator: val =>
        [
          'blue',
          'green',
          'magenta',
          'olive',
          'orange',
          'purple',
          'red',
          'sand',
          'yellow'
        ].includes(val)
    },
    /**
     * _the accentuating shade of the primary color to use_
     *
     * ∈ {`'light'`, `'dark'`, `'darker'`}
     *
     * If the shade is not specified, the base color will be used.
     */
    shade: {
      type: String,
      validator: val => ['light', 'dark', 'darker'].includes(val)
    },
    /**
     * _the accentuating opacity of the primary color to use from 0 to 9_
     *
     * If the opacity is not specified, the base color with opacity of 9 will be used.
     */
    opacity: {
      type: Number,
      default: 9,
      validator: val => val >= 0 && val <= 9
    }
  },
  computed: {
    coloredClasses: function () {
      let classes = []
      if (this.color) {
        classes.push(`${this.color}-colored`)
      }
      if (this.opacity) {
        classes.push(`${this.opacity}-opacity`)
      }
      if (this.shade) {
        classes.push(`${this.shade}-shaded`)
      }
      return classes
    }
  }
}
