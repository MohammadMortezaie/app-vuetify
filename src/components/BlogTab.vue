<template>

    <div>

        <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
                <v-sheet :color="colors[i]" height="100%" rounded="xl" class="rounded-t-0">
                    <v-row class="fill-height" align="center" justify="center">
                        <div class="text-h2">
                            {{ slide }} Slide
                        </div>
                    </v-row>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>

        <v-container>
            <v-card v-for="(item, index) in 40" :key="index" :to="{ name: 'blogDetail', params: { id: item } }"
                class="mx-auto my-4" rounded="lg" style="border-left: 4px solid orange">
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title class="text-body1 mb-1">
                            Asia Pacific (Jakarta) Region Is Now Available
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

            </v-card>
        </v-container>

    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'BlogTab',

    data() {
        return {
            colors: [
                'green',
                'secondary',
                'yellow darken-4',
                'red lighten-2',
                'orange darken-1',
            ],
            cycle: false,
            slides: [
                'First',
                'Second',
                'Third',
                'Fourth',
                'Fifth',
            ],
        }
    }
})
</script>