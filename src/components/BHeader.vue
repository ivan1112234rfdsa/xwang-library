<template>
  <!-- Using Bootstrap's Header template (starter code) -->
  <!-- https://getbootstrap.com/docs/5.0/examples/headers/ -->
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" aria-current="page">Home (Week 5)</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link" active-class="active">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/FireLogin" class="nav-link" active-class="active">Firebase Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Addbook" class="nav-link" active-class="active">Add Book</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/bookList" class="nav-link" active-class="active">Book List</router-link>
        </li>
        <button class="nav-link" @click="FirebaseLogout">FireLogout</button>
      </ul>
    </header>
  </div>
</template>
<script setup>

import { getAuth, signOut } from 'firebase/auth';
const auth = getAuth()
const FirebaseLogout = () => {
    signOut(auth).then(() => {
      alert("Logout.")
    }).catch((error) => {
      console.log(error)
    });
}
</script>