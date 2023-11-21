<template>
  <div class="col">
    <div class="card">
      <img :src="state.base_url + '/storage/' + post.cover_image" alt="">

      <div class="card-body">
        <h4 class="card-title">{{ post.title }}</h4>
        <p class="card-text">
          {{ post.content }}
        </p>
      </div>
      <div class="card-footer">
        <router-link :to="{ name: 'post', params: { slug: post.slug } }">View Post</router-link>

      </div>
    </div>
  </div>
</template>

<script>
import {state} from '../state.js';

export default {
  name: 'PostCard',
  props: ['post'],
  data(){
    return {
      state
    }
  }
}
</script>

<style lang="scss" scoped></style>