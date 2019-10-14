<template>
  <div ref="Popover" class="vocab popup" :class="popoverClasses">
    <div class="triangle" :class="direction"></div>
    <slot></slot>
  </div>
</template>

<script>

import Colored from "@/mixins/colored";
import Rounded from "@/mixins/rounded";
import Simplified from "@/mixins/simplified";

import Invertible from "@/mixins/invertible";

export default {
  name: "Popover",

  mixins: [Colored, Rounded, Simplified, Invertible],
  props: {
    direction: {
      type: String,
      default: "to-top",
      validator: value =>
        ["to-top", "to-left", "to-right", "to-bottom", "auto"].includes(value)
    },

    action: {
      type: String,
      default: "hover",
      validator: value => ["hover", "click"]
    }
  },

  data() {
    return {
      dimensions: null,
      methodsToUse: {
        "to-top": "setPositionToTop",
        "to-bottom": "setPositionToBottom",
        "to-left": "setPositionToLeft",
        "to-right": "setPositionToRight"
      },

      PopoverParent: null
    };
  },

  computed: {
    popoverClasses: function() {
      return [
        ...this.coloredClasses,
        ...this.roundedClasses,
        ...this.simplifiedClasses,

        ...this.invertibleClasses
      ];
    }
  },

  mounted() {
    this.PopoverParent = this.$refs.Popover.parentElement;

    this.PopoverParent.className += " has-popover";
    this.getParentDimensions();
    this.callMethodToSetPosition();

    if (this.action === "hover") {
      this.PopoverParent.className += " popover-hover";
    } else {
      this.PopoverParent.onclick = e => {
        if (this.PopoverParent.className.includes("popover-click")) {
          this.PopoverParent.className = this.PopoverParent.className.replace(
            "popover-click",
            ""
          );
        } else {
          this.PopoverParent.className += " popover-click";
        }
      };
    }
  },

  methods: {
    callMethodToSetPosition() {
      const methodName = this.methodsToUse[this.direction];
      this[methodName]();
    },

    getParentDimensions() {
      this.dimensions = this.PopoverParent.getClientRects()[0];
    },

    setPositionToTop() {
      const top = this.dimensions.height + 8;

      this.$refs.Popover.style.marginLeft = `${this.centerByX()}px`;
      this.$refs.Popover.style.marginTop = `${top}px`;
    },

    setPositionToBottom() {
      const top = 0 - this.$refs.Popover.getClientRects()[0].height - 8;

      this.$refs.Popover.style.marginLeft = `${this.centerByX()}px`;
      this.$refs.Popover.style.marginTop = `${top}px`;
    },

    setPositionToLeft() {
      const left = 0 - this.$refs.Popover.getClientRects()[0].width - 8;

      this.$refs.Popover.style.marginLeft = `${left}px`;
      this.$refs.Popover.style.marginTop = `${this.centerByY()}px`;
    },

    setPositionToRight() {
      const left = this.dimensions.width + 8;

      this.$refs.Popover.style.marginLeft = `${left}px`;
      this.$refs.Popover.style.marginTop = `${this.centerByY()}px`;
    },

    /**
     * used for Top and Bottom positions only
     */
    centerByX() {
      let marginNeededToBeCentered =
        this.dimensions.width - this.$refs.Popover.getClientRects()[0].width;
      return marginNeededToBeCentered / 2;
    },

    /**
     * used for left and right positions only
     */
    centerByY() {
      let marginNeededToBeCentered =
        this.dimensions.height - this.$refs.Popover.getClientRects()[0].height;
      return marginNeededToBeCentered / 2;
    }
  }
};
</script>

<style lang="stylus" src="./Popover.styl"></style>
