<template>
    <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <button class="close-btn" @click="closeModal">x</button>
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineEmits, defineProps, watch } from "vue";
  
  const props = defineProps(["isOpen"]);
  const emit = defineEmits(["close"]);
  
  // Modalni yopish
  const closeModal = () => {
    emit("close");
  };
  
  const preventScroll = () => {
    document.body.style.overflow = "hidden";
  };
  
  const allowScroll = () => {
    document.body.style.overflow = "";
  };
  
  watch(
    () => props.isOpen,
    (newVal) => {
      if (newVal) preventScroll();
      else allowScroll();
    }
  );
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-content {
    background-color: #fff;
    padding: 50px 128px;
    border-radius: 8px;
    max-width: 914px;
    width: 100%;
    position: relative;
  }
  .close-btn {
    background: none;
    border: none;
    font-size: 18px;
    font-weight: bold;
    position: absolute;
    top: 10px;
    right: 10px;
  }
  </style>
  