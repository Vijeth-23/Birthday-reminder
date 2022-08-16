import{useState} from "react"
import{data} from "./Birth"
function App(){
  const[people,setPeople]=useState(data)
  const removePerson=(id)=>{
    let newPerson=people.filter((person)=>person.id!==id)
    setPeople(newPerson)
  }
  return(
    <>
    <h3 style={{backgroundColor:"skyblue",color:"blue",fontFamily:"cursive",fontSize:"40px"}}>YOU HAVE {people.length} BIRTHDAYS TODAY.</h3>
    {people.map((person)=>{
      const{id,name,age,country,image}=person
      return(
        <div className="container" key={id}>

          <img src={image} alt={name}/>
          <ul>
             <li>{name}</li>
             <li>{age}</li>
             <li>{country}</li>
           </ul>
           <div className="btn">
            <button onClick={()=>removePerson(id)}>DISMISS</button>

           </div>
        </div>
      )
    })}
  
  </>
  )
}



export default App;
