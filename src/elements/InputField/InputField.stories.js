import InputField from '@/elements/InputField/InputField'

export default { title: 'Elements|InputField' }

export const examples = () => ({
  data () {
    return {
      value1: 'Text',
      value2: 'Placeholder...'
    }
  },
  components: { InputField },
  template: `
    <div>
      <InputField
        type="text"
        size="big"
        roundness="slight"
        placeholder="Placeholder..."
        is-raised />
      <br/><br/>
      <InputField
        v-model="value1"
        type="text"
        size="big"
        roundness="slight"
        is-raised/>
      <br/><br/>
      <InputField
        v-model="value2"
        type="text"
        roundness="slight"
        is-raised />
    </div>

  `
})
