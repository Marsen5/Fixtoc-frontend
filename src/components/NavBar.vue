<template>
  <nav class="bg-violet-400">
   <!--Logo-->
   
   <router-link to="/">Indice</router-link>
  <router-link to="/">Crear producto</router-link> 
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'NavBar'
})
</script>