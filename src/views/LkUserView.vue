<script setup lang="ts">
import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <section class="relative pt-40 pb-24">
    <div
      class="w-full absolute top-0 left-0 z-0 h-60 rounded-[50px] bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-500 transition-all"
    ></div>

    <div class="w-full max-w-7xl mx-auto px-6 md:px-8">
      <div class="flex items-center justify-center sm:justify-start relative z-10 mb-5">
        <img
          src="https://pagedone.io/asset/uploads/1705471668.png"
          alt="user-avatar-image"
          class="border-4 border-solid border-white rounded-full"
        />
      </div>
      <div
        class="flex items-center justify-center flex-col sm:flex-row max-sm:gap-5 sm:justify-between mb-5"
      >
        <div class="block">
          <h3 class="font-manrope font-bold text-4xl text-gray-900 mb-1 max-sm:text-center">
            Emma Smith
          </h3>
          <p class="font-normal text-base leading-7 text-gray-500 max-sm:text-center">
            Engineer at BB Agency Industry <br class="hidden sm:block" />New York, United States
          </p>
        </div>
        <div class="grid grid-cols-2 min-[450px]:flex items-center gap-4">
          <button
            class="rounded-full border border-solid border-gray-300 bg-gray-50 py-2.5 px-5 font-semibold text-sm text-gray-900 shadow-sm shadow-gray-100 transition-all duration-500 hover:shadow-gray-50 hover:border-gray-400 hover:bg-gray-100"
          >
            Отправленные
          </button>
          <button
            class="rounded-full border border-solid border-gray-300 bg-gray-50 py-2.5 px-5 font-semibold text-sm text-gray-900 shadow-sm shadow-gray-100 transition-all duration-500 hover:shadow-gray-50 hover:border-gray-400 hover:bg-gray-100"
          >
            В работе
          </button>
          <button
            class="rounded-full border border-solid border-[#FF8C27] bg-[#FF8C27] py-2.5 px-5 font-semibold text-sm text-white shadow-sm shadow-gray-100 transition-all duration-500 hover:shadow-gray-300 hover:border-[#FF8C27] hover:bg-[#FF8C27]"
          >
            Завершенные
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {}
  },
  created() {}
})
</script>

<style></style>
