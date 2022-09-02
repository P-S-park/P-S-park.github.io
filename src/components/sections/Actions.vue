<template>
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
        class="py-4 px-4"
      >
        <v-card>
          <v-card-title>Что можете сделать Вы?</v-card-title>
          <v-card-text>
            <ol>
              <li>Дежурить в парке. Для координации дежурств звоните по тел.
                <a href="tel:+79967139924">8 (996) 713-99-24</a>, <a href="tel:+79261366658">8 (926) 136-66-58</a>
                или лучше <a href="https://forms.gle/frztrnMZ4wSBvkqd8">заполните Анкету</a>.
              </li>
              <li>Вызывать полицию в парк и требовать документирования правонарушений. <a href="/police" target="_self">Инструкция</a></li>
              <li>Записаться на личный прием в надзорные органы (материалы предоставим)</li>
              <li>Отправлять обращения по фактам нарушений.</li>
              <li>При наличии контактов в СМИ, просить осветить проблему.</li>
              <li>Распространять информацию о происходящем беззаконии и её авторах в соцсетях.</li>
            </ol>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        md="8"
        offset-md="2"
        class="py-4 px-4"
      >
        <v-card color="#EEE">
          <v-card-title>Где дежурить?</v-card-title>

          <v-row dense>
            <v-col
              v-for="place in places"
              :key="place.title"
              cols="12"
              sm="6"
              lg="4"
              xl="3"
              class="py-4 px-4"
            >
              <v-card>
                <v-card-text v-text="place"></v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
        md="8"
        offset-md="2"
        class="py-4 px-4"
      >
        <v-card color="#EEE">
          <v-card-title>
            Сбор средств на юриста [завершён]
            <v-spacer></v-spacer>
            <v-btn icon @click="showSbor1 = !showSbor1">
              <v-icon v-html="showSbor1 ? mdiChevronUp : mdiChevronDown"></v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text v-if="showSbor1">
            <p>
              Будем добиваться правовой оценки происходящего в судебном порядке.
              Для покрытия расходов на адвокатов и возможные экспертизы объявлен сбор средств.
            </p>

            <v-alert type="success" dense>
              <template v-slot:prepend>
                <v-icon v-html="mdiCheck" />
              </template>
              100 тыс. рублей собрали! Сбор пока закрыт. Люди, вы великие!
            </v-alert>
            <v-row>
              <v-col cols="12" sm="6" md="3">
                <h3>Задачи юристу</h3>
                <p>Анализ всех материалов и выбор наиболее перспективного предмета иска. Ожидаем рекомендаций по наиболее эффективным действиям и юридического сопровождения.</p>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <h3>Цели</h3>
                <p>Как минимум: остановка работ, отправка проекта «благоустройства» на экспертизу и возмещение причиненного ущерба.
                  Как максимум: привлечение виновных к ответственности.</p>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <h3>Отчёты</h3>
                <p>Ежемесячно: отчеты о проделанной работе и полученных результатах.</p>
                <p>22 июня было перечислено 50 тыс. из собранных средств адвокату, который приступил к подготовке искового заявления 
                  с учетом проведенной экспертизы.</p>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <h3>Сроки</h3>
                <p>Настраиваемся на несколько месяцев работы. К сожалению, никто ничего не может гарантировать, но количество нарушений так велико, что мы настроены на решительную борьбу!</p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
        md="8"
        offset-md="2"
        class="py-4 px-4"
      >
        <v-card color="#EEE">
          <v-card-title>
            Сбор средств на адвоката 
            [завершён]
            <v-spacer></v-spacer>
            <v-btn icon @click="showSbor2 = !showSbor2">
              <v-icon v-html="showSbor2 ? mdiChevronUp : mdiChevronDown"></v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text v-if="showSbor2">
            <v-alert type="success" dense>
              <template v-slot:prepend>
                <v-icon v-html="mdiCheck" />
              </template>
              Сумма набрана, сбор закрыт. Спасибо всем, кто принял участие! Люди, вы великие!
            </v-alert>
            <v-row>
              <v-col cols="12" sm="6" md="3">
                <h3>Что произошло</h3>
                <p>Задержан один из жителей, которому вменяют повреждение акведука &mdash; статья 20.1 КоАП, часть 1.</p>
                <p>Житель уже провел полтора дня в изоляторе временного содержания, и ему грозит до 15 суток административного ареста.</p>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <h3>Бесплатная защита?</h3>
                <p>
                  К сожалению, правозащитный проект ОВД Инфо, к которому стандартно обращаются при задержаниях,
                  в этот раз сплоховал, и адвокат вышел на связь лишь сутки спустя после задержания.
                  Мы были вынуждены взять платного адвоката.
                </p>
                <p>Для оплаты услуг адвоката открываем сбор, вознаграждение адвоката 50 тыс. руб.</p>

              </v-col>
              <v-col cols="12" sm="6" md="3">
                <h3>Давайте поможем</h3>
                <p>
                  Мы считаем, что нельзя бросать в беде людей, обычных жителей, которые искренне переживают за наш парк. К сожалению, в сегодняшней реальности право несимметрично. По всем нашим заявлениям в ОВД, включая заявления об уголовных делах, участковый оформляет отказ, а вот обращения от Генстроя принимает и даже оформляет как якобы выявленное полицией при патрулировании.
                </p>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <h3>Победим вместе</h3>
                <p>
                  Поучаствуйте, пожалуйста, в оплате профессиональной юридической помощи.
                </p>
                <h3>Результат (обновлено)</h3>
                <p>
                  Назначен штраф в 1 тыс. руб.  Человек на свободе.
                </p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
        md="8"
        offset-md="2"
        class="py-4 px-4"
      >
        <v-card>
          <v-card-title>
            Сбор средств на иски и досудебную экспертизу
            <v-spacer></v-spacer>
            <v-btn icon @click="showSbor3 = !showSbor3">
              <v-icon v-html="showSbor3 ? mdiChevronUp : mdiChevronDown"></v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text v-if="showSbor3">
            <p>
