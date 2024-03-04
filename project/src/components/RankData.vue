<template>
    <div :class="Char.max ? 'max': 'maxFalse'">
        <h3>{{ Char.characterName }}</h3>
        <h5>{{ Char.rank }}</h5>
    </div>
</template>

<script setup>
    const props = defineProps({
        Char:Object
    })
</script>

<style scoped>
div {
    background-color: rgb(212, 20, 20);
    width: 27vw;
    margin: 30px;    
    padding: 10px;
}

.max {
    background-color: rgb(57, 145, 196);
}
</style>