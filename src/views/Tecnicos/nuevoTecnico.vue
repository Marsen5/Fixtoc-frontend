<template>
  <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
    <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
    <div class="grid space-y-2 justify-center px-5 py-6 bg-white shadow w-full rounded-lg divide-y divide-gray-200 ">
    <form @submit.prevent="saveTecnico" class="space-y-3" >
      <h1 class="text-euclid-32 font-semibold">Nuevo Técnico</h1>
      <!--Nombre y apellidos-->
      <div class="columns-2">
        <div class="grid space-y-0.5">
          <label class="font-semibold">Nombre</label>
          <input type="text" v-model="tecnico.nombre" class="p-0.5 border border-gray-500 rounded-[0.5rem]" />
        </div>
        <div class="grid space-y-0.5">
          <label class="font-semibold">Apellidos</label>
          <input type="text" v-model="tecnico.apellido" class="p-0.5 border border-gray-500 rounded-[0.5rem]" />
        </div>
      </div>
      <!--Email-->
      <div class="grid space-y-0.5">
        <label class=" font-semibold">Email</label>
        <input type="email" v-model="tecnico.email" class="p-0.5 border border-gray-500 rounded-[0.5rem]" />
      </div>
      <!--Telefono-->
      <div class="grid space-y-0.5">
        <label class=" font-semibold">Teléfono</label>
        <input type="string" v-model="tecnico.telefono" class="p-0.5 border border-gray-500 rounded-[0.5rem]" />
      </div>
      <!--Passwd-->
      <div class="grid space-y-0.5">
        <label class="font-semibold">Password</label>
        <input type="password" v-model="tecnico.password" class="p-0.5 border border-gray-500 rounded-[0.5rem]"/>
      </div>
      <!--Puesto-->
      <div class="grid space-y-0.5">
        <label class="font-semibold">Puesto</label>
        <input type="text" v-model="tecnico.puesto" class="p-0.5 border border-gray-500 rounded-[0.5rem]"/>
      </div>
      <!--Precio hora-->
      <div class="grid space-y-0.5">
        <label class="font-semibold">Precio/hora</label>
        <input type="text" v-model="tecnico.precio_hora" class="p-0.5 border border-gray-500 rounded-[0.5rem]"/>
      </div>
      <!--Botones-->
        <div class="grid space-y-1">
        <button class="btn btn-primary">Crear usuario</button>
      </div>
    </form>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import  { defineComponent } from 'vue'
import { Tecnico } from '@/interfaces/Tecnico'
import { createTecnico } from '@/services/Tecnico.api'


export default defineComponent({
  name: 'SignupVue',
  props: {
    msg: String,
  },
  data() {
    return {
      tecnico: {} as Tecnico //Utilizando interfaces
    }
  },
  methods: {
    async saveTecnico() {
      const res = await createTecnico(this.tecnico) 
      console.log(res)
      this.$router.push({name: "adminTecnicos"})
      }
    }
})
</script>