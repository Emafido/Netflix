
import './App.css'
import Header from './assets/components/header'
import Hero from './assets/components/Hero'
import Movies from './assets/components/Movies'

function App() {

  return (
    <>
     <div className=' min-h-screen bg-background text-foreground transition-colors duration-300'>
      <Header />
     <Hero />
     <Movies />
     </div>
    </>
  )
}

export default App
