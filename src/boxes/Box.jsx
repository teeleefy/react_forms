import './Box.css'

function Box(props){
    const style1 = { backgroundColor: props.color};
    const style2 = { height: props.height};
    const style3 = { width: props.width};
    return(
        <div className="Box-container">
            <button className='Box-btn' onClick={props.removeBox}>X</button>
            <div className='Box' style={{...style1, ...style2, ...style3}}></div>
        </div>)
}

export default Box;