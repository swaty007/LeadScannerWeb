<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col
                        v-for="input in filterList"
                        v-if="input.Type === 'TextBox'"
                        :key="input.Nane"
                        cols="6"
                        md="3">
                    <v-text-field
                            v-model="input.value"
                            :label="input.Nane"
                            outlined
                            dense
                            @change="change"/>
                </v-col>
                <v-col
                        v-for="select in filterList"
                        v-if="select.Type === 'Combobox'"
                        :key="select.Nane"
                        cols="6"
                        md="3">
                    <v-autocomplete
                            v-model="select.value"
                            :label="select.Nane"
                            :items="select.data"
                            :loading="!select.data.length"
                            outlined
                            clearable
                            dense
                            @change="change"/>
                </v-col>
            </v-row>
        </v-container>
        <v-container v-if="items" fluid>
            <v-overlay :value="submitStatus === 'PENDING'">
                <v-progress-circular indeterminate color="primary" size="64"/>
            </v-overlay>
            <p>
                Найдено:
                <v-chip
                        class="ma-2"
                        color="primary">
                    {{ totalItems }}
                </v-chip>
            </p>
            <v-row>
                <v-col
                        v-for="(item, i) in items"
                        :key="i"
                        cols="12"
                        md="6"
                        lg="4"
                        class="mb-0">
                    <v-hover
                            v-slot:default="{ hover }">
                        <v-card
                                :hover="true"
                                :outlined="true"
                                :elevation="hover ? 12 : 2"
                                class="text-left ma-0 pa-3 transition-swing fill-height">
                            <CompanyListItem :item="item" :btn="true"/>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
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
        </v-container>
    </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import { mapCacheActions } from 'vuex-cache'
  import CompanyListItem from '~/components/company/companyListItem'

  export default {
    components: {
      CompanyListItem
    },
    data () {
      return {
        items: null,
        filterList1: [
          { name: 'NAME', type: 'input', data: [], value: '', key: 0 },
          { name: 'SHORT_NAME', type: '', data: [], value: '', key: 1 },
          { name: 'OPF', type: 'select', data: [], value: null, key: 2 },
          { name: 'EDRPOU', type: 'input', data: [], value: '', key: 3 },
          { name: 'ADDRESS', type: 'input', data: [], value: '', key: 4 },
          { name: 'STAN', type: 'select', data: [], value: null, key: 5 },
          { name: 'FOUNDING_DOCUMENT_NUM', type: '', data: [], value: '', key: 6 },
          { name: 'SUPERIOR_MANAGEMENT', type: '', data: [], value: '', key: 7 },
          { name: 'AUTHORIZED_CAPITAL', type: '', data: [], value: '', key: 8 },
          { name: 'STATUTE', type: 'select', data: [], value: null, key: 9 },
          { name: 'REGISTRATION', type: 'input', data: [], value: '', key: 10 },
          { name: 'MANAGING_PAPER', type: '', data: [], value: '', key: 11 },
          { name: 'TERMINATED_INFO', type: '', data: [], value: '', key: 12 },
          { name: 'TERMINATION_CANCEL_INFO', type: '', data: [], value: '', key: 13 },
          { name: 'CONTACTS', type: '', data: [], value: '', key: 14 },
          { name: 'VP_DATES', type: '', data: [], value: '', key: 15 },
          { name: 'CURRENT_AUTHORITY', type: '', data: [], value: '', key: 16 },
        ],
        filterList: [],
        filter: {
          page: 1,
        },
        totalItems: null,
        submitStatus: null
      }
    },
    computed: {
      newFilter () {
        const filterArr = {}
        let count = 0
        for (let prop of this.filterList) {
          if (prop.value) {
            filterArr[count] = {}
            filterArr[count][0] = prop.Nane
            filterArr[count][1] = prop.value
            count++
          }
        }
        return { ...this.filter, filter: filterArr }
      }
      // ...mapGetters('user', ['getCurrentUser', 'isCandidate', 'isRecruiter'])
    },
    created () {
      this.loadList()
      this.getFilters()
        .then((data) => {
          this.filterList = data.map( i => ({ ...i, data: [] }))
          this.filterList.forEach((filter, index) => {
            if (filter.Type === 'Combobox') {
              this.getFilter(filter.Nane).then((data) => {
                this.filterList[index].data = data
              })
            }
          })
        })
    },
    methods: {
      ...mapActions('company', ['getCompanyList']),
      ...mapCacheActions('filter', ['getFilter', 'getFilters']),
      change () {
        this.filter.page = 1
        this.loadList()
      },
      loadList () {
        this.submitStatus = 'PENDING'
        this.getCompanyList(this.newFilter).then((data) => {
          this.items = data.Items
          this.totalItems = data.TotalItems
          this.submitStatus = 'OK'
        })
      },
      infiniteHandler ($state) {
        this.filter.page += 1
        this.getCompanyList(this.newFilter)
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
