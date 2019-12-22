import BrandImagery from '@/patterns/BrandImagery/BrandImagery'
import Grid from '@/layouts/Grid/Grid'
import GridCell from '@/layouts/Grid/GridCell'

export default { title: 'Patterns|BrandImagery' }

export const basic = () => ({
  components: { BrandImagery },
  template: `
    <BrandImagery
        color="black"
        type="letterheart"
        size="big"/>
    `
})

export const logoSet = () => ({
  components: { BrandImagery, Grid, GridCell },
  template: `
    <div style="text-align: center;">
        <Grid>
            <GridCell :span-set="[12, 6, 6, 6, 6]">
                <BrandImagery color="black"/>
                <Paragraph>
                CC
                </Paragraph>
            </GridCell>
            <GridCell :span-set="[12, 6, 6, 6, 6]">
                <BrandImagery brand="vocabulary" color="black"/>
                <Paragraph>
                Vocabulary
                </Paragraph>
            </GridCell>
        </Grid>

        <br/><br/>

        <Grid >
            <GridCell :span-set="[12, 6, 4, 4, 4]">
                <BrandImagery color="black"/>
                <Paragraph>
                Wordmark
                </Paragraph>
            </GridCell>
            <GridCell :span-set="[12, 3, 4, 4, 4]">
                <BrandImagery type="lettermark" color="black"/>
                <Paragraph>
                Lettermark
                </Paragraph>
            </GridCell>
            <GridCell :span-set="[12, 3, 4, 4, 4]">
                <BrandImagery type="letterheart" color="black"/>
                <Paragraph>
                Letterheart
                </Paragraph>
            </GridCell>
        </Grid>
    </div>
  `
})

export const colorSet = () => ({
  components: { BrandImagery, Grid, GridCell },
  template: `
    <Grid density="sparser" style="text-align: center; color: white;">
        <GridCell :span-set="[12, 6, 6, 6, 3]">
            <BrandImagery color="white"/>
        </GridCell>
        <GridCell :span-set="[12, 6, 6, 6, 3]">
            <BrandImagery type="lettermark" color="white"/>
        </GridCell>
        <GridCell :span-set="[12, 6, 6, 6, 3]">
            <BrandImagery type="letterheart" color="white"/>
        </GridCell>
        <GridCell :span-set="[12, 6, 6, 6, 3]">
            <BrandImagery brand="vocabulary" color="white"/>
        </GridCell>
    </Grid>
  `
})
colorSet.story = {
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }]
  }
}

export const attributeSet = () => ({
  components: { BrandImagery },
  template: `
    <BrandImagery type="letterheart" color="black" size="large"/>
  `
})
