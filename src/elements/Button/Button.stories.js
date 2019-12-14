import Button from '@/elements/Button/Button'
import Grid from '@/layouts/Grid/Grid'
import GridCell from '@/layouts/Grid/GridCell'
import LicenseBadge from '@/patterns/LicenseBadge/LicenseBadge'
import {
  withKnobs,
  boolean,
  select,
  text,
  number,
  radios
} from '@storybook/addon-knobs'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faReadme } from '@fortawesome/free-brands-svg-icons'

library.add(faReadme)

export default {
  title: 'Elements|Button',
  decorators: [withKnobs],
  parameters: {
    component: Button,
    componentSubtitle:
      'Buttons inspire action.'
  }
}

// Button playground with Knob
export const knobs = () => ({
  components: {
    Button
  },

  props: {
    isDisabled: {
      default: boolean('Disabled', false)
    },
    text: {
      default: text('Text', 'Click Me')
    },
    color: {
      default: select(
        'Colors',
        {
          None: null,
          Red: 'red',
          Blue: 'blue',
          Yellow: 'yellow',
          Orange: 'orange',
          Gray: 'grey',
          Cyan: 'cyan',
          Violet: 'violet',
          Teal: 'teal',
          Indigo: 'indigo',
          Pink: 'pink',
          Grape: 'grape',
          Green: 'green',
          Lime: 'lime'
        },
        null
      )
    },
    opacity: {
      default: number('Opacity', 0, {
        range: true,
        min: 0,
        max: 9,
        step: 1
      })
    },
    size: {
      default: select(
        'Sizes',
        {
          Normal: 'normal',
          Big: 'big',
          Large: 'large',
          Huge: 'huge',
          Enormous: 'enormous',
          Gigantic: 'gigantic',
          Mega: 'mega'
        },
        'normal'
      )
    },
    roundness: {
      default: radios(
        'Roundness',
        {
          None: null,
          Slight: 'slight',
          Complete: 'complete'
        },
        null
      )
    }
  },
  template: `<Button 
                :isDisabled="isDisabled" 
                :color="color" 
                :opacity="opacity"
                :size="size"
                :roundness="roundness">
                    {{ text }}
            </Button>`
})

// Basic Button
export const basic = () => ({
  components: {
    Button
  },
  template: `
  <div>
    <Button>Click me</Button>
    <br/><br/>
    <Button color="blue">Click me</Button>
    <br/><br/>
    <Button color="orange">Click me</Button>
    <br/><br/>
    <Button color="green">Click me</Button>
    <br/><br/>
    <Button color="yellow">Click me</Button>
  </div>
  `
})
basic.story = {
  parameters: {
    docs: {
      storyDescription: 'A button without color is black.'
    }
  }
}

// Inverted Button
export const inverted = () => ({
  components: {
    Button,
    Grid,
    GridCell
  },
  template: `
  <Grid>
    <GridCell :span-set="[12, 6, 6, 6, 6]">
      <Button is-inverted>
        Click me
      </Button>
    </GridCell>
    <GridCell :span-set="[12, 6, 6, 6, 6]">
      <Button 
        is-inverted
        simplicity="slight">
        Click me
      </Button>
    </GridCell>
    <GridCell :span-set="[12, 6, 6, 6, 6]">
      <Button 
        color="yellow" 
        is-inverted>
        Click me
      </Button>
    </GridCell>
    <GridCell :span-set="[12, 6, 6, 6, 6]">
      <Button 
        color="yellow" 
        is-inverted
        simplicity="slight">
        Click me
      </Button>
    </GridCell>
  </Grid>`
})
inverted.story = {
  parameters: {
    docs: {
      storyDescription: `If the button is to be placed on a dark or non-white background, 
      we use the inverted variant.`
    },
    backgrounds: [{ name: 'dark background', value: '#000', default: true }]
  }
}

// Button with Add-on
export const withAddOn = () => ({
  components: {
    Button,
    LicenseBadge
  },
  template: `
  <div>
    <Grid>
      <GridCell :span-set="[12, 6, 6, 6, 6]">
        <Button 
          color="blue" 
          icon="hand-point-up"/>
      </GridCell>
      <GridCell :span-set="[12, 6, 6, 6, 6]">
        <Button 
          color="orange" 
          icon="hand-point-up">
            Click me
        </Button>
      </GridCell>
      <GridCell :span-set="[12, 6, 6, 6, 6]">
        <Button
          color="green"
          :icon="['fab', 'readme']">
            Read me
        </Button>
      </GridCell>
    </Grid>

    <Br/><Br/>

    <Button color="orange">
      <template #addons>
        <LicenseBadge license="by-sa"/>
      </template>
      Assign CC BY-SA license
    </Button>
</div>
  
  `
})

