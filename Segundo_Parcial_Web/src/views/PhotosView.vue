<template>
  <div>
    <h2>Fotos</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1rem;">
      <img v-for="n in 6" :key="n" :src="`https://picsum.photos/200/200?random=${n}`" :alt="'Foto '+n" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotosView'
}
</script>
