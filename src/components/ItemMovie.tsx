import { Link } from "react-router-dom"
import DefaultImage from  "/NoImage.png"

interface Props{
    id:string
    title:string
    type:string
    year:string
    poster:string
}


const ItemMovie:React.FC <Props> = ({id, title, type,year,poster}) => {
    const image = poster === "N/A" ? DefaultImage : poster

    return ( 
        <>
        <Link to={`/movies/${id}`} style={{color: 'inherit', textDecoration:'inherit'}}>
            <article>
                    <div className="item-movie" style={{backgroundImage: `url(${image})`}}>
                        <div className="info">
                            <h4>{title}</h4>
                            <p className="row-info" ><span>{type}</span> <span>{year}</span> </p>
                        </div>
                    </div>
                </article>
            </Link>
        </>
     );
}
 
export default ItemMovie;