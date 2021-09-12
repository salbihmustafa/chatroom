<template>
  <!-- if user is not null then you will show this screen because they are logged in -->
  <nav v-if="user">
      <div>
          <p>Hey there {{ user.displayName }}</p>
          <p class="email">Currently logged in as {{ user.email }}</p>
      </div>
      <button @click="handleLogout">Logout</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout.js';
import getUser from '../composables/getUser.js';

export default {
    setup(){
        const { error, logout } = useLogout();
        const { user } = getUser();

        const handleLogout = async () => {
            await logout();
            if(!error.value){
                console.log('user logged out');
            }
        }

        return { handleLogout, user }
    }

}
</script>

<style>
nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between; /* separates the div and button */
    align-items: center; /* vertically */
}
nav p {
    margin: 2px auto; /* top and bottom */
    font-size: 16px;
    color: #444;
}
nav p.email {
    font-size: 14px;
    color: #999;
}

</style>