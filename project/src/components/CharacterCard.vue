<template>
    <button v-show='available' class="card" :class="Char.max ? 'max': 'maxFalse'">
        <h3 v-if="Char.max">Max Rank</h3>
        <h2>{{ Char.characterName }}</h2>
    </button>
</template>

<script setup>
    const props = defineProps({
        Char: Object
})
    const available = true
</script>

<style scoped>
.card {
    margin: 15px;
    font-size: 0.7rem;
    width: 12vw;
    height: 15vh;
    text-align: center;
    background-color: rgb(212, 20, 20);

    min-width: 60px
}

.max {
    background-color: rgb(57, 145, 196);
}
</style>