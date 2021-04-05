<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col>
          <h1>{{ $store.state.userName }}'s Movies Library</h1>

          <v-text-field
            label="Search Movie Title"
            :rules="rules"
            hide-details="auto"
            v-model="searchText"
          ></v-text-field>

          <v-btn
            @click="searchMovie"
            class="d-inline-flex justify-center ma-2 white"
            >Add Movie</v-btn
          >
          <v-btn
            @click="sendMovie"
            class="d-inline-flex justify-center ma-2 white"
            >POST Movie</v-btn
          >

          <div v-for="m in userMovieList" :key="m.id">
            <movie-card
              :title="m.title"
              :released="m.released"
              :genre="m.genre"
              :director="m.director"
              :plot="m.plot"
              :poster="m.poster"
              :rating="m.rating"
              :votes="m.votes"
            ></movie-card>
            <!-- <v-card class="mx-auto ma-6">
              <div class="pa-4">
                <p>
                  Title: <b>{{ m.title }}</b>
                </p>
                <p>
                  Poster: <b>{{ m.poster }}</b>
                </p>
                <p>
                  Released: <b>{{ m.released }}</b>
                </p>
                <p>
                  Genre: <b>{{ m.genre }}</b>
                </p>
                <p style="margin: 0 0 0 0">
                  Director: <b>{{ m.director }}</b>
                </p>
              </div>
            </v-card> -->
          </div>
        </v-col>
        <v-col>
          <h1>Popular Movie</h1>
          <movie-card></movie-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieCard from "@/components/MovieCard.vue";

export default {
  name: "Home",
  data() {
    return {
      results: [],
      searchText: "",
      rules: [
        // (value) => !!value || "Required.",
        // (value) => (value && value.length >= 1) || "Min 1 characters"
      ],
      movie: {},
      userMovieList: [],
      test: [],
      userName: ""
    };
  },
  components: {
    MovieCard
  },
  mounted() {
    this.userName = "Karol";
    this.searchText = "Batman";

    this.loadUserMovies();
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    }
  },
  methods: {
    addOne() {
      this.$store.state.counter++;
    },
    searchMovie() {
      fetch("http://www.omdbapi.com/?apikey=0000000000&t=" + this.searchText)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          let info = {};
          info.title = data.Title;
          info.released = data.Released;
          info.genre = data.Genre;
          info.director = data.Director;
          info.plot = data.Plot;
          info.poster = data.Poster;
          info.rating = parseFloat(data.imdbRating);
          info.votes = data.imdbVotes;
          info.id = data.imdbID;
          let idList = this.userMovieList.map((o) => {
            return o.id;
          });
          if (idList.indexOf(info.id) === -1) {
            if (info.id != null) {
              this.userMovieList.push(info);
            } else alert("Can't find any movie of this title");
          } else alert("Movie already in library");
        })
        .catch(console.error);
      this.searchText = "";
    },
    sendMovie() {
      this.userMovieList.forEach((e) => {
        fetch("https://" + this.userName + "/Movies.json", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            ID: e.id,
            Title: e.title,
            Released: e.released,
            Genre: e.genre,
            Director: e.director,
            Plot: e.plot,
            Poster: e.poster,
            imdbRating: e.rating,
            imdbVotes: e.votes
          })
        });
      });
    },
    loadUserMovies() {
      fetch("https://" + this.userName + "/Movies.json")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          if (data || data[0]) {
            const res = [];
            for (const id in data) {
              res.push({
                id: data[id].ID,
                title: data[id].Title,
                released: data[id].Released,
                genre: data[id].Genre,
                director: data[id].Director,
                plot: data[id].Plot,
                poster: data[id].Poster,
                rating: data[id].imdbRating,
                votes: data[id].imdbVotes
              });
            }
            this.userMovieList = res;
          } else {
            console.log("User Library empty");
          }
        });
    }
  }
};
</script>
