<template>
  <div class="post">
    <h3>{{ post.author }}</h3>
    <p>{{ post.content }}</p>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: { type: Object, required: true }
  }
}
</script>
