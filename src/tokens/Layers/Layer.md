```jsx
<div class="square">
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
</div>
```

### Stack level

Vocabulary provides a number of z index levels. these levels go with the different priorities that elments have for most layouts

```jsx
<template>
  <Grid density="sparse">
      <GridCell 
        v-for="index in 12"
        :key="index"
        :style="style"
        :span-set="spanSet"/>
          <Layer level="top"/>
      </GridCell>
    <GridCell
        v-for="index in 12"
        :key="index"
        :style="style"
        :span-set="spanSet"/>
          <Layer level="high"/>
    </GridCell>
    <GridCell
        v-for="index in 12"
        :key="index"
        :style="style"
        :span-set="spanSet"/>
          <Layer level="high2"/>
    </GridCell>
    <GridCell
        v-for="index in 12"
        :key="index"
        :style="style"
        :span-set="spanSet"/>
          <Layer level="mid"/>
    </GridCell>
    <GridCell
        v-for="index in 12"
        :key="index"
        :style="style"
        :span-set="spanSet"/>
          <Layer level="bottom3"/> 
    </GridCell>
    <GridCell
        v-for="index in 12"
        :key="index"
        :style="style"
        :span-set="spanSet"/>
          <Layer level="bottom2"/> 
    </GridCell>
    <GridCell
        v-for="index in 12"
        :key="index"
        :style="style"
        :span-set="spanSet"/>
          <Layer level="bottom"/> 
      <Layer level="bottom"/>
    </GridCell>
</template>
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

