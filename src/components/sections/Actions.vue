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
        <v-card>
          <v-card-title>Сбор средств на адвоката [завершён]</v-card-title>
          <v-card-text>
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
          <v-card-title>Сбор средств на юриста [завершён]</v-card-title>
          <v-card-text>
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
import { mdiCheck, mdiCheckBold, mdiCheckboxBlankOutline, mdiCheckboxMarked  } from '@mdi/js';

/*
  Store user selection of checkboxes in browser localStorage
  Random hash is a key for each letter, value is 1 or 0.
*/
const DIVIDER_FIELDS = ':';
const DIVIDER_ROWS = ',';
const LS_KEY_LETTERS = 'LS_KEY_LETTERS';
const letters = [
  // {
  //   date: new Date(2022, 3, 20),
  //   title: 'В МосГорДуму',
  //   html: `21 апреля в 16:00 пройдёт Круглый Стол, посвященный сохранению ООПТ.
  //   <br>
  //   Напишите, пожалуйста, письмо депутатам Мосгордумы. Против благоустройства московских ООПТ. Лучше своими словами.
  //   Претензии есть у каждого. Можно дополнить фото или видео.
  //   <br>
  //   Мосгордума может предъявленить требования к мэру, который должен по закону быть Думе подотчётен. В теории.
  //   <br>
  //   Скопируйте список из 39 адресов эл. почты депутатов:
  //   `,
  //   hash: 'c19bcbc141d458', // for LS/Cookies: > Math.random().toString(16).substring(2)
  //   copytext: 'shuvalova@duma.mos.ru,mitrokhin@duma.mos.ru,EEA@duma.mos.ru,gerasimov@duma.mos.ru,batysheva@duma.mos.ru,golovchenko@duma.mos.ru,kozlov@duma.mos.ru,v.ryzhkov2021@mail.ru,sharapova@duma.mos.ru,metlina@duma.mos.ru,d27@duma.mos.ru,guseva@duma.mos.ru,on.melnikova@duma.mos.ru,nikitina@duma.mos.ru,rusetskaia@duma.mos.ru,artemev@duma.mos.ru,samyshina@duma.mos.ru,orlov@duma.mos.ru,kirill@duma.mos.ru,stebenkova@duma.mos.ru,pm.tarasov@duma.mos.ru,svyatenko@duma.mos.ru,zuganovleo@mail.ru,hello.elena@yanchuk.moscow,maksimov@duma.mos.ru,timonov@duma.mos.ru,kruglov@duma.mos.ru,buskin@duma.mos.ru,predsedatel@duma.mos.ru,zubrilin@duma.mos.ru,kartavtseva@duma.mos.ru,medvedev@duma.mos.ru,daria@besedina.moscow,perfilova@duma.mos.ru,babayan@duma.mos.ru,pd41@duma.mos.ru,loktev@duma.mos.ru,titov@duma.mos.ru,solovev@duma.mos.ru'.replace(/,/g,'\n'),
  //   copytitle: 'Список',
  // },
  {
    date: new Date(2022, 6, 22),
    title: 'Нагели в овраге',
    html: `
    <p>882 пятиметровых металлических стержня на трёх полях. 
      Нагельное закрепление склонов Елизаветинского оврага
       запроектировано, т.к. выполнение каптажа родников понизит устойчивость склонов
       и привести к оползням.
    </p>
    <p>Каптаж родников и нагели разрушат гидрологию территории, что приведёт к засыханию деревьев и полному изменению экосистемы влаголюбивого биотопа левого берега Химки.
    </p>
    <p>
      <a href="https://disk.yandex.ru/i/s1Hxgvhs3h11mA">Письмо</a> в прокуратуры;
      <br />
      <a href="https://disk.yandex.ru/i/61z8i-bug4CCEw">Приложения</a> к письму.
    </p>`,
    hash: 'c8515421a8d558', // for LS/Cookies: Math.random().toString(16).substring(2)
  },
  {
    date: new Date(2022, 6, 16),
    title: 'Разрушение склона у дамбы',
    html: `
    <p>В водоохранной зоне Химкинского водохранилища к юго-западу от дамбы 
    по краю склона с уклоном порядка 60&deg; начаты работы по строительству, используется экскаватор.
    </p>
    <p>
      <a href="https://disk.yandex.ru/i/7hsRDWh0NSHFhA">Письмо</a> в Канал им. Москвы, 
      копии в ГосНадзор, ГО и ЧС Москвы, Прокуратуру Москвы.
    </p>`,
    hash: 'cdd352178412b8', // for LS/Cookies: Math.random().toString(16).substring(2)
  },
  {
    date: new Date(2022, 6, 16),
    title: 'Водозабор нарушает законы',
    html: `
    <p>В ночь с 15 на 16 июля 2022 г. был смонтирован забор воды от одного из родников «Царевна-Лебедь»,
    расположенного на заповедном участке ООПТ П-ИП «Покровское-Стрешнево» (СЗАО, САО г. Москва) 
    для доставки воды по акведуку на другой берег реки Химка.
    </p>   
    <p>Пожалуйста, скачайте, заполните свои контакты и отправьте три письма:</p>
    <ol>
      <li><a href="https://disk.yandex.ru/i/3SNC0nuFIDonFA">Письмо</a> в межрайонную природоохранную прокуратуру Москвы;</li>
      <li><a href="https://disk.yandex.ru/i/8go5UxNkefyNgQ">Письмо</a> в ОБЭП;</li>
      <li><a href="https://disk.yandex.ru/i/j25y3LFi5lz6CA">Письмо</a> в УВД СЗАО;</li>
    </ol>`,
    hash: 'efabb4583c8d28', // for LS/Cookies: Math.random().toString(16).substring(2)
  },
  {
    date: new Date(2022, 6, 10),
    title: 'Сохранить нетронутое',
    html: `<p>Письмо в Генстрой, которое желательно распечатать и отнести лично в 2 экз. для отметки о получени;
    или отправить заказным с уведомлением о вручении почтой.</p>
    <p>
      <a href="https://disk.yandex.ru/i/D2OZab1MVf_4KA">Письмо</a> 
      в Департамент капитального ремонта, АНО Развитие Городских Территорий и в Генстрой &mdash; 
      предложение оставить дорожки и территории как есть, тем самым сэкономив собственные ресурсы.
    </p>`,
    hash: '463a45bc5b5578', // for LS/Cookies: Math.random().toString(16).substring(2)
  },
  {
    date: new Date(2022, 5, 22),
    title: 'Тропинки',
    html: `<p>Сохранить пока нетронутые тропинки, Елизаветинскую тропу оставить грунтовой &ndash; и др. предложения с обоснованиями</p>
    <p>
      <a href="https://disk.yandex.ru/i/be1ht1dap2-U9w">Письмо</a> в Департамент капитального ремонта, АНО РГТ (Развитие Городских Территорий), 
      копии в Прокуратуру Москвы,
      Природоохранную прокуратуру, департамент Природопользования и охраны окр. среды.
    </p>`,
    hash: 'e88effa1cdf578', // for LS/Cookies: Math.random().toString(16).substring(2)
  },
  {
    date: new Date(2022, 5, 14),
    title: 'Рулонные газоны',
    html: `<p>На ООПТ П-ИП «Покровское-Стрешнево» севернее Никольского тупика начата укладка рулонных газонов. 
    Это неразумно и вредно. Необходимо прекратить.</p>
    <p>
      <a href="https://disk.yandex.ru/i/oLPCLP7T1eLXbA">Письмо</a> в АНО РГТ (Развитие Городских Территорий), Департамент капитального ремонта, Прокуратуру Москвы,
      Природоохранную прокуратуру, в Управу района Войковский, Префекту САО и муниципальным депутатам района Войковский.
    </p>`,
    hash: '14e79623288d3', // for LS/Cookies: Math.random().toString(16).substring(2)
  },
  // {
  //   date: new Date(2022, 5, 13),
  //   title: 'Остановить каптаж',
  //   html: `
  //   <p>Эксперт по каптажу, инженер-гидротехник, член Экспертного совета по объектам Правительства Москвы в области инженерных изысканий,
  //     проектирования и строительства, главный инженер проекта (ГИП) с 1993 г.
  //     <span class="font-weight-bold">просит помочь</span> организовать совещание должного уровня, предпочтительно на площадке госзаказчика ДКР.
  //   </p>
  //   <p>Пожалуйста, обратитесь к дружественным депутатам всех уровней с просьбой направить это обращение мэру Москвы.</p>
  //   <p>
  //     <a href="https://disk.yandex.ru/i/6ICNFTyxeJAl-Q">Письмо</a> мэру Москвы Собянину. В [квадратных скобках] там варианты формулировок — оставьте подходящую.
  //   </p>`,
  //   hash: '67c34535a091f', // for LS/Cookies: Math.random().toString(16).substring(2)
  // },
  // {
  //   date: new Date(2022, 5, 4),
  //   title: 'Бурение скважин',
  //   html: `<p>На склоне около родников бурят скважины. Это представляет опасность прочности склона.
  //   Работы бесконтрольны, не получено разрешение на строительство, не проведена экспертиза.</p>
  //   <p>
  //     <a href="https://disk.yandex.ru/i/BzWfyDZopzfXmw">Письмо</a> в фед.надзор, ГО и ЧС Москвы, ОАТИ и гос. строй надзор.
  //   </p>`,
  //   hash: '9f52354489b6a', // for LS/Cookies: > Math.random().toString(16).substring(2)
  // },
  // {
  //   date: new Date(2022, 3, 2),
  //   title: 'Повреждение растений',
  //   html: `Шаблон письма на каждый случай повреждения зелёных насаждений: стволов, корней деревьев, рубки деревьев.
  //   В МосПрироду с копией в природоохранную прокуратуру. В документе надо заполнить пропущенные строки:
  //   <p>
  //     <a href="https://disk.yandex.ru/i/QQcW_2IAk0qX7A">Шаблон</a>
  //   </p>`,
  //   hash: '6e7015c7f7abb', // for LS/Cookies: > Math.random().toString(16).substring(2)
  // },
  // {
  //   date: new Date(2022, 2, 28),
  //   title: 'ФАС',
  //   html: `Письмо в Федеральную Антимонопольную Службу об отсутствии тендеров и других нарушениях при распределении бюджета.
  //   <p>
  //     Пожалуйста, заполните и отправьте от своего имени:
  //     <a href="https://disk.yandex.ru/i/j9Ul7jAdUBmdOQ">Документ</a>
  //   </p>`,
  //   hash: '22aa33f13109f', // for LS/Cookies: > Math.random().toString(16).substring(2)
  // },
  // {
  //   date: new Date(2022, 2, 22),
  //   title: 'Гидрогеология',
  //   html: `Близость Химкинского водохранилища, каптаж родников и безопасность. Запрос проектировщику. Копии в ДКР, ДПиООС, прокуратуру, управы.
  //     <a href="https://disk.yandex.ru/i/pUDEya06ri0SQQ">Документ</a>`,
  //   hash: '0e828c1250a43',
  // },
  // {
  //   date: new Date(2022, 2, 22),
  //   title: 'Оранжерея',
  //   html: `Генстрой не по проекту разбирает стены оранжереи. Письмо в прокуратуру, копии в ДКН, МВД, МосПрироду, управу.
  //   <a href="https://disk.yandex.ru/i/VlZmoCTBSX2Kjg">Документ</a>`,
  //   hash: '3152b4152f4ba',
  // },
  // {
  //   date: new Date(2022, 2, 22),
  //   title: 'Кап. строительство',
  //   html: `Вопреки закону об ООПТ, ведётся строительство капитальных объектов. Письмо в прокуратуру, копии в МВД и МосПрироду.
  //   <a href="https://disk.yandex.ru/i/2hHYu3gObHnAPA">Документ</a>`,
  //   hash: 'ec004c9caa215',
  // },
  // {
  //   date: new Date(2022, 2, 22),
  //   title: 'Деревья и корни',
  //   html: `Работы в парке уже повредили корни деревьев, что приведёт к нежелательным последствиям. Письмо с приложением в прокуратуру, копии в МВД и МосПрироду.
  //   <a href="https://disk.yandex.ru/i/Tj5s-WwJB4tE7A">Документ</a> и <a href="https://disk.yandex.ru/i/EL3YO6ZfvyTmow">приложения</a>`,
  //   hash: 'ea5b06584d6eb',
  // },
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
      mdiCheck,
      mdiCheckBold,
      mdiCheckboxBlankOutline,
      mdiCheckboxMarked,
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
