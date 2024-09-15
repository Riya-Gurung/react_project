
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import ServicePage from './components/ServicePage.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'

import Layout from './Layout/layout.jsx'
import DynamicPage from './components/DynamicPage.jsx'
import ContactDetails from './components/ContactDetails.jsx'
import ProductPage from './components/ProductPage.jsx'
import ProductDetail from './components/ProductDetail.jsx'


createRoot(document.getElementById('root')).render(
  
   

    <BrowserRouter>
    <Layout>
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/dynamic/:id" element={<DynamicPage/>}/>
        <Route path="/ServicePage" element={<ServicePage/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/product" element={<ProductPage/>} />
        <Route path='/products/:id' element={<ProductDetail/>} />
      </Routes>
    </Layout>
     {/* <App /> */}
      
    </BrowserRouter>
  
)
