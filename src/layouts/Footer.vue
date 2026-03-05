<script setup lang="ts">
import {ref} from "vue";

const appAuthor = ref('Dominik Switlik')
</script>

<template>
  <footer>Author: <span> {{ appAuthor }} </span></footer>
</template>

<style scoped>
footer {
  margin: 0;
  bottom: 5px;
}
</style>