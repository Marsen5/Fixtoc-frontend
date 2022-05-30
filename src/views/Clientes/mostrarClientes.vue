<template>
<div>
  <table class="mx-auto m-4">
    <thead>
      <th>id</th>
      <th>Nombre</th>
      <th>Apellidos</th>
      <th>e-mail</th>
      <th>Rol</th>
    </thead>
    <tbody>
      <tr v-for="(usuario, index) in usuarios"
      :key="index">
        <td>{{usuario._id}}</td> 
        <td><input type="text" v-model="usuario.nombre"></td> 
        <td><input type="text" v-model="usuario.apellido"></td>
        <td><input type="text" v-model="usuario.email"></td>
        <td><input type="text" v-model="usuario.role"></td> 
        <td><button @click="handleUpdate(usuario._id)">Actualizar</button></td>
        <td><button @click="handleDelete(usuario._id)">Eliminar</button></td>
        <td><button @click="$router.push(`/detallesCliente/${usuario._id}`)">Ficha completa</button></td> 
      </tr>
    </tbody>
  </table>
</div>
  
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { Usuario } from '@/interfaces/Usuario'
import { deleteUser, getUsuarios, updateUser } from '@/services/Usuario.api'

export default defineComponent({
  data() {
    return {
    usuarios: [] as Usuario[], //Utilizando interfaces
    }
  },
  methods: { 
      async loadUsers() {
      this.usuarios = await getUsuarios();
    
      console.log(this.usuarios)
      },

      async handleUpdate(id: string) {
        const usuario_id = this.usuarios.find(usuario => usuario._id === id)
        await updateUser(id, usuario_id as Usuario)
        console.log(usuario_id)
        this.loadUsers()
      },

      async handleDelete(idUsuario: string) {
        await deleteUser(idUsuario)
        this.loadUsers()
      }
    
    },


    
    mounted() { //Espera a que cargue la pagina
      this.loadUsers()
    },    
})

</script>