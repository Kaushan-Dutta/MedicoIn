import React,{useCallback} from 'react'

export function useAuth()  {

    
    const userlogin=useCallback(async()=>{
      try{
        /* const response=await axios.post('http://localhost:3030/auth/login',{
          email:email,
          password:password
        })
        console.log(response.data.message);
        localStorage.setItem('smarthealth',JSON.stringify({token:response.data.token}));
        window.location.href="/"; */
      }
  
      catch(err:any){
        console.log(err.message);
      }
    },[])
   
  return (
    {userlogin}
  )
}

