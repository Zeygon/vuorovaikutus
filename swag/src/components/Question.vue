<template>
  <div class="container">
    <h1>{{ question.text }}</h1>
        <div class="row">

            <div v-for="o in question.options" :key="o.id" class="col col-3">
                <button class="btn btn-primary" v-on:click="respond(o)">{{o.text}}</button>
            </div>
        </div>
    
    
    {{score}}
    <button v-on:click="score++">+</button>
    <router-link to="Scoreboard">Done</router-link>
  </div>
</template>

<script>
import store from "../store.js";
export default {
  name: "Question",
  data() {
    return {
      question: {
        id: 0,
        text: "Which algebraic structure does represent a monad?",
        points: 10,
        options: [
          { id: 0, text: "Monoid", is_correct: true },
          { id: 1, text: "Abelian group", is_correct: false },
          { id: 2, text: "Set", is_correct: false },
          { id: 3, text: "Finite group", is_correct: false }
        ]
      },

      score: store.data.score
    };
  },
  watch: {
    score: function(a, b) {
      store.data.score = this.score;
    }
  },
  methods: {
      respond: function (answer){
          if (answer.is_correct) this.score += this.question.points;
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
