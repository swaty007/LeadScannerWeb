<template>
    <div v-if="items">
        <v-container fluid>
            <v-row>
                <v-col
                        cols="12"
                        md="4">
                    <v-text-field label="ЕДРПОУ" outlined @change="change"/>
                </v-col>
                <v-col
                        cols="12"
                        md="4">
                    <v-select label="КВЕД" outlined/>
                </v-col>
                <v-col
                        cols="12"
                        md="4">
                    <v-select label="Городу/Области" outlined/>
                </v-col>
                <v-col
                        cols="12"
                        md="4">
                    <v-select label="Статус" outlined/>
                </v-col>
            </v-row>
        </v-container>
        <v-container>
            <v-row>
                <v-col
                        v-for="(item, i) in items"
                        :key="i"
                        cols="12"
                        md="6"
                        class="mb-0">
                    <v-hover
                            v-slot:default="{ hover }">
                        <v-card
                                :hover="true"
                                :light="true"
                                :outlined="true"
                                :elevation="hover ? 12 : 2"
                                class="text-left ma-0 pa-3 transition-swing fill-height">
                            <CompanyListItem :item="item" :btn="true"/>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container>
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
        filter: {
          filter: {
            EDRPOU: '33123123|3213123123',
            STATUTE: 5,
            ADDRESS: 6,
          },
          page: 1
        }
      }
    },
    computed: {
      // ...mapGetters('user', ['getCurrentUser', 'isCandidate', 'isRecruiter'])
    },
    created () {
      this.getCompanyList(this.filter).then((data) => {
        console.log(data)
        this.items = data.Items
      })
    },
    methods: {
      ...mapActions('company', ['getCompanyList']),
      change () {
        // console.log(1)
      },
      infiniteHandler ($state) {
        this.filter.page += 1
        this.getCompanyList(this.filter)
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
