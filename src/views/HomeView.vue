<script setup lang="ts">
import {
    defineComponent
} from 'vue'
import {
    RouterLink,
    RouterView
} from 'vue-router'
import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    FingerPrintIcon,
    LockClosedIcon,
    SparklesIcon
} from '@heroicons/vue/24/outline'
</script>

<template>
    <main class="main md:mt-24">
        <div
            class="relative -z-20 flex h-[90vh] flex-col justify-between bg-black/80 px-[15px] py-[20px] md:h-[100vh] md:px-[30px] md:py-[40px] lg:px-[40px] lg:pb-[60px]">
            <img src="@/assets/devise.png"
                class="absolute bottom-0 -z-10 h-full object-contain md:right-0 md:h-auto md:object-none" alt=""
                :style="'top: -' + scrollY + 'px;'" />
            <h1 class="text-[51px] font-semibold text-white">
                Создание сайтов <br />
                под ключ в Белгороде
                <p v-for="(item, index) in itemCountInter" :key="index"
                    class="mb-[40px] max-w-[650px] text-[51px] text-[#FF9400]">
                    <Transition>
                        <p v-if="index == itemCount">
                            {{ item.title }}
                        </p>
                    </Transition>
                </p>
                <p v-for="(item, index) in itemCountInter" :key="index" class="overflow-hidden text-[20px] text-white">
                    <Transition>
                        <p v-if="index == itemCount" class="max-w-[550px]">
                            {{ item.description }}
                        </p>
                    </Transition>
                </p>
            </h1>
            <p class="flex flex-col text-[30px] font-bold text-white">

            <p class="w-fit" style="border-bottom: 4px solid #FF8C27;
    margin-bottom: 5px;
    display: inline-block;">Получить
            </p>
            <p class="w-fit" style="border-bottom: 4px solid #FF8C27;
    margin-bottom: 5px;
    display: inline-block;">
                консультацию</p>
            </p>
        </div>
        <div class="bg-gray-100">

        </div>
        <div class="bg-gray-100">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 class="text-2xl font-bold text-gray-900">Ваш выбор</h2>

                    <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        <div v-for="callout in callouts" :key="callout.name" class="group relative">
                            <div
                                class="sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:h-64">
                                <img :src="callout.imageSrc" :alt="callout.imageAlt"
                                    class="h-full w-full object-cover object-center" />
                            </div>
                            <h3 class="mt-6 text-sm text-gray-500">
                                <a :href="callout.href">
                                    <span class="absolute inset-0" />
                                    {{ callout.name }}
                                </a>
                            </h3>
                            <p class="text-base font-semibold text-gray-900">{{ callout.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white">
            <div
                class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Инновационные решения для
                        вашего успеха
                    </h2>
                    <p class="mt-4 text-gray-500">Студия веб-разработки "WebTech" предлагает передовые технологии и
                        экспертное руководство, обеспечивая вам качественные сайты и стратегическое партнерство для
                        роста вашего бизнеса.</p>

                    <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        <div v-for="feature in features" :key="feature.name" class="border-t border-gray-200 pt-4">
                            <dt class="font-medium text-gray-900">{{ feature.name }}</dt>
                            <dd class="mt-2 text-sm text-gray-500">{{ feature.description }}</dd>
                        </div>
                    </dl>
                </div>
                <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <img src="https://i.pinimg.com/564x/3e/41/51/3e41516d68685bf9f7567123b1312e58.jpg"
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        class="rounded-lg bg-gray-100" />
                    <img src="https://i.pinimg.com/564x/7b/8e/0a/7b8e0a53f4a845b8a28c2b97f6133d2c.jpg"
                        alt="Top down view of walnut card tray with embedded magnets and card groove."
                        class="rounded-lg bg-gray-100" />
                    <img src="https://i.pinimg.com/564x/f0/8c/35/f08c355ec74e0a2828543a499383c521.jpg"
                        alt="Side of walnut card tray with card groove and recessed card area."
                        class="rounded-lg bg-gray-100 max-h-[280px] w-full" />
                    <img src="https://i.pinimg.com/564x/f1/58/fe/f158feff035efa9fcbad4f16aec88ab8.jpg"
                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                        class="rounded-lg bg-gray-100 max-h-[280px] w-full" />
                </div>
            </div>
        </div>

        <div class="bg-white py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl lg:text-center">
                    <h2 class="text-base font-semibold leading-7 text-[#FF8C27]">Запустись с блеском</h2>
                    <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Превосходство в мире
                        веб-разработки</p>
                    <p class="mt-6 text-lg leading-8 text-gray-600">Наша компания предлагает высокую скорость загрузки,
                        интуитивный интерфейс, надежную безопасность и уникальный дизайн, делая нас лидерами в
                        веб-разработке.</p>
                </div>
                <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        <div v-for="feature in featureslast" :key="feature.name" class="relative pl-16">
                            <dt class="text-base font-semibold leading-7 text-gray-900">
                                <div
                                    class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#FF8C27]">
                                    <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                {{ feature.name }}
                            </dt>
                            <dd class="mt-2 text-base leading-7 text-gray-600">{{ feature.description }}</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
        <div class="mx-auto max-w-2xl items-center space-x-2 space-y-12 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="mx-auto max-w-2xl lg:text-center">
                <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Оставь свою заявку</p>
                <p class="mt-6 text-lg leading-8 text-gray-600">Мы заранее рассматриваем заявки и составляем примерную
                    стоимость, после связываемся с вами! Заполните поля правильно и подробно для экономии вашего
                    времени.</p>
            </div>
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                <div class="sm:col-span-3">
                    <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Имя</label>
                    <div class="mt-2">
                        <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FF8C27] sm:text-sm sm:leading-6">
                    </div>
                </div>

                <div class="sm:col-span-3">
                    <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Фамилия</label>
                    <div class="mt-2">
                        <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FF8C27] sm:text-sm sm:leading-6">
                    </div>
                </div>
                <div class="sm:col-span-4">
                    <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Макет в figma или
                        похожий сайт</label>
                    <div class="mt-2">
                        <div
                            class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#FF8C27] sm:max-w-md">
                            <span
                                class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span>
                            <input type="text" name="username" id="username" autocomplete="username"
                                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder="janesmith">
                        </div>
                    </div>
                </div>

                <div class="col-span-full">
                    <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Что вы хотите получить
                        от сайта?</label>
                    <div class="mt-2">
                        <textarea id="about" name="about" rows="3"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FF8C27] sm:text-sm sm:leading-6"></textarea>
                    </div>
                    <p class="mt-3 text-sm leading-6 text-gray-600">Дополните характиристиками и возможными пожеланиями
                        по вашему заказу</p>
                </div>



                <div class="col-span-full">
                    <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Прикрепите
                        наброски или карту сайта для более точной оценки</label>
                    <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div class="text-center">
                            <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor"
                                aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                                    clip-rule="evenodd" />
                            </svg>
                            <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                <label for="file-upload"
                                    class="relative cursor-pointer rounded-md bg-white font-semibold text-[#FF8C27] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#FF8C27] focus-within:ring-offset-2 hover:text-[#FF8C27]/80">
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                </label>
                                <p class="pl-1">or drag and drop</p>
                            </div>
                            <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                        </div>
                    </div>
                    <div>
                        <button type="submit"
                            class="mt-[30px] flex w-full justify-center rounded-md bg-[#FF8C27] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#FF8C27]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8C27]">Sign
                            in</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 mt-24">
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
            <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                aria-hidden="true">
                <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#FF8C27] opacity-20"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
            </div>
            <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                aria-hidden="true">
                <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#FF8C27] opacity-20"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
            </div>
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl lg:mx-0">
                    <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Мы не будем довольны</h2>
                    <p class="mt-6 text-lg leading-8 text-gray-300">Пока не будете довольны вы!</p>
                </div>
                <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <div
                        class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                        <a v-for="link in links" :key="link.name" :href="link.href">{{ link.name }}
                            <span aria-hidden="true">&rarr;</span></a>
                    </div>

                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
