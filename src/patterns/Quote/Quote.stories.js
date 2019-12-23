import Quote from '@/patterns/Quote/Quote'
import Grid from '@/layouts/Grid/Grid'
import GridCell from '@/layouts/Grid/GridCell'

import Colored from '@/knobs/colored'
import Invertible from '@/knobs/invertible'

export default { title: 'Patterns|Quote' }

let source = 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Douglas_adams_portrait_cropped.jpg'
let divStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
}
let imageStyle = {
  marginRight: '1em'
}

export const invertedSet = () => ({
  mixins: [Invertible, Colored],
  components: { Quote, Grid, GridCell },
  template: ` 
    <Grid>
        <GridCell :span-set="[12, 6, 6, 6, 6]">
            <Quote
            attribution="Hellen Keller"
            is-lined
            :isInverted="isInverted">
            Walking with a friend in the <b>dark</b> is better than walking alone in
            the light.
            </Quote>
        </GridCell>
        <GridCell :span-set="[12, 6, 6, 6, 6]">
            <Quote
            :color="color" 
            :shade="shade"
            attribution="Robert Frost"
            is-lined
            :isInverted="isInverted">
            The woods are lovely, <b>dark</b> and deep. But I have promises to keep,
            and miles to go before I sleep.
            </Quote>
        </GridCell>
    </Grid>
  `
})

export const styleSet = () => ({
  mixins: [Colored, source, imageStyle, divStyle],
  components: { Quote },
  template: ` 
    <div>
        <div :style="divStyle">
            <ImageView
                :style="imageStyle"
                :source="source"
                alternateText="Douglas Adams"
                size="large"
                is-centered/>
            <Quote
                :color="color"
                attribution="Douglas Adams"
                is-lined>
                A common mistake that people make when trying<br/>
                to design something completely foolproof is<br/>
                to underestimate the ingenuity of complete fools.
            </Quote>
        </div>

        <br/><br/>
        <Grid>
            <GridCell :span-set="[12, 6, 6, 6, 6]">
                <Quote
                color="green"
                attribution="The Bhagvad Gita"
                is-lined
                is-analected>
                Delusion arises from anger.<br/>
                The mind is bewildered by delusion.<br/>
                Reasoning is destroyed when the mind is bewildered.<br/>
                One falls down when reasoning is destroyed.
                </Quote>
            </GridCell>
            <GridCell :span-set="[12, 6, 6, 6, 6]">
                <Quote
                color="green"
                attribution="The Bhagvad Gita"
                is-lined
                is-analected>
                Set thy heart upon thy work but never its reward.
                </Quote>
            </GridCell>
        </Grid>
    <div>
  `
})
