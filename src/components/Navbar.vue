<script setup>
  import {
    RouterLink,
    RouterView
  } from 'vue-router'
  
  import {
    ref , reactive
  } from "vue";



</script> 
<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar__box">
        <div class="logo">
          <RouterLink to="/"> <img src="../../public/navbar/Logo.svg" alt="log" /></RouterLink>
        </div>
        <ul class="menu">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="Service">Service</RouterLink>
            <RouterLink to="Company">Company</RouterLink>
            <RouterLink to="Career">Career</RouterLink>
            <RouterLink to="Blog">Blog</RouterLink>
            <RouterLink to="Contact">Contact us</RouterLink>

          <button class="nav-btn">
            Clone project
            <img src="../../public/navbar/arrow.svg" alt="arrow" />
          </button>
        </ul>
      </div>
    </div>
   
  </nav>
</template>


<style scoped lang="scss">
.navbar {
  background-color: #232536;
  

  .navbar__box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
  }

  .menu {
    display: flex;
    gap: 32px;

    a {
      color: #ffffffae;
      transition: all 0.5s ease;

      &:hover {
        color: #ffff;
      }
    }

    .nav-btn {
      display: flex;
      align-items: center;
      background: transparent;
      border: none;
      color: #ffd3af;
      gap: 8px;
      cursor: pointer;
      transition: all 0.5s ease;

      &:hover {
        color: #e49350;
      }
    }
  }
}
</style>
