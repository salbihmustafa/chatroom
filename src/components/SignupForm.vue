<template>
  <form @submit.prevent="handleSubmit">
      <input type="text" required placeholder="Display Name" v-model="displayName">
      <input type="email" required placeholder="Email" v-model="email">
      <input type="password" required placeholder="Password" v-model="password">
      <div class="error">{{ error }}</div> <!-- if error is null nothing will show -->
      <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import useSignup from '../composables/useSignup';

export default {
    setup(props, context){
        //using useSignup.js
        const { error, signup } = useSignup(); 
        // refs
        const displayName = ref('');
        const email = ref('');
        const password = ref('');

        const handleSubmit = async () => {
            await signup(email.value, password.value, displayName.value); //calls function within useSignup.js
            
            //redirect to chatroom
            if(!error.value){
                //no error
                console.log('User signed up!'); //once response comes back
                //emit custom event to welcome.vue
                context.emit('signup')
            }
        }

        return {displayName, email, password, handleSubmit, error}
    }

}
</script>

<style>

</style>