import { useState } from 'react'
import NewBoxForm from './NewBoxForm.jsx'
import Box from './Box.jsx'
import './BoxList.css'
import { v4 as uuid } from 'uuid'

function BoxList(){
    const [boxes, setBoxes] = useState([{color: "green", height: "50", width: "25", id: uuid()},{color: "yellow", height: "150", width: "75", id: uuid()},{color: "red", height: "50", width: "125", id: uuid()}]);

    const addBox = box => {
        let newBox = { ...box, id: uuid()};
        setBoxes(boxes => [...boxes, newBox])
    }

    const removeBox = (key) => {
            setBoxes(boxes.filter(box => box.id !== key))
        }

    const renderItems = () => {
        return (
            <>
                {boxes.map(box => (
                    <Box color={box.color} height={box.height} width={box.width} id={box.id} key={box.id} removeBox={evt => removeBox(box.id)}/>
                    ))}
            </>
        )
    }

  

    return(
        <>
        <NewBoxForm addBox={ addBox }/>
            <div className='BoxList'>
                { renderItems() }
            </div>
        </>)
}

export default BoxList;