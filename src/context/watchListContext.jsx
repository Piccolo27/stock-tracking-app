import { createContext, useEffect, useState } from "react";

export const WatchListContext = createContext()

export const WatchListContextProvider = (props) => {

    const [watchlist, setWatchlist] = useState(
        localStorage.getItem("watchlist")?.split(",") || ['GOOGL', 'MSFT', 'AMZN']
    );

    useEffect(() => {
        localStorage.setItem("watchlist", watchlist);
    }, [watchlist]);

    const addStock = (stock) => {
        if (watchlist.indexOf(stock) === -1){
            setWatchlist([...watchlist, stock]);
        }
    }

    const deleteStock = (stock) => {
        setWatchlist(watchlist.filter((el) => {
            return el !== stock
        }))
    }

    return <WatchListContext.Provider value={{watchlist, addStock, deleteStock}}>
        {props.children}
    </WatchListContext.Provider>
}