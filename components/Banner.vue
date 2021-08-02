<template>
    <v-app-bar
        app
        dense
        flat
    >
        <v-menu
            bottom
            :offset-y="true"
            :close-on-click="true"
        >
            <template #activator="{ on, attrs }">
                <v-btn depressed elevation="0" v-bind="attrs" v-on="on">
                    <v-img
                        max-height="32"
                        max-width="32"
                        :src="currentLocale.img"
                    />
                </v-btn>
            </template>

            <v-list>
                <v-list-item-group>
                    <nuxt-link
                        v-for="locale in availableLocales"
                        :key="locale.code"
                        :to="switchLocalePath(locale.code)"
                    >
                        <v-list-item>
                            <v-list-item-icon>
                                <v-img
                                    max-height="32"
                                    max-width="32"
                                    :src="locale.img"
                                />
                            </v-list-item-icon>
                            <v-list-item-content>{{ locale.name }}</v-list-item-content>
                        </v-list-item>
                    </nuxt-link>
                </v-list-item-group>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script>
export default {
    name: "Banner",
    computed: {
        availableLocales () {
            return this.$i18n.locales
        },
        currentLocale () {
            return (this.$i18n.locales.filter(locale => locale.code === this.$i18n.locale))[0]
        }
    }
}
</script>
