<script setup lang="ts">
import {EMPTY_TABLE, type TableType} from "@/types/TableType.ts";
  import {computed} from "vue";
import type {Media} from "@/types/Media.ts";

  const props = defineProps<{
    tableType: TableType | undefined
    data: Media[]
    loading: boolean | never[]
  }>();

</script>

<template>
    <div class="table-container">
      <table>
        <thead>
        <tr>
          <th>Title</th>
          <th>Overview</th>
          <th>Genres</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in props.data" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.overview }}</td>
          <td v-for="genre in item.genres" :key="genre.id"> {{ genre.name }}</td>
        </tr>
        </tbody>
      </table>
      <div v-if="props.data.length === 0 && !loading">No data found.</div>
    </div>
</template>

<style scoped>

</style>