С вашей помощью с начала этого года инициативная группа защитников парка делает колоссальную работу по сохранению дикой природы Покровского-Стрешнева.
            </p>

            <v-row>
              <v-col cols="12" sm="6" md="3">
                <h3>Уже сделано</h3>
                  <ol style="hyphens:auto">
                    <li>две экспертизы родниковой воды: 
                      установили, что вода в родниках соответствует требованиям к питьевой воде.
                      По хим. составу &mdash; полностью соответствует. По микробиологическим стабильно соответствует
                      в выборочных источниках, в остальных пригодна для питья после кипячения.</li>
                    <li>дендрологическая экспертиза: зафиксированы нарушения при проведении земляных работ</li>
                    <li>оплатили услуги адвоката для задержанного по ложному обвинению защитника парка</li>
                    <li>подали в суд на «благоустроителей»: один иск в суде, и готовим второй.</li>
                  </ol>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <h3>Расход средств</h3>
                <p>
                  Ранее мы уже объявляли сбор на услуги юриста. Собранная тогда сумма в 100 тыс. руб. 
                  пошла на предоплату 50% по двум искам:
                  2&times;50 тыс. руб. Первый иск уже находится в суде, второй готовится.
                </p>
                <p>
                  Для расчета с юристом по этим искам нам необходимо оплатить еще 100 тыс. руб.
                </p>
                <p>
                  Кроме того, необходима досудебная экспертиза. Выезд эксперта стоит 23 тыс. руб., стоимость самой экспертизы будет определена по результатам выезда.
                </p>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <h3>Сбор средств</h3>
                <p>
                  Для оплаты услуг юриста и эксперта <a href="https://sobe.ru/na/52W2O058k330">открываем сбор</a>. Сейчас необходимо собрать 123 тыс. руб., а окончательную сумму мы уточним после выезда эксперта.
                </p>
                <p>Безопасная онлайн оплата любой суммы банковской картой:</p>
                <v-btn href="https://sobe.ru/na/52W2O058k330" dark color="green">Сбор средств</v-btn>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <h3>В чём трудности</h3>
                <p>
                  Контролирующие и надзорные органы <strong>не реагируют</strong> на вопиющие нарушения законодательства при проведении работ в нашем парке в той мере, в которой мы все этого ожидали. Это связано с действием Постановления Правительства РФ № 336 от 10.03.2022., которое ограничивает надзорные проверки. Полноценная проверка по нашему делу в настоящее время не санкционирована, несмотря на все наши усилия. Но мы будем ее добиваться всеми силами.
                </p>
                <p>
                  Мы не намерены сдаваться, и будем доводить дело до конца. Надеяться можно только на самих себя, а вместе мы – сила!
                </p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
        md="8"
        offset-md="2"
      >
        <v-card>
          <v-card-title>Отправить письма</v-card-title>
        <v-row dense>
          <v-col
            v-for="card in letters"
            :key="card.title"
            cols="12"
            sm="6"
            lg="4"
            xl="3"
            class="py-4 px-4"
          >
            <v-card :color="card.check ? '#FEFEFE' : '#FFF8E1'" :flat="card.check">
              <v-card-title tag="h2" v-text="card.title"></v-card-title>
              <v-card-subtitle>{{formatDate(card.date)}}</v-card-subtitle>
              <v-card-text v-html="card.html"></v-card-text>
              <v-card-actions v-if="card.copytext">
                <CopyButton :text="card.copytext" :title="card.copytitle" />
              </v-card-actions>
              <v-card-actions>
                <v-checkbox
                  :off-icon="mdiCheckboxBlankOutline"
                  :on-icon="mdiCheckboxMarked"
                  v-model="card.check"
                  :label="card.check ? 'отправлено' : 'отправлено?'"
                />
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        </v-card>
      </v-col>
    </v-row>

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
            class="py-4 px-4"
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
  
