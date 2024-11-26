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
          <RouterLink to="/" class="nav-link" exact-active-class="active">Home</RouterLink>
          <RouterLink to="/service" class="nav-link" active-class="active">Service</RouterLink>
          <RouterLink to="/company" class="nav-link" active-class="active">Company</RouterLink>
          <RouterLink to="/career" class="nav-link" active-class="active">Career</RouterLink>
          <RouterLink to="/blog" class="nav-link" active-class="active">Blog</RouterLink>
          <RouterLink to="/contact" class="nav-link" active-class="active">Contact us</RouterLink>

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
