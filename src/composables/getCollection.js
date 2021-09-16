import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';

const getCollection = (myCollection) => {
    const documents = ref(null); //for documents from database
    const error = ref(null);

    let collectionRef = projectFirestore.collection(myCollection).orderBy('createdAt')

    collectionRef.onSnapshot(snap => {
        let results = [];

        snap.docs.forEach(doc => {
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
        })
        documents.value = results;
        error.value = null; //reset error if any
    }, (err) => {
        console.log(err.message);
        documents.value = null;
        error.value = 'could not fetch data';
    })

    return { documents, error }
}

export default getCollection;