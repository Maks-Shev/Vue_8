<template>
  <div>
    <section class="page404">
      <div class="page404__box">
        <div class="page404__info">
          <h1 class="page404__header">404</h1>
          <p class="page404__text">
            Приносим извинения, но страница, которую вы искали, не найдена
          </p>
          <div class="page404__home">
            <router-link to="/" class="page404__btn">
              Домой
              <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887"
                  stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
              </svg>
            </router-link>
          </div>
        </div>
        <div class="page404__img">
          <img src="@/assets/image/img/404.png" alt="404" class="page404__img"/>
        </div>
      </div>
    </section>
  </div>
  </template>

<script>
export default {
  name: 'NotFound'
}
</script>
<style lang="scss">
.page404__box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  .page404__info {
    max-width: 480px;
  }
  .page404__header {
    font-family: DM-serif;
    font-size: 250px;
    font-weight: 400;
    color: rgb(205, 162, 116);
  }
  .page404__text {
    font-family: DM-serif;
    font-size: 35px;
    font-weight: 400;
    color: rgb(41, 47, 54);
  }
  .page404__btn {
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
    margin-top: 23px;
    gap: 10px;
    cursor: pointer;
    svg {
      width: 15px;
      height: 13px;
    }
  }
  .page404__img img {
    margin-left: 81px;
    width: 413px;
    height: 540px;
  }
}
</style>
