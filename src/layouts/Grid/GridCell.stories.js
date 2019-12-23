import Grid from '@/layouts/Grid/Grid'
import GridCell from '@/layouts/Grid/GridCell'

export default { title: 'Layouts|GridCell' }

export const basic = () => ({
  components: { Grid, GridCell },
  template: `
      <Grid>
          <GridCell
              v-for="index in 12"
              :key="index"
              style="backgroundColor: green"
              :span-set="[8, 2]"/>
      </Grid>
    `
})
