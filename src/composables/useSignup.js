import { ref } from 'vue';
import { projectAuth } from '../firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const error = ref(null);

//this function will be used to sign someone up
const signup = async (email, password, displayName) => {
    error.value = null; //will reset the error message

    try {
        const response = await createUserWithEmailAndPassword(projectAuth, email, password); //goes to firebase
        if (!response) {
            throw new Error('Could not complete signup');
        }
        await updateProfile(response.user, {
            displayName: displayName //update with user input displayName
        })
        error.value = null;

        console.log(response.user);

        return response; //returns entire response
    } catch (err) {
        debugger;
        console.log(err.message);
        error.value = err.message;
    }
}

const useSignup = () => {

    return { error, signup }
}

export default useSignup;