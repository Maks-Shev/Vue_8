<template>
  <div>
    <div class="container_baner_blog">
      <div class="backgroud_container_blog"></div>
      <div class="title_baner_blog_container">
        <div class="title_baner_blog">
          <h2 class="header_baner_blog">Статьи & Новости</h2>
          <div class="text_baner_blog">
            <router-link to="/">Домой</router-link>
            <span>/</span>
            <router-link to="/blog">Блог</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="container_latest_post">
      <h2>Последний пост</h2>
      <div class="latest_post_block" v-for="latest in latestDataBlog" :key="latest.title">
        <div class="img_latest_post_left">
          <img :src="latest.image" alt="img_latest_post">
        </div>
        <div class="block_latest_right">
          <div class="content_latest_post_right_up">
          <h2>{{ latest.title }}</h2>
          <p>{{ latest.descText }}</p>
        </div>
        <div class="content_latest_post_right_down">
          <span>{{ latest.date }}</span>
          <router-link :to="`/blog/${latest.id}`"></router-link>
        </div>
        </div>
      </div>
    </div>
    <div class="container_news">
      <div class="blog_news">
        <div class="content_blog_news">
          <h2 class="title_blog_news">Статьи & Новости</h2>
        </div>
        <div class="blog_list_news">
          <div class="blog_item_news" v-for="item in paginatedDataBlog" :key="item.id">
            <div class="img_blog_news">
              <img :src="item.image" alt="">
              <p class="img_blog_text_news">{{ item.imgText }}</p>
            </div>
            <div class="sub_content_blog_news">
              <div class="sub_blog_left_news">
                <h3>{{ item.subTitle }}</h3>
              </div>
              <div class="sub_blog_right_news">
                <span>{{ item.subDate }}</span>
                <router-link :to="`/blogDetails`"></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        <!-- Пагинация -->
    <div class="pagination">
      <ul class="pagination__list">
        <li v-for="page in totalPages" :key="page" class="pagination__item" :class="{
          pagination__item_active: page == currentPage,
        }" :data-pagination="page">
          <router-link :to="{ path: '/blog', query: { page } }" @click="setPage(page)">{{ page }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'BlogComp',
  computed: {
    ...mapState(['latestDataBlog']),
    ...mapGetters(['paginatedDataBlog', 'totalPages', 'currentPage']),
    currentPage () {
      return this.$route.query.page ? parseInt(this.$route.query.page) : 1
    }
    // currentPage: {
    //   get () {
    //     return this.$store.state.currentPage
    //   },
    //   set (page) {
    //     this.setCurrentPage(page)
    //   }
    // }
  },
  methods: {
    ...mapActions(['setCurrentPage']),
    setPage (page) {
      this.setCurrentPage(page)
    }
  },
  watch: {
    '$route.query.page': {
      handler () {
        this.setPage(this.currentPage)
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination__list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 50px;
    margin-bottom: 200px;
  a {
    display: flex;
      justify-content: center;
      align-items: center;
      font-family: Jost-semibold;
      font-size: 16px;
      font-weight: 500;
      width: 52px;
      height: 52px;
      color: rgb(41, 47, 54);
      border: 1px solid rgb(205, 162, 116);
      border-radius: 50%;
  }
  // a:last-child {
  //     background-image: url(../assets/image/img/go.svg);
  //     background-repeat: no-repeat;
  //     background-position: center;
  //     background-size: 7px;
  //   }
  .pagination__item_active {
      background-color: rgb(244, 240, 236);
      border-radius: 50%;
      border: none;
  }

  a:hover {
    color: #C4C4C4;
  }
}
</style>
