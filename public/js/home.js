const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OGZkZTc0MmU3MmJiODI5MTVhOTdkM2UwODQ5NGRmNyIsIm5iZiI6MTczOTQxOTM5My4wMjgsInN1YiI6IjY3YWQ2ZjAxODExZmMyZGI4N2QwYjhhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lZyJ6VjzgQBk4tZRt9mAwlRS8Y3TWaS9vkuoAxFsGDc'
    }
  };
  
  fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
    .then(res => res.json())
    .then(data => {
        data.genres.forEach(item => {
            fetchMoviesListByGenres(item.id, item.name);
            
        });
    })
    .catch(err => console.error(err));