export default defineComponent({
    data() {
        return {
            featureslast: [{
                name: 'QuickSite',
                description: 'Разрабатываем сайты, которые загружаются моментально, обеспечивая высокую скорость доступа к информации для пользователей.',
                icon: CloudArrowUpIcon,
            },
            {
                name: 'SecureSite',
                description: 'Мы специализируемся на разработке сайтов с учетом самых современных методов безопасности, обеспечивая надежную защиту данных пользователей и бизнеса.',
                icon: LockClosedIcon,
            },
            {
                name: 'EasyWeb',
                description: 'Наша компания создает сайты с интуитивно понятным интерфейсом, что делает навигацию и взаимодействие с контентом максимально простыми для пользователей.',
                icon: ArrowPathIcon,
            },
            {
                name: 'UniqueWeb',
                description: 'Наши сайты отличаются оригинальным и привлекательным дизайном, который подчеркивает индивидуальность бренда и привлекает внимание аудитории.',
                icon: SparklesIcon,
            },
            ],
            links: [{
                name: 'Главная',
                href: '#'
            },
            {
                name: 'О нас',
                href: '#'
            },
            
            ],

            callouts: [{
                name: 'Интернет-магазины',
                description: 'Идеально для прожад в интернете',
                imageSrc: 'https://i.pinimg.com/564x/a1/49/51/a149517a10939b7ec47e5bbd73a936dd.jpg',
                imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
                href: '#',
            },
            {
                name: 'Лендинги',
                description: 'Ваша визитная карточка',
                imageSrc: 'https://i.pinimg.com/564x/c2/e2/3f/c2e23f5a40fff532691d7a35df6b3ce5.jpg',
                imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
                href: '#',
            },
            {
                name: 'Одностраничные сайты',
                description: 'Подходит для реклаты одного продукта',
                imageSrc: 'https://i.pinimg.com/564x/26/13/ad/2613ad00845200ca5a81c0c644931ba7.jpg',
                imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
                href: '#',
            },
            ],
            features: [{
                name: '100+ проектов завершено за последний год',
                description: 'наш опыт говорит сам за себя, давая уверенность в наших способностях.'
            },
            {
                name: '90% клиентов довольны качеством работы',
                description: 'удовлетворенность клиентов является нашим приоритетом №1.'
            },
            {
                name: 'Среднее время загрузки сайтов снижено на 50%',
                description: 'мы делаем ваш сайт быстрым и эффективным.'
            },
            {
                name: 'Более 30 наград и признаний в индустрии',
                description: 'наша репутация защищает ваш бренд.'
            },

            ],
            scrollY: 0,
            itemCount: 0,
            itemCountInter: [{
                title: 'с SEO-продвиением',
                description: 'Ваш сайт будет корректно индексироваться поисковыми системами и собирать поисковый трафик привлекая клиентов и увеличивая продажи'
            },
            {
                title: 'c проработанной структурой',
                description: 'Ваш сайт будет интуитивно понятен любому пользователю'
            },
            {
                title: 'с дальнейшим обслуживаем',
                description: 'Возьмем поддержку сайта на себя, настроим рекламу, опубликуем свежие материалы'
            }
            ]
        }
    },
    created() {
        setInterval(() => {
            if (this.itemCount == 2) {
                this.itemCount = 0
            } else {
                this.itemCount++
            }
        }, 3000)

        document.addEventListener('scroll', (event) => {
            this.scrollY = window.scrollY * 0.9

        })
    },
    computed: {}
})
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    top: 100px;
    transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateX(10%);
    position: absolute;
}
</style>
