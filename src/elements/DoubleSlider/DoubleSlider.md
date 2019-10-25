An input field looks like this.

```jsx
let value="It is awesome";

<DoubleSlider
  v-model="value"
  color="orange"
  :icon-set="['keyboard', '']"
  type="text"
  placeholder="How is CC Vocabulary?"
  simplicity="slight"
  is-infused/>
```

### Color set

An input field without color is black.

```jsx
<DoubleSlider
  :icon-set="['keyboard', '']"
  type="text"
  placeholder="Answer..."/>
```

But in classic fashion, input fields can be colored with any color from the set 
provided by CC Vocabulary. Grey is nobody's favourite.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <DoubleSlider
      color="blue"
      :icon-set="['keyboard', '']"
      type="text"
      placeholder="Answer..."/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <DoubleSlider
      color="green"
      :icon-set="['keyboard', '']"
      type="text"
      placeholder="Answer..."/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <DoubleSlider
      color="magenta"
      :icon-set="['keyboard', '']"
      type="text"
      placeholder="Answer..."/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <DoubleSlider
      color="olive"
      :icon-set="['keyboard', '']"
      type="text"
      placeholder="Answer..."/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <DoubleSlider
      color="orange"
      :icon-set="['keyboard', '']"
      type="text"
      placeholder="Answer..."/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <DoubleSlider
      color="purple"
      :icon-set="['keyboard', '']"
      type="text"
      placeholder="Answer..."/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <DoubleSlider
      color="red"
      :icon-set="['keyboard', '']"
      type="text"
      placeholder="Answer..."/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <DoubleSlider
      color="sand"
      :icon-set="['keyboard', '']"
      type="text"
      placeholder="Answer..."/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <DoubleSlider
      color="yellow"
      :icon-set="['keyboard', '']"
      type="text"
      placeholder="Answer..."/>
  </GridCell>
</Grid>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <DoubleSlider
      color="blue"
      shade="light"
      :icon-set="['keyboard', '']"
      type="text"
      placeholder="Answer..."/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <DoubleSlider
      color="blue"
      :icon-set="['keyboard', '']"
      type="text"
      placeholder="Answer..."/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <DoubleSlider
      color="blue"
      shade="dark"
      :icon-set="['keyboard', '']"
      type="text"
      placeholder="Answer..."/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <DoubleSlider
      color="blue"
      shade="darker"
      :icon-set="['keyboard', '']"
      type="text"
      placeholder="Answer..."/>
  </GridCell>
</Grid>
```

For use on dark or non-white backgrounds, we provided an inverted variant.

```jsx { "props": { "className": "dark-background" } }
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <DoubleSlider
      :icon-set="['keyboard', '']"
      type="text"
      placeholder="Answer..."
      is-inverted/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <DoubleSlider
      :icon-set="['keyboard', '']"
      type="text"
      placeholder="Answer..."
      is-inverted
      simplicity="slight"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <DoubleSlider
      color="magenta"
      :icon-set="['keyboard', '']"
      type="text"
      placeholder="Answer..."
      is-inverted/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <DoubleSlider
      color="magenta"
      :icon-set="['keyboard', '']"
      type="text"
      placeholder="Answer..."
      is-inverted
      simplicity="slight"/>
  </GridCell>
</Grid>
``` 

### Add-on set

A field can also contain two icons, one on the left and right side each. Note 
that the icon must be added to the FontAwesome library by the application.

```jsx
<DoubleSlider
  color="red"
  :icon-set="['keyboard', '']"
  type="text"
  placeholder="Left"/>
<br/><br/>
<DoubleSlider
  color="red"
  :icon-set="['', 'keyboard']"
  type="text"
  placeholder="Right"/>
<br/><br/>
<DoubleSlider
  color="red"
  :icon-set="['keyboard', 'keyboard']"
  type="text"
  placeholder="Both"/>
```

If you'd like your own something there, you can override the left and the right
add-on slots with something you like.

```jsx
<DoubleSlider
  color="green"
  type="text"
  placeholder="License iconography">
  <template #leftAddons>
    <LicenseIconography :icon-list="['']"/>
  </template>
  <template #rightAddons>
    <LicenseIconography :icon-list="['by']"/>
  </template>
</DoubleSlider>
<br/><br/>
<DoubleSlider
  color="green"
  type="text"
  placeholder="Not even icons">
  <template #leftAddons>
    <div style="width: 1.25em; text-align: center;">
      <strong>:‑)</strong>
    </div>
  </template>
  <template #rightAddons>
    <div style="width: 1.25em; text-align: center;">
      <strong>:‑D</strong>
    </div>
  </template>
</DoubleSlider>
```

### Style set

An input field can be defined to not attract attention, unless given attention
via means of a focus. Or it can be defined to deny attention, unless it is
absolutely what the user wanted.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <DoubleSlider
      type="text"
      :icon-set="['keyboard', '']"
      color="orange"
      placeholder="Answer"
      simplicity="slight"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <DoubleSlider
      type="text"
      :icon-set="['keyboard', '']"
      color="orange"
      placeholder="Answer"
      simplicity="extreme"/>
  </GridCell>
</Grid>
```

An input field can be defined to color the text inside as well adding an
additional streak of color to the field.

