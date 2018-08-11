<template>
  <div class="hello">
      <h2>You achieved {{score}} points!</h2>
    
  </div>
</template>

<script>
import store from '../store.js'
export default {
  name: 'Scoreboard',
  data () {
    return {
      msg: 'A monad is a monoid in the category of endofunctors!',
      score: store.data.score
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
