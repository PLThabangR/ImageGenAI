import { useState } from 'react'
import { BrowserRouter,Link,Route,Routes }  from 'react-router-dom'
import './App.css';
import logo from './assets/logo.svg'
import { Home } from './Pages';
import { CreatePost } from './Pages';

function App() {
  

  return (
    <BrowserRouter>
    <div className='main'>
    <div className='container box'>
<header  className='header '>
  <Link className='image is-96x96' to='/'>
  <img src={logo} alt="logo" />
</Link>

      <Link to="/create-post">
      <button className="button is-link">Create</button>
      </Link>
    </header>
    
    
    <main >
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create-post' element={<CreatePost/>}/>
    </Routes>
    </main>
    </div>

    <footer>
    <footer className="footer">
  <div className="content has-text-centered">
    <p>
      <strong>ImageGenAI</strong> by <a href="https://github.com/PLThabangR?tab=repositories">ThabangR</a> using 
      <a href="https://bulma.io/documentation/"> Bulma</a>. The website content is learned from
      <a href="https://github.com/adrianhajdin/project_ai_mern_image_generation/blob/main/client/src/page/Home.jsx"> Javascript mastery</a>.
    </p>
  </div>
</footer>
    </footer>
    </div>
    </BrowserRouter>
  )
}

export default App
