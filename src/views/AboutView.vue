<script setup lang="ts">
import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <div class="md:mt-24">
    <div class="bg-[#2A4DAC]">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-white">Наша команда</h2>

        <div
          class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        >
          <div v-for="product in products" :key="product.id" class="group relative">
            <div
              class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-black lg:aspect-none group-hover:translate-y-[-10%] lg:h-80 transition-all"
            >
              <img
                :src="product.imageSrc"
                :alt="product.imageAlt"
                class="h-full w-full object-cover object-left lg:h-full lg:w-full"
              />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-lg text-white font-medium">
                  <div :href="product.href">
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ product.name }}
                  </div>
                </h3>
                <p class="mt-1 text-md text-white">{{ product.color }}</p>
              </div>
              <p class="text-sm font-medium text-white">{{ product.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-900 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 class="text-center text-lg font-semibold leading-8 text-white">
          Мы разрабатывали то, чем пользуются все
        </h2>
        <div
          class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
        >
          <img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
            alt="Transistor"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
            alt="Reform"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
            alt="Tuple"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
            alt="SavvyCal"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
            alt="Statamic"
            width="158"
            height="48"
          />
        </div>
      </div>
    </div>

    <section class="py-14 lg:py-24 relative">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-9">
          <div class="img-box">
            <img
              src="https://i.pinimg.com/564x/31/77/65/3177654c8f10dcc04ec5b11f30b39017.jpg"
              alt="About Us tailwind page"
              class="max-lg:mx-auto"
            />
          </div>
          <div class="lg:pl-[100px] flex items-center">
            <div class="data w-full">
              <h2
                class="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative"
              >
                О нас
              </h2>
              <p
                class="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto"
              >
                Мы - креативная команда веб-разработчиков, преданная своему делу и стремящаяся к
                идеальной реализации каждого проекта. Наша студия специализируется на создании
                уникальных и инновационных веб-сайтов, которые воплощают в себе ваши идеи и цели. Мы
                объединяем в себе профессиональное мастерство, передовые технологии и творческий
                подход, чтобы превзойти ожидания наших клиентов. Доверьтесь нам, и мы сделаем ваш
                веб-проект ярким и успешным!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-14 lg:py-24 relative">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-9">
          <div class="lg:pr-24 flex items-center">
            <div class="data w-full">
              <img
                src="https://pagedone.io/asset/uploads/1702034785.png"
                alt="About Us tailwind page"
                class="block lg:hidden mb-9 mx-auto"
              />
              <h2
                class="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center"
              >
                История нашей студии
              </h2>
              <p
                class="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto"
              >
                Наша история началась как маленький коллектив энтузиастов с ограниченными ресурсами,
                но с яркими идеями. С течением времени мы стали крупной креативной командой,
                способной решать самые сложные задачи в области веб-разработки. Сегодня мы с
                гордостью предоставляем уникальные, инновационные и качественные веб-проекты для
                клиентов по всему миру.
              </p>
            </div>
          </div>
          <div class="img-box">
            <img
              src="https://i.pinimg.com/564x/9d/cc/26/9dcc26172b9c7e66a64431bc035b8961.jpg"
              alt="About Us tailwind page"
              class="hidden lg:block"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">
          Наши результаты
        </h2>
        <div class="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
          <div
            class="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100"
          >
            <div class="flex gap-5">
              <div class="font-manrope text-2xl font-bold text-indigo-600">+30%</div>
              <div class="flex-1">
                <h4 class="text-xl text-gray-900 font-semibold mb-2">Увеличение конверсии</h4>
                <p class="text-xs text-gray-500 leading-5">
                  За последний год мы смогли увеличить конверсию сайтов наших клиентов на 30%, что
                  привело к значительному увеличению их онлайн-продаж.
                </p>
              </div>
            </div>
          </div>
          <div
            class="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100"
          >
            <div class="flex gap-5">
              <div class="font-manrope text-2xl font-bold text-indigo-600">100+</div>
              <div class="flex-1">
                <h4 class="text-xl text-gray-900 font-semibold mb-2">успешных проектов</h4>
                <p class="text-xs text-gray-500 leading-5">
                  Мы рады сообщить, что мы завершили 100 успешных проектов за последние два года,
                  показав стабильный рост и развитие веб-разработки.
                </p>
              </div>
            </div>
          </div>
          <div
            class="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100"
          >
            <div class="flex gap-5">
              <div class="font-manrope text-2xl font-bold text-indigo-600">Победа</div>
              <div class="flex-1">
                <h4 class="text-xl text-gray-900 font-semibold mb-2">Лучшая веб-разработка года</h4>
                <p class="text-xs text-gray-500 leading-5">
                  Наша студия была удостоена награды "Лучшая веб-разработка года" на престижной
                  конференции по веб-технологиям.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 relative">
      <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <h2 class="font-manrope font-bold text-4xl text-black text-center mb-11">Людям нравится</h2>
        <div class="grid grid-cols-12 py-6 border-y border-gray-200 mb-11">
          <div class="col-span-12 lg:col-span-10">
            <h5 class="font-manrope font-semibold text-2xl leading-9 text-black text-center">
              Отзывы
              <span
                class="lg:hidden font-manrope font-semibold text-2xl leading-9 text-black text-center"
              >
                & Рейтинг</span
              >
            </h5>
          </div>
          <div class="col-span-12 lg:col-span-2 max-lg:hidden">
            <h5 class="font-manrope font-semibold text-2xl leading-9 text-black text-center">
              Рейтинг
            </h5>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-8">
          <div class="grid grid-cols-12 max-w-sm sm:max-w-full mx-auto" v-for="rewiew in rewiews">
            <div class="col-span-12 lg:col-span-10">
              <div class="sm:flex gap-6">
                <img :src="rewiew.image" alt="Robert image" class="w-32 h-32" />
                <div class="text">
                  <p class="font-medium text-lg leading-8 text-gray-900 mb-2">{{ rewiew.name }}</p>
                  <div class="flex lg:hidden items-center gap-2 lg:justify-between w-full mb-5">
                    <svg
                      v-for="star in rewiew.stars"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_13624_2090)">
                        <path
                          d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                          fill="#FBBF24"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_13624_2090">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <p class="font-normal text-base leading-7 text-gray-400 mb-4 lg:pr-8">
                    {{ rewiew.description }}
                  </p>
                  <div class="flex items-center justify-between">
                    <p
                      class="lg:hidden font-medium text-sm leading-7 text-gray-400 lg:text-center whitespace-nowrap"
                    >
                      Nov 01, 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-span-12 lg:col-span-2 max-lg:hidden flex lg:items-center flex-row lg:flex-col justify-center max-lg:pt-6"
            >
              <div class="flex items-center gap-2 lg:justify-between w-full mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <g clip-path="url(#clip0_13624_2090)">
                    <path
                      d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                      fill="#FBBF24"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_13624_2090">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <g clip-path="url(#clip0_13624_2090)">
                    <path
                      d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                      fill="#FBBF24"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_13624_2090">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <g clip-path="url(#clip0_13624_2090)">
                    <path
                      d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                      fill="#FBBF24"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_13624_2090">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <g clip-path="url(#clip0_13624_2090)">
                    <path
                      d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                      fill="#FBBF24"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_13624_2090">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <g clip-path="url(#clip0_13624_2090)">
                    <path
                      d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                      fill="#FBBF24"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_13624_2090">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p
                class="font-medium text-lg leading-8 text-gray-400 lg:text-center whitespace-nowrap"
              >
                Nov 01, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 mt-24">
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
            <a v-for="link in links" :key="link.name" :href="link.href"
              >{{ link.name }} <span aria-hidden="true">&rarr;</span></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      links: [
        {
          name: 'Главная',
          href: '#'
        },
        {
          name: 'О нас',
          href: '#'
        }
      ],
      rewiews: [
        {
          name: 'Анна Смит',
          image: 'https://i.pinimg.com/564x/63/3f/18/633f1821fd589786152ccbf55ed006d4.jpg',
          stars: 5,
          description:
            'Работа с вашей студией оказалась удивительным и весьма приятным опытом. Ваш профессионализм и творческий подход были заметны с первых минут нашего сотрудничества. Вы смогли внимательно выслушать все мои пожелания и предложить решения, которые превзошли мои ожидания. Каждый этап работы проводился оперативно, а результат был абсолютно великолепен. Большое спасибо за ваше терпение, профессионализм и индивидуальный подход'
        },
        {
          name: 'Джон Доу',
          image: 'https://i.pinimg.com/564x/52/3a/b1/523ab1f7ac833f2a3da4657bec138b7d.jpg',
          stars: 5,
          description:
            'Я хотел бы выразить слова благодарности вашей команде за отлично выполненную работу. С момента первой встречи я понял, что попал в нужное место. Ваше внимание к деталям, креативный подход и готовность идти на встречу моим требованиям были на высшем уровне. Результат превзошел все мои ожидания, и я уверен, что благодаря вашему труду мой бизнес получил надежный инструмент для развития.'
        },
        {
          name: 'Елена Иванова',
          image: 'https://i.pinimg.com/564x/9a/9e/f3/9a9ef35526bb93649815bfa2f73cf2c3.jpg',
          stars: 5,
          description:
            'Работа с вашей студией стала для меня приятным открытием. Весь процесс создания сайта проходил гладко и оперативно благодаря вашему профессионализму и ответственному подходу. Я получила не только качественный продукт, но и полезные рекомендации по его дальнейшему развитию. Рекомендую вашу студию всем, кто ищет надежного партнера в сфере веб-разработки.'
        },
        {
          name: 'Максим Петров:',
          image: 'https://i.pinimg.com/564x/01/9b/2c/019b2c8d56174e5e1dc071aae9bb2803.jpg',
          stars: 5,
          description:
            '"Сотрудничество с вашей студией оставило у меня только положительные впечатления. Ваш профессионализм и внимательное отношение к деталям позволили создать сайт, который полностью соответствует моим ожиданиям. Ваши специалисты проявили гибкость и оперативность на каждом этапе работы, что заслуживает отдельного упоминания. Большое спасибо за ваше качественное и ответственное отношение к работе!'
        },
        {
          name: 'София Морозова',
          image: 'https://i.pinimg.com/564x/5a/f0/ac/5af0acdcc125c39e58e993a5944b432e.jpg',
          stars: 5,
          description:
            'Сотрудничество с вашей студией превзошло все мои ожидания. Вы проявили профессионализм на всех этапах работы, начиная от консультации и заканчивая запуском готового сайта. Внимательное отношение к деталям, оперативность и качественный результат – вот что отличает вашу команду. Я осталась довольна и готова рекомендовать вас всем своим знакомым и партнерам!'
        }
      ],
      products: [
        {
          id: 1,
          name: 'Ренат',
          href: '#',
          imageSrc:
            'https://sun9-29.userapi.com/impg/HBYKwdZSS1lahiW6-blhlqp43BUqxBjRa1JK5g/Qs6VIewiIBs.jpg?size=2560x1718&quality=95&sign=6b29f126c3b86d07d3102fb4f9a301c7&type=album',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '3 года опыта',
          color: 'Фронтенд-разработчик'
        },
        {
          id: 2,
          name: 'Анна',
          href: '#',
          imageSrc:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '6 лет опыта',
          color: 'Специалист по UX/UI-дизайну'
        },
        {
          id: 3,
          name: 'Tom',
          href: '#',
          imageSrc:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '5 лет опыта',
          color: 'Веб-разработчик'
        },
        {
          id: 4,
          name: 'Максим',
          href: '#',
          imageSrc:
            'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '3 года опыта',
          color: 'Веб-дизайнер'
        },
        {
          id: 5,
          name: 'Sarah',
          href: '#',
          imageSrc:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '7 лет опыта',
          color: 'Фронтенд-разработчик'
        },
        {
          id: 6,
          name: 'Jessica',
          href: '#',
          imageSrc:
            'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '8 лет опыта',
          color: 'Эксперт по SEO-оптимизации'
        },
        {
          id: 7,
          name: 'Сергей',
          href: '#',
          imageSrc: 'https://i.pinimg.com/564x/1b/ba/c9/1bbac99a2fb4dc30380264d078d499fb.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '5 лет опыта',
          color: 'Проектный менеджер'
        },
        {
          id: 8,
          name: 'Ксения',
          href: '#',
          imageSrc: 'https://i.pinimg.com/564x/5b/48/63/5b48631eec5ec6e54416f8d5e86c423d.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '4 года опыта',
          color: 'Тестировщик'
        }
      ]
    }
  }
})
</script>

<style></style>
