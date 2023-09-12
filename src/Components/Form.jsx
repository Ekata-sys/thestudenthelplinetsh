import React, { useEffect } from 'react'

export default function Form() {
    useEffect(()=>{
        const script = document.createElement("script");
        script.src = "https://forms.app/static/embed.js";
        script.async = true;
    
        document.body.appendChild(script);
    
        script.onload = () => {
          var formsappForm = new window.formsapp('64eeb4fc87b11f19e0ffe77e', 'standard', {"width":"100%","height":"440px","opacity":0});
        }
      },[])
      return <div formsappId="64eeb4fc87b11f19e0ffe77e" className='w-100'></div>;
}
