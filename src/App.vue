<script setup lang="ts">
import { defineComponent } from 'vue'
import { computed } from 'vue'

import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-white">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a :to="{ name: 'about' }" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <div class="flex flex-shrink-0 items-center">
            <img class="h-8 w-auto" src="@/assets/logo.webp" alt="Your Company" />
          </div>
        </a>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <div class="h-6 w-6 bg-black" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <RouterLink :to="{ name: 'home' }" class="text-sm font-semibold leading-6 text-gray-900"
          >Главная</RouterLink
        >
        <RouterLink :to="{ name: 'about' }" class="text-sm font-semibold leading-6 text-gray-900"
          >О Нас</RouterLink
        >
        <RouterLink
          v-if="user"
          :to="{ name: 'lkuser' }"
          class="text-sm font-semibold leading-6 text-gray-900"
          >Личный кабинет</RouterLink
        >
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <RouterLink
          v-if="!user"
          :to="{ name: 'login' }"
          class="text-sm font-semibold leading-6 text-gray-900"
          >Log in <span>&rarr;</span></RouterLink
        >
        <p
          @click="logout"
          v-if="user"
          class="cursor-pointer text-sm font-semibold leading-6 text-gray-900"
        >
          {{ user ? user.username : null }} logout
        </p>
      </div>
    </nav>
    <div v-if="mobileMenuOpen" class="lg:hidden">
      <div class="fixed inset-0 z-40" />
      <div
        class="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a :to="{ name: 'about' }" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="@/assets/logo.webp" alt="" />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <div class="h-6 w-6 bg-black" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <RouterLink
                @click="mobileMenuOpen = false"
                :to="{ name: 'home' }"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Главная</RouterLink
              >
              <RouterLink
                @click="mobileMenuOpen = false"
                :to="{ name: 'about' }"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >О Нас</RouterLink
              >
              <RouterLink
                v-if="user"
                @click="mobileMenuOpen = false"
                :to="{ name: 'lkuser' }"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Личный кабинет</RouterLink
              >
            </div>
            <div class="py-6">
              <RouterLink
                v-if="!user"
                @click="mobileMenuOpen = false"
                :to="{ name: 'login' }"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Log in</RouterLink
              >
              <p
                v-if="user"
                @click="logout"
                class="cursor-pointer -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {{ user ? user.username : null }} logout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <RouterView />
</template>
<script lang="ts">
export default defineComponent({
  data() {
    return {
      user: null,
      mobileMenuOpen: false,
      menuOpen: false
    }
  },
  mounted() {
    if (localStorage.getItem('userData')) {
      this.user = JSON.parse(localStorage.getItem('userData') || '')
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('jwt')
      localStorage.removeItem('userData')
      this.$router.push('/')
      setTimeout(() => {
        location.reload()
      }, 200)
    }
  },
  computed: {}
})
</script>

<style scoped></style>
