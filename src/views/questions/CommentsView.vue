<template>


    <v-list two-line>
        <template v-for="item in items">
            <v-list-item :key="item.id">
                <v-list-item-content>
                    <v-card elevation="2" outlined shaped color="blue lighten-1">

                        <v-card-subtitle class="font-weight-bold">{{ item.title }}</v-card-subtitle>
                        <v-card-text v-text="item.subtitle"></v-card-text>

                    </v-card>
                    <v-list-item-subtitle></v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

        </template>
    </v-list>


</template>

<script lang="ts">

export default {
    name: 'CommentsView',
    props: ['items'],

}
</script>
