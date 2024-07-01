<template>
  <div>
    <div v-for="product in paginatedCatalog" :key="product.id">
      <div>
        Name: {{ product.name }}
      </div>
      <div>
        Price: {{ product.price }}
      </div>
    </div>
    <div v-for="page in totalPages" :key="page">
      <router-link  :to="`/catalog/${page}`">
        {{ page }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatalogPage',

  data () {
    return {
      perPage: 5,
      // currentPage: 1,
      products: [
        {
          id: 1,
          name: 'Product 1',
          description: 'This is product 1 description.',
          price: 10.99
        },
        {
          id: 2,
          name: 'Product 2',
          description: 'This is product 2 description.',
          price: 15.99
        },
        {
          id: 3,
          name: 'Product 3',
          description: 'This is product 3 description.',
          price: 20.99
        },
        {
          id: 4,
          name: 'Product 4',
          description: 'This is product 4 description.',
          price: 25.99
        },
        {
          id: 5,
          name: 'Product 5',
          description: 'This is product 5 description.',
          price: 30.99
        },
        {
          id: 6,
          name: 'Product 6',
          description: 'This is product 6 description.',
          price: 35.99
        },
        {
          id: 7,
          name: 'Product 7',
          description: 'This is product 7 description.',
          price: 40.99
        },
        {
          id: 8,
          name: 'Product 8',
          description: 'This is product 8 description.',
          price: 45.99
        },
        {
          id: 9,
          name: 'Product 9',
          description: 'This is product 9 description.',
          price: 50.99
        },
        {
          id: 10,
          name: 'Product 10',
          description: 'This is product 10 description.',
          price: 55.99
        },
        {
          id: 11,
          name: 'Product 11',
          description: 'This is product 11 description.',
          price: 60.99
        },
        {
          id: 12,
          name: 'Product 12',
          description: 'This is product 12 description.',
          price: 65.99
        },
        {
          id: 13,
          name: 'Product 13',
          description: 'This is product 13 description.',
          price: 70.99
        },
        {
          id: 14,
          name: 'Product 14',
          description: 'This is product 14 description.',
          price: 75.99
        },
        {
          id: 15,
          name: 'Product 15',
          description: 'This is product 15 description.',
          price: 80.99
        }
      ]
    }
  },

  mounted () {
    // console.log(this.$router.push({ path: '/', params: { page: 2 } }))
    // console.log(this.$route)
    // const page = this.$route.params.page
    // if (page) this.currentPage = +page
    // console.log(this.currentPage)
    this.updateCurrentPage()
  },

  computed: {
    totalPages () {
      return Math.ceil(this.products.length / this.perPage)
    },
    paginatedCatalog () {
      const { currentPage, perPage } = this
      const startIndex = (currentPage - 1) * perPage
      const endIndex = startIndex + perPage
      return this.products.slice(startIndex, endIndex)
    },
    currentPage () {
      const page = this.$route.params.page
      // В computed свойстве currentPage проверяем параметр маршрута и приводим его к числу.
      // Если параметра нет, устанавливаем currentPage равным 1
      return parseInt(page, 10) || 1
    }
  },
  methods: {
    // pageSelect (page) {this.currentPage = page}

    // Метод для обновления currentPage из параметров маршрута.
    updateCurrentPage () {
      this.currentPage = this.$route.params.page || 1
    }
  },
  // watch теперь правильно отслеживает изменения параметра page в маршруте и вызывает updateCurrentPage
  watch: {
    '$route.params.page': 'updateCurrentPage'
  }
}
</script>
