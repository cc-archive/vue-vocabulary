import Container from '@/layouts/Container/Container'
import Heading from '@/elements/Heading/Heading'
import Paragraph from '@/elements/Paragraph/Paragraph'

export default { title: 'Layouts|Container' }

export const basic = () => ({
  components: { Container, Heading },
  template: `
        <Container style="border: 1px solid #ddd">
            <Heading :level="1">
                Hello World!
            </Heading>
        </Container>
  `
})

export const withAddOns = () => ({
  components: { Container, Heading, Paragraph },
  template: `
      <div 
          style="width:100%; 
          background-image: linear-gradient(45deg, #ddd 25%, #fff 25%, #fff 50%, #ddd 50%, #ddd 75%, #fff 75%, #fff 100%);
          background-size: 8px 8px;">
          <Container
              style="border: 1px solid #ddd; background-color: white;">
              <Heading :level="1">
                  Hello World!
              </Heading>
              <Paragraph>
                  The stripes on either sides are gutters. The actual container, i.e. this
                   maintain width across screens in the same device class.
              </Paragraph>
          </Container>
      </div>
    `
})
