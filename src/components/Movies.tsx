import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import ItemMovie from "./ItemMovie"

const Movies:React.FC = () => {
    const dataContext = useContext(DataContext)
    if(!dataContext) return null;
    const {isLoading, data} = (dataContext)

  return (
    <div className="movies-content">
        {
            !isLoading && data ?
                data.map((item) =>(
                    <ItemMovie
                    key={item.imdbID}
                    id={item.imdbID}
                    title={item.Title}
                    type={item.Type}
                    year={item.Year}
                    poster={item.Poster}
                     />
                ))
                : ""
        }
    </div>
  )
}

export default Movies
