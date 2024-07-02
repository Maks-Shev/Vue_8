<template>
  <div>
    <!-- heaeder -->
    <div class="container_baner_project">
      <div class="baner_project">
        <div class="title_baner_project_container">
          <div class="title_baner_project">
            <h2 class="header_baner_blog">Наш проект</h2>
            <div class="text_baner_blog">
              <router-link to="/">Домой</router-link>
              <span>/</span>
              <router-link to="/project">Проект</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- main -->
    <CategoryFilterProject :selectedCategory="selectedCategory" @category-selected="filterItems" />
    <div class="container_project">
      <div class="progect_item_card" v-for="item in paginatedCatalog" :key="item.id">
        <img :src="item.image" alt="">
        <div class="sub_content_project">
          <div class="sub_content_left">
            <h3>{{ item.title }}</h3>
            <span>{{ item.desc_text }}</span>
          </div>
          <div class="sub_content_right">
            <router-link to="/projectDetails" class="nav_btn"></router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <ul class="pagination__list">
        <li v-for="page in totalPages" :key="page" class="pagination__item" :class="{
          pagination__item_active: page == currentPage,
        }" :data-pagination="page">
          <router-link :to="`/project/${page}`">{{ page }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CategoryFilterProject from '@/components/CategoryFilterProject.vue'
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'ProjectComp',
  components: { CategoryFilterProject },
  data () {
    return {
      perPage: 6,
      currentPage: 1
    }
  },
  computed: {
    ...mapState(['selectedCategory']),
    ...mapGetters(['filteredItems']),

    totalPages () {
      return Math.ceil(this.filteredItems.length / this.perPage)
    },
    paginatedCatalog () {
      const startIndex = (this.currentPage - 1) * this.perPage
      return this.filteredItems.slice(startIndex, startIndex + this.perPage)
    }
  },
  methods: {
    ...mapMutations(['SET_CATEGORY']),
    filterItems (category) {
      this.SET_CATEGORY(category)
    },
    updateCurrentPage () {
      this.currentPage = parseInt(this.$route.params.page, 10) || 1
    }
  },
  watch: {
    '$route.params.page': 'updateCurrentPage'
  },
  mounted () {
    this.updateCurrentPage()
  }
}
</script>

<style lang="scss" scoped>
.baner_project {
  background-image: url(/public/img_project/header_photo_project_badroom.jpeg);
  width: 100%;
  height: 356px;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.title_baner_project_container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 500px;
  height: 160px;
  border-radius: 37px 37px 0 0;
}

.container_project {
  display: flex;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 35px;
  padding: 20px;
  max-width: 1200px;
  margin: 60px auto 0;
}

.header_baner_blog {
  font-family: DM-serif;
  font-size: 50px;
  font-weight: 700;
  color: #292F36;
  align-items: center;
}

.text_baner_blog {
  font-family: Jost-Regular;
  font-size: 22px;
  font-weight: 400;
  color: #4D5053;
}

.sub_content_left h3 {
  font-family: DM-serif;
  font-size: 25px;
  font-weight: 400;
  color: #292F36;
}

.sub_content_left span {
  font-family: Jost-Regular;
  font-size: 22px;
  font-weight: 400;
  color: #4D5053;
}

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
}</style>
