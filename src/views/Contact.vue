<script setup>
import Button from '@/components/buttons/button-b.vue';
import { reactive } from 'vue';

const user = reactive({
    name: "Paresh Srichandan",
    email: "Paresh@pixeto.com",
    subject: "For web design work Enquire ",
})



</script>
<template>
    <div class="wrapper">
        <header class="contact-us-header">
            <div class="contact-us-container">
                <div class="contact-us-wrapper">
                    <div class="contact-us-details">
                        <span class="contact-us-intro">
                            <span class="contact-icon-wrapper">
                                <img src="../../public/contact/Shape choco.png" alt="Contact Icon" />
                            </span>
                            <p class="contact-section-title">CONTACT US</p>

                            <h2 class="contact-main-heading">Have a Question? Let’s Get in Touch with us 👋</h2>
                            <p class="contact-description-text">Fill up the Form and our team will get back to you
                                within 24 hrs</p>
                        </span>

                        <form class="contact-us-form">
                            <label for="Name" class="form-label">Name</label><br />
                            <input type="text" v-model="user.name" class="form-input" /><br /><br />

                            <label for="Email" class="form-label">E-mail</label><br />
                            <input type="text" v-model="user.email" class="form-input" /><br /><br />

                            <label for="Subject" class="form-label">Subject</label><br />
                            <input type="text" v-model="user.subject"
                                class="form-input" /><br /><br />

                            <label for="Message" class="form-label">Message</label><br />
                            <input type="text" placeholder="Paresh Srichandan" class="form-input-M" /><br /><br />


                            <span class="contact-btn">
                             <Button title="Request Quote"/>
                            </span>
                        </form>
                    </div>

                    <div class="contact-information">
                        <div class="contact-info-blocks">
                            <span class="info-block">
                                <p class="info-block-title">Location</p>
                                <p  class="info-block-divider"></p>
                                <h1 class="info-block-detail">DLF Cybercity, Bhubaneswar, India, &52050</h1>
                            </span>

                            <span class="info-block">
                                <p class="info-block-title">Working Hour</p>
                                <p  class="info-block-divider"></p>
                                <h1 class="info-block-detail">Monday To Friday</h1>
                                <h1 class="info-block-detail">9:00 AM to 8:00 PM</h1>
                                <p class="info-block-note">Our Support Team is available 24Hrs</p>
                            </span>

                            <span class="info-block">
                                <p class="info-block-title">Contact Us</p>
                                <p  class="info-block-divider"></p>
                                <h1 class="info-block-detail">020 7993 2905</h1>
                                <p class="info-block-note">Hello@ether.com</p>
                            </span>
                            <span class="contact-icon">
                              <img src="../../public/contact/Social.png" alt="">
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <section>
          <div class="map-container">
          <span>
            <img src="../../public/contact/Map Section.png" alt="">
          </span>
          </div>
        </section>
  


    </div>
</template>

<style scoped></style>