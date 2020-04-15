<template>
    <div v-if="items">
        <v-col
                cols="12"
                md="12">
        <v-hover
                v-for="(item, i) in items"
                :key="i"
                 v-slot:default="{ hover }">
        <v-card
                :hover="true"
                :light="true"
                :outlined="true"
                :elevation="hover ? 12 : 2"
                class="text-left mb-12 pa-3 transition-swing">
            <CompanyListItem :item="item" :btn="true" />
        </v-card>
        </v-hover>
        <client-only>
            <infinite-loading
                    v-if="items.length"
                    spinner="waveDots"
                    :distance="200"
                    @infinite="infiniteHandler">
                <span slot="no-results"></span>
                <span slot="no-more"></span>
                <span slot="error"></span>
            </infinite-loading>
        </client-only>
        </v-col>
    </div>
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
        items: null,
        page: 1
      }
    },
    computed: {
      // ...mapGetters('user', ['getCurrentUser', 'isCandidate', 'isRecruiter'])
    },
    created () {
      this.getCompanyList({ page: this.page }).then((data) => {
        console.log(data)
        this.items = data.Items
      })
    },
    methods: {
      ...mapActions('company', ['getCompanyList']),
      infiniteHandler ($state) {
        this.page += 1
        this.getCompanyList({ page: this.page })
          .then(({ Items }) => {
            if (Items.length) {
              this.items.push(...Items)
              $state.loaded()
            } else {
              $state.complete()
            }
          })
      }
    }
  }
</script>
