import Paragraph from '@/elements/Paragraph/Paragraph'
import Heading from '@/elements/Heading/Heading'
import Grid from '@/layouts/Grid/Grid'
import GridCell from '@/layouts/Grid/GridCell'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Indicating from '@/knobs/indicating'
import Text from '@/knobs/text'

export default { title: 'Elements|Paragraph' }

export const colored = () => ({
  mixins: [Colored],
  components: { Paragraph },
  template: `
    <div>
        <Paragraph>
            This is a paragraph without color.
        </Paragraph>
        <br/><br/>
        <Paragraph :color="color" :shade="shade">
        This is a paragraph with different colors and shades.
        </Paragraph>
    </div>
  `
})

export const branded = () => ({
  mixins: [Branded],
  components: { Paragraph },
  template: `
    <div>
        <Paragraph>
            This is a paragraph without a color brand.
        </Paragraph>
        <br/><br/>
        <Paragraph :brand="brand">
        This is a paragraph with different color brand.
        </Paragraph>
    </div>
  `
})

export const indicating = () => ({
  mixins: [Indicating],
  components: { Paragraph },
  template: `
    <Paragraph :indication="indication">
        A paragraph can indicate the connotations attached to the content
    </Paragraph>
    
  `
})

export const text = () => ({
  mixins: [ Text ],
  components: { Paragraph },
  template: `
    <Paragraph>{{text}}</Paragraph>
  `
})

export const densitySet = () => ({
  components: { Paragraph, Grid, GridCell, Heading },
  template: `
    <Grid>
    <GridCell :spanSet="[12, 6, 4, 4, 4]">
      <Heading
        :level="3"
        color="tomato">
        Dense
      </Heading>
      <Paragraph density="dense">
        Five syllables here.<br/>
        Seven more syllables here.<br/>
        Are you happy now?
      </Paragraph>
    </GridCell>
    <GridCell :spanSet="[12, 6, 4, 4, 4]">
      <Heading
        :level="3"
        color="gold">
        Default
      </Heading>
      <Paragraph>
        Maybe my cat's name...<br/>
        is Schrödinger. Or is it?<br/>
        We will never know.
      </Paragraph>
    </GridCell>
    <GridCell :spanSet="[12, 6, 4, 4, 4]">
      <Heading
        :level="3"
        color="green">
        Sparse
      </Heading>
      <Paragraph density="sparse">
        Fat man sees small door.<br/>
        He knows he cannot fit through.<br/>
        Tears flow free now.
      </Paragraph>
    </GridCell>
  </Grid>
    `
})
