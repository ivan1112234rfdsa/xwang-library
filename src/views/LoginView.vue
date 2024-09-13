<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <h1 class="text-center">Login Page</h1>
                <form @submit.prevent="submitForm">
                    <div class="row mb-3">
                        <div class="col-md-6 offset-md-3">
                            <lable for="username" class="form-label">Username</lable>
                            <input type="text" class="form-control" id="username" 
                            @blur="() => validateName(true)"
                            @input="() => validateName(false)"
                            v-model="formData.username">
                            <div v-if="errors.username" class="text-danger">{{ errors.username }}</div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6 offset-md-3">
                            <lable for="password" class="form-label">Password</lable>
                            <input type="password" class="form-control" id="password" 
                            @blur="() => validatePassword(true)"
                            @input="() => validatePassword(false)"
                             v-model="formData.password">
                            <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
                        </div>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary me-2">Submit</button>
                        <button type="button" class="btn btn-secondary" @click="clearForm">Clear</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import router from '@/router';
import { useAuth } from '@/router';
const HardUsername = 'User';
const HardPassword = 'wxrshishuaige1@Q';
const {login} = useAuth()

  const formData = ref({
      username: '',
      password: '',
  });
  
  
  const submitForm = () => {
    validateName(true);
    validatePassword(true);
    if(!errors.value.username && !errors.value.password && formData.value.username === HardUsername && formData.value.password === HardPassword) {
        alert("Login success!")
        login()
        router.push({name: 'Home'})
    }
  };
  

  const errors = ref({
    username: null,
    password: null,
  });

  const validateName = (blur) => {
    if(formData.value.username.length < 3) {
        if(blur) errors.value.username = "name must be at least 3 characters";
    } else {
        errors.value.username = null;
    }
  };

  const validatePassword = (blur) => {
    const password = formData.value.password;
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    if (password.length < minLength) {
        if (blur) errors.value.password = `Password must be at least ${minLength} charachters long.`;
    } else if (!hasUppercase) {
        if (blur) errors.value.password = "Password must contain at leaast 1 uppercase letter.";
    } else if (!hasLowercase) {
        if (blur) errors.value.password = "Password must contain at leaast 1 lowercase letter.";
    } else if (!hasNumber) {
        if (blur) errors.value.password = "Password must contain at leaast 1 number.";
    } else if (!hasSpecialChar) {
        if (blur) errors.value.password = "Password must contain at leaast 1 special character.";
    } else {
        errors.value.password = null;
    }
  };
    
</script>



