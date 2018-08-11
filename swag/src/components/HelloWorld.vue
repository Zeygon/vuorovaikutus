 <template>
  <div class="hello">
      <div class="container d-flex flex-column align-items-center ">
<h2>You're in team <span class="text-green">Magnificent Magnolia</span>. Once your team is ready start the game. Good luck!</h2>
      <router-link class="btn btn-primary btn-lg" to="Question">Make it so.</router-link>
      
      </div>
    
  </div>
</template>

<script>
import store from '../store.js'
export default {
  name: 'HelloWorld',
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
