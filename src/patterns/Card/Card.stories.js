import Card from '@/patterns/Card/Card'

import Colored from '@/knobs/colored'
import Invertible from '@/knobs/invertible'

export default { title: 'Patterns|Card' }

let dhruvSource = 'https://avatars0.githubusercontent.com/u/16580576'
let dhruvAlt = 'Dhruv Bhanushali\'s profile picture'

export const colored = () => ({
  mixins: [Colored],
  components: { Card },
  template: `
    <div>
        <Card 
            heading="Colorless card"
            subheading="No accent"
            is-raised>
                <template #foot>
                    BORING!
                </template>
        </Card>
        <br/><br>
        <Card 
            heading="Colored card"
            subheading="No accent"
            is-raised
            :color="color" 
            :shade="shade">
                <template #foot>
                    BORING!
                </template>
        </Card>
    </div>
  `
})

export const invertible = () => ({
  mixins: [Invertible, Colored],
  components: { Card },
  template: `
    <Card 
        heading="Colorless card"
        subheading="No accent"
        :isInverted="!isInverted"
        :color="color" 
        is-raised>
            <template #foot>
                BORING!
            </template>
    </Card>
  `
})
invertible.story = {
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }]
  }
}

export const style = () => ({
  mixins: [Colored, dhruvAlt, dhruvSource],
  components: { Card },
  template: ` 
  <Grid density="sparse">
    <GridCell :span-set="[12, 6, 3, 3, 3]">
      <Card
        color="orange"
        heading="Dhruv Bhanushali"
        subheading="Developer"
        :featuredImageSource="dhruvSource"
        :featuredImageAlternateText="dhruvAlt"
        roundness="slight"
        is-raised>
        <template #foot>
          🇮🇳 India
        </template>
      </Card>
    </GridCell>
  </Grid>
  `
})
