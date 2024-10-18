<template>
    <div>
      <h1>Edit Book</h1>
      <form @submit.prevent="editBook">
        <div>
          <label for="isbn">ISBN:</label>
          <input type="text" v-model="isbn" id="isbn" required />
        </div>
        <div>
          <label for="name">Name:</label>
          <input type="text" v-model="name" id="name" required />
        </div>
        <button type="submit">Edit Book</button>
      </form>
    </div>
  </template>

<script>
import { ref } from 'vue';
import db from '../firebase/init.js';
import { collection, addDoc, getDoc, doc } from 'firebase/firestore';


export default {
  setup() {
    const isbn = ref('');
    const name = ref('');

    const getBook = async () => {
      try {
        const isbnNumber = Number(isbn.value);
        if (isNaN(isbnNumber)) {
          alert('ISBN must be a valid number');
          return;
        }

        const docRef = doc(db, "cities", "SF")
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            console.log(docSnap.data)
            isbn.value = docSnap.data().name
            name.value = docSnap.data().name
        } else {
            console.log("No such book.")
        }
      } catch (error) {
        console.error('Error editing book: ', error);
      }
    };
    getBook()
  },
};

</script>
