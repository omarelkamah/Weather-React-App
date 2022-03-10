import './Search.css'

function Search ({ refForInput, location, searchButton, search }) {
  return (
    <div className='search'>
      <input
        ref={refForInput}
        value={location}
        onChange={() => searchButton()}
        onKeyPress={search}
        placeholder='Enter Location'
        type='text'
      />
      <button onClick={() => searchButton()}>Search</button>
    </div>
  )
}

export default Search
