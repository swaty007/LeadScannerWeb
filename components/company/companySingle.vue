<template>
    <div>
        {{ $route.params.id }}
    </div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    data () {
      return {
        id: this.$route.params.id
      }
    },
    computed: {
      // ...mapGetters('user', ['getCurrentUser', 'isCandidate', 'isRecruiter'])
    },
    created () {
    },
    methods: {
      ...mapActions('company', ['getCompany'])
    }
  }
</script>
