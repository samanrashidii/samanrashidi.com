<template>
  <div class="project">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: 'Project',
  data(){
    return {
      pageTitle: `Saman Rashidi ~ Portfolio ~ ${this.$options.name}`,
      pageDescription: `My name is Saman and I specialize in Front-end Web Development.`,
      pageUrl: `${this.$route.fullPath}`
    }
  }
}
</script>

