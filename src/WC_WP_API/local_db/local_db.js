export const menuArray = [
  { id: 1, title: "Каталог", link: "/catalog" },
  { id: 2, title: "Главная", link: "/" },
  { id: 3, title: "Контакты", link: "/contacts" },
  { id: 4, title: "Доставка", link: "/dostavka" },
  { id: 5, title: "Оплата", link: "/payment" },
];

export const subMenu = [
  { id: 1, title: "Комплектующие", link: "/catalog/komplektuyushchie" },
  { id: 2, title: "Калькулятор подбора насоса", link: "/calculator" },
  { id: 3, title: "Осторожно!", link: "/contacts" },
];

export function getNoun(number, one, two, five) {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
}

export const footerPhones = [
  { id: 1, title: "Отдел продаж Москва", phone: "8 (499) 460-67-61" },
  { id: 2, title: "Отдел продаж Санкт-Петербург", phone: "8 (812) 748-22-35" },
  { id: 3, title: "Сервисный центр", phone: "8 (499) 288-74-79" },
];

export const footerInfoPages = [
  { id: 1, name: "Доставка", slug: "/dostavka" },
  { id: 2, name: "Оплата", slug: "/oplata" },
  { id: 3, name: "Документация", slug: "/dokumentacia" },
  { id: 4, name: "Осторожно", slug: "/ostorogno" },
  { id: 5, name: "Контакты", slug: "/contacts" },
];

export const attributesDefaultList = [
  { id: 36, name: "Гарантия", slug: "pa_garantija", options: [] },
  {
    id: 30,
    name: "Max рабочее давление (бар)",
    slug: "pa_max-rabochee-davlenie-bar",
    options: [],
  },
  { id: 33, name: "Размеры (ШхВхД)", slug: "pa_razmery-shhvhd", options: [] },
  {
    id: 31,
    name: "Максимальный напор",
    slug: "pa_maksimalnyj-napor",
    options: [],
  },
  {
    id: 28,
    name: "Пропуск. способность (куб.\\/час)",
    slug: "pa_propusk-sposobnost-kub-chas",
    options: [],
  },
  {
    id: 32,
    name: "Установка насоса",
    slug: "pa_ustanovka-nasosa",
    options: [],
  },
  { id: 34, name: "Класс защиты", slug: "pa_klass-zashhity", options: [] },
  { id: 35, name: "Вес", slug: "pa_ves", options: [] },
];
