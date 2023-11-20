<script>
import axios from 'axios';
export default {
  name: 'PostList',
  data() {
    return {
      base_url: 'http://127.0.0.1:8002',
      blog_api: '/api/posts',
      posts: null,

    }
  },
  methods: {
    getPosts() {
      const url = this.base_url + this.blog_api;
      axios
        .get(url)
        .then(response => {
          console.log(response);
          this.posts = response.data.result

        })
        .catch(err => {
          console.error(err);
        })
    }
  },
  mounted() {
    this.getPosts();
  }
}




</script>


<template>
  <div>

    <section class="posts" v-if="posts">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          <div class="col" v-for="post in posts.data">
            <div class="card">
              <img :src="base_url + '/storage/' + post.cover_image" alt="">

              <div class="card-body">
                <h4 class="card-title">{{ post.title }}</h4>
                <p class="card-text">
                  {{ post.content }}
                </p>
              </div>
              <div class="card-footer">
                <router-link :to="{ name: 'post', params: { slug: post.slug }}">View Post</router-link>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="pagination my-3">
          <nav aria-label="Page navigation">
            <ul class="pagination    ">
              <li class="page-item disabled">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
    <div class="loader" v-else>
      <span>Loading...</span>
    </div>



  </div>
</template>



<style lang="scss" scoped></style>