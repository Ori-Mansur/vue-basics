'use strict'


import service from '../services/service.js'


Vue.component('who-watch', {
    template: `
    <section class="watch">
        
        <button v-on:click="showUsers" v-if="currUser">Back</button>
        <ul v-if="!currUser" class="users-area">
            <li v-for="(user) in users" v-on:click="showMovies(user.id)">
                <h3>User</h3>{{user.name}}
                <div class="icon" v-bind:style="{backgroundColor: user.color}">
                    <img src="img/icon.png"> 
                </div>
            <button v-on:click="onRemoveUser(user.id,$event)">Remove</button>
            </li>
            <li class="new-user">
            <h3>New User</h3>
            <input type="text" v-model="userName" placeholder='User Name'>
            <div class="new-user-icon">
            <img src="/img/886f136f30982ab729d1d3b5f67c52af.png" v-on:click="onAddUser" >
            </div>
            <button v-on:click="onAddUser">Add</button>
            </li>
        </ul>
        <ul v-else class="movie-list">
        <h3>User:{{currUser.name}}</h3>
           <movie-preview  v-for="(currMovie) in currUser.movies" v-bind:movie="currMovie"></movie-preview>
        </ul>
    </section>
    `,
    data() {
        return {
            users: service.getUsers(),
            userName: '',
            currUser: null,

        }
    },
    methods: {
        onAddUser() {
            if(!this.userName)return
            service.addUser(this.userName)
            this.userName=''
        },
        onRemoveUser(userId,ev) {
            ev.stopPropagation()
            service.removeUser(userId)
        },
        showMovies(userId) {
            var user = this.users.find(user => user.id === userId)
            this.currUser = user
        },
        showUsers() {
            this.currUser = null
        },
    },


})