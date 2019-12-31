import SelectField from '@/elements/SelectField/SelectField'

export default { title: 'Elements|SelectField' }

const picked = 'c'

const optionList = [
  {
    value: 'a',
    text: 'Option A'
  },
  {
    value: 'b',
    text: 'Option B'
  },
  {
    value: 'c',
    text: 'Text'
  }
]

export const example = () => ({
  data: function () {
    return {
      optionList,
      picked
    }
  },
  components: { SelectField },
  template: `
    <div>
      <SelectField 
        v-model="picked"
        :option-list="optionList" 
        simplicity="slight"
        roundness="slight"
        is-raised/>
    </div>
  `
})
