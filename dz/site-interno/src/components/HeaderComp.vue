<template>
  <div class="container_nav">
    <nav class="navigation">
      <ul class="left_nav">
        <li><img src="../assets/image/img/Logo.svg" alt="logo"></li>
        <li><span>Interno</span></li>
      </ul>
      <div class="right_nav">
        <router-link to="/" class="nav_btn">Домой</router-link>
        <router-link to="/project" class="nav_btn">Проект</router-link>
        <router-link to="/blog" class="nav_btn">Блог</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HeaderComp',
  props: ['header'],

  data () {
    return {

    }
  },

  methods: {

  }
}
</script>

<style lang="scss" scoped></style>
