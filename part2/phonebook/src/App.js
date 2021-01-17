import React, { useState , useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/Personform'
import Contact from './components/Contacts'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mariem Poppendieck', number: '39-23-6423122' },
    { name: 'Maryien Poppendieck', number: '39-23-6423122' }

  ]) 
  //newName controls input elements
  const [ newName, setNewName ] = useState('add name')
  const [ newNumber, setNewNumber ] = useState('add number')
  const [ newSearchName, setNewSearch ] = useState('')
  const [ searchName, setSearchName] = useState([])

  

  const handleClick = (event)=>{
    event.preventDefault()
    const contactObj = {
      name: newName,
      number: newNumber 
    }
    // if already exists, alert
    var found_name = persons.find(element => element.name === newName);
    var found_number = persons.find(element => element.number === newNumber);

    if(found_name)
      alert(`${newName} already exists`)
    else if(found_number)
      alert(`${newNumber} already exists`)
    else
      setPersons(persons.concat(contactObj))

    setNewName('add contacts')
    setNewNumber('add number')
  }

  const handleChange = (event)=>{
    setNewName(event.target.value)
  }

  const handleNumberChange = (event)=>{
    setNewNumber(event.target.value)
  }

  

  
  const handleSearchChange = (event)=>{
    ///
//  TODO: MAKE SETSATE CHANGE IMMEDIATELY USING USEFFECTS
    ///

    // if newSearch is true, filteredName = name that includes 'search' 
    // else filteredName = newName
    // toUpperCase() is used for case INsensetive comparision
    var filteredName = newSearchName ? persons.filter(person => person.name.toUpperCase().includes(newSearchName.toUpperCase())): newName

    if(typeof(filteredName) !== 'string'){
      filteredName = [ ...new Set(filteredName.map(a => a.name))];
      setSearchName(filteredName)
    }
    setNewSearch(event.target.value)
  }
  

  return (
    <div>
      <Filter value={newSearchName} onChange={handleSearchChange} />
      <PersonForm valueName={newName} valueNumber={newNumber} onChangeName={handleChange} onChangeNumber={handleNumberChange} onClick={handleClick} />
      <h2>Contacts</h2>
      {searchName.map((contact) => <Contact key={contact} name={contact} />)}

      {/* { map all the persons
        persons.map(contact => <p key={contact.name} > {contact.name} {contact.number}</p>)
      } */}
    </div>
  )
}

export default App