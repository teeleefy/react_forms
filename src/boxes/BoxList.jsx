import { useState } from 'react'
import NewBoxForm from './NewBoxForm.jsx'
import Box from './Box.jsx'
// import './BoxList.css'

function BoxList(){
    const [boxes, setBoxes] = useState([{color: "green", height: "50px", width: "25px", key:"box-a"},{color: "yellow", height: "150px", width: "75px", key:"box-b"},{color: "red", height: "50px", width: "125px", key:"box-c"}]);

    const removeBox = (key) => {
        setBoxes(boxes.filter(box => box.key !== key))
    }

    return(
        <>
        <NewBoxForm/>
        {boxes.map(box => (
            <Box color={box.color} height={box.height} width={box.width} removeBox={evt => removeBox(box.key)}/>
        ))}
        </>)
}

export default BoxList;