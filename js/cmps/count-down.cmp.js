'use strict'


Vue.component('countdown', {
    props: ['val'],
    template: `
    <section class="countdown" v-bind:class="changeColor">
    <h3>Countdown</h3>
    <span>{{getMinutesLeft}}:{{getSecondsLeft}}</span>
    </section>
    `,
    data() {
        return {
            time: new Date().getTime() + (30 * 1000),
            secondsLeft: 0,
            minutesLeft: 0,
            count: null,
            countOn: this.val,
            audio: new Audio('mp3/Time Bomb Short-SoundBible.com-1562499525.mp3')
        }
    },
    methods: {
        updateTime() {
            var now = new Date().getTime()
            var distance = this.time - now
            if (distance < 0) {
                this.stopCount()
                this.countOn = 'OFF'
                this.$emit('due', this.countOn)
            }
            var minutes = Math.round((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.round((distance % (1000 * 60)) / 1000);
            if (seconds < 2) this.audio.play()
            this.secondsLeft = seconds
            if (seconds < 10) this.secondsLeft = '0' + seconds
            this.minutesLeft = minutes
            if (minutes < 10) this.minutesLeft = '0' + minutes

        },
        startCount() {
            this.count = setInterval(this.updateTime, 1000)
        },
        stopCount() {
            clearInterval(this.count)
        }

    },
    computed: {
        getSecondsLeft() {
            return this.secondsLeft
        },
        getMinutesLeft() {
            return this.minutesLeft
        },
        changeColor() {
            return { red: this.secondsLeft <= 10 }
        },
    },
    created() {
        this.startCount()
    },



})