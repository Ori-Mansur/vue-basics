'use strict'

export default {
    getUsers,
    addUser,
    removeUser
}


var nextId = 101
var movieList = [{ name: 'Planet Earth', year: '2016', rating: 9.5 },
                 { name: 'Band of Brothers', year: (2001), rating: 9.4 },
                 { name: 'Chernobyl', year: (2019), rating: 9.4 },
                 { name: 'Shover shurot', year: (2008), rating: 9.4 },
                 { name: 'Blue Planet II', year: (2017), rating: 9.3 },
                 { name: 'The Wire', year: (2002), rating: 9.3 },
                 { name: 'Game of Thrones', year: (2011), rating: 9.3 },
                 { name: 'Our Planet', year: (2019), rating: 9.3 },
                 { name: 'Cosmos', year: (2014), rating: 9.2 },
                 { name: 'Rick and Morty', year: (2013), rating: 9.2 },
                 { name: 'Avatar: The Last Airbender', year: (2005), rating: 9.2 },
                 { name: 'The Sopranos', year: (1999), rating: 9.1 },
                 { name: 'The World at War', year: (1973), rating: 9.1 },
                 { name: 'Life ', year: (2009), rating: 9.1 },
                 { name: 'Sherlock', year: (2010), rating: 9.1 },
                 { name: 'The Vietnam War', year: (2017), rating: 9.1 },
                 { name: 'Hagane no renkinjutsushi ', year: (2009), rating: 9.0 },
                 { name: 'The Beatles Anthology ', year: (1995), rating: 9.0 },
                 { name: 'The Twilight Zone', year: (1959), rating: 9.0 },
                 { name: ' Human Planet', year: (2011), rating: 9.0 },
                 { name: 'The Blue Planet', year: (2001), rating: 9.0 },
                 { name: 'Firefly', year: (2002), rating: 9.0 },
                 { name: ' Batman: The Animated Series', year: (1992), rating: 9.0 },
                 { name: 'Dekalog', year: (1989), rating: 9.0 },
                 { name: 'Frozen Planet', year: (2011), rating: 9.0 },
                 { name: 'True Detective', year: (2014), rating: 9.0 },
                 { name: 'The Civil War', year: (1990), rating: 9.0 }
                ]
let users = [_createUser('Muki'), _createUser('Ori'), _createUser('Tal')]



function getUsers() {
    return users
}
function _createUser(name) {
    return {
        id: nextId++,
        name,
        movies: movieList.splice(getRandomInt(0, movieList.length), 5),
        color:getRandomcolor()
    }

}
function addUser(name) {
    users.unshift(_createUser(name))
}
function removeUser(userId) {
    var userIdx = users.findIndex(user => userId === user.id)
    users.splice(userIdx, 1)
}



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


function getRandomcolor(){
    var color = Math.floor(Math.random() * 16777216).toString(16);
return '#000000'.slice(0, -color.length) + color;
}




`
`