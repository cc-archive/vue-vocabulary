import Tabbed from '@/layouts/Tabbed/Tabbed'
import TabbedPane from '@/layouts/Tabbed/TabbedPane'

import Colored from '@/knobs/colored'
import Invertible from '@/knobs/invertible'
import Raise from '@/knobs/raisable'
import Simplified from '@/knobs/simplified'
import Roundness from '@/knobs/rounded'

export default { title: 'Layouts|Tabbed' }

export const colored = () => ({
  mixins: [Colored],
  components: { Tabbed, TabbedPane },
  template: `
    <Tabbed
        :color="color"
        :shade="shade">
        <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
        <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
        <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
    </Tabbed>
  `
})

export const invertible = () => ({
  mixins: [Invertible],
  components: { Tabbed, TabbedPane },
  template: `
    <Tabbed :isInverted="isInverted" :color="color" :shade="shade">
        <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
        <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
        <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
    </Tabbed>
  `
})
invertible.story = {
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }]
  }
}

export const raised = () => ({
  mixins: [Raise, Colored],
  components: { Tabbed, TabbedPane },
  template: `
    <Tabbed :isRaised="isRaised" :color="color" :shade="shade">
        <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
        <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
        <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
    </Tabbed>
  `
})

export const simplified = () => ({
  mixins: [ Simplified, Colored ],
  components: { Tabbed, TabbedPane },
  template: `
    <Tabbed :simplicity="simplicity" :color="color" :shade="shade">
        <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
        <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
        <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
    </Tabbed>
  `
})

export const roundness = () => ({
  mixins: [ Roundness, Colored ],
  components: { Tabbed, TabbedPane },
  template: `
    <Tabbed :roundness="roundness" :color="color" :shade="shade">
        <TabbedPane title="Tab 1">This is the first tab.</TabbedPane>
        <TabbedPane title="Tab 2">This is the second tab.</TabbedPane>
        <TabbedPane title="Tab 3">This is the third tab.</TabbedPane>
    </Tabbed>
  `
})
