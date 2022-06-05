<template>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg m-5">
  <table class=" table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead class="text-euclid-14 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <th scope="col" class="px-1 py-1">id</th>
      <th scope="col" class="px-1 py-1">Nombre</th>
      <th scope="col" class="px-1 py-1">Apellidos</th>
      <th scope="col" class="px-1 py-1">e-mail</th>
      <th scope="col" class="px-1 py-1">Rol</th>
      <th scope="col" class="px-1 py-1">
        <span class="sr-only">Actualizar</span>
      </th>
      <th scope="col" class="px-1 py-1">
        <span class="sr-only">Eliminar</span>
      </th>
      <th scope="col" class="px-1 py-1">
        <span class="sr-only">Ficha completa</span>
      </th>
    </thead>
    <tbody>
      <tr v-for="(usuario, index) in usuarios"
      :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-euclid-14">
        <th scope="row" class="px-1 py-1 font-medium text-gray-900 dark:text-white whitespace-nowrap">{{usuario._id}}</th> 
        <td class="px-1 py-1"><input type="text" size="12" v-model="usuario.nombre" ></td> 
        <td class="px-1 py-1"><input type="text" size="12" v-model="usuario.apellido" ></td>
        <td class="px-1 py-1"><input type="text" v-model="usuario.email" ></td>
        <td class="px-1 py-1">
            <select v-model="usuario.role" @click="handleUpdate(usuario._id)">
              <option value="USER">Cliente</option>
              <option value="ADMIN">Administrador</option>
              <option value="TECNICO">Tecnico</option>
            </select>
        </td>
        <td><img v-if="usuario.role != 'ADMIN'" src="@/assets/icons/Guardar.svg" @click="handleUpdate(usuario._id)" width="23" height="25" data-modal-toggle="popup-modal"></td>
        <td><img v-if="usuario.role != 'ADMIN'" src="@/assets/icons/Eliminar.svg" @click="handleDelete(usuario._id)" width="25" height="25"></td>
        <td><img v-if="usuario.role != 'ADMIN'" src="@/assets/icons/Ficha.svg" @click="$router.push(`/detallesCliente/${usuario._id}`)" width="20" height="20"></td> 
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