```jsx
<DoubleSlider
  type="text"
  :icon-set="['keyboard', '']"
  color="orange"
  placeholder="Answer"
  is-infused/>
```

An input field may appear joined to another component such as another input
field or a `Button`. The border on the join side is dropped to share it
with the other component.

```jsx
import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowLeft,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.component('FontAwesomeIcon', FontAwesomeIcon);

library.add(faArrowLeft, faArrowRight);

let style = {
  display: 'flex',
  flexDirection: 'row',
  gap: '0' // Replace with '1em' to see how 
};

<div :style="style">
  <Button
    color="blue"
    shade="dark"
    simplicity="slight">
    <template #addons>
      Joined
    </template>
    <FontAwesomeIcon 
      :icon="['fas', 'arrow-right']"
      fixed-width/>
  </Button>
  <DoubleSlider
    color="blue" 
    shade="dark"
    :icon-set="['arrow-left', 'arrow-right']"
    join-side="both"
    simplicity="slight"/>
  <Button 
    color="blue"
    shade="dark"
    icon="arrow-left"
    simplicity="slight">
    Joined
  </Button>
</div>
```

An input field may be slighly rounded for extra compatibility with curvy
layouts. Or it can be completely rounded if that is something you like.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <DoubleSlider
      type="text"
      :icon-set="['keyboard', '']"
      color="blue"
      roundness="slight"
      placeholder="Answer"/>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <DoubleSlider
      type="text"
      :icon-set="['keyboard', '']"
      color="blue"
      roundness="complete"
      placeholder="Answer"/>
  </GridCell>
</Grid>
```

Styles can be combined.

### Size set

Input fields come in all sizes, from small to mega.

```jsx
<DoubleSlider
  color="purple"
  :icon-set="['keyboard', '']"
  size="small"
  type="text"
  placeholder="Answer..."/>
<br/><br/>
<DoubleSlider
  color="purple"
  :icon-set="['keyboard', '']"
  type="text"
  placeholder="Answer..."/>
<br/><br/>
<DoubleSlider
  color="purple"
  :icon-set="['keyboard', '']"
  size="big"
  type="text"
  placeholder="Answer..."/>
<br/><br/>
<DoubleSlider
  color="purple"
  :icon-set="['keyboard', '']"
  size="large"
  type="text"
  placeholder="Answer..."/>
<br/><br/>
<DoubleSlider
  color="purple"
  :icon-set="['keyboard', '']"
  size="huge"
  type="text"
  placeholder="Answer..."/>
<br/><br/>
<DoubleSlider
  color="purple"
  :icon-set="['keyboard', '']"
  size="enormous"
  type="text"
  placeholder="Answer..."/>
<br/><br/>
<DoubleSlider
  color="purple"
  :icon-set="['keyboard', '']"
  size="gigantic"
  type="text"
  placeholder="Answer..."/>
<br/><br/>
<DoubleSlider
  color="purple"
  :icon-set="['keyboard', '']"
  size="mega"
  type="text"
  placeholder="Answer..."/>
<br/><br/>
```

### Indication set

A field may indicate erroneous, correct or ambiguous input. For example, in this
case _'Wrong answer'_ will be highlighted negatively, _'Right answer'_ which
will be highlighted positively and any other other input will be indicated
probably.

```jsx
let value = 'Any answer';

<DoubleSlider
  v-model="value"
  :icon-set="['keyboard', '']"
  :indication="value === 'Right answer' ? 'positive' : value === 'Wrong answer' ? 'negative' : 'probably'"
  type="text"
  placeholder="Answer..."/>
```

### State set

A field may be disabled to prevent input altogether.

```jsx
<DoubleSlider
  :icon-set="['keyboard', '']"
  type="text"
  placeholder="Answer..."
  is-disabled/>
```

A field may be made read-only to prevent input while preserving readability as
an output component.

```jsx
<DoubleSlider
  :icon-set="['keyboard', '']"
  type="text"
  placeholder="Answer..."
  value="Read me"
  is-read-only/>
```

### Attributes

All attributes that you could pass to an `input` tag can be passed to the 
`DoubleSlider` component. You've already seen the `placeholder` attribute in use 
above.

An initial `value` can be provided for the field.

```jsx
<DoubleSlider
  color="sand"
  type="text"
  placeholder="Placeholder"
  value="Value"/>
```

The `type` attribute works as you would expect.

```jsx
<DoubleSlider
  color="blue"
  type="email"
  placeholder="Email address...">
</DoubleSlider><br/><br/>
<DoubleSlider
  color="purple"
  type="url"
  placeholder="Website URL...">
</DoubleSlider><br/><br/>
<DoubleSlider
  color="green"
  type="number"
  placeholder="Age in years..."
  min="0"
  max="122">
</DoubleSlider><br/><br/>
<DoubleSlider
  color="magenta"
  type="date">
</DoubleSlider><br/><br/>
<DoubleSlider
  color="orange"
  type="time">
</DoubleSlider><br/><br/>
<DoubleSlider
  color="red"
  type="range"
  max="5"
  min="0">
</DoubleSlider><br/><br/>
<DoubleSlider
  color="yellow"
  type="file">
</DoubleSlider>
```
