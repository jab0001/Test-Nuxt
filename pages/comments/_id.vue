<template>
  <div>
    <h1>{{ comment.name }}</h1>
    <p>{{ comment.email }}</p>
    <p>{{ comment.body }}</p>
  </div>
</template>

<script>
export default {
  async asyncData({$axios, params}) {
    const id = params.id
    const comment = await $axios.$get(`/comments/${id}`);

    return {comment};
  },
  data() {
    return {
      comment: {}
    }
  },
}
</script>