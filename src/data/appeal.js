export default [
  {
    title: 'Правительство Москвы',
    html: `Электронная приёмная Правительства Москвы
      <a href="https://www.mos.ru/feedback/reception/">mos.ru/feedback/reception</a> 
      <br>Выберите получателя обращения:
      <ol>
        <li>Правительство Москвы</li>
        <li>Окружающая среда &rarr; Департамент природопользования и охраны окружающей среды</li>
        <li>ЖКХ и благоустройство &rarr; Департамент капитального ремонта</li>
        <li>Строительство &rarr; Департамента культурного наследия</li>
      </ol>
      <p>
        Невозможно вставить скопированный текст, поэтому в окошко &laquo;Содержание обращения&raquo; коротко: 
        <br><code>Обращение прикреплено</code> или <code>Текст обращения в приложении</code>, а большое письмо прикрепите файлом.
        <br>Чтобы разблокировать вставку текста, откройте Консоль браузера 
        [<a href="https://help.mail.ru/mail/helpful/console">как?</a>]
        и выполните там следующий код:
        <br><code>document.addEventListener('paste', e => e.stopImmediatePropagation(), true);</code>
      </p>
    `
  },
  {
    title: 'МосПрирода',
    html: `ГПБУ «Мосприрода»
    <br>эл. почта <a href="mailto:mospriroda@eco.mos.ru">mospriroda@eco.mos.ru</a>
    <br>по тел. <a href="tel:+74997392707">8 (499) 739-27-07</a> (или <a href="tel:+74997392705">-05</a>,
    или <a href="tel:+74997392708">-08</a>) &mdash; принимают заявки и сразу регистрируют их`
  },
  {
    title: 'ОАТИ',
    html: `Объединение административно-технических инспекций города Москвы
    <br><a href="https://www.mos.ru/feedback/reception/?department=21519090">https://www.mos.ru/feedback/reception/?department=21519090</a>
    <br>эл. почта <a href="mailto:oati@mos.ru">oati@mos.ru</a>
    `
  },
  {
    title: 'Дирекция парка',
    html: `Дирекция ООПТ ПИП Покровское-Стрешнево
    <br><a href="tel:+74991596581">+7 (499) 159-65-81</a>`
  },


  {
    title: 'Природоохранная прокуратура',
    html: `Межрайонная природоохранная прокуратура г.Москвы
      <br>Эл. почта: <a href="mailto:prokpri@mosproc.ru">prokpri@mosproc.ru</a>
      <br>Эл. приемная: <a href="https://epp.genproc.gov.ru/web/proc_77/internet-reception/personal-receptionrequest">https://epp.genproc.gov.ru/web/proc_77/internet-reception/personal-receptionrequest</a>
    `
  },
  {
    title: 'Тушинская прокуратура',
    html: `Тушинская межрайонная прокуратура
      <br><a href="mailto:proktus@mosproc.ru">proktus@mosproc.ru</a>
      <br>эл. приёмная  <a href="https://epp.genproc.gov.ru/web/proc_77/internet-reception/personal-receptionrequest">https://epp.genproc.gov.ru/web/proc_77/internet-reception/personal-receptionrequest</a>
      <br>При обращении в прокуратуру можно выбрать «Без авторизации», поставить согласие на обработку данных. 
      <br>На вопрос орган прокуратуры выбрать &laquo;Прокуратура субъекта Российской Федерации&raquo;
      <br>Далее – Город федерального значения Москва.
      <br>Потом либо &laquo;Природоохранную&raquo; или &laquo;Тушинскую&raquo; прокуратуру.
      <br>Тема: <code>По вопросам охраны окружающей среды и природопользования</code>
    `,
  },
];
