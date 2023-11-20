<template>
  <div>

  <div class="container">
      <div class="cover_image">
        <img class="img-fluid object-fit-cover" :src="'http://127.0.0.1:8002/storage/' + post.cover_image" alt="" style="height: 400px;">
      </div>
      <h1>{{ post.title }}</h1>
      <p>{{post.content}}</p>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'SingleBlogPostView',
  data() {
    return {
      post: {}
    }
  },
  mounted() {
    const url = `http://127.0.0.1:8002/api/posts/${this.$route.params.slug}`;
    axios.get(url)
      .then(resp => {
        console.log(resp.data.result);
        this.post = resp.data.result
      })
      .catch(err => {
        console.log(err.message);
      })

  }



}
</script>

<style lang="scss" scoped></style>