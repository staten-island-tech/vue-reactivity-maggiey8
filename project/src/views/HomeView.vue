<template>
  <h2>{{ store.hour }}, {{ store.days[store.dow] }}, {{ store.date }}</h2>
  <div>
    <CharacterCard :disabled="store.isChosen"
      v-for="items in store.chars" :Char=items @click="incRank(items)"></CharacterCard>
  </div>
  <div>
    <button v-if="store.isChosen" @click="NextDay">Next</button>
    <button v-if="!store.isChosen" @click="NextDay">Skip</button>
  </div>
</template>

<script setup>
import CharacterCard from '@/components/CharacterCard.vue';
import {useCharacterStore} from '@/stores/counter.js'

const store = useCharacterStore()

function incRank(items) {
  if (items.rank < 9) {
    items.rank++
    store.isChosen = true
  }
  else if (items.rank === 9) {
    items.rank = 10
    items.max = true
    store.isChosen = true
  } 
}

function checkAvailable() {
  store.chars.forEach(char => {
    if (char.time.includes(store.hour) && char.DOW.includes(store.dow)) {
      char.available = true
    }
    else {
      char.available = false
    }
})
}

checkAvailable()

function NextDay() {
  const current = new Date(store.timestamp)
  if (current < 1489989600000) {
    let old = store.timestamp
    store.timestamp = old + 43200000   // + 12 hours
    if (current.getHours() === 6) {
      store.hour = 'Morning'
    }
    else {
      store.hour = 'Evening'
    }
    store.dow = current.getDay()
    store.date = `${current.getMonth()+1}/${current.getDate()}`

    store.isChosen = false
    checkAvailable()
    const checkIf =  [store.hour, current.getDay()]
    return checkIf
}}

</script>

<style scoped>
h2 {
  margin-left: 30px
}

div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}  

button {
  margin-top: 15px;
  margin-left: 90%;
  height: 2rem;
  width: 5rem;
}

</style>