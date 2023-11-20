<template>
  <div>
      
      <div class="p-5 mb-4 bg-dark text-light">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">Our Blog</h1>
          <p class="col-md-8 fs-4">Find top news from top authors</p>
          <button class="btn btn-primary btn-lg" type="button">Find out more</button>
        </div>
      </div>

    <PostList />


  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
  export default {
    name : 'BlogView',
    components:  {
      PostList
    }
    
  }
</script>

<style lang="scss" scoped>

</style>