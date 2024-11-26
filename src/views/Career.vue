<script setup>
import Newsletter from '@/components/newsletter.vue';
import Process from '@/components/process.vue';
import ButtonW from '@/components/buttons/button-w.vue';
</script>
<template>
    <div class="wrapper">
        <header class="career-header">
            <div class="career-container">
                <div class="career-header-content">
                    <div class="career-text">
                        <p>CAREER AT FINSWEET</p>
                        <h2>We Hire People Who Are Always Passionate About What They Do</h2>
                        <p class="career-description">
                            Join a team of passionate individuals who are committed to making a difference.
                            At Finsweet, we foster a culture of growth, creativity, and collaboration.
                        </p>
                    </div>
                    <div class="career-image">
                        <img src="../../public/careers/careers.png" alt="Career Opportunities at Finsweet">
                    </div>
                    <div class="career-cta">
                        <p>See Our Open Positions</p>
                        <p>👇</p>
                    </div>
                </div>
            </div>
        </header>

        <section class="job-listing">
            <div class="job-container">
              <div class="job-flex">
                  <div class="job-card">
                      <div class="job-header">
                          <p>Full Stack Developer</p>
                          <span class="job-location-salary">
                              <p>Bengaluru · Full Time</p>
                              <p> $10K - $18K · No equity</p>
                          </span>
                      </div>
                      <div class="job-cta">
                         <ButtonW title="Apply Now"/>
                      </div>
                  </div>
  
                  <div class="job-card">
                      <div class="job-header">
                          <p>Testing Engineer</p>
                          <span class="job-location-salary">
                              <p>Bengaluru · Full Time</p>
                              <p> $10K - $18K · No equity</p>
                          </span>
                      </div>
                      <div class="job-cta">
                        <ButtonW title="Apply Now"/>

                      </div>
                  </div>
                  <div class="job-card">
                      <div class="job-header">
                          <p>Hr Manager</p>
                          <span class="job-location-salary">
                              <p>Bengaluru · Full Time</p>
                              <p> $10K - $18K · No equity</p>
                          </span>
                      </div>
                      <div class="job-cta">
                        <ButtonW title="Apply Now"/>

                      </div>
                  </div>
              </div>  

              <div class="job-flex">
                  <div class="job-card">
                      <div class="job-header">
                          <p>Product Designer</p>
                          <span class="job-location-salary">
                              <p>Bengaluru · Full Time</p>
                              <p> $10K - $18K · No equity</p>
                          </span>
                      </div>
                      <div class="job-cta">
                        <ButtonW title="Apply Now"/>

                      </div>
                  </div>
  
                  <div class="job-card">
                      <div class="job-header">
                          <p>Wordpress Developer</p>
                          <span class="job-location-salary">
                              <p>Bengaluru · Full Time</p>
                              <p> $10K - $18K · No equity</p>
                          </span>
                      </div>
                      <div class="job-cta">
                        <ButtonW title="Apply Now"/>

                      </div>
                  </div>
                  <div class="job-card">
                      <div class="job-header">
                          <p>Jr. QA Tester</p>
                          <span class="job-location-salary">
                              <p>Bengaluru · Full Time</p>
                              <p> $10K - $18K · No equity</p>
                          </span>
                      </div>
                      <div class="job-cta">
                        <ButtonW title="Apply Now"/>

                      </div>
                  </div>
              </div>  

              <div class="job-flex">
                  <div class="job-card">
                      <div class="job-header">
                          <p>Sr. UX Designer</p>
                          <span class="job-location-salary">
                              <p>Bengaluru · Full Time</p>
                              <p> $10K - $18K · No equity</p>
                          </span>
                      </div>
                      <div class="job-cta">
                        <ButtonW title="Apply Now"/>

                      </div>
                  </div>
  
                  <div class="job-card">
                      <div class="job-header">
                          <p>Social Media Manager</p>
                          <span class="job-location-salary">
                              <p>Bengaluru · Full Time</p>
                              <p> $10K - $18K · No equity</p>
                          </span>
                      </div>
                      <div class="job-cta">
                        <ButtonW title="Apply Now"/>

                      </div>
                  </div>
                  <div class="job-card">
                      <div class="job-header">
                          <p>Golang Developer</p>
                          <span class="job-location-salary">
                              <p>Bengaluru · Full Time</p>
                              <p> $10K - $18K · No equity</p>
                          </span>
                      </div>
                      <div class="job-cta">
                        <ButtonW title="Apply Now"/>
                      </div>
                  </div>
              </div>  
                
            </div>
        </section>
 
        <Process/>
        <Newsletter/>
     

    </div>
</template>