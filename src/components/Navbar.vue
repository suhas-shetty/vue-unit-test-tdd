<template>
  <div id="nav">
    <ul class="nav-list">
      <li :key="`link${index}`" v-for="(link, index) in navLinks" class="each-nav">
        <a @click="navigateTo(link)" :class="{ 'active' : $route.name === link}">{{link}}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Navbar extends Vue {
  @Prop({ default: [''] }) navLinks!: Array<string>

  mounted (): void {
    console.log('navLinks', this.navLinks)
  }

  navigateTo (routeName: string): void {
    this.$router.push({
      name: routeName
    })
  }
}
</script>

<style scoped>
.nav-list {
  display: flex;
  justify-content: space-evenly;
}

#nav {
  background: #41B883;
  padding: 30px;
}

#nav li {
  list-style-type: none;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 1.8rem;
  text-decoration: none;
  cursor: pointer;
}

#nav a.active {
  color: #fff;
}
</style>
