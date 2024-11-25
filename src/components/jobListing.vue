<template>
 <section class="job-listing">
    <div class="job-container">
      <div class="job-card">
        <div class="job-header">
          <p>{{ jobTitle }}</p>
          <span class="job-location-salary">
            <p>{{ location }}</p>
            <p>{{ salary }} · {{ equity ? equity : 'No equity' }}</p>
          </span>
        </div>
        <div class="job-cta">
          <button @click="handleApplyClick">
            Apply Now
            <img src="../../public/section/arrow2.png" alt="arrow icon" />
          </button>
        </div>
      </div>

      <div class="job-card">
        <div class="job-header">
          <p>{{ jobTitle }}</p>
          <span class="job-location-salary">
            <p>{{ location }}</p>
            <p>{{ salary }} · {{ equity ? equity : 'No equity' }}</p>
          </span>
        </div>
        <div class="job-cta">
          <button @click="handleApplyClick">
            Apply Now
            <img src="../../public/section/arrow2.png" alt="arrow icon" />
          </button>
        </div>
      </div>

      <div class="job-card">
        <div class="job-header">
          <p>{{ jobTitle }}</p>
          <span class="job-location-salary">
            <p>{{ location }}</p>
            <p>{{ salary }} · {{ equity ? equity : 'No equity' }}</p>
          </span>
        </div>
        <div class="job-cta">
          <button @click="handleApplyClick">
            Apply Now
            <img src="../../public/section/arrow2.png" alt="arrow icon" />
          </button>
        </div>
      </div>
    </div>

    
  </section>

  </template>
  
  <script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    jobTitle: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    equity: {
      type: String,
      default: null,
    },
  });
  


  </script>
  
  <style scoped>

  </style>
  