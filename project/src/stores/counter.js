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
            arcana: 'Chariot',
            number: 'VII',
            time: ['Morning'],
            DOW: [1,2,3,4,5,6,0],
            rank: 0,
            max: false
        },
        {
            characterName: 'Ann',
            arcana: 'Lovers',
            number: 'VI',
            time: ['Morning'],
            DOW: [1,2,3,5,0],
            rank: 0,
            max: false
        },
        {
            characterName: 'Yusuke',
            arcana: 'Emperor',
            number: 'IV',
            time: ['Morning'],
            DOW: [1,2,3,4,5,6,0],
            rank: 0,
            max: false
        },
        {
            characterName: 'Makoto',
            arcana: 'Priestess',
            number: 'II',
            time: ['Morning'],
            DOW:  [2,4,6,0],
            rank: 0,
            max: false
        },
        {
            characterName: 'Futaba',
            arcana: 'Hermit',
            number: 'IX',
            time: ['Morning'],
            DOW: [3,4,6,0],
            rank: 0,
            max: false
        },
        {
            characterName: 'Haru',
            arcana: 'Empress',
            number: 'III',
            time: ['Morning'],
            DOW: [1,2,3,4,5,6],
            rank: 0,
            max: false
        },
        {
            characterName: 'Caroline & Justine',
            arcana: 'Strength',
            number: 'XI',
            time: ['Morning','Evening',],
            DOW: [1,2,3,4,5,6,0],
            rank: 0,
            max: false
        },
        {
            characterName: 'Mishima',
            arcana: 'Moon',
            number: 'XVIII',
            time: ['Evening'],
            DOW: [1,2,3,4,5,6,0],
            rank: 0,
            max: false
        },
        {
            characterName: 'Chihaya',
            arcana: 'Fortune',
            number: 'X',
            time: ['Evening'],
            DOW: [2,4,6,0],
            rank: 0,
            max: false
        },
        {
            characterName: 'Iwai',
            arcana: 'Hanged Man',
            number: 'XII',
            time: ['Evening'],
            DOW: [2,4,0],
            rank: 0,
            max: false
        },
        {
            characterName: 'Takemi',
            arcana: 'Death',
            number: 'XIII',
            time: ['Morning'],
            DOW: [1,2,3,4,5,6,0],
            rank: 0,
            max: false
        },
        {
            characterName: 'Kawakami',
            arcana: 'Temperance',
            number: 'XIV',
            time: ['Evening'],
            DOW: [5,6],
            rank: 0,
            max: false
        },
        {
            characterName: 'Ohya',
            arcana: 'Devil',
            number: 'XV',
            time: ['Evening'],
            DOW: [1,2,3,4,5,6,0],
            rank: 0,
            max: false
        },
        {
            characterName: 'Hifumi',
            arcana: 'Star',
            number: 'XVII',
            time: ['Evening'],
            DOW: [1,3,6,0],
            rank: 0,
            max: false
        },
        {
            characterName: 'Yoshida',
            arcana: 'Sun',
            number: 'XIX',
            time: ['Evening'],
            DOW: [7],
            rank: 0,
            max: false
        },
        {
            characterName: 'Sojiro',
            arcana: 'Hierophant',
            number: 'V',
            time: ['Evening'],
            DOW: [1,2,4,5,6,0],
            rank: 0,
            max: false
        },
        {
            characterName: 'Shinya',
            arcana: 'Tower',
            number: 'XVI',
            time: ['Morning'],
            DOW: [1,2,4,6],
            rank: 0,
            max: false
        },
        {
            characterName: 'Akechi',
            arcana: 'Justice',
            number: 'VIII',
            time: ['Evening', 'Night'],
            DOW: [1,2,3,4,5,6,0],
            rank: 0,
            max: false
        },
        {
            characterName: 'Sumire',
            arcana: 'Faith',
            number: '',
            time: ['Morning', 'Afternoon'],
            DOW: [1,2,3,4,5,6,0],
            rank: 0,
            max: false
        },
        {
            characterName: 'Maruki',
            arcana: 'Councillor',
            number: '1',
            time: ['Morning', 'Afternoon'],
            DOW: [1,2,3,5],
            rank: 0,
            max: false
        },
      ]
      
    const timestamp = ref(1460239200000)
    const hour = ref('Morning')
    const dow = ref('Saturday')
    const date = ref('4/9')
    const isChosen = ref(false)

    return {chars, timestamp, hour, dow, date, isChosen}
})
