<template>
  <div>
    <h2>Muro</h2>
    <p>Aquí aparecen las publicaciones de tus amigos.</p>
    <ParentPosts />
  </div>
</template>

<script>
import ParentPosts from '../components/ParentPosts.vue'

export default {
  name: 'HomeView',
  components: { ParentPosts }
}
</script>
