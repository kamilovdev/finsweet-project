<template>
    <footer class="contact-section">
  <div class="contact-container">
    <div class="contact-image">
      <img src="../../public/section/Shapes (3).png" alt="decorative shapes" class="shapes-img">
    </div>

    <div class="contact-content">
      <div class="contact-details">
        <h1 class="contact-heading">Let's make <br> something special</h1>
        <p class="contact-subheading">Let's talk! 🤙</p>

        <span class="contact-info">
          <p class="phone-number">020 7993 2905</p>
          <p class="email">hi@finsweet.com</p>
        </span>

       
      </div>

      <div class="footer-menu">
        <div class="footer-links">
             <RouterLink to="/">Home</RouterLink>
            <RouterLink to="Service">Service</RouterLink>
            <RouterLink to="Company">Company</RouterLink>
            <RouterLink to="Career">Career</RouterLink>
            <RouterLink to="Blog">Blog</RouterLink>
            <RouterLink to="Contact">Contact us</RouterLink>
        </div>

        <div class="footer-links">
          <p class="footer-title">Service</p>
          <p>Technical support</p>
          <p>Testing</p>
          <p>Development</p>
          <p>AWS/Azure</p>
          <p>Consulting</p>
          <p>Information Technology</p>
        </div>

        <div class="footer-links">
          <p class="footer-title">Resources</p>
          <p>About Us</p>
          <p>Testimonial</p>
          <p>Privacy Policy</p>
          <p>Terms of use</p>
          <p>Blog</p>
        </div>
      </div>
    </div>

    <div class="contact-bottom">
    <span>
      <p class="contact-bottom-address">DLF Cybercity, Bhubaneswar, <br> India, &52050</p>
    </span>
       <span class="flex-btn">
        <img src="../../public/footer/palasaikki.svg" alt="">
      <ButtonW @click="openModal" class="btn-w" title="Contact Us"/>
       </span>
    </div>

  </div>
  <div class="footer-bottom">
      <div class="footer-branding">
        <span class="logo">
          <img src="../../public/section/Logo (1).svg" alt="Finsweet logo">
        </span>
        <p>©2021 Finsweet</p>
      </div>
      
      <div class="social-icons">
        <img src="../../public/section/Facebook.png" alt="social icon">
        <img src="../../public/section/Twitter.png" alt="social icon">
        <img src="../../public/section/Group.png" alt="social icon">
        <img src="../../public/section/linkedin.png" alt="social icon">
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
           <ButtonB title="Send Message"/>
          </span>
        </form>
      </div>
    </Modal>

</footer>
</template>
<script setup>
  import { ref, reactive } from "vue";
  import ButtonW from './buttons/button-w.vue';
  import Modal from "../components/modal.vue";
import ButtonB from "./buttons/button-b.vue";

  const user = reactive({
    name: "Paresh Srichandan",
    email: "Paresh@pixeto.com",
    subject: "For web design work Enquire ",
})
  const isOpenModal = ref(false);

  const openModal = () => {
    isOpenModal.value = true;
  };

  const closeModal = () => {
    isOpenModal.value = false;
  };

</script>

<style scoped lang="scss">
 a{
  color: #000;
 }
 .btn-w{
  color: #000;
 }
 .btn-w:hover{
  color: #252525d5;
 }
</style>