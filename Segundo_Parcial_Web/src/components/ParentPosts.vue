<template>
  <div>
    <PostCard
      v-for="(post, idx) in posts"
      :key="idx"
      :post="post"
    />
  </div>
</template>

<script>
import PostCard from './PostCard.vue'
import { ref } from 'vue'

export default {
  name: 'ParentPosts',
  components: { PostCard },
  setup() {
    const posts = ref([
      { author: 'Daniel', content: 'Hola, este es mi primer post!' },
      { author: 'Laura', content: '¡Vue 3 es genial!' },
      { author: 'Amigo', content: 'La vida pasa volando 🚀' }
    ])
    return { posts }
  }
}
</script>
