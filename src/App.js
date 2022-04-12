// Importing the components
// import Form from "./Components/Form";
// import RubixCube from "./Components/RubixCube";
// import animals from "./animals";
import PetList from "./Components/PetList";
import Navigation from "./Components/Navigation";
import "./App.css"

// Define our app components
// Morning lesson - Adrian
// const App = () => {
//   // Set the var inside the function you are currently working on.
//   const amIHappy = true;
//   const cohortMascotName = "WD40";
//   const howManyCoffeesConsumed = 64;
//   return (
  //   <div>
  //     <header>
  //       <h1>Hello World { amIHappy === true ? ":)" : ":("} </h1>
  //       <p>{ cohortMascotName }</p>
  //       <p>{ howManyCoffeesConsumed }</p>
  //       <p className={ howManyCoffeesConsumed <= 32 ?"lowCoffee" : "highCoffee"}>
  //         I have had { howManyCoffeesConsumed } today!
  //       </p>
  //     </header>
  //     <Form />
  //     <RubixCube />
  //     <RubixCube />
  //     <RubixCube />
  //     <RubixCube />
  //     <RubixCube />
  //     <RubixCube />
  //     <RubixCube />
  //     {
  //       amIHappy === true ? <div>I am happy</div> :
  //         <ul className="background-red">
  //           <li><img src="https://placekitten.com/200/300"/></li>
  //           <li><img src="https://placekitten.com/200/300"/></li>
  //           <li><img src="https://placekitten.com/200/300"/></li>
  //           <li><img src="https://placekitten.com/200/300"/></li>
  //           <li><img src="https://placekitten.com/200/300"/></li>
  //         </ul>
  //       }
  //   </div>
  // )

  // Afternoon lesson - Esther
const App = ()=>{
  return (
  <div className="App">
    <h1>Adopt a Pet!!!</h1>
    <PetList />
    <Navigation />
  </div>
  )
}

// Export the components
// export default App
export default App