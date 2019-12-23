import Table from '@/layouts/Table/Table'
import TableCell from '@/layouts/Table/TableCell'

import Colored from '@/knobs/colored'

export default { title: 'Layouts|TableCell' }

export const styleSet = () => ({
  mixins: [Colored],
  components: { Table, TableCell },
  template: `
    <Table 
        caption="Fruits and their taste"
        :color="color" 
        :shade="shade"
        simplicity="slight"
        is-fixed>
        <template #head>
            <tr>
            <TableCell is-heading>Item</TableCell>
            <TableCell is-heading>Taste</TableCell>
            </tr>
        </template>
        <tr>
            <TableCell is-heading>Mango</TableCell>
            <TableCell indication="positive">Sweetest</TableCell>
        </tr>
        <tr>
            <TableCell is-heading>Grapes</TableCell>
            <TableCell indication="positive">Sweet</TableCell>
        </tr>
        <tr>
            <TableCell is-heading>Apple</TableCell>
            <TableCell indication="probably">Meh</TableCell>
        </tr>
        <tr>
            <TableCell is-heading>Orange</TableCell>
            <TableCell indication="negative">Sour</TableCell>
        </tr>
        <tr>
            <TableCell is-heading>Lemon</TableCell>
            <TableCell indication="negative">Sourest</TableCell>
        </tr>
    </Table>
  `
})
