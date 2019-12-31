import SelectField from '@/elements/SelectField/SelectField'

export default { title: 'Elements|SelectField' }

let optionList = [
  {
    value: 'a',
    text: 'Option A'
  },
  {
    value: 'b',
    text: 'Option B'
  }
]

export const examples = () => ({
  data () {
    return {
      optionList
    }
  },
  components: { SelectField },
  template: `
    <div>
      <SelectField  option-list="optionList" />
    </div>

  `
})
