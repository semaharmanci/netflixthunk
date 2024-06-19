import axios from "axios";

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDJjODEyMGI5NGQxZjBmMDIwODVmNjY4Yjc5ZDUyZCIsInN1YiI6IjY2NmYzMzFhMjkxMzNmOWNkM2M0Yzc2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1QgyUPLXTYMpU8V2mqQTvLhVI0C5bU3XwfKLf5h05KU'
  },
  params: {
    language:"tr-TR"
  }
 
});
