/* eslint-disable */
<template>
  <div class="text-euclid-20 font-bold mx-auto">¿Que deseas hacer?</div>
  <div v-if="isAdmin">
    <router-link to="/mostarClientes" class="text-blue-500">Ver clientes</router-link>
  </div>
  <div v-if="isAdmin">
    <router-link to="/mostarFacturas" class="text-blue-500">Ver facturas</router-link>
  </div>
  <div v-if="isUser">
    <router-link to="/nuevaIncidencia" class="text-blue-500">Nueva incidencia</router-link>
  </div>
  <div v-if="isAdmin">
    <router-link to="/mostrarIncidencias" class="text-blue-500">Ver incidencias</router-link>
  </div>
  <div v-if="isUser">
    <router-link to="/mostrarIncidenciasCliente/:id" class="text-blue-500">Ver incidencias</router-link>
  </div>
  <div v-if="isUser">
    <router-link to="/modificarPerfil" class="text-blue-500">Mi perfil</router-link>
  </div>
  <div v-if="isAdmin">
    <router-link to="/adminTecnicos" class="text-blue-500">Administrar técnicos</router-link>
  </div>
  <div v-if="isUser">
    <router-link to="/mostrarFacturas/:id" class="text-blue-500">Ver facturas</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAppStore } from '@/store/app';
import { storeToRefs } from 'pinia';


export default defineComponent({
  setup(){
    const { isAdmin, isUser, isTecnico} = storeToRefs(useAppStore());
    return {isAdmin, isUser, isTecnico}
  }
});
</script>