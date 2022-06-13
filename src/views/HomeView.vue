/* eslint-disable */
<template>
  <div class="text-euclid-32 font-semibold m-5">¿Que deseas hacer?</div>
  <div class="mx-5">
  <div class="grid grid-cols-1 laptop:grid-cols-4 mx-auto gap-2">
  <div v-if="isAdmin">
    <router-link to="/mostarClientes" class="btn btn-primary">Ver clientes</router-link>
  </div>
  <div v-if="isUser">
    <router-link to="/nuevaIncidencia" class="btn btn-primary">Nueva incidencia</router-link>
  </div>
  <div v-if="isAdmin">
    <router-link to="/mostrarIncidencias" class="btn btn-primary">Ver incidencias</router-link>
  </div>
  <div v-if="isUser">
    <router-link to="/mostrarIncidenciasCliente/:id" class="btn btn-primary">Ver incidencias</router-link>
  </div>
  <div v-if="isTecnico">
    <router-link to="/mostrarIncidenciasTecnico/:id" class="btn btn-primary">Ver incidencias</router-link>
  </div>
  <div v-if="isUser || isTecnico">
    <router-link to="/modificarPerfil" class="btn btn-primary">Mi perfil</router-link>
  </div>
  <div v-if="isAdmin">
    <router-link to="/adminTecnicos" class="btn btn-primary">Administrar técnicos</router-link>
  </div>
  <div v-if="isUser">
    <router-link to="/mostrarFacturas/:id" class="btn btn-primary">Ver facturas</router-link>
  </div>
  </div>
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