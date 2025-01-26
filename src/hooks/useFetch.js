import { useState,useEffect } from "react";

const useFetch=(url)=>{
      const [info,setInfo]=useState('')
      const[isLoading,setIsLoading]=useState(false)
      const[error,setError]=useState(false)

      
      useEffect(()=>{
        //used for cancelling fetch requests so unneccessary api calls arent made
        const controller=new AbortController()
        const fetchData=async()=>{
            try{
              setIsLoading(true)
              const response=await fetch(url,{signal:controller.signal})
              const data=await response.json()
              console.log(data)
              setInfo(data)
            }catch(e){
              if (e.name === 'AbortError'){
                console.log('Fetch request aborted')
              }else{
                console.error(e)
                setError(e)
              }
            }finally{
                setIsLoading(false)
            }
            
           
          }
          console.log(info)
          fetchData()
          // Cleanup function - this will cancel the fetch request if the component unmounts or the effect is re-triggered
          return ()=> controller.abort()
      },[])

      return {info,isLoading,error}

}

export default useFetch