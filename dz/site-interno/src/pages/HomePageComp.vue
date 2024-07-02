<template>
  <div>
    <div class="header_title">
      <h1>Пусть ваш дом будет уникальным</h1>
      <p>Существует много вариаций Lorem Ipsum, которые можно использовать</p>
      <router-link to="/project" class="nav_btn">
        Начать
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887" stroke="#CDA274"
            stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
        </svg>
      </router-link>
    </div>
    <div class="project">
      <div class="content_project">
        <h2 class="title_project">Следите за нашими проектами</h2>
        <p class="text_project">Хорошо известно, что читатель будет отвлекаться на читабельный контент страницы </p>
      </div>
      <div class="container_block_project">
        <div class="block_project" v-for="item in dataProject" :key="item">
          <div class="img_project">
            <img :src="getImageProject(item.imageProject)" alt="">
          </div>
          <div class="sub_content_project">
            <div class="sub_content_left">
              <h3>{{ item.title }}</h3>
              <span>{{ item.desc }}</span>
            </div>
            <div class="sub_content_right">
              <router-link to="/project"></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section>
      <div class="couter_container">
        <div class="counter_block">
          <div class="counter_content">
            <h2 class="num_count">12</h2>
            <span class="text_count">Лет опыта</span>
          </div>
          <div class="count_line"></div>
          <div class="counter_content">
            <h2 class="num_count">85</h2>
            <span class="text_count">Успешных проектов</span>
          </div>
          <div class="count_line"></div>
          <div class="counter_content">
            <h2 class="num_count">15</h2>
            <span class="text_count">Проектов в работе</span>
          </div>
          <div class="count_line"></div>
          <div class="counter_content">
            <h2 class="num_count">95</h2>
            <span class="text_count">Счастливых клиентов</span>
          </div>
        </div>
      </div>
    </section>
    <div class="blog_container">
      <div class="blog">
        <div class="content_blog">
          <h2 class="title_blog">Статьи & Новости</h2>
          <p class="text_blog">Хорошо известно, что читатель будет отвлекаться на читабельный контент страницы </p>
        </div>
        <div class="blog_list">
          <div class="blog_item" v-for="item in dataBlog" :key="item.id">
            <div class="img_blog">
              <img :src="getImage(item.image)" alt="">
              <p class="img_blog_text">{{ item.imgText }}</p>
            </div>
            <div class="sub_content_blog">
              <div class="sub_blog_left">
                <h3>{{ item.subTitle }}</h3>
              </div>
              <div class="sub_blog_right">
                <span>{{ item.subDate }}</span>
                <router-link to="/blog"></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'HomePageComp',
  data () {
    return {
      dataBlog: [
        {
          id: 1,
          image: 'blogPhoto_1.png',
          imgText: 'Дизайн кухни',
          subTitle: 'Создадим лучший макет перепланировки',
          subDate: '26 Декабрь 2022'
        },
        {
          id: 2,
          image: 'blogPhoto_2.png',
          imgText: 'Дизайн для жизни',
          subTitle: 'Лучшие интерьерные идеи по низкой цене',
          subDate: '22 Декабрь 2022'
        },
        {
          id: 3,
          image: 'blogPhoto_3.png',
          imgText: 'Дизайн Интерьера',
          subTitle: 'Лучшие интерьерные решения для офисов',
          subDate: '25 Декабрь 2022'
        }
      ],
      dataProject: [
        {
          id: 1,
          imageProject: 'projectPhoto_1.png',
          title: 'Современная кухня',
          desc: 'Декор / Планировка'
        },
        {
          id: 2,
          imageProject: 'projectPhoto_2.png',
          title: 'Современная кухня',
          desc: 'Декор / Планировка'
        },
        {
          id: 3,
          imageProject: 'projectPhoto_3.png',
          title: 'Современная кухня',
          desc: 'Декор / Планировка'
        },
        {
          id: 4,
          imageProject: 'projectPhoto_4.png',
          title: 'Современная кухня',
          desc: 'Декор / Планировка'
        }
      ]
    }
  },
  methods: {
    getImage (image) {
      return require(`../assets/image/img/${image}`)
    },
    getImageProject (imageProject) {
      return require(`../assets/image/img/${imageProject}`)
    }
  }
}
</script>

<style lang="scss" scoped>

.header_title {
  background-image: url('../assets/image/img/header_foto.jpeg');
  background-size: cover;
  background-position: center;
  max-width: 1200px;
  height: 760px;
  border-radius: 68px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  h1 {
    font-family: DM-serif;
    font-size: 65px;
    font-weight: 400;
    color: #292F36;
    max-width: 530px;
    margin-left: 52px;
    margin-bottom: 18px;
  }
  p {
    font-family: Jost-Regular;
    font-size: 22px;
    font-weight: 400;
    color: #4D5053;
    max-width: 430px;
    margin-left: 52px;
  }
  .nav_btn {
    font-family: Jost-semibold;
    font-size: 18px;
    font-weight: 600;
    color: rgb(255, 255, 255);
    background-color: #292F36;
    width: 190px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    margin-top: 21px;
    margin-left: 52px;
    gap: 10px;
    cursor: pointer;
    svg {
      width: 15px;
      height: 13px;
    }
  }
}
</style>
