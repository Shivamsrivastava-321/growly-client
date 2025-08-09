import React from "react";
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks";
import KeyFeatures from "./components/KeyFeatures";
import LeadForm from "./components/LeadForm";



const App = () => {
  return (<>
  <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white ">
    <Hero/>
    <HowItWorks/>
    <KeyFeatures/>
    <LeadForm/>
  </div>
  </>
    
  )
}

export default App