import logo from "../images/icons/logo.svg";
import menuIcon from "../images/icons/menuNavBarIcon.svg";
import menuExitButton from "../images/popup/popup__exit_black.svg"
import photoIcon from "../images/icons/photoIcon.svg";
import vkIcon from "../images/icons/vkIcon.png";
import telegramIcon from "../images/icons/telegaIcon.png";
import phoneIcon from "../images/icons/PhoneIcon.png";
import headerPhoneIcon from "../images/icons/headerPhoneIcon.png"
import aboutMePhoto from "../images/photos/myPhoto.jpg";
import reviewIcon from "../images/icons/reviewIcon.svg";
import footerTelegramIcon from "../images/icons/footerTelegramIcon.svg"
import footerVkIcon from "../images/icons/footerVkIcon.svg"
import { photos } from "./photos";
import { reviews } from "./reviews";

import mastera from "../images/CompaniesLogos/MasteraRemonta.svg";
import larson from "../images/CompaniesLogos/Larson.svg";
import mdm from "../images/CompaniesLogos/MDMLight.jpg";
import remontKvart from "../images/CompaniesLogos/RemontKvart.svg"
import skn from "../images/CompaniesLogos/SKN.svg";
import KCM from "../images/CompaniesLogos/KCM.png";

import exitButton from "../images/popup/popup__exit.svg";

export const constants = {
  header: {
    logo: logo,
    menuIcon: menuIcon,
    menuExitButton: menuExitButton,
    phoneIcon: headerPhoneIcon,
    phoneLink: "tel: +79096695149",
    pageNavLinks: [
      {
        title: "Услуги",
        link: "#services",
      },
      {
        title: "Обо мне",
        link: "#aboutMe",
      },
      {
        title: "Фотосъёмка",
        link: "#portfolioPhoto",
      },
      {
        title: "Видеосъёмка",
        link: "#portfolioVideo",
      },
      {
        title: "Мои клиенты",
        link: "#cooperation",
      },
      {
        title: "Отзывы",
        link: "#testimonials",
      },
    ],
  },
  intro: {
    greeting: "Привет, я ",
    name: "Урусов Андрей",
    specialization: "интерьерный фотограф и видеооператор",
    buttonText: "Договориться о съемке",
    buttonLink: "https://t.me/uruso",
  },
  service: {
    sectionTitle: "Услуги",
    sectionSubtitle: `У меня вы можете заказать:`,
    cells: [
      {
        img: photoIcon,
        title: "Фотосъёмка",
        description: `Интерьерная фотосъёмка квартир, загородных домов, 
        офисов и других коммерческих помещений. Создание качественного 
        контента для бизнеса и собственников с использованием профессионального 
        оборудования. Ретушь, цветокоррекция и исправление геометрии объектов.`,
      },
      {
        img: photoIcon,
        title: "Монтаж",
        description: `Создание профессионального видео-контента из вашего материала. 
        Монтаж корпоративных фильмов, таймлапсов, интро, анимированных логотипов и другое. 
        Сведение, динамические спецэффекты и ретушь видеоматериала.`,
      },
      {
        img: photoIcon,
        title: "Видеосъёмка",
        description: `Видеосъёмка объектов недвижимости под ключ - от задумки до 
        реализации. Создание интерьерных роликов, обзоров, видео-отзывов и рекламного 
        контента. Аэросъёмка с использованием квадрокоптера. Монтаж любой сложности. 
        Помощь в генерации идей и написании сценариев.`,
      },
    ],
  },
  aboutMe: {
    sectionTitle: "Обо мне",
    title: "Меня зовут Урусов Андрей",
    subtitle: "Ландшафтный фотограф, 33 года",
    description: `Я фотограф и видеограф со стажем более 10 лет. 
    Получил профильное образование в Институте Телевидения и 
    Радиовещания Останкино и выбрал в качестве основной специализации 
    съёмку недвижимости и предметов архитектуры. Я всегда настроен на 
    идеальный результат, нахожу креативные и верные решения для вас, 
    используя свои знания и профессиональное оборудование! Работать 
    со мной легко и приятно, многие клиенты выбирают меня для долгосрочного сотрудничества.`,
    photo: aboutMePhoto,
    navBarTitle: "Со мной можно можно связаться через:",
    navBar: [
      {
        title: "Телефон",
        icon: phoneIcon,
        link: "tel: +79096695149"
      },
      {
        title: "телеграмм",
        icon: telegramIcon,
        link: "https://t.me/uruso",
      },
      {
        title: "вконтакте",
        icon: vkIcon,
        link: "https://vk.com/urusof",
      },
    ],
  },
  videoPortfolio: {
    sectionTitle: "Видеосъёмка",
    sectionSubtitle: "Мои работы по видеосъемке",
    linkOnMyYouTube: "https://www.youtube.com/watch?v=K7XHy8nppf4",
    textOnYouTubeLink: "Больше моих работ →",
  },
  photoPortfolio: {
    sectionTitle: "Фотосъёмка",
    sectionSubtitle: "Мои работы по фотосъемке",
    firstColumnTitle: "Дома",
    secondColumnTitle: "Квартиры",
    thirdColumnTitle: "Моё",
    photos: photos,
  },
  testimonials: {
    sectionTitle: "Отзывы",
    sectionSubtitle: "Мнение клиентов о моей работе",
    reviewIcon: reviewIcon,
    reviews: reviews
  },
  footer: {
    title: "UrusoFoto",
    menuTitle: "Контакты",
    author: "© Иванюшин Илья",
    navBar: [
      {
        title: "Телеграмм",
        icon: footerTelegramIcon,
        link: "https://t.me/uruso",
      },
      {
        title: "Вконтакте",
        icon: footerVkIcon,
        link: "https://vk.com/urusof",
      },
      {
        title: "+79096695149",
        icon: footerTelegramIcon,
        link: "",
      },
    ],
  },
  cooperation: {
    sectionTitle: "Клиенты",
    sectionSubtitle: "Со мной сотрудничают:",
    companies: [
      {
        title: "Мастера Ремонта",
        logo: mastera,
        link: "https://mastera-remonta.com/",
        color: "green"
      },
      {
        title: "Larsson",
        logo: larson,
        link: "https://larsson.pro/",
        color: "pink"
      },
      {
        title: "МДМ-ЛАЙТ",
        logo: mdm,
        link: "https://www.mdm-light.ru/",
        color: "blue"
      },
      {
        title: "Ремонт Кварт",
        logo: remontKvart,
        link: "https://remontkvart-msk.ru/",
        color: "yellow"
      },
      {
        title: "SKN-DOM",
        logo: skn,
        link: "https://skn-dom.ru/",
        color: "light-green"
      },
      {
        title: "Торговый дом КСМ",
        logo: KCM,
        link: "https://tdksm.ru/o-kompanyi/",
        color: "orange"
      },
    ]
  },
  popup: {
    exitButton: exitButton,
  }
};
