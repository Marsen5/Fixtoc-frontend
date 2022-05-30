<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue'
import { useAppStore } from './store/app';
import { storeToRefs } from 'pinia';


export default defineComponent({
  setup(){
    const { isAuthenticated } = storeToRefs(useAppStore());
    return {isAuthenticated}
  },
  name: 'App',
  components: {
    NavBar
  },
});
</script>


<template>
<header>
  <NavBar v-if="isAuthenticated"/>
</header>
  <router-view />
</template>



<style>
</style>
