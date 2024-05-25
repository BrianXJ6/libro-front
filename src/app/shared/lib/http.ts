import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDlhMTRlNzg1YWE1OTE3OTgzMDE0YzkwMjY1NTkwNiIsInN1YiI6IjY2NGViNzRhMWU1NzA1OTU2MWNhZGIyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BD_XEreeTG4lwNOlbQOSp_qfXBS7zQo4VCPWYujlvVU',
  },
});

export default instance;
