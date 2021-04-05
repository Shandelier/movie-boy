<template>
  <div>
    <v-card class="mx-auto my-12" max-width="292">
      <v-img class="my-img" :src="poster"></v-img>

      <v-card-title>{{ title }}</v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="computedRating"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ml-4">{{ computedRating }} ({{ votes }})</div>
        </v-row>

        <div class="my-4 subtitle-1">{{ released }} • {{ genre }}</div>

        <div>
          {{ plot }}
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>Tonight's availability</v-card-title>

      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip disabled>5:30PM</v-chip>

          <v-chip>7:30PM</v-chip>

          <v-chip>8:00PM</v-chip>

          <v-chip disabled>9:00PM</v-chip>
        </v-chip-group>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  Name: "MovieCard",
  data() {
    return {
      selection: 1
    };
  },
  props: {
    poster: {
      type: String,
      default:
        "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg"
    },
    title: {
      type: String,
      default: "Blade Runner 2049"
    },
    released: {
      type: String,
      default: "2017"
    },
    genre: {
      type: String,
      default: "Scifi, Action"
    },
    director: {
      type: String,
      default: "Denis Villeneuve"
    },
    rating: {
      type: Number,
      default: 8.0
    },
    votes: {
      type: String,
      default: "468,776"
    },
    plot: {
      type: String,
      default: "boi chasing some edgy androids"
    }
  },
  computed: {
    computedRating() {
      return parseFloat((this.rating / 2).toFixed(2));
    }
  }
};
</script>

<style lang="scss" scoped></style>