</template>


<script>
import CopyHashtags from '@/components/btnCopyHashtags.vue';
import CopyButton from '@/components/CopyButton.vue';
import { mdiCheck, mdiCheckBold, mdiCheckboxBlankOutline, mdiCheckboxMarked, mdiChevronUp, mdiChevronDown  } from '@mdi/js';
import letters from '@/letters';

/*
  Store user selection of checkboxes in browser localStorage
  Random hash is a key for each letter, value is 1 or 0.
*/
const DIVIDER_FIELDS = ':';
const DIVIDER_ROWS = ',';
const LS_KEY_LETTERS = 'LS_KEY_LETTERS';

const places = [
  'Сваи на склонах, особенно лестница',
  'Уже сваренную лестницу свести на нет',
  'Родники: настил, чтобы не начали сваи ставить',
  'Птичья петля: убрать свет, сделать дорожки из гранотсева и деревянные ограничители',
  'Детская площадка над родником — в старых границах, натуральное покрытие (пока не покажут проект с натуральным покрытием - не ставить бордюры и прочее)',
  'Покос леса и прудов',
  'Кафе у усадьбы: уже поставили фундамент, это ОКН, нужно отменить',
  'Трансформаторная будка у оврага — нельзя',
  'Тропы в лесу: нельзя терравей, нужен гранотсев',
];

// letters check state
const storedChecks = (localStorage.getItem(LS_KEY_LETTERS) || '')
  .split(DIVIDER_ROWS)
  .reduce((acc, c) => {
    const [key, value] = c.split(DIVIDER_FIELDS);
    acc[key] = !!(Number(value));
    return acc;
  }, {});

letters.forEach((letter) => letter.check = !!storedChecks[letter.hash]);

const actions = [
  {
    title: 'Разобраться',
    html: `Посмотрите, пожалуйста, <a href="https://youtu.be/W1UoPUczbzE">видео</a> с подробным разбором проекта.
    `,
  },
  {
    title: 'Фиксировать',
    html: `
      Фото происходящего в парке помечайте хэштегами:
        <code>#паркПокровскоеСтрешнево #ПокровскоеСтрешнево #СЗАО #Войковский #САО #собянин #PSpark #экологияМосквы</code>
    `,
    component: 'CopyHashtags',
  },
  {
    title: 'Подписать',
    html: `
      <ul>
        <li><a href="https://chng.it/wwPKsTF7">петиция</a> на Change.org </li>
        <li><a href="https://act.greenpeace.org/page/94412/action/1">петиция</a> GreenPeace</li>
      </ul>
      <p>Набравшие тысячи подписей петиции передают в мэрию или президенту.</p>`,
  },
  {
    title: 'Быть вместе',
    html: `
      Telegram <a href="https://t.me/streshnevo_save">@streshnevo_save</a>
      <br>ВКонтакте <a href="https://vk.com/pipstreshnevo">pipstreshnevo</a>
      <br>YouTube <a href="https://www.youtube.com/user/kampariin">kampariin</a>
      <br>Facebook <a href="https://www.facebook.com/groups/pipstreshnevo">pipstreshnevo</a>
      <br>Instagram <a href="https://www.instagram.com/streshnevo_news/">@streshnevo_news</a>
      <br>Эл. почта <a href="mailto:p.s.park@ya.ru">P.S.park@ya.ru</a>
    `,
  },
];


export default {
  components: {
    CopyHashtags,
    CopyButton,
  },

  data() {
    return {
      actions,
      letters,
      places,
      mdiCheck,
      mdiCheckBold,
      mdiCheckboxBlankOutline,
      mdiCheckboxMarked,
      mdiChevronUp,
      mdiChevronDown,
      showSbor1: false,
      showSbor2: false,
      showSbor3: true,
    };
  },

  methods: {
    formatDate(date) {
      const pad = (n) => n.toString().padStart(2, '0');
      const year = date.getFullYear();
      const month = 1 + date.getMonth();
      const day = date.getDate();
      return [year, month, day].map(pad).join('-');
    },
  },

  watch: {
    letters: {
      handler: letters => {
        const state = letters.map(letter => [letter.hash, +letter.check].join(':')).join(',');
        localStorage.setItem(LS_KEY_LETTERS, state);
      },
      deep: true,
    },
  },
}
</script>
