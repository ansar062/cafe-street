import React from 'react'
import { Aboutus, DeliveryService, Home, Navbar, Popular, SpecialMenu, Subscribe, TheySay } from './components'

function App() {
  return (
    <main className="relative">
      <section>
      <Navbar />
      </section>
      
      <section>
        <Home />
      </section>
      <section>
        <Popular />
      </section>
      <section>
        <DeliveryService />
      </section>
      <section>
        <Aboutus />
      </section>
      <section>
        <SpecialMenu />
      </section>
      <section>
        <TheySay />
      </section>
      <section>
        <Subscribe />
      </section>
    </main>
  )
}

export default App