withAddOn.story = {
  parameters: {
    docs: {
      storyDescription: `A button can be paired with (or the content replaced with) 
      an icon to act as a visual aid as to what it does. Note that 
      the icon must be added to the FontAwesome library by the application.`
    }
  }
}

// Styled Button
export const styled = () => ({
  components: {
    Button,
    Grid,
    GridCell
  },
  template: `
  <div>
    <Grid>
      <GridCell :span-set="[12, 4, 4, 4, 4]">
        <Button
          color="green"
          icon="hand-point-up"
          roundness="slight"/>
      </GridCell>
      <GridCell :span-set="[12, 4, 4, 4, 4]">
        <Button
          color="green"
          roundness="slight">
          Click me
        </Button>
      </GridCell>
      <GridCell :span-set="[12, 4, 4, 4, 4]">
        <Button
          color="green"
          icon="hand-point-up"
          roundness="slight">
          Click me
        </Button>
      </GridCell>
      <GridCell :span-set="[12, 4, 4, 4, 4]">
        <Button
          color="green"
          icon="hand-point-up"
          roundness="complete"/>
      </GridCell>
      <GridCell :span-set="[12, 4, 4, 4, 4]">
        <Button
          color="green"
          roundness="complete">
          Click me
        </Button>
      </GridCell>
      <GridCell :span-set="[12, 4, 4, 4, 4]">
        <Button
          color="green"
          icon="hand-point-up"
          roundness="complete">
          Click me
        </Button>
      </GridCell>
    </Grid>

    <Br/><Br/>

    <Grid>
      <GridCell :span-set="[12, 4, 4, 4, 4]">
        <Button
          color="green"
          icon="hand-point-up"
          is-call-to-action/>
      </GridCell>
      <GridCell :span-set="[12, 4, 4, 4, 4]">
        <Button
          color="green"
          is-call-to-action>
          Click me
        </Button>
      </GridCell>
      <GridCell :span-set="[12, 4, 4, 4, 4]">
        <Button
          color="green"
          icon="hand-point-up"
          is-call-to-action>
          Click me
        </Button>
      </GridCell>
    </Grid>

  </div>
  `
})

styled.story = {
  parameters: {
    docs: {
      storyDescription: `A button can be slightly rounded to fit in with more curvy layouts
       and UI components. Although supported, the use of this is highly unlikely given CC's 
       love for sharp vertices and 90° angles. Even more rounded is the pill shape. 
       It is in complete contrast to the sharp edged CC design but looks really good for icon buttons.`
    }
  }
}

// Button Sizes
export const size = () => ({
  components: {
    Button
  },
  template: `
  <div>
    <Button color="blue" size="small">Click me</Button>
    <br/><br/>
    <Button color="blue">Click me</Button>
    <br/><br/>
    <Button color="blue" size="big">Click me</Button>
    <br/><br/>
    <Button color="blue" size="large">Click me</Button>
    <br/><br/>
    <Button color="blue" size="huge">Click me</Button>
    <br/><br/>
    <Button color="blue" size="enormous">Click me</Button>
    <br/><br/>
    <Button color="blue" size="gigantic">Click me</Button>
    <br/><br/>
    <Button color="blue" size="mega">Click me</Button>
  </div>`
})
size.story = {
  parameters: {
    docs: {
      storyDescription: `Buttons come in all sizes, from small to mega.`
    }
  }
}

// Button State
export const state = () => ({
  components: {
    Button
  },
  template:
    `
  <Button is-disabled>Can't click me</Button>
  `
})
state.story = {
  parameters: {
    docs: {
      storyDescription: `A button may be disabled to prevent input altogether.`
    }
  }
}

// Button Attributes
export const attributes = () => ({
  components: {
    Button
  },
  template:
    `
  <Button name="Name" value="Value">OK</Button>
  `
})
attributes.story = {
  parameters: {
    docs: {
      storyDescription: `All attributes that you would pass to a button tag 
      can be passed to the Button component.
      So a button may have a name and a value.`
    }
  }
}
