import { FC, useEffect, useState } from "react"


interface Props{}

const PopUp: FC<Props> = (props) => {

    const [showPopUp, setShowPopUp] = useState(false);

    const showPopupHandler = () => setShowPopUp(true)


    useEffect(() => {
        const timer = setTimeout(() => { 
        console.log("Jag kommer att exekveras 5 sekunder efter komponentmontering")   
        }, 5000);
        // Jag kommer att tas bort medan komponenten avmonteras. 
        return () => clearTimeout(timer)
        }, []);

        useEffect(() => { 
            const timer = setTimeout(() => { 
            setShowPopUp(false); 
          }, 5000);
       return () => clearTimeout(timer);
       }, [showPopUp]);


    return (
        <div>
            
        
        </div>
    )
}

export default PopUp 

/* const [showPopUp, setShowPopUp] = useState(false);
const showPopupHandler = () => setShowPopUp(true);
useEffect(() => {
   const timer = setTimeout(() => {
   setShowPopUp(false);
 }, 5000);
return () => clearTimeout(timer);
}, [showPopUp]);
let popup = null;
if(showPopUp) {
  popup = <PopUp />;
 }
return (
    <>
     {popup}
     <button onClick={showPopupHandler}>Show Pop-up</button>
    </>
)
}
 */
