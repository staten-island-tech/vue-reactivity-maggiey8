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
    width: 24vw;
    margin: 30px;
    padding: 10px;
    text-align: center;
}

@media screen and (max-width: 1050px) {
  div {
      width: 15vw;
      font-size: 0.8rem;
  }
}

@media screen and (max-width: 350px) {
  div {
      font-size: 0.5rem;
  }
}

.max {
    background-color: rgb(57, 145, 196);
}
</style>