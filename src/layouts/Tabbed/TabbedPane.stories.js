import Tabbed from '@/layouts/Tabbed/Tabbed'
import TabbedPane from '@/layouts/Tabbed/TabbedPane'

import Colored from '@/knobs/colored'

export default { title: 'Layouts|TabbedPane' }

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
