<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      height="100"
    >
      <v-avatar
        class="mr-3"
        color="grey lighten-5"
        size="70"
      >
        <v-img
          contain
          max-height="70%"
          :src="img.treejpg"
        ></v-img>
      </v-avatar>

      <v-toolbar-title class="headline">
        Парк Покровское-Стрешнево
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <section id="hero" class="grey">
        <v-row no-gutters>
          <v-img
            :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
            :src="img.park"
          >
            <v-theme-provider dark>
              <v-container fill-height>
                <v-row
                  align="center"
                  class="white--text mx-auto"
                  justify="center"
                >
                  <v-col
                    class="white--text text-center"
                    cols="12"
                    tag="h1"
                  >
                    <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                      class="font-weight-light"
                    >
                      Сохраним парк
                    </span>

                    <br>

                    <span
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-2': 'display-3']"
                      class="font-weight-black"
                    >
                      Покровское-Стрешнево
                    </span>

                  </v-col>

                  <v-btn
                    class="align-self-end"
                    fab
                    outlined
                    @click="$vuetify.goTo('#problem')"
                  >
                    <v-icon v-html="icons.mdiChevronDoubleDown"></v-icon>
                  </v-btn>
                </v-row>
              </v-container>
            </v-theme-provider>
          </v-img>
        </v-row>
      </section>

      <section id="problem">
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">Суть проблемы</h2>

          <v-responsive
            class="mx-auto mb-8"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-responsive
            class="mx-auto title font-weight-light mb-8 text-left"
            max-width="720"
          >
          <p>Природно-исторический парк Покровское-Стрешнево ждёт беспрецедентная урбанизация с уничтожением сотен деревьев, условий для обитания животных, масштабными работами на роднике.</p>
          <p>Заказчик работ &mdash; Департамент капитального ремонта. Подряд на выполнение работ заключён в обход системы государственных закупок, без соблюдения требований антимонопольного законодательства, с компанией, не имеющей опыта работ на природных территориях.</p>
          <p>Невзирая на статусы особо охраняемой природной территории (ООПТ) и объекта культурного наследия (ОКН), планируемые в парке работы содержат многочисленные нарушения природоохранного и историко-культурного законодательства. Ответственные органы не реагируют. Ограждения уже выставлены, техника зашла в парк.</p>
          </v-responsive>

          <div></div>

          <v-btn
            class="align-self-end"
            fab
            outlined
            @click="$vuetify.goTo('#actions')"
          >
            <v-icon v-html="icons.mdiChevronDoubleDown"></v-icon>
          </v-btn>
        </v-container>

        <div class="py-5"></div>

      </section>

      <section id="actions" class="lime lighten-3">
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">Действовать</h2>
        </v-container>

        <v-row>
          <v-col
            cols="12"
            md="8"
            offset-md="2"
          >

            <v-row dense>
              <v-col
                v-for="card in actions"
                :key="card.title"
                cols="12"
                md="4"
                lg="3"
                class="py-12 px-4"
              >
                <v-card>
                  <v-card-title tag="h2" v-text="card.title"></v-card-title>
                  <v-card-text v-html="card.html"></v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <component :is="card.component" />

                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </section>

      <section id="officials">
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">Куда обращаться</h2>

          <v-responsive
            class="mx-auto mb-8"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-row>

          </v-row>

          <template>
            <v-expansion-panels focusable>
              <v-expansion-panel
                v-for="(item,i) in appeal"
                :key="i"
              >
                <v-expansion-panel-header>
                  <div class="text-h5 font-weight-regular">{{item.title}}</div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div class="text-left" v-html="item.html"></div>
                  <component :is="item.component" class="mt-2" />
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </template>

        </v-container>

        <div class="py-12"></div>
      </section>

      <section id="press" class="grey lighten-3">
        <div class="py-12"></div>
        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">Резонанс</h2>

          <v-responsive
            class="mx-auto mb-8"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>
            <v-divider></v-divider>
          </v-responsive>

          <v-responsive
            class="mx-auto mb-8"
            max-width="960"
          >
            <v-row class="text-left">
              <v-col cols="12" sm="6">
                <v-card>
                  <v-card-title>
                    Пресса и телевидение
                  </v-card-title>
                  <v-card-text>
                    <ul>
                      <li>ТВ Россия-1, Вести-Москва:
                        <br><a href="https://www.vesti.ru/video/2376141">Реконструкция парка вызвала у местных жителей вопросы</a></li>
                      <li>Ведомости:
                        <br><a href="https://www.vedomosti.ru/ecology/regulation/news/2021/12/20/901549-uchenie-ischut-u-prezidenta-rossii-zaschitu-ot-razoreniya-moskovskih-lesoparkov">
                          Ученые ищут у президента России защиту от разорения московских лесопарков
                        </a> 
                        <br>и <a href="https://www.vedomosti.ru/ecology/protection_nature/news/2022/01/20/905633-bolshe-10-tisyach-chelovek-trebuyut-ostanovit-blagoustroistvo-lesov-i-parkov-moskvi">
                          Больше 10 тысяч человек требуют остановить «благоустройство» лесов и парков Москвы
                        </a>
                      </li>
                      <li>КоммерсантЪ: <a href="https://www.kommersant.ru/doc/5065633">Лесогоны</a></li>
                      <li>The Village:
                        <a href="https://www.the-village.ru/city/situation/park-pokrovo-streshnevo">
                          «Природа уничтожена стройками»: Зачем лес Покровское-Стрешнево превращают в еще один парк
                        </a>
                      </li>
                      <li>Мир Новостей:
                        <a href="https://mirnov.ru/obshchestvo/gorod/civilizacija-protiv-prirody.html">
                          Цивилизация против природы
                        </a>
                      </li>
                      <li>ЭкоСфера:
                        <a href="https://ecosphere.press/2021/12/07/moskva-poteryala-bolshe-5-tysyach-gektarov-zelenyh-nasazhdenij-za-2-goda/">
                          Москва потеряла больше 5 тысяч гектаров зеленых насаждений за 2 года
                        </a>
                      </li>
                      <li>Московская Газета:
                        <a href="https://mskgazeta.ru/obshchestvo/moskvichi-sobirayut-podpisi-protiv-urbanisticheskogo-blagoustrojstva-zapovednyh-zon-9312.html">
                          Москвичи собирают подписи против «урбанистического благоустройства» заповедных зон
                        </a>
                      </li>
                      <li>«+1»:
                        <a href="https://plus-one.ru/news/2021/12/21/uchenye-i-ekologi-obratilis-k-vladimiru-putinu-s-prosboy-ostanovit-zastroyku-zapovednikov-moskvy">
                          Ученые и экологи обратились к Владимиру Путину с просьбой остановить застройку заповедников Москвы
                        </a>
                      </li>
                      <li>Активатика:
                        <br>
                        <a href="https://activatica.org/content/74a51859-67ad-44ec-8bac-9e47ebf290ab/moskvichi-vystupili-v-zashitu-lesoparkov">
                          Москвичи выступили в защиту лесопарков
                        </a> 
                        <br>и
                        <a href="https://activatica.org/content/ceb47469-8395-4c2c-bc5c-2526a25c80a3/uchenye-ran-poprosili-prezidenta-zashitit-moskovskie-lesoparki">
                          Ученые РАН попросили президента защитить московские лесопарки
                        </a>
                      </li>
                      <li>Канал Сталинград: видео <a href="https://youtu.be/aeqk6NSw6WE">МОСКВА ПРОТИВ ЛЖИ</a></li>
                      <li>Важные истории:
                        <a href="https://istories.media/interviews/2022/01/26/milliardi-rublei-na-ubiistvo-zelenikh-legkikh/">
                          Миллиарды рублей на убийство «зеленых легких»
                        </a>
                        - интервью с Галиной Морозовой
                      </li>
                      <li>Правовед Сергей Бабурин: <a href="http://nvtornik.ru/archives/32648">Роковая ошибка властей</a></li>
                      <li>ТВ Россия-1, <a href="https://smotrim.ru/video/2357537">Вести-Москва от 15.11.2021</a> с 11:10</li>
                      <li><a href="https://www.facebook.com/activatica.org/videos/324551186146215/">Стрим Активатики</a> со съёмок ТВ Россия-1 от 09.11.2021</li>
                      <li>ТВ Россия-1, <a href="https://youtu.be/fBx6psRyi-g">Вести-Москва от 09.11.2021</a> с 1 часа 10 мин.</li>
                    </ul>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6">
                <v-card>
                  <v-card-title>
                    Живые мнения горожан
                  </v-card-title>
                  <v-card-text>
                    Постоянно пополняемый <a href="https://youtube.com/playlist?list=PLfzaXDQBQ7yFoFqILJSp5bQsTCP3-nu3L">плейлист на YouTube</a>.
                  </v-card-text>
                  <v-lazy>
                    <YouTubePlaylist />
                  </v-lazy>
                </v-card>
              </v-col>
            </v-row>
          </v-responsive>
        
        </v-container>
      </section>

      <Digging />

      <section id="kiosk" class="">
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">Зайдите в инфо-киоск</h2>

          <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-row>
            <v-col
              v-for="({ icon, title, text, colsmd }, i) in kiosk"
              :key="i"
              cols="12"
              :md="colsmd || 4"
            >
              <v-card
                class="py-12 px-4"
                color="grey lighten-5"
                flat
              >
                <v-theme-provider dark>
                  <div>
                    <v-avatar
                      color="primary"
                      size="88"
                    >
                      <v-icon
                        large
                        v-html="icons[icon]"
                      ></v-icon>
                    </v-avatar>
                  </div>
                </v-theme-provider>

                <v-card-title
                  class="justify-center font-weight-black text-uppercase"
                  v-text="title"
                ></v-card-title>

                <v-card-text
                  class="subtitle-1 text-left"
                  v-html="text"
                >
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <div class="py-12"></div>
      </section>

      <Stats />
      
    </v-main>

    <Footer />

  </v-app>
