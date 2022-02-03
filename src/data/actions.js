export default [
  {title: 'Задавайте вопросы', html: `
    До пятницы 4 февраля <a href="https://forms.gle/q8poLihQjfXYhKgf9">заполните форму</a> &mdash; Ваши вопросы и пожелания по проекту реконструкции парка.
    <br>Мы передадим их проектировщику, запросим техническую документацию и обсудим на Круглом столе Общественного Народного Фронта.
    `,
    component: 'BigButton',
  },
  {title: 'Глав. Контроль', 
    html: `3-го февраля снесли две недавно устроенные спорт-площадки около Четвёртого пруда.`,
    component: 'Glavcontrol'},
  {title: 'Непрозрачные заборы', 
    html: 'Мы можем, и будем осуществлять Общественный Контроль. Требуем убрать непрозрачные сетки!',
    component: 'Fence'},
  {title: 'Инфокиоск', html: 'В парке стоят 2 будки, где можно оставить своё мнение о реконструкции парка', component: 'btnGoToKiosk'},
  {title: 'РФМ', 
    html: `В Федеральную службу по финансовому мониторингу
      <br>эл. приёмная  <a href="https://www.fedsfm.ru/citizen/submit-request">fedsfm.ru/citizen/submit-request</a>
      <br>Тематика обращения: 3-й или 5-й пункты - <code>Операции с денежными средствами или иным имуществом, подлежащим контролю...</code>
      <br>или <code>Борьба с коррупцией</code>
    `,
    component: 'copyButtonRFM'},
  {title: 'Счётная палата', 
    html: `В Контрольно-счётную палату города Москвы
      <br>эл. приёмная  <a href="https://ksp.mos.ru/feedback/zapros.php">ksp.mos.ru/feedback/zapros.php</a>
      <br>Тема обращения: <code>Неправомерность расходов бюджетных средств</code>
    `,
    component: 'copyButtonKSP',
  },

  {title: 'Петиции', html: `
      <ul>
        <li><a href="https://chng.it/wwPKsTF7">петиция</a> на Change.org </li>
        <li><a href="https://act.greenpeace.org/page/94412/action/1">петиция</a> GreenPeace</li>
      </ul>
      <p>
        Набравшие тысячи подписей петиции передают в Мэрию или президенту. По эл. почте поступят важные обновления по теме.
      </p>
    `,
  },
  {title: 'Присоединиться', html: `
      <ul>
        <li><a href="https://www.facebook.com/groups/pipstreshnevo">группа в Facebook</a></li>
        <li><a href="https://t.me/streshnevo_save">чат в Telegram</a></li>
      </ul>
    `,
  },
  {title: 'Требовать', html: 'Вот список основных претензий к реконструкции парка:', component: 'btnClaims', },
];
