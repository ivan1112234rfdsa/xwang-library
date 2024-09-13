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
          <button class="nav-link" active-class="active" @click="Logout">Logout</button>
        </li>
      </ul>
    </header>
  </div>
</template>
<script setup>
import router from '@/router';
import { useAuth } from '@/router';
const {logout, isAuthenticated} = useAuth()
const Logout = () => {
  if(isAuthenticated.value == true) {
    alert("Logged out")
    logout()
    router.push({name: 'Login'})
  } else {
    alert("You should login first")
    router.push({name: 'Login'})
  }
  
}
</script>