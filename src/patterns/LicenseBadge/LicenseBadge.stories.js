import LicenseBadge from '@/patterns/LicenseBadge/LicenseBadge'
import Paragraph from '@/elements/Paragraph/Paragraph'
import Grid from '@/layouts/Grid/Grid'
import GridCell from '@/layouts/Grid/GridCell'

export default { title: 'Patterns|LicenseBadge' }

export const styleSet = () => ({
  components: { LicenseBadge, Paragraph },
  template: `
    <Paragraph>
        The CC BY license
        (<LicenseBadge 
        license="by" 
        is-centered/>)
        is a permissive free-culture license.
    </Paragraph>
    `
})

export const badgeSet = () => ({
  components: { LicenseBadge, Paragraph, Grid, GridCell },
  template: `
    <div>
        <Grid style="text-align: center;">
            <GridCell :span-set="[12, 6, 4, 4, 4]">
                <LicenseBadge license="by"/>
                <Paragraph>
                CC Attribution
                </Paragraph>
            </GridCell>
            <GridCell :span-set="[12, 6, 4, 4, 4]">
                <LicenseBadge license="by-nc"/>
                <Paragraph>
                CC Attribution-NonCommercial 
                </Paragraph>
            </GridCell>
            <GridCell :span-set="[12, 6, 4, 4, 4]">
                <LicenseBadge license="by-nc-nd"/>
                <Paragraph>
                CC Attribution-NonCommercial-NoDerivs
                </Paragraph>
            </GridCell>
            <GridCell :span-set="[12, 6, 4, 4, 4]">
                <LicenseBadge license="by-nc-sa"/>
                <Paragraph>
                CC Attribution-NonCommercial-ShareAlike
                </Paragraph>
            </GridCell>
            <GridCell :span-set="[12, 6, 4, 4, 4]">
                <LicenseBadge license="by-nd"/>
                <Paragraph>
                CC Attribution-NoDerivs
                </Paragraph>
            </GridCell>
            <GridCell :span-set="[12, 6, 4, 4, 4]">
                <LicenseBadge license="by-sa"/>
                <Paragraph>
                CC Attribution-ShareAlike
                </Paragraph>
            </GridCell>
        </Grid>

        <br/><br/>
        <Grid style="text-align: center;">
            <GridCell :span-set="[12, 6, 6, 6, 6]">
                <LicenseBadge license="zero"/>
                <Paragraph>
                CC Zero
                </Paragraph>
            </GridCell>
            <GridCell :span-set="[12, 6, 6, 6, 6]">
                <LicenseBadge license="pd"/>
                <Paragraph>
                Public domain
                </Paragraph>
            </GridCell>
        </Grid>
    </div>
  `
})

export const versionSet = () => ({
  components: { LicenseBadge, Grid, GridCell },
  template: `
    <div>
        <Grid style="text-align: center;">
            <GridCell :span-set="[12, 6, 6, 6, 6]">
                <LicenseBadge license="by-sa" version="reduced"/>
            </GridCell>
            <GridCell :span-set="[12, 6, 6, 6, 6]">
                <LicenseBadge license="zero" version="reduced"/>
            </GridCell>
        </Grid>
            <br/><br/>
        <Grid style="text-align: center;">
            <GridCell :span-set="[12, 6, 6, 6, 6]">
                <LicenseBadge license="by-sa"/>
            </GridCell>
            <GridCell :span-set="[12, 6, 6, 6, 6]">
                <LicenseBadge license="zero"/>
            </GridCell>
        </Grid>
    </div>
  `
})

export const attributeSet = () => ({
  components: { LicenseBadge },
  template: `
    <LicenseBadge license="by" size="large"/>
  `
})
