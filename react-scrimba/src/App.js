import React from "react"
import ContactCard from "./ContactCard"
// import Header from "./components/Header"
// import MainContent from "./components/MainContent"
// import Footer from "./components/Footer"

// function App()
// {
//     return(
//         <div>
//           <Header />
//           <MainContent />
//           <Footer />
//         </div>
//     )
// }
// export default App

// import ContactCard from "./ContactCard"

// function App() {
//     return (
//         <div className="contacts">
//             <ContactCard 
//                 name="Mr. Whiskerson" 
//                 imgUrl="http://placekitten.com/300/200" 
//                 phone="(212) 555-1234" 
//                 email="mr.whiskaz@catnap.meow"
//             />

//             <ContactCard 
//                 name="Fluffykins" 
//                 imgUrl="http://placekitten.com/400/200" 
//                 phone="(212) 555-2345" 
//                 email="fluff@me.com"
//             />

//             <ContactCard 
//                 name="Destroyer" 
//                 imgUrl="http://placekitten.com/400/300" 
//                 phone="(212) 555-3456" 
//                 email="ofworlds@yahoo.com"
//             />

//             <ContactCard 
//                 name="Felix" 
//                 imgUrl="http://placekitten.com/200/100" 
//                 phone="(212) 555-4567" 
//                 email="thecat@hotmail.com"
//             />

//         </div>
//     )
// }
function App() {
  return (
    <div className="contacts">
      {/* This will be provides through json in real scenario */}
      <ContactCard
        contact={{imgUrl: "http://placekitten.com/300/200", name: "Arjun Gautam", phone: "9863482273", email: "laserarjun@gmail.com" }}
      />



      <ContactCard
        contact={{ imgUrl: "http://placekitten.com/300/200",name: "Parbata Gautam", phone: "9863482273", email: "parbata@gmail.com" }}
      />
   

    <ContactCard
    contact={{imgUrl: "http://placekitten.com/300/200",name:"Pooja Sharma",phone:"98341121",email:"hari@gmail.com"}}
    />
    </div>
  
  )
}
export default App