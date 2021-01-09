import PropTypes from 'prop-types';


export default function Filter({value, onfindContact}) {
    return (
        <>             
            <label htmlFor="input-search">Search Contact</label>            
            <input id="input-search" name='filter' value={value} type="text" onChange={e => onfindContact(e.target.value)}/>
            </>
    )
} 
    

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onfindContact: PropTypes.func,
};
