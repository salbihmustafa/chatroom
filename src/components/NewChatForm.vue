<template>
  <form>
    <textarea
      placeholder="Type a message and hit enter to send..."
      v-model="message"
      @keydown.enter.prevent="handleSubmit"
    ></textarea>
  </form>
</template>

<script>
import { ref } from "vue";
import getUser from "../composables/getUser.js";
import { timestamp } from "../firebase/config";

export default {
  setup() {
    const message = ref("");
    const { user } = getUser();

    const handleSubmit = () => {
      let chat = {
        user: user.value.displayName,
        message: message.value,
        createdAt: timestamp,
      };
      console.log(chat);
      message.value = ''; //reset message box
    };

    return { message, handleSubmit };
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