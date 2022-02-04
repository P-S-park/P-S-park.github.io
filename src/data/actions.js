export default [
  {title: 'Требовать', html: 'Вот список основных претензий к реконструкции парка:', component: 'btnClaims', },
  {title: 'Штрафовать', 
    html: `4-го февраля трактор повредил несколько зелёных насаждений. Должны оштрафовать!`,
    component: 'Plants'},
  {title: 'Восстанавливать', 
    html: `3-го февраля снесли две только недавно устроенные спорт-площадки около Четвёртого пруда. Зачем!`,
    component: 'Glavcontrol'},
  {title: 'Контролировать', 
    html: 'Мы можем, и будем осуществлять Общественный Контроль. Требуем убрать непрозрачные сетки!',
    component: 'Fence'},
  {title: 'Инфокиоски', html: 'В парке стоят 2 будки, где можно оставить своё мнение о реконструкции парка', component: 'btnGoToKiosk'},
  {title: 'Фин. Мониторинг', 
    html: `Отправить аргументированную жалобу на неправомерное расходование бюджетных средств в парке`,
    component: 'Rfm'},
  {title: 'Счётная палата', 
    html: `В Контрольно-счётную палату города Москвы
      <br>эл. приёмная  <a href="https://ksp.mos.ru/feedback/zapros.php">ksp.mos.ru/feedback/zapros.php</a>
      <br>Тема обращения: <code>Неправомерность расходов бюджетных средств</code>
    `,
    component: 'copyButtonKSP',
  },
  {title: 'Подписать петиции', html: `
      <ul>
        <li><a href="https://chng.it/wwPKsTF7">петиция</a> на Change.org </li>
        <li><a href="https://act.greenpeace.org/page/94412/action/1">петиция</a> GreenPeace</li>
      </ul>
      <p>Набравшие тысячи подписей петиции передают в мэрию или президенту.</p>
      <p class="my-0">Подписавшим по эл. почте поступят важные обновления по теме.</p>`,
  },
  {title: 'Присоединиться', html: `
      <ul>
        <li><a href="https://www.facebook.com/groups/pipstreshnevo">группа в Facebook</a></li>
        <li><a href="https://t.me/streshnevo_save">чат в Telegram</a></li>
      </ul>
    `,
  },
];
