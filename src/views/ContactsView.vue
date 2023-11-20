<template>
  <div>
    <div class="p-5 mb-4 bg-dark text-light">
      <div class="container py-5">
        <h1 class="display-5 fw-bold">Get in touch</h1>
        <p class="col-md-8 fs-4">Find top news from top authors</p>
        <button class="btn btn-primary btn-lg" type="button">Find out more</button>
      </div>
    </div>


    <div class="container">
      <form action="">
        <div class="mb-3">
          <label for="name" class="form-label text-uppercase">Name</label>
          <input type="text" name="name" id="name" class="form-control" placeholder="Elon Musk"
            aria-describedby="nameHelper">
          <small id="nameHelper" class="text-muted">Type your name</small>
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label  text-uppercase">phone</label>
          <input type="tel" name="phone" id="phone" class="form-control" placeholder="123456"
            aria-describedby="phoneHelper">
          <small id="phoneHelper" class="text-muted">Type your phone</small>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label text-uppercase">email</label>
          <input type="text" name="email" id="email" class="form-control" placeholder="elon@musk.com"
            aria-describedby="emailHelper">
          <small id="emailHelper" class="text-muted">Type your email</small>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">Message</label>
          <textarea class="form-control" name="message" id="message" rows="3" placeholder="Your message here..."></textarea>
        </div>


        <button type="submit" class="btn btn-primary">Send</button>

      </form>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ContactsView'
}
</script>

<style lang="scss" scoped></style>