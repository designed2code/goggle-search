import { Links } from "./Links"
import { useState,useEffect } from "react"
import { useDebounce } from "use-debounce"
import { useResultContext } from "../contexts/ResultContextProvider"
export const Search = () => {
    const [text,setText] = useState('Elon Musk') 
    const {setSearchTerm} = useResultContext()
    // Which value you want to debounce and for how much time
    const [debouncedValue] = useDebounce(text,3000)

    useEffect(() => {
        if(debouncedValue){
            setSearchTerm(debouncedValue)
        }
    },[debouncedValue])
    return(
        <div className="relative sm:m-48 md:-ml-72 sm:mt-10 mt-3">
            <input 
            value={text} 
            type="text" 
            className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
            placeholder="Search"
            onChange={(e) => setText(e.target.value)}
            />
            {!text && (
                <button type="button" className="absolute text-1.5 right-4 text-2xl text-gray-500" onClick={() => setText('')}>X</button>
            )}
            <Links/>
        </div>
    )
}