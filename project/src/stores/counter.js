import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const useCharacterStore = defineStore('char', () => {
    const chars = [
        {
            characterName: 'Ryuji',
            time: ['Morning'],
            DOW: [1,2,3,4,5,6,0],
            rank: 0,
            max: false,
            available: true
        },
        {
            characterName: 'Ann',
            time: ['Morning'],
            DOW: [1,2,3,5,0],
            rank: 0,
            max: false,
            available: true
        },
        {
            characterName: 'Yusuke',
            time: ['Morning'],
            DOW: [1,2,3,4,5,6,0],
            rank: 0,
            max: false,
            available: true
        },
        {
            characterName: 'Makoto',
            time: ['Morning'],
            DOW:  [2,4,6,0],
            rank: 0,
            max: false,
            available: true
        },
        {
            characterName: 'Futaba',
            time: ['Morning'],
            DOW: [3,4,6,0],
            rank: 0,
            max: false,
            available: true
        },
        {
            characterName: 'Haru',
            time: ['Morning'],
            DOW: [1,2,3,4,5,6],
            rank: 0,
            max: false,
            available: true
        },
        {
            characterName: 'Caroline & Justine',
            time: ['Morning','Evening',],
            DOW: [1,2,3,4,5,6,0],
            rank: 0,
            max: false,
            available: true
        },
        {
            characterName: 'Mishima',
            time: ['Evening'],
            DOW: [1,2,3,4,5,6,0],
            rank: 0,
            max: false,
            available: true
        },
        {
            characterName: 'Chihaya',
            time: ['Evening'],
            DOW: [2,4,6,0],
            rank: 0,
            max: false,
            available: true
        },
        {
            characterName: 'Iwai',
            time: ['Evening'],
            DOW: [2,4,0],
            rank: 0,
            max: false,
            available: true
        },
        {
            characterName: 'Takemi',
            time: ['Morning'],
            DOW: [1,2,3,4,5,6,0],
            rank: 0,
            max: false,
            available: true
        },
        {
            characterName: 'Kawakami',
            time: ['Evening'],
            DOW: [5,6],
            rank: 0,
            max: false,
            available: true
        },
        {
            characterName: 'Ohya',
            time: ['Evening'],
            DOW: [1,2,3,4,5,6,0],
            rank: 0,
            max: false,
            available: true
        },
        {
            characterName: 'Hifumi',
            time: ['Evening'],
            DOW: [1,3,6,0],
            rank: 0,
            max: false,
            available: true
        },
        {
            characterName: 'Yoshida',
            time: ['Evening'],
            DOW: [7],
            rank: 0,
            max: false,
            available: true
        },
        {
            characterName: 'Sojiro',
            time: ['Evening'],
            DOW: [1,2,4,5,6,0],
            rank: 0,
            max: false,
            available: true
        },
        {
            characterName: 'Shinya',
            time: ['Morning'],
            DOW: [1,2,4,6],
            rank: 0,
            max: false,
            available: true
        },
        {
            characterName: 'Akechi',
            time: ['Evening'],
            DOW: [1,2,3,4,5,6,0],
            rank: 0,
            max: false,
            available: true
        },
        {
            characterName: 'Sumire',
            time: ['Morning'],
            DOW: [1,2,3,4,5,6,0],
            rank: 0,
            max: false,
            available: true
        },
        {
            characterName: 'Maruki',
            time: ['Morning'],
            DOW: [1,2,3,5],
            rank: 0,
            max: false,
            available: true
        },
      ]
      
    const timestamp = ref(1460239200000)
    const hour = ref('Morning')
    const dow = ref(6)
    const date = ref('4/9')
    const isChosen = ref(false)
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return {chars, timestamp, hour, dow, date, isChosen, days}
})
