import bus_icon_disactive from "./assets/icons/about_banner/delivery_disactive.svg";
import bus_icon_active from "./assets/icons/about_banner/delivery_active.svg";
import economy_icon_disactive from "./assets/icons/about_banner/money_list_disactive.svg";
import economy_icon_active from "./assets/icons/about_banner/money_list_active.svg";
import stock_icon_disactive from "./assets/icons/about_banner/discount_disactive.svg";
import stock_icon_active from "./assets/icons/about_banner/discount_active.svg";
import layers_icon_disactive from "./assets/icons/about_banner/layers_diactive.svg";
import layers_icon_active from "./assets/icons/about_banner/layers_active.svg";

export const titleArray = [
    {id: 1, title: 'Популярные товары'},
    {id: 2, title: 'Почему именно мы?'},
    {id: 3, title: 'Новинки'},
    {id: 4, title: 'Свяжитесь с нами'}
]

export const bannerElement = [
    {
        id: 1,
        icon_url: bus_icon_disactive,
        active_url: bus_icon_active,
        title: 'Самая быстрая доставка',
        body: 'Доставка в любую точку Москвы, Московской области и в регионы РФ. Получите заказ можно и самостоятельно на ближайшем к вам складе'
    },
    {
        id: 2,
        icon_url: economy_icon_disactive,
        active_url: economy_icon_active,
        title: 'Мы экономим ваши деньги',
        body: 'Доставка в любую точку Москвы, Московской области и в регионы РФ. Получите заказ можно и самостоятельно на ближайшем к вам складе'
    },
    {
        id: 3,
        icon_url: stock_icon_disactive,
        active_url: stock_icon_active,
        title: 'Скидки и акции',
        body: 'Доставка в любую точку Москвы, Московской области и в регионы РФ. Получите заказ можно и самостоятельно на ближайшем к вам складе'
    },
    {
        id: 4,
        icon_url: layers_icon_disactive,
        active_url: layers_icon_active,
        title: 'Ответственный подход к сборке заказа',
        body: 'Доставка в любую точку Москвы, Московской области и в регионы РФ. Получите заказ можно и самостоятельно на ближайшем к вам складе'
    }
]

export const deliveryData = [
    {
        id: 1,
        title: 'Адресная доставка по Москве и Санкт-Петербургу зависит от суммы заказа в интернет-магазине "Grundshop":',
        sub_body: '< 25.000 рублей - 500 рублей. > 25.000 рублей - БЕСПЛАТНО!'
    },
    {
        id: 2,
        title: 'Доставка за МКАД',
        body: 'Доставка за пределы МКАД рассчитывается согласно тарифу.',
        sub_body: '25 руб./км'
    },
    {
        id: 3,
        title: 'Забрать заказ можно самостоятельно',
        body: 'Забрать заказ можно самостоятельно из пунктов выдачи, расположенных в пределах Москвы и Санкт-Петербурга. Если Вы выбираете самовывоз, предупредите об этом менеджера и на Вашу e-mail отправят накладную, распечатав которую Вы сможете получить свой заказ.'
    },
    {
        id: 4,
        title: 'Доставка товаров транспортной компанией по России.',
        body: ' Мы сотрудничаем с известными транспортными компаниями, осуществляющими доставку грузов по всем городам России. Вы можете самостоятельно выбрать компанию, которой доверите транспортировку заказа, а мы осуществим отправку. Стоимость услуги зависит от тарифов грузоперевозчика. Ответственность за сохранность посылки несет перевозчик.'
    }
]

export const footerPhones = [
    {id: 1, title: 'Отдел продаж Москва', phone: '8 (499) 460-67-61', tel: '+84994606761'},
    {id: 2, title: 'Отдел продаж Санкт-Петербург', phone: '8 (812) 748-22-35', tel: '+88127482235'},
    {id: 3, title: 'Сервисный центр', phone: '8 (499) 288-74-79', tel: '+84992887479'}
]


export const loaderContent = [
    {id:1}, {id:2}, {id:3}, {id:4}, {id:5}, {id:6}, {id:7}, {id:8}, {id:9},
]

