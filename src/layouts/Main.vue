<script setup lang="ts">
import {
  computed,
  onMounted,
  ref
} from "vue";
import BaseTable from "@/components/BaseTable.vue";
import type {TableType} from '@/types/TableType.ts'
import {useApiData} from "@/composables/useApiData.ts";

const { loadAllData, loading, movies, series } = useApiData();

onMounted(() => {
  console.log(`[LOG] Main component mounted. Fetching all data...`);
  loadAllData();
});


const activeData = computed(() => {
  if (activeTableName.value === 'Movies') return movies.value;
  if (activeTableName.value === 'Series') return series.value;
  return [];
});

const activeLoading = computed(() => {
  if (activeTableName.value === 'Movies') return loading.value.movies;
  if (activeTableName.value === 'Series') return loading.value.series;
  return [];
})

const tableTypes = ref<TableType[]>([
  {name: 'Movies'},
  {name: 'Series'}
]);

const activeTableName = ref(tableTypes.value[0]!.name);

const activeTable = computed(() => {
  return tableTypes.value.find(tab => tab.name === activeTableName.value);
})

function onClick(tab: TableType){
  activeTableName.value = tab.name;

  console.log(activeData.value);
}

</script>

<template>
  <main>
    <div class="tables-container">
      <div class="tables-header">
        <button
            v-for="tab in tableTypes"
            :key="tab.name"
            :class="['tables-header-item', { active: activeTableName === tab.name }]"
            @click="onClick(tab)">
          {{ tab.name }}
        </button>
      </div>

      <div class="tables-panel">
        <BaseTable v-if="activeTableName"
                   :tableType="activeTable"
                   :data="activeData"
                   :loading="activeLoading">
        </BaseTable>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  container-type: inline-size;
  width: 100%;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: center;
  margin: 1%;

  button {
    font-weight: bold;
  }

  p {
    padding: 10px;
  }

  .tables-container {
    width: 100%;
    height: 100%;
    flex-grow: 3;

    .tables-header {
      display: flex;
      margin-bottom: -1px;
    }

    .tables-header-item {
      flex: 1;
      min-width: 0;
      padding: 10px 20px;
      background: #f9f9f9;
      cursor: pointer;
      border: 1px solid #ccc;
    }

    .tables-header-item.active {
      background: white;
      border-bottom: 1px solid white;
      font-weight: bold;
    }

    .tables-panel {
      border: 1px solid #ccc;
      padding: 20px;
      background: white;
      min-height: 200px;
    }
  }
}


</style>