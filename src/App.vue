<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue'



export default defineComponent({
  name: 'App',
  components: {
    NavBar
  }

});
</script>


<template>
<header>
<NavBar/>
</header>
  <router-view />
</template>



<style>
</style>
