<script setup lang="ts">
import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="font-inter overflow-hidden bg-black/80 h-[90vh]">
    <section class="flex justify-center relative">
      <div class="mx-auto max-w-lg px-6 lg:px-8 absolute py-20 z-20 flex items-center">
        <div class="rounded-2xl bg-white shadow-xl">
          <form action="" class="lg:p-11 p-7 mx-auto">
            <div class="mb-11">
              <h1 class="text-gray-900 text-center font-manrope text-3xl font-bold leading-10 mb-2">
                Рады снова видеть тебя
              </h1>
            </div>
            <input
              type="text"
              class="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-6"
              placeholder="Username"
            />
            <input
              type="text"
              class="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-1"
              placeholder="Password"
            />
            <a href="javascript:;" class="flex justify-end mb-6">
              <span class="text-[#FF8C27] text-right text-base font-normal leading-6"
                >Forgot Password?</span
              >
            </a>
            <button
              class="w-full h-12 text-white text-center text-base font-semibold leading-6 rounded-full hover:bg-[#FF8C27] transition-all duration-700 bg-[#FF8C27]/90 shadow-sm mb-11"
            >
              Login
            </button>
            <RouterLink
              to="register"
              class="flex justify-center text-gray-900 text-base font-medium leading-6"
            >
              Don’t have an account?
              <span class="text-[#FF8C27] font-semibold pl-3"> Sign Up</span>
            </RouterLink>
          </form>
        </div>
      </div>
    </section>
  </div>
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
