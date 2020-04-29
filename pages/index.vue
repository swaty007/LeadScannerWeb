<template>
    <CompanyList/>
</template>

<script>
  import CompanyList from '~/components/company/companyList'

  export default {
    name: 'index',
    components: {
      CompanyList,
    },
    head () {
      return {
        title: 'Lead Scanner',
        meta: [
          { hid: 'description', name: 'description', content: '' },
        ],
      }
    },
    data: () => ({
      drawer: null,
    }),
    created () {
      // this.$vuetify.theme.dark = true
    },
  }
</script>
