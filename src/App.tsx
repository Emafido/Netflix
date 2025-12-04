
import './App.css'
import Header from './assets/components/Header'
import Hero from './assets/components/Hero'
import TrendingNow from './assets/components/Movies'
import Movies from './assets/components/Movies'

function App() {

  return (
    <>
     <div className=' min-h-screen bg-background text-foreground transition-colors duration-300'>
      <Header />
     <Hero />
     <TrendingNow />
     </div>
    </>
  )
}

export default App
