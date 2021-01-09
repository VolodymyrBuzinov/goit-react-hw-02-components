import PropTypes from 'prop-types';


export default function ContactsList({ contacts, onContactDelete}) {    
    return (
        <>
            <ul>
                {contacts.map(contact => {
                    const randomId = '_' + Math.random().toString(36).substr(2, 9);
                    const { id = randomId, name, number } = contact;                    
                    return (
                        <li key={id}>                             
                            <p>Name: {name}</p>
                            <p>Number: {number}</p>
                            <button type="button" onClick={() => onContactDelete(id)}>Delete contact</button>
                        </li>
                    )
                    })}
             </ul>
        </>
    )
}