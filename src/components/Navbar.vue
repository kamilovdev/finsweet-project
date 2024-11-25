<script setup>
  import {
    RouterLink,
    RouterView
  } from 'vue-router'
  import {
    ref , reactive
  } from "vue";
  import Modal from "../components/modal.vue";


  const isOpenModal = ref(false);

  const openModal = () => {
    isOpenModal.value = true;
  };

  const closeModal = () => {
    isOpenModal.value = false;
  };


const user = reactive({
    name: "Paresh Srichandan",
    email: "Paresh@pixeto.com",
    subject: "For web design work Enquire ",
})
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

          <button class="nav-btn" @click="openModal">
            Clone project
            <img src="../../public/navbar/arrow.svg" alt="arrow" />
          </button>
        </ul>
      </div>
    </div>
    <Modal :isOpen="isOpenModal" @close="closeModal">
      <div class="modal-container">
        <div class="modal-header">
          <h2>Have a Question ? Let’s Get in Touch with us 👋</h2>
          <p>Fill up the form and the team will get back to within 24 hrs</p>
        </div>
        <form class="modal-form">
          <label for="Name">Name</label><br />
          <input type="Name" placeholder="Paresh Srichandan" v-model="user.name"><br /><br />

          <label for="Email" class="form-label">E-mail</label><br />
          <input type="email" placeholder="Paresh@pixeto.com" v-model="user.email" /><br /><br />

          <label for="Subject" class="form-label">Subject</label><br />
          <input type="text" placeholder="For web design work Enquire " v-model="user.subject"/><br /><br />

          <label for="Message" class="form-label">Message</label><br />
          <input type="text" placeholder="Paresh Srichandan" /><br /><br />

          <span class="modal-btn">
            <button>
              <span class="shapes">
                <img src="../../public/header/svg/shapes.svg" alt="shapes" />
              </span>
              Send Messege
              <span>
                <img src="../../public/navbar/arrow.svg" alt="arrow" class="arrow" />

              </span>
            </button>
          </span>
        </form>
      </div>
    </Modal>
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
