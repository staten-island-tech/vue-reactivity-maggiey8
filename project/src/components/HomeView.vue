<script setup>
const character = [     //based on Persona 5 (base)
    {
        characterName: 'Ryuji',
        arcana: 'Chariot',
        number: 'VII',
        time: ['Morning', 'Afternoon'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Ann',
        arcana: 'Lovers',
        number: 'VI',
        time: ['Morning', 'Afternoon'],
        DOW: [1,2,3,5,7],
        rain: true
    },
    {
        characterName: 'Yusuke',
        arcana: 'Emperor',
        number: 'IV',
        time: ['Morning', 'Afternoon'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Makoto',
        arcana: 'Priestess',
        number: 'II',
        time: ['Morning', 'Afternoon'],
        DOW:  [2,4,6,7],
        rain: true
    },
    {
        characterName: 'Futaba',
        arcana: 'Hermit',
        number: 'IX',
        time: ['Morning', 'Afternoon'],
        DOW: [3,4,6,7],
        rain: false
    },
    {
        characterName: 'Haru',
        arcana: 'Empress',
        number: 'III',
        time: ['Morning', 'Afternoon'],
        DOW: [1,2,3,4,5,6],
        rain: false
    },
    {
        characterName: 'Caroline & Justine',
        arcana: 'Strength',
        number: 'XI',
        time: ['Early Morning', 'Morning', 'Afternoon', 'Evening', 'Night'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Mishima',
        arcana: 'Moon',
        number: 'XVIII',
        time: ['Evening', 'Night'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Chihaya',
        arcana: 'Fortune',
        number: 'X',
        time: ['Evening', 'Night'],
        DOW: [2,4,6,7],
        rain: false
    },
    {
        characterName: 'Iwai',
        arcana: 'Hanged Man',
        number: 'XII',
        time: ['Evening', 'Night'],
        DOW: [2,4,7],
        rain: true
    },
    {
        characterName: 'Takemi',
        arcana: 'Death',
        number: 'XIII',
        time: ['Morning', 'Afternoon'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Kawakami',
        arcana: 'Temperance',
        number: 'XIV',
        time: ['Evening', 'Night'],
        DOW: [5,6],
        rain: true
    },
    {
        characterName: 'Ohya',
        arcana: 'Devil',
        number: 'XV',
        time: ['Evening', 'Night'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Hifumi',
        arcana: 'Star',
        number: 'XVII',
        time: ['Evening', 'Night'],
        DOW: [1,3,6,7],
        rain: true
    },
    {
        characterName: 'Yoshida',
        arcana: 'Sun',
        number: 'XIX',
        time: ['Evening', 'Night'],
        DOW: [7],
        rain: true
    },
    {
        characterName: 'Sojiro',
        arcana: 'Hierophant',
        number: 'V',
        time: ['Evening', 'Night'],
        DOW: [1,2,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Shinya',
        arcana: 'Tower',
        number: 'XVI',
        time: ['Morning', 'Afternoon'],
        DOW: [1,2,4,6],
        rain: true
    },
]

const characterAuto = [
    {
        characterName: 'Igor',        //AUTO (available on certain days)
        arcana: 'Fool',
        number: '0',
        time: ['Early Morning', 'Morning', 'Afternoon', 'Evening', 'Night'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Morgana',        //AUTO (available on certain days)
        arcana: 'Magician',
        number: 'I',
        time: ['Early Morning', 'Morning', 'Afternoon','Evening', 'Night'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Sae',       //AUTO (available on certain days)
        arcana: 'Judgement',
        number: 'XX',
        time: ['Early Morning', 'Morning', 'Afternoon', 'Evening', 'Night'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
    {
        characterName: 'Akechi',
        arcana: 'Justice',
        number: 'VIII',
        time: ['Evening', 'Night'],
        DOW: [1,2,3,4,5,6,7],
        rain: true
    },
]

/* const IgorDates = ['4/12', '4/18', '5/5', '6/5', '6/11', '8/21', '8/22', '8/31', '10/11', '12/24']
const MorganaDates = ['4/15', '5/2', '6/5', '6/20', '7/9', '7/25', '8/29', '9/17', '10/11', '12/23']
const SaeDates = ['7/9', '7/24', '8/22', '9/13', '10/12', '10/28', '11/20']
const AkechiDates = ['6/10', '7/24', '8/28', '10/24', '10/26', '10/29', '11/19', '11/20', '12/18']
 */
const dowArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

/* function checkAuto(arr, date, pos) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === date) {
            character.unshift(characterAuto[pos])
        }
    }
}
 */
/* checkAuto(IgorDates, nextTime()[2], 0)
checkAuto(MorganaDates, nextTime()[2], 1)
checkAuto(SaeDates, nextTime()[2], 2)
checkAuto(AkechiDates, nextTime()[2], 3) */

function nextTime() {               //346 days btwn 4/9 and 3/20 including 3/20 how do i get it to stop after a certain num of clicks tho
    const timestamp = 1460196000    // starts April 9, 2016 @ 6:00 am
    let timestamp1 = timestamp + 43200  // + 12 hours
    timestamp = timestamp1
    const current = new Date(timestamp1)
    let hour = current.getHours()
    let dow = current.getDay()
    let date = `${current.getMonth()+1}/${current.getDate()}`
    return [hour, dow, date]
}

function currentTime(arr) {
    if (arr[0] = 6) {
        let time = 'Morning'
        return time
    }
    else if (arr[0] = 12) {
        let time = 'Evening'
        return time
    }

    console.log(arr[2] + ' ' + dowArr[arr[1]-1] + ' ' + time)
}
</script>

<template>
</template>

<style scoped>

</style>
