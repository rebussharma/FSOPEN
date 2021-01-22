import React,{useState, useEffect} from 'react'
import axios from 'axios'

const Helper=({searchResult})=>{

  const [showBox, setShowBox] = useState([])

  const onClickShow = (index) => setShowBox(showBox.concat(index))

  const myfunction =(i)=>{
    return[
      <h2 key='name'>{searchResult[i].name}</h2>,
      <p key='capital'>{searchResult[i].capital}</p>,
      <p key='popn'>{searchResult[i].population}</p>,
      <h3 key='langs'>Languages</h3>,
      <ul key='lang'>{searchResult[i].languages.map(lang => <li key={lang.iso639_1}>{lang.name}</li>)}</ul>,
      <img key='img' src={searchResult[i].flag} alt="flag" width="100" height="100" object-fit="fill"/>


    /*   searchResult.map(result=><h2 key={result.population}>{result.name}<br/></h2>),
    //   searchResult.map(result=><p key={result.population}> {result.capital} <br/> {result.population}</p>),
    //   <h3 key="id">Languages</h3>,
    //   searchResult.map(result=> <ul key={result.population}>{result.languages.map(lang => <li key={lang.iso639_1}>{lang.name}</li>)}</ul>),
    //   searchResult.map(result=><img src={result.flag} alt="flag" width="100" height="100" object-fit="fill" key={result.population}/>)
    */
    ]
   }
  if(searchResult.length === 1){
      return(
        <div>
          {myfunction(0)}
        </div>
    )
  }
  else{
    return(
      <>
      { 
        searchResult.length <= 10 ? 
        searchResult.map((result,i) => <h3 key={result.name}> {result.name} 
        <button onClick={() => onClickShow(i)}>{showBox.includes(i) ? myfunction(i): 'show'}</button></h3>)
        : searchResult
        
          
      }
      </>
    )
  }
}


const App =()=>{
  /// store all countries fetched
  const [countries, setCountries] = useState([])

  // store each searched country
  const [searchName, setSearchName] = useState([])
  
  //store the result country
  const [searchResult, setSearchResult] = useState([])



  useEffect(()=>{
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(response=>{
      setCountries(response.data)
    })
  }, [])

  const handleSearch = (event) =>{
    setSearchName(event.target.value)
    if (searchName.length !== 0){

      var found = searchName ? countries.filter(country => country.name.toUpperCase().includes(searchName.toUpperCase())) : countries
      if(found.length > 10){
        setSearchResult("Too many matches, specify another filter")
      }
      else if(found.length === 1){
        setSearchResult(found)
      }
      else if(found.length === 0){
        setSearchResult(found)
      }
      else{
        setSearchResult(found)
      }
     
    }

  }


  

  return(
    <>

    <h1>find countries <input value={searchName} onChange={handleSearch} /></h1>
    <Helper searchResult={searchResult} />
    </>
  )
}

export default App;
