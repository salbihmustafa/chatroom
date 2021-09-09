<template>
  <form @submit.prevent="handleSubmit">
      <input type="text" required placeholder="Display Name" v-model="displayName">
      <input type="email" required placeholder="Email" v-model="email">
      <input type="password" required placeholder="Password" v-model="password">
      <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue';

export default {
    setup(){
        // refs
        const displayName = ref('');
        const email = ref('');
        const password = ref('');

        const handleSubmit = () => {
            console.log(displayName.value);
            console.log(email.value);
            console.log(password.value);
        }

        return {displayName, email, password, handleSubmit}
    }

}
</script>

<style>

</style>