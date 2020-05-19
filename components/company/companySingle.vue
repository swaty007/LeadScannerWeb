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
      <h1 v-if="item" class="body-1 ma-6">
        <strong>{{ 'NAME' | nameKey(keys) }}:</strong> {{ item.NAME }}
      </h1>
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
  import keysTranslate from '~/mixins/keysTranslate'

  export default {
    components: {
      CompanyListItem,
    },
    mixins: [
      keysTranslate,
    ],
    data () {
      return {
        id: this.$route.params.id,
        item: null,
      }
    },
    computed: {
      // ...mapGetters('user', ['getCurrentUser', 'isCandidate', 'isRecruiter'])
    },
    async fetch () {
      this.item = await this.getCompany(this.$route.params.id)
    },
    head () {
      if (!this.item) {
        return {
          title: '',
          meta: [
            { hid: 'description', name: 'description', content: '' },
          ],
        }
      }
      return {
        title: (this.item.SHORT_NAME ? this.item.SHORT_NAME : this.item.NAME) +
          `, офіційна інформація ✅ про юридичну особу ${this.item.EDRPOU} з ЄДР, Lead Scanner ✅`,
        meta: [
          { hid: 'description', name: 'description', content: `Дані з ЄРД та контакти ${this.item.NAME}, зареєстрованної за адресою ${this.item.ADDRESS}` },
        ],
      }
    },
    // created () {
    //   this.getCompany(this.$route.params.id).then((data) => {
    //     this.item = data
    //   })
    // },
    methods: {
      ...mapActions('company', ['getCompany']),
      back () {
        if (window.history.length > 1) {
          this.$router.go(-1)
        } else {
          this.$router.push({ path: '/' })
        }
      },
    },
  }
</script>
