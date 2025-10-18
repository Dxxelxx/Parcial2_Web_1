<template>
  <div id="app">
    <AppHeader />
    <ProfileCard />
    <NavBar />
    <main class="content">
      <router-view /> <!-- 👈 Aquí se renderiza la vista activa -->
    </main>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import ProfileCard from './components/ProfileCard.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: { AppHeader, ProfileCard, NavBar }
}
</script>


