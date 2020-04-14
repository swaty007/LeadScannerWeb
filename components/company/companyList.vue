<template>
    <div v-if="items">
        <v-card
                v-for="(item, i) in items"
                :key="i"
                :hover="true"
                :light="true"
                class="text-left">
            <v-list-item>
                <v-list-item-content>
                    <p v-for="(value, key, index) in item" :key="index">
                    <template v-if="typeof (value) === 'object'">
                        <div v-for="(val, k, ind) in value" :key="ind">
                            <strong>{{ key }}:</strong> {{ val }}
                        </div>
                    </template>
                    <template v-else>
                        <strong>{{ key }}:</strong> {{ value }}
                    </template>
                    </p>
                </v-list-item-content>
            </v-list-item>
        </v-card>
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
      ...mapActions('company', ['getCompanyList'])
    }
  }
</script>
