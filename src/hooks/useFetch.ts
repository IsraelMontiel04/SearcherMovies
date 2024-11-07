import { useEffect, useState } from "react";

const API_ENDPOINT = "https://www.omdbapi.com/?apikey=22ef7076";

export interface Movie{
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
    Plot: string;
    Country: string;
    Director: string;
    Released: string;
    Runtime: string;
}

interface FetchResult{
    isLoading: boolean;
    error: boolean;
    data: Movie[]  | null;
}

const useFetch = (params:string): FetchResult => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<Movie[]|null> (null);

  const fetchMovie = (url:string) =>{
    setIsLoading(true);
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(respuestaJson =>{
        if (respuestaJson.Response === "True") {
            setData(respuestaJson.Search || respuestaJson);
            setError(false)
        }else{
            setError(true);
        }
        setIsLoading(false)
        console.log("Data: ", respuestaJson);
    })
    .catch(error => console.log(error))
  }

  useEffect(()=>{
    fetchMovie(`${API_ENDPOINT}${params}`)
  },[params])

    return {isLoading, error, data}
}

export default useFetch
