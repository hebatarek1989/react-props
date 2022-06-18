import React from "react"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Data from "./data/data"
import Card from "./components/Card"

function App()
{
  const cards = Data.map(item=>{
    return (
      <Card 
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <div>
      <NavBar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
