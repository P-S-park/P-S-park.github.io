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

      <v-toolbar-title class="font-weight-black headline">
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
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
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
                    <v-icon>mdi-chevron-double-down</v-icon>
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
          <p>Природно-исторический парк Покровское-Стрешнево ждет беспрецедентная урбанизация с уничтожением сотен деревьев, условий для обитания животных, масштабными работами на роднике.</p>
          <p>Заказчиком работ является Департамент капитального ремонта. Подряд на выполнение работ заключен в обход системы государственных закупок, без соблюдения требований антимонопольного законодательства с компанией не имеющей опыта работ на природных территориях.</p>
          <p>Невзирая на статусы особо-охраняемой природной территории (ООПТ) и объекта культурного наследия (ОКН), планируемые работы содержат многочисленные нарушения природоохранного и историко-культурного законодательства. Ответственные органы не реагируют. Ограждения уже выставлены, техника зашла в парк.</p>
          </v-responsive>

          <v-avatar
            class="elevation-12 mb-12"
            size="128"
          >
            <v-img :src="img.tree"></v-img>
          </v-avatar>


          <div></div>

          <v-btn
            class="align-self-end"
            outlined
            @click="$vuetify.goTo('#actions')"
          >
            <v-icon>mdi-chevron-double-down</v-icon>
          </v-btn>
        </v-container>

        <div class="py-12"></div>
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

      <DknSection />

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
                        <br><a href="https://tinyurl.com/y7bburf5">Ученые ищут у президента России защиту от разорения московских лесопарков</a> 
                        <br>и <a href="https://tinyurl.com/3zxcbrts">Больше 10 тысяч человек требуют остановить «благоустройство» лесов и парков Москвы</a>
                      </li>
                      <li>КоммерсантЪ: <a href="https://www.kommersant.ru/doc/5065633">Лесогоны</a></li>
                      <li>The Village: <a href="https://tinyurl.com/2p88386j">«Природа уничтожена стройками»: Зачем лес Покровское-Стрешнево превращают в еще один парк  </a></li>
                      <li>Мир Новостей: <a href="https://tinyurl.com/2scezee4">Цивилизация против природы</a></li>
                      <li>ЭкоСфера: <a href="https://tinyurl.com/cmmsvump">Москва потеряла больше 5 тысяч гектаров зеленых насаждений за 2 года</a></li>
                      <li>Московская Газета: <a href="https://tinyurl.com/mran39ec">Москвичи собирают подписи против «урбанистического благоустройства» заповедных зон</a></li>
                      <li>«+1»: <a href="https://tinyurl.com/2xfxc236">Ученые и экологи обратились к Владимиру Путину с просьбой остановить застройку заповедников Москвы</a></li>
                      <li>Активатика:
                        <br><a href="https://tinyurl.com/3pkynup7">Москвичи выступили в защиту лесопарков</a> 
                        <br>и <a href="https://tinyurl.com/yckk4js9">Ученые РАН попросили президента защитить московские лесопарки</a></li>
                      <li>Канал Сталинград: видео <a href="https://youtube.com/watch?v=aeqk6NSw6WE&feature=share">МОСКВА ПРОТИВ ЛЖИ</a></li>
                      <li>Важные истории: <a href="https://tinyurl.com/233d2c9f">Миллиарды рублей на убийство «зеленых легких»</a> - интервью с Галиной Морозовой</li>
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
                  <YouTubePlaylist />
                </v-card>
              </v-col>
            </v-row>
          </v-responsive>
        
        </v-container>
      </section>

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
                        v-text="icon"
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

      <section id="stats" class="grey">
        <v-parallax
          :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
          :src="img.ponds"
        >
          <v-container fill-height>
            <v-row class="mx-auto">
              <v-col
                v-for="[value, title] of stats"
                :key="title"
                cols="12"
                md="3"
              >
                <div class="text-center">
                  <div
                    class="display-3 font-weight-black mb-4"
                    v-text="value"
                  ></div>

                  <div
                    class="title font-weight-regular text-uppercase"
                    v-text="title"
                  ></div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
      </section>
      
    </v-main>

    <v-footer
      class="justify-center"
      color="#292929"
      height="100"
    >
      <div class="title font-weight-light grey--text text--lighten-1 text-center">
        Россия, Москва, <abbr title="Северо-Западный административный округ">СЗАО</abbr>, район Покровское-Стрешнево
        <br>Эл. почта: <a href="mailto:ps-park@mail.ru">ps-park@mail.ru</a>
        <br>&copy; {{ (new Date()).getFullYear() }}, неравнодушные москвичи.
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import DknSection from './components/DknSection.vue';
import copyButtonKSP from './components/copyButtons/ksp.vue';
import copyButtonRFM from './components/copyButtons/rfm.vue';
import btnGoToKiosk from './components/goButtons/kiosk.vue';
import btnGoToDKN from './components/goButtons/dkn.vue';
import YouTubePlaylist from './components/yt-playlist.vue';

import data from './data';
import imgPark from './assets/park-autumn.jpg';
import imgTree from './assets/tree.png';
import imgTreejpg from './assets/tree.jpg';
import imgPonds from './assets/ponds.jpg';

export default {
  name: 'App',

  components: {
    DknSection,
    copyButtonKSP,
    copyButtonRFM,
    btnGoToKiosk,
    btnGoToDKN,
    YouTubePlaylist,
  },

  data: () => ({
    ...data,
    img: {
      park: imgPark,
      tree: imgTree,
      treejpg: imgTreejpg,
      ponds: imgPonds,
    },
  }),
};
</script>
