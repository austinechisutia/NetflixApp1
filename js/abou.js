const fetchMoviesListByGenres = (id, genres)=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OGZkZTc0MmU3MmJiODI5MTVhOTdkM2UwODQ5NGRmNyIsIm5iZiI6MTczOTQxOTM5My4wMjgsInN1YiI6IjY3YWQ2ZjAxODExZmMyZGI4N2QwYjhhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lZyJ6VjzgQBk4tZRt9mAwlRS8Y3TWaS9vkuoAxFsGDc'
        }
      };
      
      fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
        .then(res => res.json())
        .then(data => {
            makeCategoryElement(`${genres}_movies`, data.results)
        })
        .catch(err => console.error(err));
}