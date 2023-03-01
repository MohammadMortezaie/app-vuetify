<template>

    <div class="font-weight-medium px-3">
        <v-slide-group >
            <pre>{{ items.code }}</pre>
        </v-slide-group>
        <v-divider color="orange"></v-divider>
        <p class="py-5">{{ items.text }}</p>
    </div>


</template>

<script lang="ts">

export default {
    name: 'CommentsView',
    props: ['items'],

}
</script>
