'use strict'

Vue.component('coords', {
    template: `
    <section class="coords">
    X:{{x}}, Y:{{y}}px
    </section>
    `,
    data() {
        return {
            x:0,
            y:0
        }
    },
    methods: {
        showCordenaits(ev){
            // console.log(ev);

            this.x= ev.pageX,
            this.y=ev.pageY
        }
    },
    created(){
        document.addEventListener('mousemove',this.showCordenaits)
        document.addEventListener('touchmove',this.showCordenaits)
    }
})