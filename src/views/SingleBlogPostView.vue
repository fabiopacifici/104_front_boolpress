<template>
  <div>

    <div class="container">

      <div v-if="!loading">
        <div class="cover_image">
          <img class="img-fluid object-fit-cover" :src="'http://127.0.0.1:8002/storage/' + post.cover_image" alt=""
            style="height: 400px;">
        </div>
        <h1>{{ post.title }}</h1>
        <p>{{ post.content }}</p>

        <div class="metadata">
          <div class="category" v-if="post.category">
          <strong>Category</strong> {{ post.category.name }}
          </div>
          <div class="tags" v-if="post.tags.length > 0">
            <strong>Tags:</strong>
            <ul class="list-unstyled">

              <li v-for="tag in post.tags">
              #{{ tag.name }} 
            </li>
            </ul>

          </div>
        </div>

      </div>
      <div v-else>
        loading...
      </div>


    </div>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'SingleBlogPostView',
  data() {
    return {
      loading: true,
      post: {}
    }
  },
  mounted() {
    const url = `http://127.0.0.1:8002/api/posts/${this.$route.params.slug}`;
    axios.get(url)
      .then(resp => {
        //console.log(resp.data.result);
        //console.log(resp.data.success);
        if (resp.data.success) {
          //console.log('ok post found');
          // save the post if it exists
          this.post = resp.data.result
          this.loading = false;

        } else {
          // pusha la rotta 404 
          this.$router.push({ name: 'NotFound' });
          //console.log('404 Post not found');
        }

      })
      .catch(err => {
        console.log(err.message);
      })

  }



}
</script>

<style lang="scss" scoped></style>