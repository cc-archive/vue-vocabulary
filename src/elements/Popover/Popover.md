Here's a sample Popover. If you intuitively feel to click it, it's working for all directions `to-top`, `to-bottom`, `to-left` and `to-right`.

```jsx
const PopoverStyle = "padding: 10px"

<Grid style="margin: 150px">
  <GridCell
    :span-set="[1,1]"/>
    <Button  color="orange">
      <template>
        <span>
          Hover me
        </span>
        <Popover
          roundness=""
          direction="to-top"
          action="hover"
          :style="PopoverStyle"
        >
          <Heading>Hover this heading</Heading>
          <Paragraph density="dense">
            Five syllables here.
          </Paragraph>
          <Rating color="yellow" :value="3" />
        </Popover>
      </template>
    </Button>
  </GridCell>
  <GridCell
    :span-set="[1,1]"/>
    <Button  color="red">
      <template>
        Hover me
        <Popover
          is-inverted
          roundness="slight"
          simplicity="slight"
          direction="to-top"
          action="hover"
          :style="PopoverStyle"
        >
          <Heading>Hover this heading</Heading>
          <Paragraph density="dense">
            Five syllables here.
          </Paragraph>
          <Rating color="yellow" :value="3" />
        </Popover>
      </template>
    </Button>
  </GridCell>
  <GridCell
    :span-set="[1,1]"/>
    <Button  color="green">
      <template>
        Click on me
        <Popover
          color="orange"
          roundness="slight"
          simplicity="slight"
          direction="to-right"
          action="click"
          :style="PopoverStyle"
        >
          <Heading>Hover this heading</Heading>
          <Paragraph density="dense">
            Five syllables here.
          </Paragraph>
          <Rating color="yellow" :value="3" />
        </Popover>
      </template>
    </Button>
  </GridCell>
</Gride>
```

### Color set

A Popover without color is white.

```jsx
<span>
  Simple Span
  <Popover
      direction="to-right"
      action="hover">
    Example
  </Popover>
</span>
```
If the Popover is to be placed on a dark or non-white background, we use the 
inverted variant.

```jsx { "props": { "className": "dark-background" } }
<Button style="margin: 30px" is-inverted simplicity="slight">
  <template>
    Hover me
    <Popover
      color="orange"
      is-inverted
      direction="to-right"
      action="hover">
      Example
    </Popover>
  </template>
</Button>
```

### Style set

A Popover can be slightly rounded to fit in with more curvy layouts and UI
components. Although supported, the use of this is highly unlikely given CC's
love for sharp vertices and 90° angles. Even more rounded is the pill shape.

```jsx
<Grid style="margin: 100px">
  <GridCell
    :span-set="[1,1]"/>
    <Button>
      <template>
        Hover me
        <Popover
          roundness=""
          direction="to-top"
          action="hover">
          Example
        </Popover>
      </template>
    </Button>
  </GridCell>
  <GridCell
    :span-set="[1,1]"/>
    <Button>
      <template>
        Hover me
        <Popover
          roundness="slight"
          direction="to-bottom"
          action="hover">
          Example
        </Popover>
      </template>
    </Button>
  </GridCell>
  <GridCell
    :span-set="[1,1]"/>
    <Button>
      <template>
        Hover me
        <Popover
          roundness="complete"
          direction="to-top"
          action="hover">
          Example<br>That's it!
        </Popover>
      </template>
    </Button>
  </GridCell>
</Grid>
```
A Popover can be defined to not attract attention, unless given attention via
means of a hover. A Popover can be defined to deny attention, unless that is
really what the user wanted.

```jsx
<Grid style="margin: 150px;">
  <GridCell :span-set="[1,1]">
    <Button>
      <template>
        Hover me
        <Popover
          simplicity=""
          color="orange"
          direction="to-top"
          action="hover">
          Example<br>That's it!
        </Popover>
      </template>
    </Button>
  </GridCell>
  <GridCell :span-set="[1,1]">
    <Button>
      <template>
        Hover me
        <Popover
          simplicity="slight"
          color="orange"
          direction="to-top"
          action="hover">
          Example<br>That's it!
        </Popover>
      </template>
    </Button>
  </GridCell>
  <GridCell :span-set="[1,1]">
    <Button>
      <template>
        Hover me
        <Popover
          simplicity="extreme"
          color="orange"
          direction="to-top"
          action="hover">
          Example<br>That's it!
        </Popover>
      </template>
    </Button>
  </GridCell>
</Grid>
```
