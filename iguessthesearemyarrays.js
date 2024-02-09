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

const IgorDates = ['4/12', '4/18', '5/5', '6/5', '6/11', '8/21', '8/22', '8/31', '10/11', '12/24']
const MorganaDates = ['4/15', '5/2', '6/5', '6/20', '7/9', '7/25', '8/29', '9/17', '10/11', '12/23']
const SaeDates = ['7/9', '7/24', '8/22', '9/13', '10/12', '10/28', '11/20']
const AkechiDates = ['6/10', '7/24', '8/28', '10/24', '10/26', '10/29', '11/19', '11/20', '12/18']

//switch to only morning and night, when click next, go forward 12 hours starting from 4/9/2016 (+43200000 to timestamp), ends on 3/20