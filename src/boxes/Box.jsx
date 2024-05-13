import './Box.css'

function Box(props){
    const boxHeight = `${props.height}px`
    const boxWidth = `${props.width}px`
    const style1 = { backgroundColor: props.color};
    const style2 = { height: boxHeight};
    const style3 = { width: boxWidth };
    return(
        <div className="Box-container">
            <button className='Box-btn' onClick={props.removeBox}>X</button>
            <div className='Box' style={{...style1, ...style2, ...style3}}></div>
        </div>)
}

export default Box;