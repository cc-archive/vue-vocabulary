<template>
    <th v-if="isHeading" class="has-background-grey-lighter">
      <span>
        {{ label }}
      </span>
      <!-- Content goes here -->
      <slot/>
    </th>
    <td v-else :class="numberCell">
      <span>
        {{ label }}
      </span>
      <!-- Content goes here -->
      <slot/>
    </td>
</template>

<script>

  /**
   * ### Cells are the pillars of tables.
   *
   * A cell is the intersection of a row and a column and represents on unit of
   * data. A collection of cells forms a table.
   *
   * @see For example usage, see [Table](#/Layouts/Table).
   */
  export default {
    name: 'TableCell',
    props: {
      /**
       * _the label for the content of the cell_
       */
      label: {
        type: String
      },
      /**
       * _whether the cell is of a heading type_
       */
      isHeading: {
        type: Boolean,
        default: false
      },
      /**
       * _whether the cell is a number
       */
      isNumber: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      numberCell: function () {
        return [
          this.isNumber ? 'number-cell' : ''
        ]
      }
    }
  }
</script>

<style src="@creativecommons/vocabulary/css/vocabulary.css">
</style>
