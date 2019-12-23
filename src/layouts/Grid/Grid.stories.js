import Grid from '@/layouts/Grid/Grid'
import GridCell from '@/layouts/Grid/GridCell'

export default { title: 'Layouts|Grid' }

export const basic = () => ({
  components: { Grid, GridCell },
  template: `
    <Grid>
        <GridCell
            v-for="index in 12"
            :key="index"
            style="backgroundColor: red"
            :span-set="[12, 4]"/>
    </Grid>
  `
})
