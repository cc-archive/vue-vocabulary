import Rating from '@/elements/Rating/Rating'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Indicating from '@/knobs/indicating'
import Invertible from '@/knobs/invertible'
import Disable from '@/knobs/disable'
import ReadOnly from '@/knobs/readonly'
import Scale from '@/knobs/scaled'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter)

export default { title: 'Elements|Rating' }

export const colored = () => ({
  mixins: [Colored],
  components: { Rating },
  template: `
    <Rating :color="color" :shade="shade" :value="3"/>
  `
})

export const branded = () => ({
  mixins: [Branded],
  components: { Rating },
  template: `
    <Rating :brand="brand" :value="3"/>
  `
})

export const indicating = () => ({
  mixins: [Indicating],
  components: { Rating },
  template: `
    <Rating :indication="indication" :value="4"/>
  `
})

export const invertible = () => ({
  mixins: [Invertible],
  components: { Rating },
  template: `
    <Rating :isInverted="isInverted" :value="2"/>
  `
})
invertible.story = {
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }]
  }
}

export const disable = () => ({
  mixins: [Disable],
  components: { Rating },
  template: `
    <Rating :isDisabled="isDisabled"/>
  `
})

export const readonly = () => ({
  mixins: [ReadOnly],
  components: { Rating },
  template: `
      <Rating :isReadOnly="isReadOnly"/>
    `
})

export const scale = () => ({
  mixins: [ Scale ],
  components: { Rating },
  template: `
    <Rating :size="size"/>
  `
})

export const styles = () => ({
  components: { Rating },
  template: `
    <div>
        <Rating
            color="red"
            :icon-set="['heart']"
            :value="3"/>
        <br/><br/>
        <Rating
            color="cyan"
            :icon-set="[['fab', 'twitter']]"
            :value="3"/>
        <br/><br/>
        <Rating
            color="violet"
            :value="3"
            is-toggleable/>
        <br/><br/>
        <Rating
            color="lime"
            :max="10"
            :value="5"/>
    </div>
    `
})
