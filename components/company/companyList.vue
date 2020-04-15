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
            <v-list-item>
                <v-list-item-content>
                    <div v-for="(value, key, index) in item" v-if="value" :key="index" class="mb-5">
                    <template v-if="typeof (value) === 'object'">
                        <p v-if="value" class="black--text"><strong>{{ key }}</strong></p>
                        <div v-for="(val, k, ind) in value" :key="ind" class="black--text">
                            <template v-if="typeof (val) === 'object'">
                                <div v-for="(val2, k2, ind2) in val" :key="ind2" class="black--text mb-2">
                                    <strong>{{ k2 }}</strong> {{ val2 }}
                                </div>
                            </template>
                            <template v-else-if="val"><strong>{{ k }}:</strong> {{ val }}</template>
                        </div>
                    </template>
                    <template v-else>
                        <p v-if="value" class="black--text"><strong>{{ key }}:</strong> {{ value }}</p>
                    </template>
                    </div>
                </v-list-item-content>
            </v-list-item>
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

  export default {
    data () {
      return {
        items: null
      }
    },
    computed: {
      // ...mapGetters('user', ['getCurrentUser', 'isCandidate', 'isRecruiter'])
    },
    created () {
      this.getCompanyList().then((data) => {
        console.log(data)
        this.items = data.Items
      })
    },
    methods: {
      ...mapActions('company', ['getCompanyList']),
      infiniteHandler ($state) {
        // this.params.pagination.page += 1
        // this.getResumeList(this.params)
        //   .then(({ items }) => {
        //     if (items.length) {
        //       this.items.push(...items)
        //       $state.loaded()
        //     } else {
        //       $state.complete()
        //     }
        //   })
      }
    }
  }
</script>
