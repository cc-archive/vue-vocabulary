import Table from '@/layouts/Table/Table'
import TableCell from '@/layouts/Table/TableCell'

import Indicating from '@/knobs/indicating'

export default {
  title: 'Layouts|TableCell'
}

const content = `
  <template #head>
    <tr>
      <TableCell is-heading>Column name</TableCell>
    </tr>
    </template>
    <tr>
      <TableCell>Text</TableCell>
    </tr>
    <tr>
      <TableCell isNumber>0</TableCell>
    </tr>
`

export const BasicCell = () => ({
  mixins: [Indicating],
  components: {
    Table,
    TableCell
  },
  template: `
    <Table is-fixed>${content}</Table>
  `
})
