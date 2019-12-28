import Button from '@/elements/Button/Button'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Indicating from '@/knobs/indicating'

export default { title: 'Elements|Button' }

export const buttons = () => ({
  components: { Button },
  template: `
    <Grid>
      <GridCell>
        <Button
          brand="tomato"
          roundness="slight"
          size="huge">
          Button
        </Button>
      </GridCell>
      <GridCell>
        <Button
          brand="tomato"
          roundness="slight"
          size="large">
          Button
        </Button>
      </GridCell>
      <GridCell>
        <Button
          color="green"
          roundness="slight">
          Button
        </Button>
      </GridCell>
      <GridCell>
        <Button
          color="grey"
          shade="5"
          roundness="complete"
          size="small">
          Label
        </Button>
      </GridCell>
      <br/><br/>
      <GridCell>
        <Button
          brand="orange"
          roundness="slight"
          size="huge">
          Button
        </Button>
      </GridCell>
      <GridCell>
        <Button
          color="grey"
          shade="6"
          roundness="slight"
          size="large"
          simplicity="slight">
          Button
        </Button>
      </GridCell>
      <GridCell >
        <Button
          color="green"
          shade="6"
          roundness="slight">
          Button
        </Button>
      </GridCell>
      <GridCell >
        <Button
          color="grey"
          shade="5"
          roundness="complete"
          size="small"
          simplicity="slight">
          Label
        </Button>
      </GridCell>
      <br/><br/>
      <GridCell>
        <Button
          color="grey"
          shade="6"
          roundness="slight"
          size="huge"
          simplicity="slight">
          Button
        </Button>
      </GridCell>
    </Grid>
  `
})

export const colored = () => ({
  mixins: [Colored],
  components: { Button },
  template: `
    <Button :color="color" :shade="shade">{{ color }} {{ shade}}</Button>
  `
})

export const branded = () => ({
  mixins: [Branded],
  components: { Button },
  template: `
    <Button :brand="brand">{{ brand }}</Button>
  `
})

export const indicating = () => ({
  mixins: [Indicating],
  components: { Button },
  template: `
    <Button :indication="indication">{{ indication }}</Button>
  `
})
