<template>
  <nav class="bg-violet-400 flex ">
   <!--Logo-->
   <router-link to="/home" class="p-2">
    <img src="../assets/Logo.png" alt="logo" class="w-7"> 
   </router-link>
  <div class="fixed right-0 p-1.5">
    <router-link to="/" class="px-3 text-white">Sobre nosotros</router-link>
    <router-link to="/" class="text-white">Cerrar Sesión</router-link> 
  </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'NavBar'
})
</script>