import { Component } from 'react';
import Section from '../Phonebook/Section/Section'
import Input from './Input/Input'
import ContactsList from './ContactsList/ContactsList'
import Filter from './Filter/Filter'
import swal from 'sweetalert';
export default class Phonebook extends Component {
    state = {
      contacts: [             
        ],
      filter: '',
        name: '',
      number: '',
      
    };

  onInputChange = evt => {    
    this.setState({ [evt.target.name]: evt.target.value });
    };    

  submitForm = evt => {
    evt.preventDefault();    
    if (this.state.contacts.find(({ name }) => name.toLowerCase() === this.state.name.toLowerCase())) {
      swal("Cant add!", "Contact already exist!", "error");
      return;
    } else {
      swal("Good job!", "You added contact!", "success");
    }
    const contacts = [
      ...this.state.contacts,
      { name: this.state.name, number: this.state.number},
    ];
    this.setState({ contacts });
    };
    
  deleteContact = id => {     
      this.setState(this.state.contacts.splice(id, 1));
      swal("Wow!", "You have deleted a contact!", "success");
    } 

  changeFilter = filter => {
    this.setState({ filter });
  };

  getVisibleTasks = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };
  render() {  
    const { filter } = this.state;

    const visibleTasks = this.getVisibleTasks();
    return (<>
        <Section title='Phonebook'>
            <Input name={this.state.name}
          number={this.state.number}          
          onChangeInput={this.onInputChange}
          onSubmitForm={this.submitForm}></Input>    
        </Section>
      <Section title='Contacts'> 
        {visibleTasks.length > 0 && <Filter value={filter} onfindContact={this.changeFilter}></Filter>}
        {visibleTasks.length > 0 ? <ContactsList contacts={visibleTasks} onContactDelete={this.deleteContact}></ContactsList> : <h2>You need to add contacts first</h2>}            
      </Section>
      </>
    )    
  }
}