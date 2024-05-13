import './NewBoxForm.css'
import { useState } from 'react'

function NewBoxForm({ addBox }){
const INITIAL_STATE = { color: "", height: "", width: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Send { color, height, width } to parent
   *    & clear form. */

  const handleSubmit = evt => {
    evt.preventDefault();
    addBox(formData);
    setFormData(INITIAL_STATE);
  };

  /** Update local state w/curr state of input elem */

  const handleChange = evt => {
    const { name, value }= evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

    return(
        <>
        <form className="NewBoxForm" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="color">Box Color: </label>
                <input 
                    className='NewBoxForm-input' 
                    id="color" 
                    name="color" 
                    type='text' 
                    value={formData.color} 
                    onChange={ handleChange }>
                </input>
            </div>
            <div>
                <label htmlFor="height">Box Height: </label>
                <input 
                className='NewBoxForm-input' 
                id="height" 
                name="height" 
                type='text' 
                value={formData.height} 
                onChange={ handleChange }
                ></input>

            </div>
            <div>
                <label htmlFor="width">Box Width: </label>
                    <input 
                    className='NewBoxForm-input' 
                    id="width" 
                    name="width" 
                    type='text'
                    value={formData.width} 
                    onChange={ handleChange }
                    ></input>
                    
            </div>
            <button className="NewBoxForm-btn" type='submit'>Add Box</button>
        </form>
        </>)
}

export default NewBoxForm;