export const coreParams = [
    {id: 1, slug: 'wishlist', title: 'Избранное'},
    {id: 2, slug: 'compare', title: 'Сравнение товаров'},
    {id: 3, slug: 'cart', title: 'Корзина'},
]

export const optionsArray = [
    {id: 1, value: 'nameTop', name: 'По названию от А до Я'},
    {id: 2, value: 'nameBottom', name: 'По названию от Я до А'},
    {id: 3, value: 'priceTop', name: 'По возрастанию цены'},
    {id: 4, value: 'priceBottom', name: 'По убыванию цены'},
]

export const paymentArray = [
    {
        id: 1,
        title: 'Как заказать насос в интернет-магазине «grundshop»?',
        first_text: 'Сегодня практически каждый человек активно пользуется услугами интернет-магазинов и знает, что покупка интересующего товара занимает минимум времени. Именно за простоту, удобство и оперативность покупатели любят онлайн-покупки.',
        sub_title: 'Как правило, для того чтобы заказать интересующий товар нужно сделать три простых действия:',
        list: [
            'Выбрать подходящую модель.',
            'Отправить товар в виртуальную «Корзину».',
            'Заполнить форму заказа.'
        ],
        sub_title_option: 'Что представляет собой форма онлайн-заказа?',
        second_text: 'Список полей, которые необходимо заполнить, для того чтобы менеджер имел полную информацию о заказе (модель, количество единиц) и краткую информацию о заказчике (имя, телефон, email). ',
        third_text: 'После отправки письмо обрабатывается сотрудниками центра обслуживания клиентов. И в ближайшее время с покупателем связывается менеджер. Подробная информация связанная с покупкой, удобным способом оплаты, способом доставки обсуждается по телефону.'
    },
    {
        id: 2,
        title: 'Как оплатить покупки в интернет-магазине «grundshop»?',
        first_text: 'Если Вы покупаете товар через интернет, то имеете те же самые возможности оплаты, что и во время шоппинга в обычном магазине.',
        sub_title: 'Мы предлагаем самые удобные, распространенные и надежные способы оплаты:',
        list: [
            'Наличными. Оплатить покупки наличными можно во время получения заказа на складе (самовывоз), либо во время доставки товара по адресу (курьерская доставка по Москве и области).',
            'Оплата по безналу. Оптимальный вариант для предприятий, юридических и частных лиц.',
        ],
        sub_title_option: '',
        second_text: 'Оптимальный для покупателя способ оплаты обсуждается в момент оформления заказа, точно так же как и способ доставки. Независимо от выбранного варианта финансового расчета мы принимаем оплату в российских рублях.'
    },
    {
        id: 3,
        title: 'Возврат и обмен товара,  возврат финансовых средств',
        first_text: 'Интернет-магазин «Grundshop» работает согласно ст. №26 Закона РФ «О защите прав потребителей». Наши покупатели защищены и имеют право вернуть заказ в течение 14 дней с момента покупки.',
        sub_title: 'Возврат или обмен приобретенного товара выполняется при условии соблюдения правил, установленных законом.',
        list: [
                'Наличие товарного чека, гарантийного талона и других документов, подтверждающих покупку в нашем интернет-магазине.',
                'Товар не должен быть в эксплуатации.',
                'Оборудование должно иметь товарный вид.',
                'Отсутствие следов монтажа и любых других действий, например проникновения внутрь конструкции.',
                'Отсутствие царапин и других повреждений.'
        ],
        second_text: 'Во время получения заказа покупатель осматривает товар, забирает его, только после того как убедится в качестве, целостности и работоспособности. Если Вы решили отказаться от товара после заказа, сообщите нам о своем решении как можно скорее, чтобы отменили его отгрузку и доставку. ',
        third_text: 'Благодарим Вас за пониманием и желаем удачных покупок, которые Вы точно не захотите возвращать. Мы гарантируем высокое качество и оригинальность товаров компании Grundfos. Все насосы имеют гарантийные талоны производителя.'
    }
]