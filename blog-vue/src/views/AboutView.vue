<template>
  <main class="container-fluid">
    <h1>About Page</h1>
    <p>{{this.data}}</p>
  </main>
</template>

<script>
import homeService from '../services/api/home-service';
export default {
  name: 'HomeView',
  data() {
    return {
      data: [],
    };
  },

  created() {
    homeService.getHomeService()
      .then(response => {
        console.log(response.data)
        this.data = response.data;
      })
      .catch(error => {
        console.error(`Hata oluştu: HomeService`, error);
      });
  },
};
</script>
