<template>
  <div>
    <my-header/>
    <nuxt/>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '~/components/Footer.vue'
import MyHeader from '~/components/Header.vue'
import 'normalize.css'

export default {
  components: {
    MyFooter,
    MyHeader
  }
}
</script>