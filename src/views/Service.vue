<script setup>
  import Process from '@/components/process.vue';
  import Newsletter from '@/components/newsletter.vue';
  import Button from '@/components/buttons/button-b.vue';
</script>
<template>
  <div class="wrapper">
    <header class="header-services">
      <div class="header-container">
        <div class="header-content">
          <div class="header-text">
            <p>Our Services</p>
            <h1>We Build Software Solutions that Solve Clients' Business Challenges</h1>
            <p>
              Through true rich attended does no end it his mother since favourable real had half every him case in
              packages
              enquire we up ecstatic.
            </p>

            <Button title="Request Quote"/>
          </div>

          <div class="header-services-list">
            <p>Technical Support</p>
            <p>
              Development <span><img src="../../public/services/right.png" alt="arrow"></span>
            </p>
            <p>AWS/Azure</p>
            <p>Consulting</p>
            <p>Information Technology</p>
          </div>
        </div>
      </div>
    </header>
    <Process />

    <section class="tech-support-section">
      <div class="tech-support-container">
        <div class="tech-support-content">
          <div class="tech-support-info">
            <p>Technical Support</p>
            <h1>Best in class tech support for your company. We become your tech backbone</h1>
            <p  class="support-description">
              Through True Rich Attended does no end it his mother since real had half every him case in packages
              enquire we up ecstatic unsatiable saw his giving. Remain expense you position concluded. Through True Rich
              Attended does no end it his mother since real had half every.
            </p>
          </div>
          <div>
            <img src="../../public/services/Feature 1 Image.png" alt="Tech Support Feature" />
          </div>
        </div>
      </div>
    </section>
   
    <section class="development-section">
  <div class="development-container">
    <div class="development-content">
      <div class="development-image-container">
        <img src="../../public/services/Feature (2).png" alt="Development Feature"  />
      </div>

      <div class="development-info">
        <p>Development</p>
        <h3>Bring your ideas to reality with a certified team of developers, working with the latest technologies</h3>
        <p class="development-description">
          Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving. Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="cloud-services-section">
  <div class="cloud-services-container">
    <div class="cloud-services-content">
      <div class="cloud-services-info">
        <p>AWS/Azure</p>
        <h3>We help you deploy, manage and secure your application on leading web services</h3>
        <p class="cloud-description">
          Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving. Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.
        </p>
      </div>

      <div class="cloud-image-container">
        <img src="../../public/services/Feature (3).png" alt="Cloud Services Feature"/>
      </div>
    </div>
  </div>
</section>
 
<section class="consulting-section">
  <div class="consulting-container">
    <div class="consulting-content">
      <div class="consulting-image-container">
        <img src="../../public/services/Feature (4).png" alt="Consulting Feature"/>
      </div>
      <div class="consulting-info">
        <p>Consulting</p>
        <h3>Get advice from world-class professionals</h3>
        <p class="consulting-description">
          Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving. Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="it-services-section">
  <div class="it-services-container">
    <div class="it-services-content">
      <div class="it-info">
        <p>Information Technology</p>
        <h3>We want to get local identification in every corner of the world in this era of global citizenship.</h3>
        <p class="it-description">
          Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving. Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.
        </p>
      </div>
      <div class="it-image-container">
        <img src="../../public/services/Feature (5).png" alt="Information Technology Feature" />
      </div>
    </div>
  </div>
</section>
<Newsletter/>


  </div>
</template>

<style scoped>
 
</style>