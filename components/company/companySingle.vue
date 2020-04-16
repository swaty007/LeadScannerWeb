<template>
    <v-col
            cols="12"
            md="12">
        <v-btn
                class="deep-purple accent-4 white--text mb-4 ml-6"
                :left="true"
                :top="true"
                @click="back">Назад
        </v-btn>
        <v-hover v-slot:default="{ hover }">
            <v-card
                    :hover="true"
                    :light="true"
                    :outlined="true"
                    :elevation="hover ? 12 : 2"
                    class="text-left mb-12 pa-3 transition-swing">
                <CompanyListItem :item="item" :btn="false" :extended="true"/>
            </v-card>
        </v-hover>
    </v-col>
</template>
<script>
  import { mapActions } from 'vuex'
  import CompanyListItem from '~/components/company/companyListItem'

  export default {
    components: {
      CompanyListItem
    },
    data () {
      return {
        id: this.$route.params.id,
        item: null
      }
    },
    computed: {
      // ...mapGetters('user', ['getCurrentUser', 'isCandidate', 'isRecruiter'])
    },
    created () {
      this.getCompany(this.$route.params.id).then((data) => {
        this.item = data
      })
    },
    methods: {
      ...mapActions('company', ['getCompany']),
      back () {
        if (window.history.length > 1) {
          this.$router.go(-1)
        } else {
          this.$router.push({ path: '/' })
        }
      }
    }
  }
</script>
