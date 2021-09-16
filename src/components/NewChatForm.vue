<template>
  <form>
    <textarea
      placeholder="Type a message and hit enter to send..."
      v-model="message"
      @keydown.enter.prevent="handleSubmit"
    ></textarea>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from "vue";
import getUser from "../composables/getUser.js";
import useCollection from "../composables/useCollection.js";
import { timestamp } from '../firebase/config.js';

export default {
  setup() {
    const message = ref("");
    const { user } = getUser();
    const { addDocument, error } = useCollection('message');

    const handleSubmit = async () => {
      let chat = {
        user: user.value.displayName,
        message: message.value,
        createdAt: timestamp()
      };
      
      await addDocument(chat); //send to useCollection.js
      if(!error.value){
          //if no error
          message.value = ''; //reset message box
      }
      
    };

    return { message, handleSubmit, error };
  },
};
</script>

<style scoped>
form {
    margin: 10px;
}
textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box; /* aligns with everything else */
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
}
</style>