<script setup lang="ts">
import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue'
</script>

<template>
  <section class="relative pt-40 pb-24">
    <div
      class="w-full absolute top-0 left-0 z-0 h-60 rounded-[50px] bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-500 transition-all"
    ></div>

    <div class="w-full max-w-7xl mx-auto px-6 md:px-8">
      <div class="flex items-center justify-center sm:justify-start relative z-10 mb-5">
        <img
          src="@/assets/avatar.png"
          alt="user-avatar-image"
          class="border-4 border-solid border-white rounded-full"
        />
      </div>
      <div
        class="flex items-center justify-center flex-col sm:flex-row max-sm:gap-5 sm:justify-between mb-5"
      >
        <div class="block">
          <h3 class="font-manrope font-bold text-4xl text-gray-900 mb-1 max-sm:text-center">
            {{ user.username }}
          </h3>
        </div>
        <div class="grid grid-cols-2 min-[450px]:flex items-center gap-4">
          <button
            @click="switchTab(0)"
            :class="
              CurrentNum == 0
                ? 'border-[#FF8C27] bg-[#FF8C27] text-white'
                : 'border-gray-300 bg-gray-50 text-gray-900'
            "
            class="rounded-full border border-solid py-2.5 px-5 font-semibold text-sm shadow-sm shadow-gray-100 transition-all duration-200"
          >
            Заявки
          </button>
          <button
            @click="switchTab(1)"
            :class="
              CurrentNum == 1
                ? 'border-[#FF8C27] bg-[#FF8C27] text-white'
                : 'border-gray-300 bg-gray-50 text-gray-900'
            "
            class="rounded-full border border-solid py-2.5 px-5 font-semibold text-sm shadow-sm shadow-gray-100 transition-all duration-200"
          >
            Отзыв
          </button>
          <button
            @click="switchTab(2)"
            :class="
              CurrentNum == 2
                ? 'border-[#FF8C27] bg-[#FF8C27] text-white'
                : 'border-gray-300 bg-gray-50 text-gray-900'
            "
            class="rounded-full border border-solid border-[#FF8C27] bg-[#FF8C27] py-2.5 px-5 font-semibold text-sm shadow-sm shadow-gray-100 transition-all duration-200"
          >
            История
          </button>
        </div>
      </div>
    </div>
  </section>
  <div
    class="mx-auto max-w-2xl items-center space-x-2 space-y-12 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
  >
    <div v-if="user" class="max-w-2xl lg:text-center">
      <div
        v-if="CurrentNum == 0"
        class="border border-solid border-gray-300 broder-[5px] p-4 my-4 rounded-[10px]"
        v-for="app in user.applications"
        :key="app.id"
      >
        <div class="sm:col-span-4 mb-4">
          <p class="block text-start text-sm font-medium leading-6 text-gray-900">
            Перейти в макет в figma
          </p>
          <div class="mt-2">
            <div
              class="flex h-11 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#FF8C27] sm:max-w-md"
            >
              <a
                :href="app.linkmaket"
                class="h-full text-start flex items-center flex-1 border-0 bg-transparent px-3 py-1.5 text-blue-500 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              >
                {{ app.linkmaket }}
              </a>
            </div>
          </div>
        </div>

        <div class="col-span-full">
          <p class="block text-start text-sm font-medium leading-6 text-gray-900">
            Что вы хотите получить от сайта
          </p>
          <div class="mt-2">
            <div
              class="block text-justify overflow-y-scroll w-full h-32 rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FF8C27] sm:text-sm sm:leading-6"
            >
              <p>
                {{ app.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="relative isolate mt-24 overflow-hidden bg-gray-900 py-24 sm:py-32">
    <img
      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
      alt=""
      class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
    />
    <div
      class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      aria-hidden="true"
    >
      <div
        class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#FF8C27] opacity-20"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      />
    </div>
    <div
      class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      aria-hidden="true"
    >
      <div
        class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#FF8C27] opacity-20"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      />
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Мы не будем довольны
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">Пока не будете довольны вы!</p>
      </div>
      <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
        <div
          class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10"
        >
          <RouterLink v-for="link in links" :key="link.name" :to="{ name: link.href }">
            {{ link.name }}
            <span aria-hidden="true">&rarr;</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      user: {
        id: 1,
        username: 'Renat',
        email: 'renatgorodov49280@gmail.com',
        provider: 'local',
        confirmed: false,
        blocked: false,
        createdAt: '2024-03-20T22:57:04.048Z',
        updatedAt: '2024-03-21T14:30:31.157Z',
        usersename: 'Gorodov',
        order: {
          id: 2,
          content: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'хорошая фирма'
                }
              ]
            }
          ],
          stars: 5,
          date: '2024-03-20',
          statusActive: true,
          createdAt: '2024-03-21T15:15:12.474Z',
          updatedAt: '2024-03-21T15:15:48.169Z',
          publishedAt: '2024-03-21T15:15:15.654Z'
        },
        applications: [
          {
            id: 1,
            linkmaket: 'Fig.ru',
            description: ' стильный сайт',
            createdAt: '2024-03-21T15:11:03.126Z',
            updatedAt: '2024-03-21T15:11:03.126Z',
            publishedAt: null
          }
        ],
        avatar: null
      },
      links: [
        {
          name: 'Главная',
          href: 'home'
        },
        {
          name: 'О нас',
          href: 'about'
        }
      ],
      CurrentNum: 0
    }
  },
  methods: {
    switchTab(num: number) {
      this.CurrentNum = num
    }
  },
  watch: {
    $route(to, from) {
      window.scrollTo(0, 0)
    }
  },
  mounted() {
    if (localStorage.getItem('userData')) {
      this.user = JSON.parse(localStorage.getItem('userData') || '')
    }
  }
})
</script>

<style></style>
