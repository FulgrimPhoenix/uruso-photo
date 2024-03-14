import logo from "../images/icons/logo.svg";
import menuIcon from "../images/icons/menuNavBarIcon.svg";
import menuExitButton from "../images/popup/popup__exit_black.svg"
import photoIcon from "../images/icons/photoIcon.svg";
import vkIcon from "../images/icons/vkIcon.png";
import telegramIcon from "../images/icons/telegaIcon.png";
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

import exitButton from "../images/popup/popup__exit.svg"

export const constants = {
  header: {
    logo: logo,
    menuIcon: menuIcon,
    menuExitButton: menuExitButton,
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
        title: "Фото",
        link: "#portfolioPhoto",
      },
      {
        title: "Видео",
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
    specialization: "профессиональный фотограф",
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
        description: `Фотосессия для семьи и друзей, 
        включая индивидуальные, парные и групповые фотосессии. 
        Студийная фотосессия с возможностью выбора фона и реквизита. 
        Фотосессия на природе, позволяющая запечатлеть красоту 
        окружающего мира.`,
      },
      {
        img: photoIcon,
        title: "Видеосъёмка",
        description: `Съемка и монтаж свадебного видео;
        Создание корпоративных видеороликов;
        Съемка и обработка видео с праздников и мероприятий;
        Постпродакшн и цветокоррекция видео;
        Ретушь и добавление спецэффектов на видео;`,
      },
      {
        img: photoIcon,
        title: "Слежка за соседями",
        description: `С огромным опытом и профессионализмом, я всегда 
        готов помочь вам узнать, что происходит в вашем районе. Моя 
        главная цель – обеспечить вашу безопасность и комфорт, 
        предоставляя информацию о подозрительных действиях и событиях.`,
      },
    ],
  },
  aboutMe: {
    sectionTitle: "Обо мне",
    title: "Андрей",
    subtitle: "Ландшафтный фотограф, 33 года",
    description: `Позвольте представиться. Я - фотограф с высшим образованием, 
    родившийся и проживающий в городе Москве. С самого детства я увлекаюсь 
    фотографией и компьютерными играми, находя в этих занятиях вдохновение 
    для моего творчества. Моя страсть и стремление - запечатлеть красоту 
    окружающего мира, поделиться его гармонией и неповторимостью. В 
    работе я учитываю все пожелания заказчика, предлагаю индивидуальный подход 
    и творческий взгляд на каждую задачу. Буду рад сотрудничеству и уверен, 
    что мы сможем реализовать самые смелые идеи и проекты.`,
    photo: aboutMePhoto,
    navBarTitle: "Подписывайтесь на меня в соцсетях!",
    navBar: [
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
    sectionTitle: "Видео",
    sectionSubtitle: "Мои работы по видеосъемке",
    linkOnMyYouTube: "https://www.youtube.com/watch?v=K7XHy8nppf4",
    textOnYouTubeLink: "Больше моих работ →",
  },
  photoPortfolio: {
    sectionTitle: "Фото",
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
    title: "Следите за мной в социальных сетях!",
    navBar: [
      {
        title: "телеграмм",
        icon: footerTelegramIcon,
        link: "https://t.me/uruso",
      },
      {
        title: "вконтакте",
        icon: footerVkIcon,
        link: "https://vk.com/urusof",
      },
    ],
  },
  cooperation: {
    sectionTitle: "Клиенты",
    sectionSubtitle: "Среди моих клиентов:",
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
