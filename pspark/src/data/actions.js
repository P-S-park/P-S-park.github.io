export default [
  {title: 'Инфокиоск', html: 'В парке стоят 2 будки, где можно оставить своё мнение о реконструкции парка', component: 'btnGoToKiosk'},
  {title: 'ДКН', html: 'В Департамент Культурного Наследия до 1 февраля отправить критику их Экспертизы.', component: 'btnGoToDKN'},
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
];
