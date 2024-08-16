const dummyMovies = [
    {
      id: 1,
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given a chance to have his criminal history erased if he can successfully perform an inception.',
      rating: 4.8,
      posterUrl: 'https://images.csmonitor.com/csmarchives/2010/07/0715-INCEPTION-movie-review.jpg?alias=standard_300x200',
      director: 'Christopher Nolan',
      releaseDate: '2010-07-16',
      genre: 'Sci-Fi, Thriller',
      cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
      reviews: [
        { id: 1, userId: 1, text: 'Mind-bending and visually stunning!', rating: 5 },
        { id: 2, userId: 2, text: 'Complex plot but worth it.', rating: 4 }
      ]
    },
    {
      id: 2,
      title: 'The Matrix',
      description: 'A computer hacker learns about the true nature of his reality and his role in the war against its controllers.',
      rating: 4.7,
      posterUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt0KbbPitYAE7pOhy4Mr4qQ6W2bBq05pxwkQ&s',
      director: 'Lana Wachowski, Lilly Wachowski',
      releaseDate: '1999-03-31',
      genre: 'Action, Sci-Fi',
      cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
      reviews: [
        { id: 3, userId: 1, text: 'Revolutionary sci-fi film with great action sequences.', rating: 5 },
        { id: 4, userId: 3, text: 'A classic that changed the genre.', rating: 4.5 }
      ]
    },
    {
      id: 3,
      title: 'Interstellar',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      rating: 4.6,
      posterUrl: 'https://wallup.net/wp-content/uploads/2016/03/09/79772-Interstellar_movie-movies-300x200.jpg',
      director: 'Christopher Nolan',
      releaseDate: '2014-11-07',
      genre: 'Adventure, Drama, Sci-Fi',
      cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
      reviews: [
        { id: 5, userId: 2, text: 'Visually stunning and emotionally powerful.', rating: 4.8 },
        { id: 6, userId: 4, text: 'Great concept but a bit long.', rating: 4 }
      ]
    },
    {
      id: 4,
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      rating: 4.9,
      posterUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF4Cc-GHfysPzUN9RS77sPzqOQiBBVsgnrQA&s',
      director: 'Frank Darabont',
      releaseDate: '1994-09-23',
      genre: 'Drama',
      cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
      reviews: [
        { id: 7, userId: 3, text: 'A masterpiece in storytelling and character development.', rating: 5 },
        { id: 8, userId: 4, text: 'An emotional and inspiring film.', rating: 4.9 }
      ]
    },
    {
      id: 5,
      title: 'The Godfather',
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      rating: 4.9,
      posterUrl: 'https://m.media-amazon.com/images/M/MV5BOWE1MWE3ZDktOThlZS00ZmRiLWE4ZGEtNWJkMTVlZjdhZDIyXkEyXkFqcGdeQW1pYnJ5YW50._V1_QL75_UX500_CR0,0,500,281_.jpg',
      director: 'Francis Ford Coppola',
      releaseDate: '1972-03-24',
      genre: 'Crime, Drama',
      cast: ['Marlon Brando', 'Al Pacino', 'James Caan'],
      reviews: [
        { id: 9, userId: 1, text: 'A cinematic classic with brilliant performances.', rating: 5 },
        { id: 10, userId: 2, text: 'A defining film of the crime genre.', rating: 4.9 }
      ]
    },
    {
      id: 6,
      title: 'Pulp Fiction',
      description: 'The lives of two mob hitmen, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      rating: 4.8,
      posterUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFDpl3OR4mWBpdiU7KECwm558br4M0hIOW1Q&s',
      director: 'Quentin Tarantino',
      releaseDate: '1994-10-14',
      genre: 'Crime, Drama',
      cast: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
      reviews: [
        { id: 11, userId: 3, text: 'Innovative and unforgettable film.', rating: 4.8 },
        { id: 12, userId: 4, text: 'A unique narrative style with great dialogue.', rating: 4.7 }
      ]
    }
  ];
  
  export default dummyMovies;
  