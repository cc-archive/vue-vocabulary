import Shield from '@/elements/Shield/Shield'
import LicenseIconography from '@/elements/LicenseIconography/LicenseIconography'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Indicating from '@/knobs/indicating'
import Invertible from '@/knobs/invertible'
import Simplified from '@/knobs/simplified'
import Roundness from '@/knobs/rounded'
import Scale from '@/knobs/scaled'

export default { title: 'Elements|Shield' }

export const colored = () => ({
  mixins: [Colored],
  components: { Shield },
  template: `
    <div>
        <Shield
            label="Color"
            message="Grey"/> 
        <br/><br/>
        <Shield 
            :color="color" 
            :shade="shade"
            label="Color"
            message="color">
                {{color}} 
        </Shield>
    </div>
  `
})

export const branded = () => ({
  mixins: [Branded],
  components: { Shield },
  template: `
    <div>
        <Shield
            label="Color"
            message="Grey"/> 
        <br/><br/>
        <Shield 
            :brand="brand"
            label="Brand"
            message="brand">
                {{brand}} 
        </Shield>
    </div>
  `
})

export const indicating = () => ({
  mixins: [Indicating],
  components: { Shield },
  template: `
    <div>
        <Shield
            label="Color"
            message="Grey"/> 
        <br/><br/>
        <Shield 
            :indication="indication"
            label="Indication"
            message="indication">
                {{indication}} 
        </Shield>
    </div>
  `
})

export const invertible = () => ({
  mixins: [Invertible, Colored],
  components: { Shield },
  template: `
    <div>
        <Shield
            label="Dark?"
            message="isInverted"
            :isInverted="isInverted">
                {{isInverted}} 
        </Shield>
        <br/><br/>
        <Shield
            :color="color" 
            :shade="shade"
            label="Dark?"
            message="isInverted"
            :isInverted="isInverted">
                {{isInverted}} 
        </Shield>
    </div>
  `
})

export const simplified = () => ({
  mixins: [ Simplified, Colored ],
  components: { Shield },
  template: `
    <Shield 
        :simplicity="simplicity" 
        :color="color" 
        :shade="shade"
        label="Simplicity"
        message="simplicity">
            {{simplicity}}
    </Shield>
  `
})

export const roundness = () => ({
  mixins: [ Roundness ],
  components: { Shield },
  template: `
    <Shield 
        :roundness="roundness" 
        label="Roundness"
        message="roundness">
            {{roundness}}
    </Shield>
    `
})

export const scale = () => ({
  mixins: [ Scale ],
  components: { Shield },
  template: `
    <Shield 
        :size="size" 
        label="Size"
        message="size">
            {{size}}
    </Shield>
  `
})

export const withAddOns = () => ({
  mixins: [ Colored ],
  components: { Shield, LicenseIconography },
  template: `
    <Shield :color="color" :shade="shade">
        <template #label>
            <LicenseIconography :icon-list="['', 'by']"/>
        </template>
        <strong>Creative Commons Attribution </strong>
    </Shield>
`
})
