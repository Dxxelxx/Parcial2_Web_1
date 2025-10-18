<template>
  <nav class="nav">
    <button @click="go('/')">Muro</button>
    <button @click="go('/info')">Info</button>
    <button @click="go('/photos')">Fotos</button>
    <button @click="go('/boxes')">Boxes</button>
  </nav>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'NavBar',
  setup() {
    const router = useRouter()
    const go = (path) => router.push(path)
    return { go }
  }
}
</script>

