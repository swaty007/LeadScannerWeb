export default {
  filters: {
    nameKey: (value, keys) => {
      if (typeof (value) === 'number')  {
        return value + 1
      }
      return keys[value] ? keys[value] : value
    },
  },
  data () {
    return {
      keys: {
        NAME: 'Найменування',
        SHORT_NAME: 'Скорочена назва',
        OPF: 'Організаційно-правова форма',
        EDRPOU: 'ЄДРПОУ',
        ADDRESS: 'Адреса',
        STAN: 'Стан',
        FOUNDING_DOCUMENT_NUM: 'Цифровий код модельного статуту ',
        EXECUTIVE_POWER: 'Відомості про центральний чи місцевий орган виконавчої влади, до сфери управління якого належить державне підприємство, або частку держави у статутному капіталі юридичної особи, якщо ця частка становить не менше 25 відсотків',
        FOUNDERS: 'Перелік засновників (учасників)',
        ACTIVITY_KINDS: 'Перелік видів діяльності юридичної особи',
        ACTIVITY_KIND_CODE: 'Код виду діяльності',
        ACTIVITY_KIND_NAME: 'Назва виду діяльності',
        CODE: 'Код виду діяльності',
        PRIMARY: 'Ознака основного виду діяльності',
        SUPERIOR_MANAGEMENT: 'Назва органу управління юридичної особи',
        SIGNERS: 'Перелік  осіб, які можуть вчиняти дії від імені юридичної особи, у тому числі підписувати договори, подавати документи для державної реєстрації тощо',
        AUTHORIZED_CAPITAL: 'Розмір статутного (складеного) капіталу (пайового фонду)',
        STATUTE: 'Вид установчого документа',
        REGISTRATION: 'Дата та номер запису про проведення державної реєстрації юридичної особи',
        MANAGING_PAPER: 'Дані про розпорядчий акт, на підставі якого створено юридичну особу: назва, номер, дата',
        BRANCHES: 'Підрозділи юридичної особи',
        ASSIGNEES: 'Дані про юридичних осіб – правонаступників',
        TERMINATED_INFO: 'Дата та номер запису про державну реєстрацію припинення юридичної особи, підстава для його внесення',
        TERMINATION_CANCEL_INFO: 'Дата та номер запису про відміну державної реєстрації припинення юридичної особи',
        CONTACTS: 'Інформація про здійснення зв’язку з юридичною особою',
        VP_DATES: 'Дата відкриття виконавчого провадження щодо юридичної особи',
        CURRENT_AUTHORITY: 'Місце зберігання реєстраційної справи',
        LastUpdateTime: 'Останнє оновлення',
      },
    }
  },
}
