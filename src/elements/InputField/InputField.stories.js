import InputField from '@/elements/InputField/InputField'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Indicating from '@/knobs/indicating'
import Invertible from '@/knobs/invertible'
import Disable from '@/knobs/disable'
import ReadOnly from '@/knobs/readonly'
import Simplified from '@/knobs/simplified'
import Scale from '@/knobs/scaled'
import Roundness from '@/knobs/rounded'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub)

export default { title: 'Elements|InputField' }

export const colored = () => ({
  mixins: [Colored],
  components: { InputField },
  template: `
    <InputField 
        :iconSet="['keyboard', '']"
        :color="color" 
        :shade="shade" 
        type="text"
        placeholder= "Search here ..." />
  `
})

export const branded = () => ({
  mixins: [Branded],
  components: { InputField },
  template: `
    <InputField 
        :iconSet="[['fab', 'github']]"
        :brand="brand"
        type="text"
        placeholder= "Search here ..."/>
  `
})

export const indicating = () => ({
  mixins: [Indicating],
  components: { InputField },
  template: `
    <InputField
        :iconSet="['keyboard', '']" 
        :indication="indication" 
        type="text"
        placeholder= "Search here ..."/>
  `
})

export const invertible = () => ({
  mixins: [Invertible],
  components: { InputField },
  template: `
    <InputField 
        :isInverted="isInverted"
        :iconSet="['keyboard', '']" 
        type="text"
        placeholder= "Search here ..." />
  `
})

export const disabled = () => ({
  mixins: [Disable],
  components: { InputField },
  template: `
    <InputField 
        :isDisabled="isDisabled"
        :iconSet="['keyboard', '']" 
        type="text"
        placeholder= "Search here ..." />
  `
})

export const readonly = () => ({
  mixins: [ReadOnly],
  components: { InputField },
  template: `
    <InputField 
        :isReadOnly="isReadOnly"
        :iconSet="['keyboard', '']" 
        type="text"
        placeholder= "Search here ..." />
    `
})

export const simplified = () => ({
  mixins: [ Simplified, Colored ],
  components: { InputField },
  template: `
    <InputField 
        :iconSet="[['fab', 'github']]"
        :simplicity="simplicity" 
        :color="color" 
        :shade="shade"
        type="text"
        placeholder= "Search here ..." />
  `
})

export const scale = () => ({
  mixins: [ Scale ],
  components: { InputField },
  template: `
    <InputField 
        :iconSet="['keyboard', '']" 
        :size="size"
        type="text"
        placeholder= "Search here ..." />
  `
})

export const roundness = () => ({
  mixins: [ Roundness ],
  components: { InputField },
  template: `
    <InputField 
        :iconSet="['keyboard', '']" 
        :roundness="roundness" 
        type="text"
        placeholder= "Search here ..."/>
  `
})
