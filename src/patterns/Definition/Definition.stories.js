import Definition from '@/patterns/Definition/Definition'

import Colored from '@/knobs/colored'

export default { title: 'Patterns|Definition' }

export const colored = () => ({
  mixins: [Colored],
  components: { Definition },
  template: `
    <div>
        <Definition
            word="black"
            pronunciation="blak"
            part-of-speech="adj.">
            of the very darkest colour owing to the absence of or complete absorption of light
        </Definition>
        <br/><br/>
        <Definition
            :color="color"
            :shade="shade"
            word="black"
            pronunciation="blak"
            part-of-speech="adj.">
            of the very darkest colour owing to the absence of or complete absorption of light
        </Definition>
    </div>
  `
})

export const withAddOns = () => ({
  components: { Definition },
  template: `
    <Definition
        pronunciation="dɛfɪˈnɪʃ(ə)n"
        part-of-speech="n.">
        <template #word>
            <i>definition</i>
        </template>
        <ul>
            <li>
            a statement of the exact meaning of a word, especially in a dictionary
            </li>
            <li class="unimportant">
            the degree of distinctness in outline of an object, image, or sound
            </li>
        </ul>
    </Definition>
  `
})

export const withInterpuncts = () => ({
  components: { Definition },
  template: `
    <Definition
        word="vo·cab·u·lar·y"
        pronunciation="və(ʊ)ˈkabjʊləri"
        part-of-speech="noun">
        <ul>
            <li class="unimportant">
            the body of words used in a particular language
            </li>
            <li>
            a cohesive design system to unite the web facing Creative Commons 
            </li>
        </ul>
    </Definition>
  `
})
