import Hero from '../components/Hero'
import Menu from '../components/Menu'
import Events from '../components/Events'
import About from '../components/About'

const GlobalPages = ({setCartCount}) => {
   return (
      <>
         <Hero />
         <Menu setCartCount={setCartCount} />
         <Events />
         <About />
      </>
   )
}

export default GlobalPages