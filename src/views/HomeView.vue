<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <h1 class="text-center">User Information Form</h1>
                <form @submit.prevent="submitForm">
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <lable for="username" class="form-label">Username</lable>
                            <input type="text" class="form-control" id="username" 
                            @blur="() => validateName(true)"
                            @input="() => validateName(false)"
                            v-model="formData.username">
                            <div v-if="errors.username" class="text-danger">{{ errors.username }}</div>
                        </div>
                        <div class="col-md-6">
                            <label for="gender" class="form-label">Gender</label>
                            <select class="form-select" id="gender" 
                            @blur="() => validateGender(true)"
                            @input="() => validateGender(false)"
                            v-model="formData.gender">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            <div v-if="errors.gender" class="text-danger">{{ errors.gender }}</div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <lable for="password" class="form-label">Password</lable>
                            <input type="password" class="form-control" id="password" 
                            @blur="() => validatePassword(true)"
                            @input="() => validatePassword(false)"
                             v-model="formData.password">
                            <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                        <label for="confirm-password" class="form-label">Confirm password</label>
                        <input
                            type="password"
                            class="form-control"
                            id="confirm-password"
                            v-model="formData.confirmPassword"
                            @blur="() => validateConfirmPassword(true)"
                         />
                        <div v-if="errors.confirmPassword" class="text-danger">{{ errors.confirmPassword }}</div>
                    </div>
                        <div class="col-md-6">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="isAustralian" 
                                @blur="() => validateResident(true)"
                                @input="() => validateResident(false)"
                                v-model="formData.isAustralian">
                                <label class="form-check-label" for="isAustralian">Australian Resident?</label>
                                <div v-if="errors.resident" class="text-danger">{{ errors.resident }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="reason" class="form-label">Reason for joining</label>
                        <textarea class="form-control" id="reason" rows="3" 
                        @blur="() => validateReason(true)"
                        @input="() => {validateReason(false), validateReasonWord(true)}"
                        v-model="formData.reason"></textarea>
                        <div v-if="errors.reason" class="text-danger">{{ errors.reason }}</div>
                        <div v-if="errors.words" style="color: green;">{{errors.words}}</div>
                    </div>
                    <div class="mb-3">
                        <label for="reason" class="form-label">Suburb</label>
                        <input type="text" class="form-control" id="suburb" v-bind:value="formData.suburb" />
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary me-2">Submit</button>
                        <button type="button" class="btn btn-secondary" @click="clearForm">Clear</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="row mt-5" v-if="submittedCards.length">
   <DataTable :value="submittedCards" tableStyle="min-width: 50rem" v-if="submittedCards.length">
    <Column field="username" header="Name"></Column>
    <Column field="password" header="Password"></Column>
    <Column field="isAustralian" header="Resident"></Column>
    <Column field="gender" header="Gender"></Column>
    <Column field="reason" header="Reason"></Column>
</DataTable>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

  const formData = ref({
      username: '',
      password: '',
      confirmPassword: '',
      isAustralian: false,
      reason: '',
      gender: '',
      suburb: 'Clayton'
  });
  
  const submittedCards = ref([]);
  
  const submitForm = () => {
    validateName(true);
    validatePassword(true);
    validateResident(true);
    validateGender(true);
    validateReason(true);
    if(!errors.value.username && !errors.value.password && !errors.value.resident && !errors.value.gender && !errors.value.reason) {
        submittedCards.value.push({
          ...formData.value
      });
      clearForm();
    }
  };

  const clearForm = () => {
    formData.value = {
        username: '',
        password: '',
        confirmPassword: '',
        isAustralian: false,
        reason: '',
        gender: ''
    }
  }

  const errors = ref({
    username: null,
    password: null,
    confirmPassword: null,
    resident: null,
    gender: null,
    reason: null,
    words: null
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

  const validateResident = (blur) => {
    const resident = formData.value.isAustralian;
    if (!resident) {
        if (blur) errors.value.resident = "Please check this option";
    } else {
        errors.value.resident = null;
    }
  };

  const validateGender = (blur) => {
    const gender = formData.value.gender;
    if (!gender) {
        if (blur) errors.value.gender = "Please choose a gender";
    } else {
        errors.value.gender = null;
    }
  };

  const validateReason = (blur) => {
    const reason = formData.value.reason;
    const minLength = 1;
    if (reason.length < minLength) {
        if (blur) errors.value.reason = "Must have a reason";
    } else {
        errors.value.reason = null;
    }
  };

  const validateConfirmPassword = (blur) => {
    if (formData.value.password !== formData.value.confirmPassword) {
        if (blur) errors.value.confirmPassword = 'Passwords do not match.'
    } else {
        errors.value.confirmPassword = null
    }

  };


  const validateReasonWord = (blur) => {
    if (formData.value.reason.includes('friend')) {
        if (blur) errors.value.words = 'Great to have a friend!'
    } else {
        errors.value.words = null;
    }
  };
    
</script>



