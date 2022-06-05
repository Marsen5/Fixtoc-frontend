<template>
   <div>
  <h1>{{usuario.nombre}}</h1>
   <form @submit.prevent="handleUpdate()" class=" grid space-y-3 
    justify-center">
    <!-- Email -->
    <h2>Email</h2>
    <input type="text" v-model="usuario.email">
    <!-- Nombre -->
    <h2>Nombre</h2>
    <input type="text" v-model="usuario.nombre">
    <!-- Apellidos -->
    <h2>Apellidos</h2>
    <input type="text" v-model="usuario.apellido">
    <!-- Direccion -->
    <h2>Dirección</h2>
    <input type="text" v-model="usuario.direccion"> 
    <!-- Telefono -->
    <h2>Teléfono</h2>
    <input type="text" v-model="usuario.telefono">
 
    <button class="btn btn-primary">Actualizar</button>
    <button @click="handleDelete()" class="btn btn-error">Borrar cuenta</button>
    </form>
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
        this.$router.push({name: "login"}) 
    },

    async handleUpdate() {
      await updateUser(this.usuario._id, this.usuario)
      this.loadUser();
    }

  },
  mounted() {
    this.loadUser();
  }
})
</script>
