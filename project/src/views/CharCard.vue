<template>
    <div>
        <h2>{{ character.characterName }}</h2>
        <!-- <img :src="" alt=""> -->
        <h3>{{ star }}</h3>
        <button @click="increment">Rank Up</button>
    </div>
</template>

<script setup>
import {ref}  from 'vue'
const props = defineProps( {
    //define data expected to recieve
/*     age: Number,
    name: String, */
    Destination: Object,
})

//clicker logic
const star = ref(0)
function increment() {
    star.value++
}
</script>

<style scoped>
/* h1 {     // only affects h1s on DestCard page
    color: red
} */

img {
    width:250px;
    height: 300px;
    object-fit: cover;
}
</style>