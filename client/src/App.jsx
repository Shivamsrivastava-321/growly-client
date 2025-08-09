import React from "react";
import Hero from "./Components/Hero"
import HowItWorks from "./Components/HowItWorks";
import KeyFeatures from "./Components/KeyFeatures";
import LeadForm from "./Components/LeadForm";



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