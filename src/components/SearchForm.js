import React from 'react'

const SearchForm = ({handleSearch}) => {

  return (
    <div className="field">
      <div className="control">
        <label> <strong> Search By City </strong> </label>
        <form>
          <input className="input" type="text" placeholder="Location" onChange={handleSearch} />
        </form>
      </div>
    </div>
  )
}

export default SearchForm
