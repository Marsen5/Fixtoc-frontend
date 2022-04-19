<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Indice</router-link>
      </li>
      <li>
        <router-link to="/">Crear producto</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'NavBar'
})
</script>