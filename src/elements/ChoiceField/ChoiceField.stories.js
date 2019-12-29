import ChoiceField from '@/elements/ChoiceField/ChoiceField'
import Grid from '@/layouts/Grid/Grid'
import GridCell from '@/layouts/Grid/GridCell'

export default { title: 'Elements|ChoiceField' }

let picked = ['B']

export const examples = () => ({
  data () {
    return {
      picked
    }
  },
  components: { ChoiceField, Grid, GridCell },
  template: `
    <Grid>
        <GridCell :span-set="[12, 6, 6, 6, 6]">
            <ChoiceField
                v-model="picked"
                id="a"
                name="choice"
                value="A"
                simplicity="slight"/>
            <label for="a">Option text</label>
            <br/>
            <ChoiceField
                v-model="picked"
                id="b"
                brand="blue"
                name="choice"
                value="B" />
            <label for="b">Option text</label>
            <br/>
            <ChoiceField
                v-model="picked"
                id="c"
                name="choice"
                value="C"
                is-disabled/>
            <label for="c">Option text</label>
        </GridCell>
    </Grid>
  `
})
