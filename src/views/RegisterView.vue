<script setup lang="ts">
import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios'
</script>

<template>
  <div class="font-inter overflow-hidden bg-black/80 h-[90vh]">
    <section class="flex justify-center relative">
      <div class="mx-auto max-w-lg px-6 lg:px-8 absolute py-20 z-20 flex items-center">
        <div class="rounded-2xl bg-white shadow-xl">
          <form action="" class="lg:p-11 p-7 mx-auto">
            <div class="mb-11">
              <h1 class="text-gray-900 text-center font-manrope text-3xl font-bold leading-10 mb-2">
                Приятно познакомится
              </h1>
            </div>
            <input
              v-model="newUserOrder.username"
              type="text"
              class="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-6"
              placeholder="Username"
            />
            <input
              v-model="newUserOrder.userLastname"
              type="text"
              class="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-6"
              placeholder="Usersename"
            />
            <input
              v-model="newUserOrder.email"
              type="email"
              class="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-6"
              placeholder="Email"
            />
            <input
              v-model="newUserOrder.password"
              type="text"
              class="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-1"
              placeholder="Password"
            />
            <a href="javascript:;" class="flex justify-end mb-6">
              <span class="text-[#FF8C27] text-right text-base font-normal leading-6"
                >Forgot Password?</span
              >
            </a>
            <div
              v-on:click="registerUser"
              class="flex items-center justify-center w-full h-12 text-white text-center text-base font-semibold leading-6 rounded-full hover:bg-[#FF8C27] transition-all duration-700 bg-[#FF8C27]/90 shadow-sm mb-11"
            >
              Login
            </div>
            <RouterLink
              to="login"
              class="flex justify-center text-gray-900 text-base font-medium leading-6"
            >
              Have an account?
              <span class="text-[#FF8C27] font-semibold pl-3"> Sign In</span>
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
    return {
      user: {},
      newUserOrder: {
        username: '',
        userLastname: '',
        password: '',
        email: ''
      }
    }
  },
  methods: {
    registerUser() {
      let data = JSON.stringify({
        email: this.newUserOrder.email,
        username: this.newUserOrder.username,
        password: this.newUserOrder.password,
        usersename: this.newUserOrder.userLastname
      })

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:1337/api/auth/local/register',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      }

      axios
        .request(config)
        .then((response) => {
          const jwt = response.data.jwt
          // Сохраняем токен в локальном хранилище

          window.localStorage.setItem('jwt', jwt)

          // Переходим на главную страницу
          this.$router.push('/')
          // Возвращаем токен из Promise для его последующего использования
          return jwt
        })
        .then((jwt) => {
          // Используем полученный токен для запроса данных пользователя
          return axios.get('http://localhost:1337/api/users/me?populate=*', {
            headers: {
              Authorization: 'Bearer ' + jwt // Используем токен в заголовке Authorization
            }
          })
        })
        .then((response) => {
          // Получаем данные пользователя из ответа
          const userData = response.data
          // Сохраняем данные пользователя в локальном хранилище
          window.localStorage.setItem('userData', JSON.stringify(userData))
          location.reload()
        })
        .catch((error) => {
          console.log(error)
        })
    },
    authLog() {
      axios
        .post('http://localhost:1337/api/auth/local', {
          identifier: this.newUserOrder.email,
          password: this.newUserOrder.password
        })
        .then((response) => {
          // Handle success.
          console.log('Well done!')
          console.log('User profile', response.data.user)
          console.log('User token', response.data.jwt)
        })
        .catch((error) => {
          // Handle error.
          console.log('An error occurred:', error.response)
        })
    }
  },
  created() {}
})
</script>

<style></style>
