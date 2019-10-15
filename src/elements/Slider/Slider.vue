<template>
  <div class="slider">
      <label for="fader">Slider label</label>
        <input v-model="value" type="range"
          id="fader" 
          min="1"
          max="100"
          value="50"
          step="1"
          aria-valuemin="1"
          aria-valuemax="100"
          aria-valuenow="50">
        <output for="fader" id="value">{{value}}</output>
  </div>
</template>

<script>
export default {
  name: 'Slider',
data: function (){
    return {
      value: "50"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label{
  display: block;
  margin: 10px;
}
</style>
