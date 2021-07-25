<template>
  <div id="app">
    <Navbar :navLinks="navElements"/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Navbar from '@/components/Navbar.vue'

@Component({
  components: {
    Navbar
  }
})
export default class App extends Vue {
  navElements = [
    'Home',
    'Details',
    'Dashboard',
    'About',
    'Help'
  ]

  mounted (): void {
    console.log(this.navElements)
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-size: 10px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

h1 {
  font-size: 5.2rem;
}

.page {
  height: calc(100% - 85px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
