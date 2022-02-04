<template>
  <Appeal
    title="Обращение в Глав Контроль"
    brief="Снесли спорт-площадки, построенные совсем недавно"
    :recepients="recepients"
    :text="text"
    urlAttachments="https://disk.yandex.ru/d/InDI41SHvhk82w"
  />
</template>

<script>
import Appeal from '../Appeal.vue';

const recepients = `<h3>Департаменты</h3>
<a href="https://www.mos.ru/feedback/reception/?department=19966090">Департамент капитального ремонта</a>, 
<br><a href="https://www.mos.ru/feedback/reception/?department=20703090">Департамент природопользования и охраны окружающей среды</a>,
эл. почта: <a href="mailto:depmospriroda@mos.ru">depmospriroda@mos.ru</a>

<h3>Префектуры</h3>
Префектура СЗАО:
<a href="https://www.mos.ru/feedback/reception/?department=103136090">Эл. приёмная</a>,
<a href="mailto:szao@mos.ru">szao@mos.ru</a>

<br>Префектура САО:
<a href="https://www.mos.ru/feedback/reception/?department=21651090">Эл. приёмная</a>,
<a href="mailto:sao@mos.ru">sao@mos.ru</a>

<h3>Муниципальные депутаты</h3>
Покровское-Стрешнево: <a href="http://pkstr.ru/Default.aspx?tabid=113">эл. приёмная</a>
<br>Войковский: <a href="mailto:voikovskii@mail.ru">voikovskii@mail.ru</a>
`;

const text = `В настоящее время демонтируются спортивные площадки - для волейбола и баскетбола, 
построенные в 2018-19гг около Четвёртого Иваньковского пруда 
в ходе реализации проекта «благоустройства» каскада прудов 
на территории ООПТ ПИП Покровское-Стрешнево 
(заказчик ДПиООС, подрядчик ООО Техстрой, стоимость контракта 1,357 млрд рублей)

Прошу сообщить нормативный срок использования данной инфраструктуры и приложить Акт обследования этих площадок.

Если качество оборудования спортплощадок претерпело существенное ухудшение, 
то прошу обязать подрядчика ООО Техстрой произвести замену оборудования 
за свой счет.

В противном случае, требую остановки работ и сохранения имеющейся инфраструктуры.
`;


export default {
  components: {
    Appeal,
  },
  data() {
    return {
      recepients,
      text,
    };
  },
}


</script>
