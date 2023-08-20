import React,{useEffect,useState} from 'react'
import Loader from '../components/Loader';
import Card from '../components/Card';
import FormField from '../components/FormField';
import './home.css';

const RenderCards =({data,title})=>{
if(data?.length>0){
    return (
        data.map((post) => <Card key={post._id} {...post}/>)
)}

return(
    <h2>{title}</h2>
)
}
const Home = () => {
   const [loading,setLoading]=useState(false)
   const [searchText,setSearchText] =useState('')
   const [allPosts,setAllPosts]=useState(null);
    const [searchedResults,setSearchedResults] = useState(null)
    const [searchTimeout,setSearchTimeOut]= useState(null)
   //Implementing search
  const handleSearchChange = (e)=>{
    clearTimeout(searchTimeout)
    setSearchText(e.target.value);
    
    setSearchTimeOut(()=>{
            const searchResult = allPosts.filter((item)=> item.name.toLowerCase().includes(searchText.toLowerCase())
            || item.prompt.toLowerCase().includes(searchText.toLowerCase())
            )
            //We are setting the search results
            setSearchedResults(searchResult)
           },500)     
      
   }

   //Searching for data in the backend
   const fetchPosts =async () =>{
    setLoading(true);

    try{
        const response = await fetch('http://localhost:8080/api/post',{
            method: 'GET',
            headers:{
              'Content-Type':'application/json',
            },
          })
          if(response.ok){
            const results = await response.json();
            setAllPosts(results.data.reverse());
            console.log(setAllPosts)
           
          }
 }catch(error){
        alert("Couldnt find posts")
    }finally{
        setLoading(false)
    }
}
   //The one will be called and the start
useEffect(()=>{
    fetchPosts();
},[])

    return (
    <section>
    <div> 
    <h1 className='is-size-1 has-text-centered has-text-weight-semibold is-family-sans-serif '>Community Showcase</h1>
    <p className='is-size-5 has-text-centered has-text-weight-normal is-family-sans-serif '>Browse through the imaginative and visually stunning images generated by DALL-E AI</p>
    </div>
        <div className='mt-16  has-text-centered'>
        <FormField
        labelName="Search posts"
        type="text"
        name="text"
        placeholder="Search something..."
        value={searchText}
        handleChange={handleSearchChange}
        
        />
        <br></br>
        </div>
        
        <div className='is-flex'>
       {
        loading?(<div>
            <Loader/>
            </div>):(
               <div>
               {
                searchText && (
                    <h2>Showing Results for <span>
                    {searchText}
                    </span>
                    </h2> 
                )
               }
            <div  className="home">
               {searchText ?(
                <RenderCards data={searchedResults}
                title="No search results found"
                />
               ):(
                <RenderCards data={allPosts}
                title="No posts yet" 
                />  
               )}
            </div>


                
               
               </div> 
            )
       }
        </div>
    </section>
  )
}

export default Home