import React from 'react'
import Card from '../components/Card'
const Home = () => {
  return (
    <div className="min-h-screen bg-[#030808] relative  before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_15%,rgba(16,185,129,0.35)_0%,transparent_35%),radial-gradient(circle_at_85%_20%,rgba(16,185,129,0.25)_0%,transparent_30%),radial-gradient(circle_at_15%_85%,rgba(5,150,105,0.30)_0%,transparent_40%),radial-gradient(circle_at_80%_90%,rgba(16,185,129,0.20)_0%,transparent_35%)] before:pointer-events-none overflow-hidden">
        <Card />
    </div>
  )
}

export default Home