<script setup lang="ts">
import { ref } from 'vue';
import BindleInput from '../components/BindleInput.vue';
const textInput = ref('text input')
</script>

<template>
  <form >
    <BindleInput type="text" id="test" label="Test label" v-model="textInput" required />
    <input type="submit" value="Submit">
  </form>
  </template>
