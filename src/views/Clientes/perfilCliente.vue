<template>
  <div class="mx-5 my-2">
    <img src="@/assets/icons/flecha.svg" @click="irAtras()" width="20" height="22"> 
</div>
  <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
   <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
    <div class="grid space-y-2 justify-center px-5 py-6 bg-white shadow w-full rounded-lg divide-y divide-gray-200 my-3 ">

   <form @submit.prevent="handleUpdate()" class=" space-y-2">
    <h1 class="text-euclid-32 font-semibold">Hola {{usuario.nombre}}!</h1>
    <!-- Email -->
    <div class="grid space-y-0.5">
      <h2  class=" font-semibold">Email</h2>
      <input type="text" v-model="usuario.email" class="border-b-2">
    </div>
    <!-- Nombre -->
    <div class="grid space-y-0.5">
      <h2 class=" font-semibold">Nombre</h2>
      <input type="text" v-model="usuario.nombre" class="border-b-2">
    </div>
    <!-- Apellidos -->
    <div class="grid space-y-0.5">
      <h2 class=" font-semibold">Apellidos</h2>
      <input type="text" v-model="usuario.apellido" class="border-b-2">
    </div>
    <!-- Direccion -->
    <div class="grid space-y-0.5">
      <h2 class=" font-semibold">Dirección</h2>
      <input type="text" v-model="usuario.direccion" class="border-b-2"> 
    </div>
    <!-- Telefono -->
    <div class="grid space-y-0.5">
      <h2 class=" font-semibold">Teléfono</h2>
      <input type="text" v-model="usuario.telefono" class="border-b-2">
    </div>

    <div class="grid space-y-1">
    <button class="btn btn-primary">Actualizar</button>
    <button @click="handleDelete()" class="text-red-500">Borrar cuenta</button>
    </div>
    </form>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Usuario } from '@/interfaces/Usuario'
import { deleteUser, getUser, updateUser } from '@/services/Usuario.api'
import { useAppStore } from '@/store/app'

const appStore = useAppStore();

export default defineComponent({
  data() {
    return {
      usuario: {} as Usuario,
      loading: false,
      uploadedImage: false,
      imageFile: false
    } 
  },
  methods: {
    async loadUser() {
      this.usuario = await getUser(appStore._id);
    },

    async handleDelete() {
      await deleteUser(this.usuario._id)
       this.$router.push({name: "home"}) 
    },

    async handleUpdate() {
      await updateUser(this.usuario._id, this.usuario)
      this.$router.push({name: "home"}) 
    },

    async irAtras() {
        this.$router.go(-1)
      }

  },
  mounted() {
    this.loadUser();
  }
})
</script>
