import { mount } from '@vue/test-utils'

import LicenseIconography from '@/elements/LicenseIconography/LicenseIconography'

describe('LicenseIconography.vue', () => {
  it('renders icons', () => {
    const wrapper = mount(LicenseIconography, {
      propsData: {
        iconList: ['', 'nc']
      }
    })
    expect(wrapper.findAll('.license-icons svg').length)
      .toBe(2)
  })
})
