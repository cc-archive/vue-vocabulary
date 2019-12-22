import Statistic from '@/elements/Statistic/Statistic'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Indicating from '@/knobs/indicating'
import Invertible from '@/knobs/invertible'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCertificate } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesomeFlag } from '@fortawesome/free-brands-svg-icons'
library.add(faCertificate, faFontAwesomeFlag)

export default { title: 'Elements|Statistic' }

export const colored = () => ({
  mixins: [Colored],
  components: { Statistic },
  template: `
    <div>
        <Statistic
            label="Color"
            value="Black"
            is-textual-value/> 
        <br/><br/>
        <Statistic 
            :color="color" 
            :shade="shade"
            label="Color"
            value="color"
            is-textual-value>
                {{color}} {{shade}}
        </Statistic>
    </div>
  `
})

export const branded = () => ({
  mixins: [Branded],
  components: { Statistic },
  template: `
    <div>
        <Statistic
            label="Color"
            value="Black"
            is-textual-value/> 
        <br/><br/>
        <Statistic 
            :brand="brand"
            label="Brand"
            value="brand"
            is-textual-value>
                {{brand}} 
        </Statistic>
    </div>
  `
})

export const indicating = () => ({
  mixins: [Indicating],
  components: { Statistic },
  template: `
    <div>
        <Statistic
            label="Color"
            value="Black"
            is-textual-value/> 
        <br/><br/>
        <Statistic 
            :indication="indication"
            label="Indication"
            value="indication"
            is-textual-value>
                {{indication}} 
        </Statistic>
    </div>
  `
})

export const invertible = () => ({
  mixins: [Invertible, Colored],
  components: { Statistic },
  template: `
    <div>
        <Statistic
            label="Dark Outside?"
            value="isInverted"
            is-textual-value
            :isInverted="isInverted">
                Inverted 
        </Statistic>
        <br/><br/>
        <Statistic
            :color="color" 
            :shade="shade"
            label="Dark Outside?"
            value="isInverted"
            is-textual-value
            :isInverted="isInverted">
                colored
        </Statistic>
    </div>
  `
})

export const withAddOns = () => ({
  mixins: [ Colored ],
  components: { Statistic, FontAwesomeIcon },
  template: `
    <div>
        <Statistic 
            :color="color" 
            :shade="shade" 
            :icon-set="['chart-line', '']"
            label="Icon"
            value="Value"
            is-textual-value />
        <br/><br/>
        <Statistic             
            :color="color" 
            :shade="shade">
            <template #labelAddons>
                <FontAwesomeIcon 
                    :icon="['fas', 'certificate']"
                    fixed-width/>
            </template>
            <template #label>
                License
            </template>
            <template #valueAddons>
                <strong>MIT</strong> /
            </template>
            Expat
        </Statistic>
    </div>
`
})
