<template>
  <div>
    <h1>{{ comment.name }}</h1>
    <p>{{ comment.email }}</p>
    <p>{{ comment.body }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comment: {}
    }
  },
  async mounted() {
    const { id } = this.$route.params;
    try {
      const response = await this.$axios.get(`/comments/${id}`);
      this.comment = response.data;
    } catch (error) {
      console.error(error);
      this.comment = {};
    }
  }
}
</script>