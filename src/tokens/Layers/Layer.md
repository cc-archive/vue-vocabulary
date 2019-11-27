```jsx
<Heading
  :level="1"
  color="green"
  shade="dark">
  Hello World!
</Heading>
<Paragraph>
  The heading above is colored a <strong>dark</strong> shade of 
  <strong>green</strong>.
</Paragraph> 
```

### Stack level

Vocabulary provides a number of z index levels. these levels go with the different priorities that elments have for most layouts
```jsx
  <Card
    class="vocab Layer"
    heading="Top Layer"
    subheading="Top of the world, will be seen over all other elements"
    is-decked
    is-raised>
    <div
      class="swatch"
      :style="swatchStyles"
      @click="toggleOverlay"></div>
    <template #foot>
      <code>Z-index:900</code><br/>
      <code>$layer-top</code>
    </template>
  </Card>
    <Card
    class="vocab Layer"
    heading="High Layer"
    subheading="Things that go on top of high elements"
    is-decked
    is-raised>
    <div
      class="swatch"
      :style="swatchStyles"
      @click="toggleOverlay"></div>
    <template #foot>
      <code>Z-index:800</code><br/>
      <code>$layer-high</code>
    </template>
  </Card>
    <Card
    class="vocab Layer"
    heading="Mid"
    subheading="Not too high, not too low"
    is-decked
    is-raised>
    <div
      class="swatch"
      :style="swatchStyles"
      @click="toggleOverlay"></div>
    <template #foot>
      <code>Z-index:100</code><br/>
      <code>$layer-mid</code>
    </template>
  </Card>
    <Card
    class="vocab Layer"
    heading="Bottom"
    subheading="lowest of the low"
    is-decked
    is-raised>
    <div
      class="swatch"
      :style="swatchStyles"
      @click="toggleOverlay"></div>
    <template #foot>
      <code>Z-index:1</code><br/>
      <code>$layer-bottom</code>
    </template>
  </Card>    
```

## Top

Page content

## Mid

Vocabulary provides a number of z index levels. these levels go with the different priorities that elments have for most layouts

## Bottom

Vocabulary provides a number of z index levels. these levels go with the different priorities that elments have for most layouts

```jsx noeditor
<Layer property="zIndex"/>
```

