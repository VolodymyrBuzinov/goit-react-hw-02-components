import PropTypes from 'prop-types';


export default function Input({ name = '', number = 0, onChangeInput, onSubmitForm, }) {      
    return (<>
        <form onSubmit={onSubmitForm}>
      <label htmlFor='input-one'>Input Name</label>
      <input
          name="name"         
        type="text"
        onChange={onChangeInput}
        value={name}
        id='input-one'
      />
      <label htmlFor='input-two'>Input Number</label>
      <input
        name="number"
          type="text"          
        onChange={onChangeInput}
        value={number}
        id='input-two'
        />          
      <button type='submit'>Add contact</button>
        </form>
    </>)
    // return (<form>
    //     <label htmlFor="#input-one">Name</label>
    //     <input id="input-one" type="text" onChange={onChangeInput} value={name}/> 
    //     <label htmlFor="#input-two">Number</label>
    //     <input id="input-two" type="text" onChange={onChangeInput} value={number}/> 
    //     <button type="button" onClick={() => onSubmitForm} >Add contact</button>
    // </form>)
}

