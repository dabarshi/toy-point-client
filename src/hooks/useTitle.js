import { useEffect } from "react"


const useTitle = title => {

    useEffect(()=> {
        document.title = `Toy Point | ${title}`
    },[title])
}

export default useTitle;