import React from 'react'

function Searchbar(props) {
  return (
    <div className='col col-sm-14 searchbar'>
        <input type="search"
            className='form-control'
            placeholder='Enter a City'
            value={props.place}
            onChange={(event)=>props.setPlace(event.target.value)}
        />
        {console.log(props.value)}
    </div>
  )
}

export default Searchbar