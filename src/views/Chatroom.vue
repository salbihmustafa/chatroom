<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatRoom />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import NewChatRoom from '../components/NewChatForm.vue';
import ChatWindow from '../components/ChatWindow.vue';
import getUser from '../composables/getUser.js';
import { watchEffect, ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    Navbar,
    NewChatRoom,
    ChatWindow
  },
  setup() {
    const { user } = getUser(); //get the user
    const router = useRouter();

    watchEffect(() => {
      if(!user.value){
        console.log('logged out of chatroom');
        //redirect to welcome page
        router.push({ name: 'Welcome'});
      }
    })

  }

}
</script>

<style>

</style>