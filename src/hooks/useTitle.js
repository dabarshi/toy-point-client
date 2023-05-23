import { useEffect } from "react"

//  a hook for change title

const useTitle = title => {

    useEffect(()=> {
        document.title = `Toy Point | ${title}`
    },[title])
}

export default useTitle;