<template>
    <button>
              <span class="shapes">
                <img src="../../../public/header/svg/shapes.svg" alt="shapes" />
              </span>
              {{ title }}
              <img src="../../../public/navbar/arrow.svg" alt="arrow" class="arrow" />
            </button>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  defineProps({
    title: String
  });
  </script>

<style scoped>
 button {
      padding: 20px 32px;
      background-color: #444cfc;
      border: none;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
      transition: all 0.5s ease;

      &:hover {
        background-color: #444dfcc6;
      }

      .shapes {
        position: relative;

        img {
          position: absolute;
          top: -20px;
          left: -32px;
        }
      }

      .arrow {
        margin-left: 16px;
      }
    }
</style>