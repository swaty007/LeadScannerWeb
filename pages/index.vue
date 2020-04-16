<template>
    <CompanyList/>
</template>

<script>
  import CompanyList from '~/components/company/companyList'

  export default {
    components: {
      CompanyList
    },
    data: () => ({
      drawer: null
    }),
    created () {
      this.$vuetify.theme.dark = true
    }
  }
</script>
