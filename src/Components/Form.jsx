import React, { useEffect, useState } from 'react'

export default function Form() {
    const [formLoaded,setFormLoaded] = useState(false)
    useEffect(()=>{
        const script = document.createElement("script");
        script.src = "https://forms.app/static/embed.js";
        script.async = true;
    
        if(!formLoaded){
          document.body.appendChild(script);
          script.onload = () => {
          setFormLoaded(true)
          var formsappForm = new window.formsapp('650255d191509b1d69bc4beb', 'standard', {"width":"100%","height":"550px","opacity":0});
        }
        }
      },[])
      return <div formsappId="650255d191509b1d69bc4beb" className='w-100' style={{zIndex:"1"}}></div>;
}
