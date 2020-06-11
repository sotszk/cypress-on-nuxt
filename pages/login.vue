<template>
  <div>
    <button @click="setCookie" data-cy="setCookie">
      set
    </button>
    <button @click="getCookie" data-cy="getCookie">
      get
    </button>

    <div>
      <code>{{ cookie }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',

  data() {
    return {
      cookie: null
    }
  },

  methods: {
    setCookie() {
      document.cookie = 'value=hogehoge'
    },
    getCookie() {
      this.cookie = document.cookie
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
