<template>
  <v-list-item
    class="fill-height pb-12">
    <v-list-item-content>
      <div v-for="(value, key, index) in item" v-if="value" :key="index" class="mb-0">
        <template v-if="typeof (value) === 'object'">
          <template v-if="extended">
            <p v-if="value.length" class="black--text body-2 mb-0"><strong>{{ key | nameKey(keys) }}:</strong></p>
            <div v-for="(val, k, ind) in value" :key="ind" class="">
              <div v-if="typeof (val) === 'object'" class="mb-1">
                <div v-for="(val2, k2, ind2) in val" :key="ind2" class="mb-0 caption ml-5">
                  <strong>{{ k2 | nameKey(keys) }}</strong> {{ val2 }}
                </div>
              </div>
              <div v-else-if="val" class="caption ml-5"><strong>{{ k | nameKey(keys) }}:</strong> {{ val }}</div>
            </div>
          </template>
        </template>
        <template v-else>
          <template v-if="key === 'NAME' && extended"></template>
          <p v-else-if="value" class="body-2">
            <strong>{{ key | nameKey(keys) }}:</strong> <span class="body-2">{{ value }}</span>
          </p>
        </template>
      </div>
      <v-btn
        v-if="btn"
        :to="{ name: `company-id`, params: { id: item.EDRPOU } }"
        direction="center"
        bottom
        absolute
        block
        class="deep-purple accent-4 white--text my__btn">Перейти
      </v-btn>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
  import keysTranslate from '~/mixins/keysTranslate'

  export default {
    mixins: [
      keysTranslate,
    ],
    props: {
      item: {
        type: Object,
        default: () => {},
      },
      btn: {
        type: Boolean,
        default: true,
      },
      extended: {
        type: Boolean,
        default: false,
      },
    },
  }
</script>
<style scoped>
  .my__btn {
    left: 0;
    /*transform: translateX(-50%);*/
  }
  .v-list-item__content {
    align-self: start;
  }
</style>
