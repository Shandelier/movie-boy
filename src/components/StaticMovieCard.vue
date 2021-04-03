<template>
  <div>
    <v-card class="mx-auto my-12" max-width="374">
      <v-img
        height="250"
        class="my-img"
        src="https://omdbapi.com/src/poster.jpg"
      ></v-img>

      <v-card-title>Blade Runner</v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ml-4">4.5 (413)</div>
        </v-row>

        <div class="my-4 subtitle-1">$ • Scifi, Action</div>

        <div>
          Oficer policji Los Angeles trafia na ukrywaną przez lata informację,
          która może pogrążyć resztki społeczeństwa w chaosie. Odkrycie prowadzi
          go do poszukiwań Ricka Deckarda, byłego łowcy androidów, który zaginął
          trzydzieści lat temu.
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
          <v-chip>5:30PM</v-chip>

          <v-chip>7:30PM</v-chip>

          <v-chip>8:00PM</v-chip>

          <v-chip>9:00PM</v-chip>
        </v-chip-group>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Name: "MovieCard",
      selection: 1
    };
  }
};
</script>

<style lang="scss" scoped></style>
