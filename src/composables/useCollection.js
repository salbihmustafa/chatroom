import { ref } from 'vue';
import { projectFirestore, projectAuth } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';


const useCollection = (myCollection) => {
    const error = ref(null); //put inside function because there will be multiple collections

    const addDocument = async (document) => {
        error.value = null; //reset

        try {
            // add document to collections in firestore
            //await projectFirestore.collection(collection).add(document);
            debugger;
            await addDoc(collection(projectFirestore, myCollection), document);
        } catch (err) {
            console.log(err.message);
            error.value = 'Could not send the message';
        }
    }

    return { error, addDocument }
}

export default useCollection;