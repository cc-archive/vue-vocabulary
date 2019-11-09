Here's a sample GitHubCorner. Clicking on it takes you to cc-vocabulary's repository on GitHub.

```jsx
<GitHubCorner 
    repo="creativecommons/cc-vocabulary" 
    color="orange"> 
</GitHubCorner>
```

### Positioning 

A GitHubCorner can be have absolute or relative positioning.  
By default, it has relative positioning.
Using absolute positioning will position the GitHubCorner relative to its parent element (usually the body)

```html
<GitHubCorner  
    position="absolute">
</GitHubCorner>
```

### Corner Type 

A GitHubCorner can be the left or right corner type.  
By default, you get the right corner type.
If you want the left corner type , add `corner:left`

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <GitHubCorner/> 
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <GitHubCorner  
      corner="left">
    </GitHubCorner>
  </GridCell>
</Grid>
```

### Color set

A GitHubCorner without color is black.

```jsx
<GitHubCorner/> 
```

GitHubCorner can be colored with any color from the set provided by
CC Vocabulary.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <GitHubCorner  color="blue"></GitHubCorner>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <GitHubCorner  color="green"></GitHubCorner>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <GitHubCorner  color="magenta"></GitHubCorner>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <GitHubCorner  color="olive"></GitHubCorner>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <GitHubCorner  color="orange"></GitHubCorner>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <GitHubCorner  color="purple"></GitHubCorner>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <GitHubCorner  color="red"></GitHubCorner>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <GitHubCorner  color="sand"></GitHubCorner>
  </GridCell>
  <GridCell :span-set="[12, 6, 4, 4, 4]">
    <GitHubCorner  color="yellow"></GitHubCorner>
  </GridCell>
</Grid>
```

Also you may use one of the three shades, namely `light`, `dark` and `darker`, 
to accentuate the color.

```jsx
<Grid>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <GitHubCorner  
      color="blue" 
      shade="light">
      
    </GitHubCorner>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <GitHubCorner  color="blue">
      
    </GitHubCorner>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <GitHubCorner  
      color="blue" 
      shade="dark">
      
    </GitHubCorner>
  </GridCell>
  <GridCell :span-set="[12, 6, 3, 3, 3]">
    <GitHubCorner  
      color="blue" 
      shade="darker">
      
    </GitHubCorner>
  </GridCell>
</Grid>
```

If the GitHubCorner is to be placed on a dark or non-white background, we use the 
inverted variant.

```jsx { "props": { "className": "dark-background" } }
<Grid>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <GitHubCorner  is-inverted>
      
    </GitHubCorner>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <GitHubCorner  
      is-inverted
      corner="left">
      
    </GitHubCorner>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <GitHubCorner  
      color="magenta" 
      is-inverted>
      
    </GitHubCorner>
  </GridCell>
  <GridCell :span-set="[12, 6, 6, 6, 6]">
    <GitHubCorner  
      color="magenta" 
      is-inverted
      corner="left">
      
    </GitHubCorner>
  </GridCell>
</Grid>
```