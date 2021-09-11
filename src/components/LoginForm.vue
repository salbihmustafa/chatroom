<template>
  <form @submit.prevent="handleSubmit">
      <input type="email" required placeholder="Email" v-model="email">
      <input type="password" required placeholder="Password" v-model="password">
      <div class="error">{{ error }}</div>
      <button>Log in</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import useLogin from '../composables/useLogin.js';

export default {
    setup(){
        // refs
        const email = ref('');
        const password = ref('');

        const { error, login } = useLogin(); //import the useLogin function

        const handleSubmit = async () => {
            //invoke the useLogin function
            await login(email.value, password.value);
            if(!error.value){
                //no error
                console.log("user logged in");
            }
        }

        return {email, password, handleSubmit, error}
    }

}
</script>

<style>

</style>