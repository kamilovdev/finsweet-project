<template>
     <section class="blog-section">
      <div class="blog-container">
        <div class="blog-header">
        <span>
          <img src="../../public/section/blueKvadrat.png" alt="blue square" class="blue-kvadrat">
        </span>
          <h1 class="blog-title">Read our latest blogs & news</h1>
        </div>

        <div class="blog-content">
          <div class="blog-item">
            <span class="blog-image">
              <img src="../../public/section/Image.png" alt="blog image">
            </span>
            <div class="blog-text">
              <p class="blog-date">Jan 19, 2021</p>
              <h1 class="blog-heading">Today’s best design trends for digital products</h1>
              <ButtonW title="Read More"/>
            </div>
          </div>

          <div class="blog-item">
            <span class="blog-image">
              <img src="../../public/section/Image (1).png" alt="blog image">
            </span>
            <div class="blog-text">
              <p class="blog-date">Jan 19, 2021</p>
              <h1 class="blog-heading">Today’s best design trends for digital products</h1>
              <ButtonW title="Read More"/>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
<script setup>
 import ButtonW from './buttons/button-w.vue';
</script>