<template>
    <v-app id="inspire">
        <v-app-bar
                app
                clipped-left>
            <v-app-bar-nav-icon @click="drawer = !drawer" />
            <span class="title ml-3 mr-5">Lead <span class="font-weight-light">Scanner</span></span>
            <v-text-field
                    solo-inverted
                    flat
                    hide-details
                    label="Search"/>
            <v-spacer />
        </v-app-bar>
        <v-navigation-drawer
                v-model="drawer"
                app
                clipped>
            <v-list dense>
                <v-list-item link :to="{ path: '/' }">
                    <v-list-item-action>
                        <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Dashboard</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-action>
                        <v-icon>mdi-settings</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Settings</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <template v-slot:append>
                <div class="pa-2">
                    <v-btn block @click="$vuetify.theme.dark = !$vuetify.theme.dark">
                        <v-icon dark>mdi-brightness-4</v-icon>
                    </v-btn>
                </div>
            </template>
        </v-navigation-drawer>
        <v-content>
            <v-container
                    class=".fill-height text-left"
                    fluid>
                <v-row
                        align="center"
                        justify="center">
                    <nuxt/>
                </v-row>
            </v-container>
        </v-content>
        <v-footer app>
            <span>&copy; 2020</span>
        </v-footer>
    </v-app>
</template>
<script>
  export default {
    components: {},
    data () {
      return {
        drawer: null
      }
    },
    created () {
      // this.$vuetify.theme.dark = true
    }
  }
</script>
<style>
</style>
