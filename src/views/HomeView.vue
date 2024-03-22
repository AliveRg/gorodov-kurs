<script setup lang="ts">
import {
    defineComponent
} from 'vue'
import axios from 'axios'
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
    <main class="main relative md:mt-24">
        <div v-if="isOpen"
            class="fixed left-0 top-0 z-20 flex h-screen w-screen items-center justify-center bg-black/70">
            <div class="absolute z-20 mx-auto flex max-w-lg items-center px-6 py-20 lg:px-8">
                <div class="flex h-[20vh] w-[40vw] items-center justify-center rounded-2xl bg-white p-6 shadow-xl">

                    <div class="">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Придумайте или
                            введите пароль от аккаунта</label>
                        <div class="mt-2">
                            <input v-model="newUserOrder.password" type="text" name="password" id="last-name"
                                autocomplete="password"
                                class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FF8C27] sm:text-sm sm:leading-6">
                        </div>
                        <div>
                            <button @click="registerUser"
                                class="mt-[30px] flex w-full justify-center rounded-md bg-[#FF8C27] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#FF8C27]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8C27]">Отправить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

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
                        class="max-h-[280px] w-full rounded-lg bg-gray-100" />
                    <img src="https://i.pinimg.com/564x/f1/58/fe/f158feff035efa9fcbad4f16aec88ab8.jpg"
                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                        class="max-h-[280px] w-full rounded-lg bg-gray-100" />
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
                        <input v-model="newUserOrder.username" type="text" name="first-name" id="first-name"
                            autocomplete="given-name"
                            class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FF8C27] sm:text-sm sm:leading-6">
                    </div>
                </div>

                <div class="sm:col-span-3">
                    <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Фамилия</label>
                    <div class="mt-2">
                        <input v-model="newUserOrder.userLastname" type="text" name="last-name" id="last-name"
                            autocomplete="family-name"
                            class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FF8C27] sm:text-sm sm:leading-6">
                    </div>
                </div>
                <div class="sm:col-span-3">
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Почта</label>
                    <div class="mt-2">
                        <input v-model="newUserOrder.email" type="email" name="email" id="email" autocomplete="email"
                            class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FF8C27] sm:text-sm sm:leading-6">
                    </div>
                </div>
                <div class="sm:col-span-4">
                    <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Ссылка на макет в
                        figma</label>
                    <div class="mt-2">
                        <div
                            class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#FF8C27] sm:max-w-md">

                            <input v-model="newUserOrder.link" type="text" name="username" id="username"
                                autocomplete="username"
                                class="block flex-1 border-0 bg-transparent px-3 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder="https://www.google.com/">
                        </div>
                    </div>
                </div>

                <div class="col-span-full">
                    <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Что вы хотите
                        получить
                        от сайта?</label>
                    <div class="mt-2">
                        <textarea v-model="newUserOrder.description" id="about" name="about" rows="3"
                            class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FF8C27] sm:text-sm sm:leading-6"></textarea>
                    </div>
                    <p class="mt-3 text-sm leading-6 text-gray-600">Дополните характиристиками и возможными пожеланиями
                        по вашему заказу</p>
                </div>



                <div class="col-span-full">

                    <div>
                        <button @click="onToggle"
                            class="mt-[30px] flex w-full justify-center rounded-md bg-[#FF8C27] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#FF8C27]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8C27]">Submit</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative isolate mt-24 overflow-hidden bg-gray-900 py-24 sm:py-32">
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
                        <RouterLink v-for="link in links" :key="link.name" :to="{ name: link.href }">
                            {{ link.name }}
                            <span aria-hidden="true">&rarr;</span>
                        </RouterLink>
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
            jwtApplication: '',
            userId: '',
            user: {},
            newUserOrder: {
                username: '',
                userLastname: '',
                password: '',
                description: '',
                link: '',
                email: ''
            },
            isOpen: false,
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
                href: 'home'
            },
            {
                name: 'О нас',
                href: 'about'
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

    methods: {
        registerUser() {
            console.log('registerUser');

            // регистрация или проверка на существования пользователя и переадресация на аунтефикацию
            let data = JSON.stringify({
                "email": this.newUserOrder.email,
                "username": this.newUserOrder.username,
                "password": this.newUserOrder.password,
                "usersename": this.newUserOrder.userLastname
            });

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://localhost:1337/api/auth/local/register',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios.request(config)

                .then((response) => {
                    console.log('registerUser => 1response');

                    const jwt = response.data.jwt
                    // Сохраняем токен в локальном хранилище

                    window.localStorage.setItem('jwt', jwt)


                    return jwt
                }).then((jwt) => {
                    console.log('registerUser => 2response');

                    // Используем полученный токен для запроса данных пользователя
                    return axios.get('http://localhost:1337/api/users/me?populate=*', {
                        headers: {
                            Authorization: 'Bearer ' +
                                jwt // Используем токен в заголовке Authorization
                        }
                    })
                })
                .then((response) => {
                    console.log('registerUser => 3response');
                    // Получаем данные пользователя из ответа
                    const userData = response.data
                    this.user = response.data
                    // Сохраняем данные пользователя в локальном хранилище
                    window.localStorage.setItem('userData', JSON.stringify(userData))
                    // location.reload()
                    this.addRelative()
                    this.onToggle()

                })
                .catch((error) => {
                    console.log('registerUser => error');

                    console.log(error);
                    this.authUser()

                });
        },

        authUser() { //если пользователь уже существует используется этот метод
            console.log('authUser');
            let data = JSON.stringify({
                identifier: this.newUserOrder.email,
                password: this.newUserOrder.password
            })

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://localhost:1337/api/auth/local',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            }

            axios
                .request(config)
                .then((response) => {
                    console.log('authUser => 1response');

                    const jwt = response.data.jwt
                    // Сохраняем токен в локальном хранилище
                    this.jwtApplication = jwt

                    window.localStorage.setItem('jwt', jwt)
                    // Переходим на главную страницу
                    this.$router.push('/')
                    // Возвращаем токен из Promise для его последующего использования
                    return jwt
                })
                .then((jwt) => {
                    console.log('authUser => 2response');

                    // Используем полученный токен для запроса данных пользователя
                    return axios.get('http://localhost:1337/api/users/me?populate=*', {
                        headers: {
                            Authorization: 'Bearer ' + jwt // Используем токен в заголовке Authorization
                        }
                    })
                })
                .then((response) => {
                    console.log('authUser => 3response');

                    // Получаем данные пользователя из ответа
                    const userData = response.data
                    this.user = response.data
                    // Сохраняем данные пользователя в локальном хранилище
                    window.localStorage.setItem('userData', JSON.stringify(userData))
                    // location.reload()
                    setTimeout(() => {
                        this.addRelative()
                    }, 200);

                })
                .catch((error) => {
                    console.log('authUser => error');

                    console.log(error)
                    alert('error неверное имя пользователя или пароль')
                })
        },
        addRelative() {
            console.log('addRelative');
            console.log(window.localStorage.getItem('jwt'));

            // для созданного или зарестрировавшегося пользователя добавление отношения заявки к нему

            let data = JSON.stringify({
                "data": {
                    "linkmaket": this.newUserOrder.link,
                    "description": this.newUserOrder.description,
                    "users": this.user.id
                }
            });

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://localhost:1337/api/applications',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer' + this.jwtApplication
                },
                data: data
            };

            axios.request(config)
                .then((response) => {
                    console.log('addRelative => 1response');

                    this.refreshUser()
                    // location.reload()
                    this.onToggle()
                    console.log(JSON.stringify(response.data));
                })
                .catch((error) => {
                    console.log('addRelative => error');

                    console.log(error);
                });

        },
        refreshUser() {
            console.log('refreshUser');

            let userId = this.userId
            let data = ''

            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `http://localhost:1337/api/users/${this.user.id}/?populate=*`,
                headers: {
                    Authorization: 'Bearer' + window.localStorage.getItem('jwt')
                },
                data: data
            }

            axios
                .request(config)
                .then((response) => {
                    const userResponse = response
                    window.localStorage.setItem('userData', JSON.stringify(userResponse.data))
                    this.user = userResponse.data

                     setTimeout(() => {
                      location.reload()
                    }, 200);
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        onToggle() {
            this.isOpen = !this.isOpen;
            document.body.classList.toggle('overflow-hidden')
        }
    },
    mounted() {
        if (localStorage.getItem('userData')) {
            this.user = JSON.parse(localStorage.getItem('userData') || '')
        }
    }

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

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 500ms ease-out;
}
</style>
