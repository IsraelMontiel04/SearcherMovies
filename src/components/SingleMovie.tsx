import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";
import DefaultImage from  "/NoImage.png"

const SingleMovie:React.FC = () => {

    const {id} = useParams();
    
    const {isLoading, error, data} = useFetch(`&i=${id}`);
    
    if(isLoading) return <div className="loading"></div>
    if(error || !data || Array.isArray(data)) return <p>Error loagin movie data.</p>
    
    const {Poster, Title, Plot, Year, Country, Director, Released, Runtime} = data

    const image = Poster  === "N/A" ? DefaultImage : Poster
    const direc = Director  === "N/A" ?'Unknown' : Director

  return (
    !isLoading ?
    <div className="single-movie">
        <img src={image} alt={Title} />
        <div className="single-info">
            <h2>{Title}</h2>
            <p>{Plot}</p>
            <p><strong>Country: </strong>{Country} </p>
            <p><strong>Director: </strong>{direc} </p>
            <p><strong>Released: </strong>{Released} </p>
            <p><strong>Runtime: </strong>{Runtime} </p>
            <p><strong>Year: </strong>{Year} </p>
        </div>
    </div>
    :""
  )
}

export default SingleMovie
