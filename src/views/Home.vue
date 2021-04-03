<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col>
          <static-movie-card></static-movie-card>
        </v-col>
        <v-col>
          <movie-card
            :description="myDescription"
            :title="myTitle"
            :srcimg="mysrcimg"
          ></movie-card>
          <v-btn
            @click="myFetch"
            class="d-inline-flex justify-center ma-2 white"
            >Send POST</v-btn
          >
          <v-btn
            @click="loadMovie"
            class="d-inline-flex justify-center ma-2 white"
            >Load movie</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieCard from "@/components/MovieCard.vue";
import StaticMovieCard from "@/components/StaticMovieCard.vue";

export default {
  name: "Home",
  data() {
    return {
      mysrcimg: "https://omdbapi.com/src/poster.jpg",
      myTitle: "my title",
      myDescription: "very good my Description",
      results: []
    };
  },
  components: {
    StaticMovieCard,
    MovieCard
  },
  methods: {
    myFetch() {
      fetch(
        "https://awsome-demo-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            title: this.myTitle,
            description: this.myDescription
          })
        }
      );
    },
    loadMovie() {
      fetch("http://www.omdbapi.com/?apikey=[your-apikey]&s=batman")
        .then((success) => {
          success.json();
        })
        .then((movies) => {
          console.log(movies);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
};
</script>
