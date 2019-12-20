import { select } from '@storybook/addon-knobs'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAddressBook, faBookOpen } from '@fortawesome/free-solid-svg-icons'

library.add(faAddressBook, faBookOpen)

const iconOptions = {
  icon1: 'hand-point-up',
  icon2: 'address-book',
  icon3: 'book-open'
}

export default {
  props: {
    icon: {
      default: () => select('Icon', iconOptions, iconOptions.icon1)

    }
  }
}
