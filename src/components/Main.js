import React, { useState} from "react";
import frontend from "./img/frontend.png"
import uxui from "./img/UxUi.png"
import backend from "./img/backend.jpg"
import database from "./img/database.jpg"



export default function Main(){

 
  const handleImageLion = event =>{
    event.preventDefault();
    setIsImage(<a href="https://google.com" target="https://google.com" rel="noreferrer"><img className="imgResponse" src={frontend} alt="Logo" /></a>)
   }

  
   const handleImageWolf = event =>{
    event.preventDefault();
    setIsImage(<a href="https://google.com" target="" rel="noreferrer"><img className="imgResponse" src={backend} alt="Logo" /></a>)
   }
 
   const handleImageDog = event =>{
    event.preventDefault();
    setIsImage(<a href="https://google.com" target="" rel="noreferrer"><img className="imgResponse" src={uxui} alt="Logo" /></a>)
   }
 
   const handleImageBear = event =>{
    event.preventDefault();
    setIsImage(<a href="https://google.com" target="" rel="noreferrer"><img className="imgResponse" src={database} alt="Logo" /></a>)
   }
 

  const handleSubmit = event => {
    event.preventDefault();
    setIsShown(current => !current);
    setMessage(<div>{firstName} {lastName}</div>)
  
  }



   const [firstName, setFirstName]= useState("");
   const [lastName, setLastName]= useState("");
   const [message, setMessage] = useState("");
   const [isShown, setIsShown] = useState(true);
   const [isImage, setIsImage] = useState();


    return(
      <div className="main">
        
        <div style={{display: isShown ? 'block' : 'none'}}>
        
          <form className="container" >
              <p className="text">  Name</p>
                 <input type="text" className="inputName" value={firstName}
                 onChange={(e) => setFirstName(e.target.value)}></input>
                <p className="text"> Last Name</p>
                 <input type="text" className="inputLastName" value={lastName}
                 onChange={(e) => setLastName(e.target.value)}></input>
                 
             <div className="dropdown">
                <button onClick= {myFunction} className="dropbtn">Choose Path</button>
                   <div id="myDropdown" className="dropdown-content">
    
                     <ul onClick={handleSubmit} >
                         <li value={frontend} onClick={handleImageLion} >Front-end</li>
                         <li value={backend} onClick={handleImageWolf}>Back-end</li>
                         <li value={uxui}  onClick={handleImageDog}>UX-UI</li>
                         <li value={database} onClick={handleImageBear}>Database</li>
                    </ul>
      
                  </div>
        </div>

                 
        </form>
        </div>
            <div className="containerResponse">
            {message}
            {isImage}
            </div> 
            
            
            
        </div>
    )
}





function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  

  window.onclick = function(event) {
    event.preventDefault();
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


// {/* // <select id="animal" name="animals">
// //                    <option value="Vuk">Vuk</option>s
// //                    <option value="Lav">Lav</option>
// //                    <option value="Pas">Pas</option>
// //                   <option value="Macka">Macka</option>
// //                 </select>
// //                 <Link to="/Response"> <input type="submit" value="Submit"></input></Link> */}


// const handleImage= event =>{
//   event.preventDefault();
//   setIsImage(<img src={event.target.value} alt="Logo" />)
//  }
