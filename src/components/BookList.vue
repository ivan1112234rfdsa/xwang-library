<template>
    <div>
      <h1>Books with ISBN > 1000</h1>
      <div class="card">
        <DataTable :value="books" tableStyle="min-width: 50rem">
            <Column field="isbn" header="ISBN"></Column>
            <Column field="name" header="Name"></Column>
        </DataTable>
      </div>
    </div>
  </template>

<script>
import { ref, onMounted } from 'vue';
import db from '../firebase/init.js'
import { collection, query, where, getDocs } from 'firebase/firestore';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
export default {
    components: {
    DataTable,
    Column
  },
  setup() {
    const books = ref([]);

    const fetchBooks = async () => {
      try {
        const q = query(collection(db, 'books'), where('isbn', '>', 1000));
        const querySnapshot = await getDocs(q);
        const booksArray = [];
        querySnapshot.forEach((doc) => {
          booksArray.push({ id: doc.id, ...doc.data() });
        });
        books.value = booksArray;
      } catch (error) {
        console.error('Error fetching books: ', error);
      }
    };

    onMounted(() => {
      fetchBooks();
    });

    return {
      books
    };
  }
};
</script>