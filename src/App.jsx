import './styles/GeneralStyles.scss'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Description from './components/Description'
import Cards from './components/Cards'
import ContactForm from './components/ContactForm'
import ReturnButton from './components/ReturnButton'


const App = () => {
  return (
    <div className="App">

      {/* Navbar */}
      <Navbar />
      {/* Navbar */}


      {/* Hero */}
      <Hero />
      {/* Hero */}

      {/* Description */}
      <Description />
      {/* Description */}

      {/* Cards */}
      <Cards />
      {/* Cards */}

      {/* Contact Form */}
      <ContactForm />
      {/* Contact Form */}

      {/* Return Button */}
      <ReturnButton />
      {/* Return Button */}

    </div>
  )
}
export default App 