</template>

<script>
import btnGoToKiosk from './components/goButtons/kiosk.vue';
import btnClaims from './components/goButtons/claims.vue';
import btnDigging from './components/goButtons/digging.vue';
import YouTubePlaylist from './components/yt-playlist.vue';
import Glavcontrol from './components/appeals/Glavcontrol.vue';
import Fence from './components/appeals/Fence.vue';
import Plants from './components/appeals/Plants.vue';
import Digging from './components/Digging.vue';
import Rfm from './components/appeals/Rfm.vue';
import Ksp from './components/appeals/Ksp.vue';
import Stats from './components/Stats.vue';
import Footer from './components/Footer.vue';

import data from './data';
import imgPark from './assets/park-autumn.jpg';
import imgTree from './assets/tree.png';
import imgTreejpg from './assets/tree.jpg';
import {
  mdiChevronDoubleDown,
  mdiContentCopy,
  mdiOpenInNew,
  mdiArrowDown,
  mdiMapMarker,
  mdiHelpCircle,
  mdiBullhornOutline,
} from '@mdi/js'

export default {
  name: 'App',

  components: {
    Glavcontrol,
    Fence,
    Plants,
    Digging,
    Rfm,
    Ksp,
    btnGoToKiosk,
    btnClaims,
    btnDigging,
    YouTubePlaylist,
    Stats,
    Footer,
  },


  data: () => ({
    ...data,
    img: {
      park: imgPark,
      tree: imgTree,
      treejpg: imgTreejpg,
    },
    icons: {
      mdiChevronDoubleDown,
      mdiContentCopy,
      mdiOpenInNew,
      mdiArrowDown,
      mdiMapMarker,
      mdiHelpCircle,
      mdiBullhornOutline,
    },
  }),
};
</script>
