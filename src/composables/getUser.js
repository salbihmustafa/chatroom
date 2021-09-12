import { ref } from 'vue';
import { projectAuth } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

const user = ref(projectAuth.currentUser); //could be current user if logged in or null

onAuthStateChanged(projectAuth, (_user) => {
    //every time there is a authentication change this will fire
    console.log('User state change. Current user is: ', _user);
    user.value = _user; //either null or _user object
})

const getUser = () => {
    return { user }
}

export default getUser;