<script>
import axios from 'axios';
import { state } from '../state.js';
import PostCard from '../components/PostCard.vue';

export default {
  name: 'SingleTagView',
  components: {
    PostCard
  },
  data() {
    return {
      state,
      loading: true,
      tag: null
    }
  },
  mounted() {
    const url = `${this.state.base_url}/api/tags/${this.$route.params.slug}`;
    axios.get(url)
      .then(resp => {
        console.log(resp.data.result);
        //console.log(resp.data.success);
        if (resp.data.success) {
          console.log('ok tag found');
          // save the post if it exists

          this.tag = resp.data.result // Response object

          this.loading = false;

        } else {
          // pusha la rotta 404 
          console.log('tag not found');
          this.$router.push({ name: 'NotFound' });
        }

      })
      .catch(err => {
        console.log(err.message);
      })

  }



}
</script>


<template>
  <div>


    <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container py-5">
        <h1 class="display-5 fw-bold">{{ $route.params.slug }} Archive</h1>

      </div>
    </div>


    <section v-if="tag">

      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          <PostCard :post="post" v-for="post in tag.data"></PostCard>
        </div>
      </div>
      <li>


      </li>

    </section>




  </div>
</template>



<style lang="scss" scoped></style>