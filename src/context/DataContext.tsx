import { createContext, Dispatch, SetStateAction} from "react";
/* import useFetch from "../hooks/useFetch"; */
import { Movie } from "../hooks/useFetch";

/* interface Props {
    children?: ReactNode
} */

interface DataContextType{
    setQuery: Dispatch<SetStateAction<string>>;
    isLoading: boolean;
    error: boolean;
    data: Movie[] | null;
}

export const DataContext = createContext<DataContextType | undefined > (undefined);

/* export const DataProvider = ({children}:Props)=>{
    const [query, setQuery] = useState("superman");
    const {isLoading, error, data} = useFetch(`&s=${query}`);

    return (
        <DataContext.Provider value={{setQuery, isLoading, error, data}}>
            {children}
        </DataContext.Provider>
    )
} */