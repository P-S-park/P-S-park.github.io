<template>
  <AppealMulti
    title="Предъявите порубочный билет"
    brief="У фонтана срубили берёзу. Пусть покажут порубочный билет."
    :targets="targets"
  />
</template>

<script>
import AppealMulti from '../AppealMulti.vue';


const recepient1 = 'ДПиООС, Кульбачевский';
const recepient2 = 'МосПрирода, Видяпин';

const address1 = `Руководителю Департамента природопользования и охраны окружающей среды
<br>Кульбачевскому А. О.
<br><a href="https://www.mos.ru/feedback/reception/?department=20703090">Эл. приёмная ДПиООС</a>
<br>поставить галочку <code>Обращение должностному лицу</code>
<br>выбрать <code>Кульбачевский Антон Олегович</code>
<br>Тема: <code>порубочный билет</code>
`;

const address2 = `Руководителю ГПБУ «Мосприрода» Видяпину В.В.
<br>Эл. почта <a href="mailto:mospriroda@eco.mos.ru">mospriroda@eco.mos.ru</a> 
<br>Тема: <code>порубочный билет</code>
`;

const text = `С января 2022 года в ООПТ ПИП Покровское-Стрешнево выполняются работы в рамках реализации проекта "по приведению в нормативное состояние парковой и прилегающих территорий в районе Покровское-Стрешнево города Москвы» 

На прошлой неделе начались работы по демонтажу нового фонтана, находящегося рядом с дирекцией ООПТ.

13.02.2022 мною замечено исчезновение высокого здорового дерева-березы, произраставшей в непосредственной близости к фонтану.

Прошу предоставить мне копию порубочного билета срубленной березы для ознакомления. 

Фото березы у фонтана и ее отсутствие прилагаю.


С уважением,
`;

const text1 = `Уважаемый Антон Олегович,

${text}`;

const text2 = `Уважаемый Виталий Витальевич,

${text}`;

const urlAttachments = 'https://disk.yandex.ru/i/d26cVP2t1hSJcQ';
const urlLetter1 = 'https://disk.yandex.ru/i/SQ700r3UNEcbOg'; // dpioos
const urlLetter2 = 'https://disk.yandex.ru/i/nsy8LbrNuRW19Q'; // mospriroda

const targets = [
  { recepient: recepient1, address: address1, text: text1, urlAttachments, urlLetter: urlLetter1, },
  { recepient: recepient2, address: address2, text: text2, urlAttachments, urlLetter: urlLetter2, },
];2


export default {
  components: {
    AppealMulti,
  },
  data() {
    return {
      targets,
    };
  },
}
</script>
