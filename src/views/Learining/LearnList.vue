<template>
    <v-container>
        <v-row>
            <v-card v-for="(item, index) in 40" :key="index" class="mx-auto my-4" rounded="lg"
                style="border-left: 4px solid orange">
                <v-card-text class="text-body1 mb-1">
                    Asia Pacific (Jakarta) Region Is Now Available Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eaque veritatis impedit id odit sit a distinctio porro facere voluptatum, quos accusamus hic incidunt
                    accusantium. Vitae exercitationem nihil voluptatum veniam atque. {{ item }}
                </v-card-text>
                <v-card-actions>
                    <v-btn text color="orange accent-4" @click="true">
                        Learn More
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-row>
    </v-container>
</template>

<script lang="ts">

export default {
    name: 'LearinList',
    props: ['items'],

}
</script>
