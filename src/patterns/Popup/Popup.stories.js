import Popup from '@/patterns/Popup/Popup'
import LicenseIconography from '@/elements/LicenseIconography/LicenseIconography'
import Paragraph from '@/elements/Paragraph/Paragraph'

import { select } from '@storybook/addon-knobs'

export default { title: 'Patterns|Popup' }

const directionOptions = {
  Top: 'top',
  Right: 'right',
  Bottom: 'bottom',
  Left: 'left'
}

const Directions = {
  props: {
    direction: {
      default: () => select('Directions', directionOptions, directionOptions.Top)
    }
  }
}

const actionOptions = {
  Hover: 'hover',
  Click: 'click'
}

const Actions = {
  props: {
    action: {
      default: () => select('Actions', actionOptions, actionOptions.Hover)
    }
  }
}

export const directionSet = () => ({
  mixins: [Directions],
  components: { Popup },
  template: `
    <div style="padding: 100px 200px;">
        <Popup :to="direction">
            I'm hoverable!
            <template #popup>
            This opens to the <strong>{{ direction }}</strong>.<br/>
            That's super cool!
            </template>
        </Popup>
    </div>
    `
})

export const actionSet = () => ({
  mixins: [Actions],
  components: { Popup },
  template: `
    <div style="padding: 100px 200px;">
        <Popup :action="action">
        I'm {{ action }}able!
        <template #popup>
            This when the trigger is <strong>{{ action }}ed</strong>.<br/>
            That's super cool!
        </template>
        </Popup>
    </div>
      `
})

export const attributeSet = () => ({
  components: { Popup, Paragraph, LicenseIconography },
  template: `
    <div>
        <span>The most restrictive license is the</span>
            <Popup
                to="down"
                color="yellow"
                color-side="none"
                roundness="slight">
                    <LicenseIconography :icon-list="['']"/>
                        <template #popup>
                            <Paragraph>
                                <strong>Creative Commons</strong>
                            </Paragraph>
                        </template>
            </Popup>
            <Popup
                to="down"
                color="cyan"
                color-side="none"
                roundness="slight">
                    BY-NC-ND
                        <template #popup>
                            <Paragraph color="tomato">
                                <LicenseIconography :icon-list="['by', 'nc', 'nd']"/>
                                    Attribution-NonCommercial-NoDerivatives
                            </Paragraph>
                        </template>
            </Popup>
        <span>license.</span>
    </div>
  `
})
