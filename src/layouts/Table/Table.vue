<template>
  <table class="table is-bordered  is-striped">

    <thead v-if="hasHead">
    <!-- @slot Table header goes here -->
    <slot name="head">
      <tr>
        <TableCell
          v-for="(key, index) in keys"
          :key="index">
          {{ information.head[key].display }}
        </TableCell>
      </tr>
    </slot>
    </thead>

    <tbody v-if="hasBody">
    <!-- @slot Content goes here -->
    <slot>
      <tr
        v-for="(entry, counter) in information.body"
        :key="counter">
        <TableCell
          v-for="(key, index) in keys"
          :key="index"
          :label="`${information.head[key].display }:`"
          :is-heading="information.head[key].isHeading">
          {{ entry[key] }}
        </TableCell>
      </tr>
    </slot>
    </tbody>

  </table>
</template>

<script>
  import TableCell from '@/layouts/Table/TableCell'

  /**
   * ### Tables show related data meaningfully.
   *
   * Tables render lots of related data in two dimensions using a grid of rows
   * and columns.
   */
  export default {
    name: 'Table',
    components: { TableCell },
    props: {
      /**
       * _the data to render in the table_
       *
       * This can be skipped and slots can be used to populate the table.
       */
      information: {
        type: Object,
        default: () => ({})
      }
    },
    computed: {
      hasHead: function () {
        return this.$slots.head || this.information.head
      },
      hasBody: function () {
        return this.$slots.default || this.information.body
      },
      keys: function () {
        if (this.information && this.information.head) {
          return Object.keys(this.information.head)
        } else {
          return []
        }
      }
    }
  }
</script>

<style src="@creativecommons/vocabulary/css/vocabulary.css">
</style>
