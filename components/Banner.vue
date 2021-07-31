<template>
    <v-app-bar
        dense
        flat
    >
        <v-menu
            top
            :close-on-click="true"
        >
            <template #activator="{ on, attrs }">
                <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                >
                    Dropdown
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
        }
    }
}
</script>
