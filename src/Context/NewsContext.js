import { createContext, useState } from "react";

export const NewsContext = createContext()

export const NewsProvider = ({ children }) => {
    const [news, setNews] = useState([])
    // to control category clicked from other components
    const [categoryClicked, setCategoryClicked] = useState({ Sports: false, Movies: false, Fashion: false })
    // state which stores filters if selected
    const [filter, setFilter] = useState({ Country: null, Source: null, Language: null })
    // input text in search bar, used here cause need to be used in filters as well
    const [text, setText] = useState("");
    // Global Error Message
    const [error, setError] = useState('');

    return <NewsContext.Provider value={{ news, setNews, setCategoryClicked, categoryClicked, filter, setFilter, text, setText, error, setError }}>
        {children}
    </NewsContext.Provider>
}