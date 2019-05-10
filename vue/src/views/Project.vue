<template>
  <div class="project">
    <vue-headful
        :title="pageTitle"
        :description="pageDescription"
        :ogTitle="pageTitle"
        :ogDescription="pageDescription"
        :url="pageUrl"
    />
    <h1>This is a project page {{pageID}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Project',
  data() {
    return {
      pageID : this.$route.params.id,
      pageTitle: `${this.store.webAuthorFullName} ~ Portfolio ~ ${this.$route.params.id}`,
      pageDescription: 'My name is Saman and I specialize in Front-end Web Development.',
      pageUrl: `${this.$route.fullPath}`,
    };
  },
  watch:{
    $route(to, from){
      this.$route.params.id = to.params.id
    }
  },
};
</script>
