import logo from "../images/logo.svg";
import photoIcon from "../images/icons/photoIcon.svg"
import vkIcon from "../images/icons/vkIcon.png"
import telegramIcon from "../images/icons/telegaIcon.png"
import aboutMePhoto from "../images/myPhoto.jpg"

export const constants = {
  header: {
    logo: logo,
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
        title: "Отзывы",
        link: "#testimonials",
      },
    ],
  },
  intro: {
    greeting: "Привет, я ",
    name: "Урусов Андрей",
    specialization: "профессиональный фотограф",
    buttonText: "Давай поговрим",
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
        link: "https://t.me/uruso"
      },
      {
        title: "вконтакте",
        icon: vkIcon,
        link: "https://vk.com/urusof"
      },
    ]
  }
};
