<template>
  <div id="app">
    <Header></Header>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from './components/public/header'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>
