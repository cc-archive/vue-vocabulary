import TableCell from '@/layouts/Table/TableCell'

export default {
  title: 'Layouts|TableCell'
}

const content = `
  <TableCell is-heading>Column name</TableCell>
  <TableCell>Text</TableCell>
  <TableCell isNumber>0</TableCell>
`

export const BasicCell = () => ({
  components: {
    TableCell
  },
  template: `
    <table>${content}</table>
  `
})
