<template>
<div>
    <p>Time <span v-bind:class="{ 'text-danger': timer%10===0 }">{{timer}}</span> | {{question.points}} PTS</p>
  <div class="container">
      <div class="question-container d-flex align-items-center">

    <h1>{{ question.text }}</h1>
      </div>


        <div class="row respond">

            <div v-for="o in question.options" :key="o.id" class="col col-6 my-2">
                <div class="option d-flex align-items-center " v-on:click="respond(o)">
                    <p class="text-white">{{o.text}}</p>
                    
                </div>
            </div>
        </div>
    
  </div>
</div>
</template>

<script>
import store from "../store.js";
export default {
  name: "Question",
  data() {
    return {
        index: 0,
        questions: [{
            id: 0,
            text: "Which algebraic structure does represent a monad?",
            points: 10,
            options: [
                { id: 0, text: "Monoid", is_correct: true },
                { id: 1, text: "Abelian group", is_correct: false },
                { id: 2, text: "Set", is_correct: false },
                { id: 3, text: "Finite group", is_correct: false }
            ]
        },{
            id: 1,
            text: "Which rocket is the tallest?",
            points: 20,
            options: [
                { id: 0, text: "Ariane 4", is_correct: false },
                { id: 1, text: "Saturn V", is_correct: true },
                { id: 2, text: "Falcon .", is_correct: false },
                { id: 3, text: "Vega", is_correct: false }
            ]
        },{
            id: 2,
            text: "1. Divide 50 by half and add 20?",
            points: 20,
            options: [
                { id: 0, text: "45.", is_correct: false },
                { id: 1, text: "70.", is_correct: false },
                { id: 2, text: "120.", is_correct: true },
                { id: 3, text: "30.", is_correct: false }
            ]
        }],

        score: store.data.score,
        timer: 0
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
          store.data.score = this.score;
          console.log(answer.is_correct, this.score)
          console.log(this.index,this.questions.length)
          if (this.index < this.questions.length - 1) {
              this.index++
          } else {
              this.$router.push('Scoreboard')
          }
      },
      inc : function(){
          this.timer++;
          if (this.timer%10===0) this.question.points = Math.floor( this.question.points / 1.5)
          console.log('ll')
      }
  },
  computed: {
      question: function (){
          return this.questions[this.index]
      }
  },
  mounted(){
      const _this = this;
      setInterval(function(){
          _this.inc();
          
          console.log('www')
      },1000)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.option {
    height: 100%;
    min-height: 150px;
    width: 95%;
    /* margin: 2vh 0; */
    background: #212433;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.75);
    justify-content: center;
}

.option > p {
    font-size: 2rem;

}
.respond {
    bottom: 0;

    position: fixed;

    padding-bottom: 50px;
}

.question-container {
    height: 40vh;
}
</style>
