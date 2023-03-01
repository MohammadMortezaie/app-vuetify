<template>

    <v-timeline align-top dense>
        <v-timeline-item v-for="(item, index) in items" :key="index"
            :color="(index == 0 || items.length == (index + 1)) ? 'pink' : 'orange'" small>
            <v-row class="pt-1">
                <v-col cols="2">
                    <strong>{{ index }}</strong>
                </v-col>
                <v-col>
                    <h5>{{ item }}</h5>
                </v-col>
            </v-row>
        </v-timeline-item>
    </v-timeline>


</template>

<script lang="ts">

export default {
    name: 'StepsView',
    props: ['items'],

}
</script>
