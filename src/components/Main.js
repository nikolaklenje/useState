import React, { useState} from "react";
import lion from "./lion.jpeg"
import dog from "./dog.jpeg"
import wolf from "./wolf.jpeg"
import bear from "./bear.jpeg"


export default function Main(){

  function refreshPage() {
    window.location.reload(false);
  }
  
  const handleImageLion = event =>{
    event.preventDefault();
    setIsImage(<img src={lion} alt="Logo" />)
   }
 
   const handleImageWolf = event =>{
    event.preventDefault();
    setIsImage(<img src={wolf} alt="Logo" />)
   }
 
   const handleImageDog = event =>{
    event.preventDefault();
    setIsImage(<img src={dog} alt="Logo" />)
   }
 
   const handleImageBear = event =>{
    event.preventDefault();
    setIsImage(<img src={bear} alt="Logo" />)
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
      <div>
        <button onClick={refreshPage} className="homebtn">Home</button>
        <div style={{display: isShown ? 'block' : 'none'}}>
          <form className="container" >
              <p className="text">  Name</p>
                 <input type="text" className="inputName" value={firstName}
                 onChange={(e) => setFirstName(e.target.value)}></input>
                <p className="text"> Last Name</p>
                 <input type="text" className="inputLastName" value={lastName}
                 onChange={(e) => setLastName(e.target.value)}></input>
                 
             <div className="dropdown">
                <button onClick= {myFunction} className="dropbtn">Animals</button>
                   <div id="myDropdown" className="dropdown-content">
    
                     <ul onClick={handleSubmit} >
                         <li onClick={handleImageLion} >Lav</li>
                         <li onClick={handleImageWolf}>Vuk</li>
                         <li onClick={handleImageDog}>Pas</li>
                         <li onClick={handleImageBear}>Medjed</li>
                    </ul>
      
                  </div>
        </div>

                 
        </form>
        </div>
        <div className="container">
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