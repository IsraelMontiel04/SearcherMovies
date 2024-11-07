import { ReactNode, useState } from "react";
import useFetch from "../hooks/useFetch";
import { DataContext } from "./DataContext";

interface Props {
    children?: ReactNode
}

export const DataProvider = ({children}:Props)=>{
    const [query, setQuery] = useState("superman");
    const {isLoading, error, data} = useFetch(`&s=${query}`);

    return (
        <DataContext.Provider value={{setQuery, isLoading, error, data}}>
            {children}
        </DataContext.Provider>
    )
}