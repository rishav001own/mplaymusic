import React, { useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';// eslint-disable-next-line
import { Grid, Input, P } from '../../styled/index';
import '../../shockwave.css';

const SearchIcon = styled.i`
  color: black;
  right: 150px;
  height: 20px;
  width: 20px;
  position: absolute;
  z-index: 3;
  left: 20px;
  top: 17px;
`

const SearchInput = styled(Input)`
  font-size: 14px;
  border-radius: 50px;
  height: 80%;
  margin: 7px;
  width: 98%;
  padding: 5px 35px;
  border: 0.5px lightgray solid;
`

const SearchContainer = styled(Grid)`
  grid-auto-flow: column;
  grid-template-columns: 300px 50px;
  grid-gap: 20px;
  box-shadow: 9px 2px 10px 1px rgba(0, 0, 0, 0.75);
  z-index: 2;
`
// eslint-disable-next-line react/prop-types
function Search({ history }) {
  const [searchInput, setSearchInput] = useState('')

  function handleSearch(event, searchFilter) {
    if (event) event.preventDefault()

    if (!searchFilter.trim()) {
      toast.error('Enter keywords to search!')
      return
    }
    const URIEconded = encodeURI(searchFilter)
    // eslint-disable-next-line react/prop-types
    history.push(`/home/search/${URIEconded}`)
  }


  return (
    <SearchContainer>
      <form onSubmit={(e) => handleSearch(e, searchInput)}>
        <SearchInput
          type="text"
          name="searchInput"
          value={searchInput}
          placeholder="Search track..."
          onChange={(e) => setSearchInput(e.currentTarget.value)}
        />
        <SearchIcon className="fas fa-search" />
      </form>
    </SearchContainer>
  )
}

export default withRouter(Search)
