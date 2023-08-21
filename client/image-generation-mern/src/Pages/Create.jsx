import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import preview from '../assets/preview.png'
import {getRandomPrompt} from '../utils'
import FormField from '../components/FormField'
import Loader from '../components/Loader'
import './create.css';

const Create = () => {
const navigate = useNavigate();
const [form,setForm] = useState({
    name :'',
    prompt:'',
  
}) 

const [generatingImg,setGeneratingImg]= useState(false)
const [loading,setLoading] = useState(false)

const handleSubmit =async(e) => {
  e.preventDefault();
  if(form.name && form.prompt){
    setLoading(true)

    try{
      //Creating new post
      const response = await fetch('https://imagegenai.onrender.com/api/post',{
        method: 'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({...form})
      })
        //We got response successfully
        await response.json();
        alert("Success")
        //We can navigate to Home
        navigate('/')
    }catch(error){
      alert(error)
      console.log("Something went wrong ")
    }finally{
      setLoading(false)
    }

  }else{
    alert("Please enter a prompt and generate a image")
  }


}
const handleChange =(e) => {
   setForm({...form,[e.target.name]: e.target.value})
}

const handleSurpriseMe=()=>{
  const randomPrompt = getRandomPrompt(form.prompt)
  setForm({...form,prompt: randomPrompt})
}

const generateImage =async()=>{
 //We want to make a request to the backend we must check if we have aprompt
  if(form.prompt){
    setGeneratingImg(true);
    // try{
    //   setGeneratingImg(true);
    //   const response = await fetch('http://localhost:8080/api/dalle',{
    //     method: 'POST',
    //     headers:{
    //       'Content-Type':'application/json',
    //     },
    //     body:JSON.stringify({prompt:form.prompt})
    //   })
    //   //Get the respond from prompt
    //   const data = await response.json();
    //   //Set value to our hook
    //   setForm({...form,photo:`data:image/jpeg;base64,${data.photo}`})
    // }catch(error){
    //   alert(error)
    // }finally{
    //   //Set the loading state back to false
    //   setGeneratingImg(false)
    // }

  }else{
    alert("Please enter a prompt")
  }
}

  return (
    <section>
    <div> 
    <h1 className='is-size-1 has-text-centered has-text-weight-semibold is-family-sans-serif '>Create</h1>
    <p className='is-size-5 has-text-centered has-text-weight-normal is-family-sans-serif '>Create imaginative and visually stunning images througth DALL-E AI and share them with the community</p>
    </div>

    <form onSubmit={handleSubmit}>
   <FormField 
    labelName='Your name'
    type="text"
    name="name"
    placeholder="John Doe"
    value={form.name}
    handleChange={handleChange}
   />

   <FormField 
   labelName='Prompt'
   type="text"
   name="prompt"
   placeholder="a painting of a fox in the style of Starry Night"
   value={form.prompt}
   handleChange={handleChange}
   isSurpriseMe
   handleSurpriseMe={handleSurpriseMe}

  />
  

    <div className="box">
      {form.photo ?(
        <img
        src={form.photo}
        alt={form.prompt}
        className="image is-96x96"
        />
      ):(
        <img
        src={preview}
        alt='preview'
        className="image is-96x96"
        />

      )}

      {generatingImg && (
       <div  className="image is-96x96">
        <Loader/>
        </div>
      )}

        
  
    </div>

    <button   type="button" className="button is-primary mt-10"
        onClick={generateImage}

    >{generatingImg? 'Generating...': 'Generate'}</button>
    
    <div className='align'>
<p className='is-size-5 has-text-centered'>** Once you have created the image you want, you can share it with others in the community **</p>
        <br></br>
    <button  type="submit" className="button is-link is-rounded">
    {loading ? 'Sharing':'Share with community'}
    </button>
</div>
    </form>
    </section>
  )
}

export default Create