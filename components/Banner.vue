<template>
    <v-app-bar
        dark
        app
        dense
        flat
    >
        <nuxt-link to="/">
            <v-btn icon>
                <v-img
                    :src="websiteLogo"
                    width="50"
                    alt="Website logo"
                />
            </v-btn>
        </nuxt-link>

        <v-spacer />

        <nuxt-link
            to="/"
            class="white--text"
            style="text-decoration: none"
        >
            {{ $t("banner.home") }}
        </nuxt-link>

        <v-spacer />

        <nuxt-link
            to="/about"
            class="white--text"
            style="text-decoration: none"
        >
            {{ $t("banner.about") }}
        </nuxt-link>

        <v-spacer />

        <nuxt-link
            to="/personal-projects"
            class="white--text"
            style="text-decoration: none"
        >
            {{ $t("banner.personalProjects") }}
        </nuxt-link>

        <v-spacer />

        <nuxt-link
            to="/school-projects"
            class="white--text"
            style="text-decoration: none"
        >
            {{ $t("banner.schoolProjects") }}
        </nuxt-link>

        <v-spacer />

        <nuxt-link
            to="/contact"
            class="white--text"
            style="text-decoration: none"
        >
            {{ $t("banner.contact") }}
        </nuxt-link>

        <v-spacer />

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
                    {{ currentLocale.name }}
                    <v-icon right>
                        mdi-arrow-down-drop-circle
                    </v-icon>
                </v-btn>
            </template>

            <v-list>
                <v-list-item-group>
                    <nuxt-link
                        v-for="locale in availableLocales"
                        :key="locale.code"
                        :to="switchLocalePath(locale.code)"
                        class="white--text"
                        style="text-decoration: none"
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
    data () {
        return {
            websiteLogo: "/android-chrome-512x512.png"
        }
    },
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
