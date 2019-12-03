<template>  
    <Card 
      class="vocab layer"
      :heading="level"
      :subheading="comment"
      is-decked
      is-raised>
      <div
        class="swatch"
        :style="swatchStyles"
        @click="toggleOverlay"></div>
      <template #foot v-if="level === 'top'">
        <code>{{ level }}</code><br/>
        <code>Z-index: 1</code>
      </template>
       <template #foot v-else-if="level === 'high'">
        <code>{{ level }}</code><br/>
        <code>Z-index: 2</code>
       </template>
       <template #foot v-else-if="level === 'high2'">
        <code>{{ level }}</code><br/>
        <code>Z-index: 3</code>
       </template>
       <template #foot v-else-if="level === 'mid'">
        <code>{{ level }}</code><br/>
        <code>Z-index: 100</code>
       </template>
       <template #foot v-else-if="level === 'bottom3'">
        <code>{{ level }}</code><br/>
        <code>Z-index: 800</code>
       </template>
       <template #foot v-else-if="level === 'bottom2'">
        <code>{{ level }}</code><br/>
        <code>Z-index: 810</code>
       </template>
       <template #foot v-else-if="level === 'bottom'">
        <code>{{ level }}</code><br/>
        <code>Z-index: 900</code>
       </template>
  </Card>
</template>

<script>
  import startCase from 'lodash/startCase'

  import Card from '@/patterns/Card/Card'

  export default {
    name: 'Layer',
    components: {
      Card
    },
    props: {
      /**
       * _the property of the font being showcased_
       *
       * ∈ {`'level'`}
       */
      level: {
        type: String,
        required: true
      }
    },
    data: function () {
      return {
        showOverlay: true
      }
    },
    computed: {
      /**
       * the capitalised name to show to the viewer
       */
      whichLayer: function () {
        return startCase(
          this.name.replace(/_/g, ' ').replace(/layer/g, '')
        )
      }
    },
    methods: {
      toggleOverlay: function () {
        this.showOverlay = !this.showOverlay
      }
    }
  }
</script>

<style lang="stylus" src="./Layer.styl">
</style>
