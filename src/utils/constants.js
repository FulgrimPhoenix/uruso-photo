import logo from "../images/logo.svg";
import photoIcon from "../images/icons/photoIcon.svg"

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
    sectionSubtitle: `Я предоставляю широкий спектр 
    услуг в области съемок`,
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
};
