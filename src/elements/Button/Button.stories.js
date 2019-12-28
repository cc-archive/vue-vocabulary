import Button from '@/elements/Button/Button'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Indicating from '@/knobs/indicating'

export default { title: 'Elements|Button' }

export const buttons = () => ({
  components: { Button },
  template: `
    <div>
      <Button
        brand="tomato"
        roundness="slight"
        size="huge">
        Button
      </Button>
    
      <Button
        brand="tomato"
        roundness="slight"
        size="large">
        Button
      </Button>
    
      <Button
        color="green"
        roundness="slight">
        Button
      </Button>
    
      <Button
        color="grey"
        shade="5"
        roundness="complete"
        size="small">
        Label
      </Button>
    
    <br/><br/>
    
      <Button
        brand="orange"
        roundness="slight"
        size="huge">
        Button
      </Button>
    
      <Button
        color="grey"
        shade="6"
        roundness="slight"
        size="large"
        simplicity="slight">
        Button
      </Button>
  
      <Button
        color="green"
        shade="6"
        roundness="slight">
        Button
      </Button>
    
      <Button
        color="grey"
        shade="5"
        roundness="complete"
        size="small"
        simplicity="slight">
        Label
      </Button>
    
    <br/><br/>
    
      <Button
        color="grey"
        shade="6"
        roundness="slight"
        size="huge"
        simplicity="slight">
        Button
      </Button>
      
    </div>
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
