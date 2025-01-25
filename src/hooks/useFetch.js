import { useState,useEffect } from "react";

const useFetch=(url)=>{
      const [info,setInfo]=useState('')
      const[isLoading,setIsLoading]=useState(false)
      const[error,setError]=useState(false)
      
      useEffect(()=>{
        const fetchData=async()=>{
            try{
              setIsLoading(true)
              const response=await fetch(url)
              const data=await response.json()
              console.log(data)
              setInfo(data)
            }catch(e){
              console.error(e)
              setError(e)
            }finally{
                setIsLoading(false)
            }
           
          }
          console.log(info)
          fetchData()
      },[])

      return {info,isLoading,error}

}

export default useFetch