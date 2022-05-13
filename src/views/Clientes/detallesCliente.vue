<template>
  <div>
  <h1>{{usuario.nombre}}</h1>
   <form @submit.prevent="handleUpdate()" class=" grid space-y-3 
    justify-center">
    <h2>Email</h2>
    <input type="text" v-model="usuario.email">
    <h2>Nombre</h2>
    <input type="text" v-model="usuario.nombre">
    <h2>Apellidos</h2>
    <input type="text" v-model="usuario.apellido">
    <!-- <h2>Incidencias</h2>
    <input type="text" v-model="usuario.incidencias"> -->
  <!--   <h2>Role</h2>
    <input type="text" v-model="usuario.roles">
    <h2>Observaciones</h2>
    <input type="text" v-model="usuario.observaciones"> -->
    
  
    <button class="btn btn-primary">Actualizar</button>
    <button @click="handleDelete()" class="btn btn-error">Borrar</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Usuario } from "@/interfaces/Usuario";
import { deleteUser, updateUser, getUser } from "@/services/Usuario.api";
import { defineComponent } from "@vue/runtime-core";


export default defineComponent({
  data() {
    return {
      usuario: {} as Usuario
    }
  },
  methods: {
    //Las funciones estan en services/ProductService 
    async loadProduct(id: string) { //Funcion que cargar un producto a partir del id que le pasamos - La creamos en services ProductServices.ts (getProduct)
      this.usuario = await getUser(id)

      /* console.log("Res:"+res.data) */
    },
    async handleUpdate() { //La funcion viene de updateProduct / services/ProductServices
      if(typeof this.$route.params._id === "string"){
      await updateUser(this.$route.params._id, this.usuario)
      this.$router.push({name: "product"})
      }
    },
    async handleDelete(){
        await deleteUser(this.usuario._id)
        this.$router.push({name: "mostrarClientes"}) 
    }
  },
  mounted() { //Va a hacer una petición de lo que esta recibiendo
    if (typeof this.$route.params.id === "string" ) //Solo lo ejecutara si el dato es de tipo string - Esto la hacemos porque sino al pasar el id en getProduct se tiene que pasar un string si o si
      console.log("id:"+this.$route.params.id)
      const id= this.$route.params.id
      this.loadProduct(id as string)
      }
})
</script>