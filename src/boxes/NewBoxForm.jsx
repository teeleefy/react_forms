import './NewBoxForm.css'

function NewBoxForm(props){
    return(
        <>
        <h2>My form will go here</h2>
        <form>
            <div>
                <label for="color">Box Color: </label>
                <input name="color" type='text'></input>
            </div>
            <div>
                <label for="height">Box Height: </label>
                <input name="height" type='text'></input>
            </div>
            <div>
                <label for="width">Box Width: </label>
                <input name="width" type='text'></input>
            </div>
            <button className="NewBoxForm-btn" type='submit'>Add Box</button>
        </form>
        </>)
}

export default NewBoxForm;