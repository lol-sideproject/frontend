<script setup>
import api from '@/api/testApi';
import { ref } from 'vue';


const value = ref('');
const inval = ref('');

const testFunction = async (inval) => {
    // alert(inval);
    // value.value++;
    value.value = await api.getList(inval);
}
// api.getList();
</script>

<template>
    router view
    입력 : <input type="text" class="border border-danger" v-model="inval"> <button type="button" class="btn btn-primary"
        @click="testFunction(inval)">확인</button>
    {{ value }}
</template>

<style></style>