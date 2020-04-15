<template>
    <v-app id="inspire">
        <v-app-bar
                app
                clipped-left>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
            <v-toolbar-title>LeadScanner</v-toolbar-title>
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
      this.$vuetify.theme.dark = true
    }
  }
</script>
<style>
    html {
        font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 16px;
        word-spacing: 1px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
    }

    .button--green {
        display: inline-block;
        border-radius: 4px;
        border: 1px solid #3b8070;
        color: #3b8070;
        text-decoration: none;
        padding: 10px 30px;
    }

    .button--green:hover {
        color: #fff;
        background-color: #3b8070;
    }

    .button--grey {
        display: inline-block;
        border-radius: 4px;
        border: 1px solid #35495e;
        color: #35495e;
        text-decoration: none;
        padding: 10px 30px;
        margin-left: 15px;
    }

    .button--grey:hover {
        color: #fff;
        background-color: #35495e;
    }
</style>
