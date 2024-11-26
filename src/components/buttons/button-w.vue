<template>
 <button>{{ title }} <img src="../../../public/section/arrow2.png" alt=""></button>
</template>

<script setup>
  import { defineProps } from 'vue';
  
  defineProps({
    title: String
  });
</script>

<style scoped>
    button {
          display: flex;
          gap: 16px;
          align-items: center;
          background-color: transparent;
          border: none;
          font-family: Poppins;
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
          text-align: left;
          text-underline-position: from-font;
          text-decoration-skip-ink: none;
          color: #444CFC;
          cursor: pointer;
          transition: all 0.5s;

          &:hover {
            color: #2d34c4;
          }
        }
</style>