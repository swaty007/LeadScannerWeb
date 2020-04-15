<template>
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
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
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
      ...mapActions('company', ['getCompany'])
    }
  }
</script>
