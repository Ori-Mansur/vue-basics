'use strict'

import './cmps/show-coords.cmp.js'
import './cmps/show-time.cmp.js'
import './cmps/count-down.cmp.js'
import './cmps/who-watch.cmp.js'
import './cmps/movies.cmp.js'

new Vue({
    el:'#my-app',
    template:`
    <section class="main-container">
    <h2>Count Is:{{countIs}}</h2>
    <coords></coords>
    <section class="time-show-area">
    <time-area></time-area>
    <countdown v-on:due="updateCount"></countdown>
    </section>
    <who-watch></who-watch>
    </section>
    `,
    data:{
        seasen:'stav',
        count:'ON'
    },
    methods: {
        updateCount(status){
            this.count=status
        }
     
    },
    computed:{
        countIs(){
            return this.count
        }
    }
   
})



