export default {
  state: {
    // Начальное состояние
    selectedCategory: 'Спальня',
    latestDataBlog: [
      {
        id: 1,
        image: '/img/main_foto_blog.png',
        title: 'Low Cost Latest Invented Interior Designing Ideas',
        descText: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов. Перед появлением электронных издательств дизайнеры импровизировали в работе над макетами, изображая текст при помощи волнистых линий. С появлением самоклеющихся наклеек с напечатанным текстом «Lorem ipsum» появился более реалистичный способ обозначения расположения текста на странице.',
        date: '26 Декабрь 2022'
      }
    ],
    dataBlog: [
      {
        id: 1,
        image: '/img/blogPhoto_1.png',
        imgText: 'Дизайн кухни',
        subTitle: 'Создадим лучший макет перепланировки',
        subDate: '26 Декабрь 2022'
      },
      {
        id: 2,
        image: '/img/blogPhoto_2.png',
        imgText: 'Дизайн для жизни',
        subTitle: 'Лучшие интерьерные идеи по низкой цене',
        subDate: '22 Декабрь 2022'
      },
      {
        id: 3,
        image: '/img/blogPhoto_3.png',
        imgText: 'Дизайн Интерьера',
        subTitle: 'Лучшие интерьерные решения для офисов',
        subDate: '25 Декабрь 2022'
      },
      {
        id: 4,
        image: '/img/blogPhoto_4.jpeg',
        imgText: 'Дизайн кухни',
        subTitle: 'Лучшие интерьерные решения для офисов',
        subDate: '25 Декабрь 2022'
      },
      {
        id: 5,
        image: '/img/blogPhoto_5.jpeg',
        imgText: 'Дизайн для жизни',
        subTitle: 'Лучшие интерьерные решения для офисов',
        subDate: '25 Декабрь 2022'
      },
      {
        id: 6,
        image: '/img/blogPhoto_6.png',
        imgText: 'Дизайн Интерьера',
        subTitle: 'Лучшие интерьерные решения для офисов',
        subDate: '25 Декабрь 2022'
      }
    ],
    items_project: [
      {
        id: 1,
        image: '/img_project/project_badroom_1.jpeg',
        title: 'Минималистичная спальня',
        desc_text: 'Декор / Планировка',
        category: 'Спальня'
      },
      {
        id: 2,
        image: '/img_project/project_badroom_2.jpeg',
        title: 'Минималистичная спальня',
        desc_text: 'Декор / Планировка',
        category: 'Спальня'
      },
      {
        id: 3,
        image: '/img_project/project_badroom_1.jpeg',
        title: 'Классическая спальня',
        desc_text: 'Декор / Планировка',
        category: 'Спальня'
      },
      {
        id: 4,
        image: '/img_project/project_badroom_4.jpeg',
        title: 'Современная спальня',
        desc_text: 'Декор / Планировка',
        category: 'Спальня'
      },
      {
        id: 5,
        image: '/img_project/project_badroom_5.jpeg',
        title: 'Минималистичный прикроватный столик',
        desc_text: 'Декор / Планировка',
        category: 'Спальня'
      },
      {
        id: 6,
        image: '/img_project/project_badroom_6.jpeg',
        title: 'Столы и столики',
        desc_text: 'Декор / Планировка',
        category: 'Спальня'
      },
      {
        id: 7,
        image: '/img_project/project_badroom_7.jpeg',
        title: 'Современная спальня',
        desc_text: 'Декор / Планировка',
        category: 'Спальня'
      },
      {
        id: 8,
        image: '/img_project/project_badroom_8.jpeg',
        title: 'Современная спальня',
        desc_text: 'Декор / Планировка',
        category: 'Спальня'
      }
    ],
    slides: [
      {
        id: 1,
        src: '/slider/slired_photo_1.jpeg',
        title: 'Минималистическая спальня',
        desc_text: 'Декор / Планировка'
      },
      {
        id: 2,
        src: '/slider/slired_photo_2.jpeg',
        title: 'Минималистическая спальня',
        desc_text: 'Декор / Планировка'
      },
      {
        id: 3,
        src: '/slider/slired_photo_3.jpeg',
        title: 'Минималистическая спальня',
        desc_text: 'Декор / Планировка'
      }
    ],
    currentImageIndex: 0,
    perPage: 4,
    currentPage: 1
  },
  mutations: {
    // Методы для изменения состояния
    // ProjectComp
    SET_CATEGORY (state, category) {
      state.selectedCategory = category
    },
    SET_CURRENT_IMAGE_INDEX (state, index) {
      state.currentImageIndex = index
    },
    // BlogComp
    SET_CURRENT_PAGE (state, page) {
      state.currentPage = page
    }
  },
  getters: {
    // Методы для чтения состояния
    // ProjectComp
    filteredItems: (state) => {
      if (state.selectedCategory === 'все проекты') {
        return state.items_project
      }
      return state.items_project.filter(item => item.category === state.selectedCategory)
    },
    // Slider
    currentImage (state) {
      return state.slides[state.currentImageIndex]
    },
    totalImages (state) {
      return state.slides.length
    },
    // BlogComp
    paginatedDataBlog: state => {
      const startIndex = (state.currentPage - 1) * state.perPage
      const endIndex = startIndex + state.perPage
      return state.dataBlog.slice(startIndex, endIndex)
    },
    totalPages: state => {
      return Math.ceil(state.dataBlog.length / state.perPage)
    }
  },
  actions: {
    // Методы для асинхронных операций
    // BlogComp
    setCurrentPage ({ commit }, page) {
      commit('SET_CURRENT_PAGE', page)
    }
  }
}
