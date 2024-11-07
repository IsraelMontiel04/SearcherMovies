import { useContext, useState } from "react"
import { DataContext } from "../context/DataContext";


const FormSearch:React.FC = () => {

    const[title, setTitle] = useState("");

    const dataContext = useContext(DataContext)
    if(!dataContext) return null;
    const {setQuery, error} = dataContext;

    /* const {data} = useFetch("&s=superman"); */

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        setQuery(title)
        /* console.log('Title: ', title); */   
    }

  return (
    <div className="form-search">
      <h2>Old Movies Finder</h2>
      <form onSubmit={handleSubmit} >
        <input type="text" placeholder="Title Movie" onChange={e => setTitle(e.target.value)} />
        <input type="submit" value="Search" />
      </form>
      {error && <p className="error">The movie doesn't exit</p>}
    </div>
  )
}

export default FormSearch
