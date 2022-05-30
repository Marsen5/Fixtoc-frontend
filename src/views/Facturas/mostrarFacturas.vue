<template>
  <ul>
    <li 
      v-for="(factura, index) in facturas"
      :key="index"
      @click="$router.push(`/detallesFactura/${factura._id}`)"
    > 
      {{ factura._id }}
    </li>
  </ul>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { Factura } from '@/interfaces/Factura'
import { getFacturas} from '@/services/Factura.api'

export default defineComponent({
  data() {
    return {
    facturas: [] as Factura[] //Utilizando interfaces
    }
  },
  methods: { 
      async loadUsers() {
      const res = await getFacturas() 
      this.facturas = res.data
      }
    },
    mounted() { //Espera a que cargue la pagina
      this.loadUsers()
    },    
})
</script>