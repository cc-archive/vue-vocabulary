import Table from '@/layouts/Table/Table'
import TableCell from '@/layouts/Table/TableCell'

import Colored from '@/knobs/colored'
import Invertible from '@/knobs/invertible'

export default { title: 'Layouts|Table' }

export const colored = () => ({
  mixins: [Colored],
  components: { Table, TableCell },
  template: `
    <Table
        :color="color"
        :shade="shade"
        is-fixed>
        <template #head>
            <tr>
            <TableCell is-heading>Color</TableCell>
            <TableCell is-heading>Shade</TableCell>
            </tr>
        </template>
        <tr>
            <TableCell is-heading>{{ color}}</TableCell>
            <TableCell>{{ shade }}</TableCell>
        </tr>
    </Table>
  `
})

export const invertible = () => ({
  mixins: [Invertible],
  components: { Table, TableCell },
  template: `
    <Table 
    caption="Fruits, their concoctions and their taste"
    is-striped
    is-following
    is-fixed
    :isInverted="isInverted" 
    :color="color" 
    :shade="shade">
    <template #head>
        <tr>
        <TableCell is-heading>Item</TableCell>
        <TableCell is-heading>Taste</TableCell>
        </tr>
    </template>
    <tr>
        <TableCell is-heading label="Item:">Mango</TableCell>
        <TableCell label="Taste:">Sweetest</TableCell>
    </tr>
    <tr>
        <TableCell is-heading label="Item:">Grapes</TableCell>
        <TableCell label="Taste:">Sweet</TableCell>
    </tr>
    <tr>
        <TableCell is-heading label="Item:">Apple</TableCell>
        <TableCell label="Taste:">Meh</TableCell>
    </tr>
    <tr>
        <TableCell is-heading label="Item:">Orange</TableCell>
        <TableCell label="Taste:">Sour</TableCell>
    </tr>
    <tr>
        <TableCell is-heading label="Item:">Lemon</TableCell>
        <TableCell label="Taste:">Sourest</TableCell>
    </tr>
    <template #foot>
        <tr>
        <TableCell is-heading label="Item:">Juice</TableCell>
        <TableCell label="Taste:">Sweet</TableCell>
        </tr>
        <tr>
        <TableCell is-heading label="Item:">Shake</TableCell>
        <TableCell label="Taste:">Sweet</TableCell>
        </tr>
        <tr>
        <TableCell is-heading label="Item:">Jam</TableCell>
        <TableCell label="Taste:">Sweet</TableCell>
        </tr>
    </template>
    </Table>
  `
})
invertible.story = {
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }]
  }
}

export const styleSet = () => ({
  components: { Table, TableCell },
  template: `
    <div>
        <Table 
        caption="This is a boxed table" 
        color="green" 
        :border-list="['edge']"
        is-fixed>
        <template #head>
            <tr>
            <TableCell is-heading>Style</TableCell>
            <TableCell is-heading>Borders</TableCell>
            <TableCell is-heading>Location</TableCell>
            </tr>
        </template>
        <tr>
            <TableCell>Boxed</TableCell>
            <TableCell>Visible</TableCell>
            <TableCell>Around table</TableCell>
        </tr>
        <tr>
            <TableCell>Boxed</TableCell>
            <TableCell>Visible</TableCell>
            <TableCell>Around table</TableCell>
        </tr>
        </Table>
        <Table
        caption="This is a horizontally sliced table" 
        color="green" 
        :border-list="['row']"
        is-fixed>
        <template #head>
            <tr>
            <TableCell is-heading>Style</TableCell>
            <TableCell is-heading>Borders</TableCell>
            <TableCell is-heading>Location</TableCell>
            </tr>
        </template>
        <tr>
            <TableCell>Sliced horizontally</TableCell>
            <TableCell>Visible</TableCell>
            <TableCell>Between rows</TableCell>
        </tr>
        <tr>
            <TableCell>Sliced horizontally</TableCell>
            <TableCell>Visible</TableCell>
            <TableCell>Between rows</TableCell>
        </tr>
        </Table>
        <Table 
        caption="This is a vertically sliced table" 
        color="green" 
        :border-list="['column']"
        is-fixed>
        <template #head>
            <tr>
            <TableCell is-heading>Style</TableCell>
            <TableCell is-heading>Borders</TableCell>
            <TableCell is-heading>Location</TableCell>
            </tr>
        </template>
        <tr>
            <TableCell>Sliced vertically</TableCell>
            <TableCell>Visible</TableCell>
            <TableCell>Between cells</TableCell>
        </tr>
        <tr>
            <TableCell>Sliced vertically</TableCell>
            <TableCell>Visible</TableCell>
            <TableCell>Between cells</TableCell>
        </tr>
        </Table>
        <Table
        caption="This is a chopped table" 
        color="green" 
        :border-list="['row', 'column', 'edge']"
        is-fixed>
        <template #head>
            <tr>
            <TableCell is-heading>Style</TableCell>
            <TableCell is-heading>Borders</TableCell>
            <TableCell is-heading>Location</TableCell>
            </tr>
        </template>
        <tr>
            <TableCell>Chopped</TableCell>
            <TableCell>Visible</TableCell>
            <TableCell>Everywhere</TableCell>
        </tr>
        <tr>
            <TableCell>Chopped</TableCell>
            <TableCell>Visible</TableCell>
            <TableCell>Everywhere</TableCell>
        </tr>
        </Table>
    </div>
  `
})
