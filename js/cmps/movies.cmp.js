


Vue.component('movie-preview', {
    props: ['movie'],
    template: `
        <li class="movie-deatails">
        <div class="movie"><h3>Name:</h3> {{movie.name}}</div>
        <div class="movie"><h3>Year:</h3> {{movie.year}}</div>
        <div class="movie"><h3>Rating:</h3> {{movie.rating}}</div>
        </li>
    `,
  
})