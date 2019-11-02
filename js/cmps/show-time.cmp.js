'use strict'


Vue.component('time-area', {
    template: `
    <section class="time-area" v-bind:class="changeBColor" v-on:click="toggleBlack">
        <img v-bind:src="setImg"/>
        <div>
         {{hours}}:{{minutes}}:{{seconds}}
       </div>
    </section>
    `,
    data() {
        return {
            time: new Date(),
            isBlack:false
        }
    },
    methods: {
        updateTime() {
            this.time = new Date()

        },
        toggleBlack(){
            this.isBlack=!this.isBlack
        }
    },
    computed: {
        seconds() {
            if(this.time.getSeconds()<10)return '0'+this.time.getSeconds()
            else return this.time.getSeconds()
        },
        minutes() {
            if(this.time.getMinutes()<10)return '0'+this.time.getMinutes()
            else return this.time.getMinutes()
        },
        hours() {
            if(this.time.getHours()<10)return '0'+this.time.getHours()
            else return this.time.getHours()
        },
        setImg() {
            var url;
            let month = this.time.getMonth()
            if (month >= 3 && month < 6) url = 'img/spring.png'
            else if (month >= 6 && month < 9) url = 'img/summer.png'
            else if (month >= 9 && month < 12) url = 'img/autumn.png'
            else if (month >= 12 || month < 3) url = 'img/winter.png'
            return url

        },
        changeBColor(){
            return {black:this.isBlack}
        }
    },
    created() {
        setInterval(this.updateTime, 1000)
    }
})