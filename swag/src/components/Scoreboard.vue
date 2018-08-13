 <template>
  <div class="hello">
      <div class="container d-flex flex-column align-items-center ">

      <h2>Hey Dave, you achieved <span class="text-success">{{score}}</span> points! Therefore your total sums up to 1460 points.</h2>
      
      <router-link class="btn btn-primary btn-lg" to="/">Leave Game</router-link>
      
      </div>
    
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
.container{
   padding-top: 40vh;
}
</style>

