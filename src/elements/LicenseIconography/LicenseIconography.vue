<template>
  <span class="vocab license-icons">
    <Popup v-bind="$attrs"
    v-if="showsPopup">
      <FontAwesomeIcon v-for="(icon, index) in processedIconList"
      :key="index"
      :icon="['fab', icon]"
      fixed-width />
      <template #popup>
        <Paragraph>
          <slot>{{ popupContent }}</slot>
        </Paragraph>
      </template>
    </Popup>
    <template v-else>
      <FontAwesomeIcon v-for="(icon, index) in processedIconList"
      :key="index"
      :icon="['fab', icon]"
      fixed-width />
    </template>
  </span>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import {
    faCreativeCommons,
    faCreativeCommonsBy,
    faCreativeCommonsNc,
    faCreativeCommonsNcEu,
    faCreativeCommonsNcJp,
    faCreativeCommonsNd,
    faCreativeCommonsSa,
    faCreativeCommonsPd,
    faCreativeCommonsZero,
    faCreativeCommonsRemix,
    faCreativeCommonsSampling,
    faCreativeCommonsSamplingPlus,
    faCreativeCommonsShare
  } from '@fortawesome/free-brands-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import Popup from '@/patterns/Popup/Popup'

  library.add(
    faCreativeCommons,
    faCreativeCommonsBy,
    faCreativeCommonsNc,
    faCreativeCommonsNcEu,
    faCreativeCommonsNcJp,
    faCreativeCommonsNd,
    faCreativeCommonsSa,
    faCreativeCommonsPd,
    faCreativeCommonsZero,
    faCreativeCommonsRemix,
    faCreativeCommonsSampling,
    faCreativeCommonsSamplingPlus,
    faCreativeCommonsShare
  )

  /**
   * ### License icons are hieroglyphs for the aspects of a license.
   *
   * A license icon represents an aspect of a license such as shareability and
   * commercial usability in pictorial form.
   */
  export default {
    name: 'LicenseIconography',
    components: {
      FontAwesomeIcon,
      Popup
    },
    inheritAttrs: false,
    props: {
      showsPopup: {
        type: Boolean,
        default: false
      },
      popupContent: {
        type: String,
        default: 'Creative Commons'
      },
      /**
       * _the list of icons to display_
       *
       * ⊂ {`''`, `'by'`, `'nc'`, `'nd'`, `'sa'`, `'nc-eu'`, `'nc-jp'`,
       * `'sampling'`, `'sampling-plus'`, `'remix'`, `'share'`, `'zero'`,
       * `'pd'`}
       */
      iconList: {
        type: Array,
        required: true,
        validator: val => val.every(
          icon => [
            '',
            'by',
            'nc',
            'nd',
            'sa',
            'nc-eu',
            'nc-jp',
            'sampling',
            'sampling-plus',
            'remix',
            'share',
            'zero',
            'pd'
          ].includes(icon)
        )
      }
    },
    computed: {
      processedIconList: function () {
        return this.iconList.map(icon => {
          return `creative-commons${icon ? '-' : ''}${icon}`
        })
      }
    }
  }
</script>
