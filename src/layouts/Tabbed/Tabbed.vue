<template>
  <div>
    <div class="tabs">
      <ul>
        <li
          v-for="(tabPane, index) in tabPaneList"
          :key="index"
          :class="{ 'is-active': index === activeTabIndex }"
          @click="changeTab(index)">
          <SlotRenderer
            :component="tabPane"
            name="tab"
            tag="a">
            {{ tabPane.title }}
          </SlotRenderer>
        </li>
      </ul>
    </div>
    <div class="tabs-content">
      <SlotRenderer
        v-for="(tabPane, index) in tabPaneList"
        :key="index"
        class="tabs-panel"
        :component="tabPane"
        tag="div"
        :classList="['tabs-panel', {'is-active': index === activeTabIndex }]"/>
    </div>
    <div v-show="false">
      <!-- @slot [`TabbedPane`](#/Layouts/TabbedPane) components go here -->
      <slot/>
    </div>
  </div>
</template>

<script>
  import SlotRenderer from '@/utils/SlotRenderer/SlotRenderer'

  /**
   * ### Tabbed views show menu-selected content.
   *
   * When there is a slot of data with the element of choice, a tabbed view
   * allows the user to choose a part of the information by making a selection
   * out of several tabs. Tabs can act as pseudo-navigation or in-page
   * navigation.
   */
  export default {
    name: 'Tabbed',
    provide: function () {
      return {
        tabPaneList: this.tabPaneList
      }
    },
    components: {
      SlotRenderer
    },
    props: {
      /**
       * _the index of the tab which should be active when initialised_
       *
       * Indices start at zero.
       */
      initialActiveTabIndex: {
        type: Number,
        default: 0
      }
    },
    data: function () {
      return {
        tabPaneList: [],
        activeTabIndex: this.initialActiveTabIndex
      }
    },
    computed: {
      activeTab: function () {
        return this.tabPaneList[this.activeTabIndex]
      }
    },
    methods: {
      changeTab: function (index) {
        this.tabPaneList[this.activeTabIndex].isActive = false
        this.activeTabIndex = index
        this.tabPaneList[this.activeTabIndex].isActive = true
      }
    },
    mounted: function () {
      this.tabPaneList[this.activeTabIndex].isActive = true
    }
  }
</script>
