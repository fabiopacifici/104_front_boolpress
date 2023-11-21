<template>
  <div class="p-5 mb-4 bg-dark text-light">
    <div class="container py-5">
      <h1 class="display-5 fw-bold">Our Blog</h1>
      <p class="col-md-8 fs-4">Find top news from top authors</p>
      <button class="btn btn-primary btn-lg" type="button">Find out more</button>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-9">

        <PostList />

      </div>
      <aside class="col-3">
        <div class="widget card bg-light mb-3" v-if="categories">
          <div class="card-header">
            Categories
          </div>

          <div class="card-body">
            <ul class="list-unstyled">
              <li v-for="category in categories">
                <router-link :to="{name: 'category', params: {slug : category.slug}}">{{ category.name }}</router-link>
              </li>
            </ul>
          </div>

          
        </div>
        <!-- <category-widget  /> -->
        <div class="widget card bg-light mb-3" v-if="tags">
          <div class="card-header">
            Tags
          </div>

          <div class="card-body">
            <ul class="list-unstyled">
              <li v-for="tag in tags">
                <router-link :to="{ name: 'tag', params: { slug: tag.slug } }">{{ tag.name }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { state } from '../state.js';
import PostList from "../components/PostList.vue";
export default {
  name: 'BlogView',
  components: {
    PostList
  },
  data() {
    return {
      state,
      categories: null,
      tags: null
    }
  },
  mounted() {
    const url = this.state.base_url + '/api/categories'
    //console.log(url);
    axios.get(url)
      .then(resp => {
        console.log(resp);
        this.categories = resp.data.result
      })
      .catch(err => {
        console.log(err);
      })


    const tag_url = this.state.base_url + '/api/tags'

    console.log(tag_url);

    axios.get(tag_url)
      .then(resp => {
        console.log(resp);
        this.tags = resp.data.result
      })
      .catch(err => {
        console.log(err);
      })

  }

}
</script>

<style lang="scss" scoped></style>