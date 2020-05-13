import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

import { List, Grid, P } from '../../../styled'

const ArrowIcon = styled.i`
  height: 25px;
  width: 25px;
  position: absolute;
  right: 10px;
  transition: 0.3s ease-in-out;
`

const Item = styled(List.Item)`
  font-size: 14px;
  text-align: left;
  color: lightblack;
  padding: 10px 20px;
  border-left: 3px orange solid;
  :hover {
    ${ArrowIcon} {
      transform: translateX(8px);
    }
  }
`

const PlaylistContainer = styled(List)`
  text-align: left;
  grid-gap: 10px;
`

const Header = styled(P)`
  color: darkblack;
  padding: 10px 20px;
  font-weight: bolder;
  text-align: left;
`

// eslint-disable-next-line react/prop-types
function Playlist({ playlists, history }) {
  return (
    <Grid direction="row" py="xxl">
      <PlaylistContainer>
        <Header> Playlists </Header>
        {playlists &&
          // eslint-disable-next-line react/prop-types
          playlists.map((playlist) => (
            <Item
              key={playlist.id}
              // eslint-disable-next-line react/prop-types
              onClick={() => history.push(`/home/playlist/${playlist.id}`)}
            >
              {playlist.name} <ArrowIcon className="fas fa-arrow-right" />
            </Item>
          ))}
      </PlaylistContainer>
    </Grid>
  )
}
export default withRouter(Playlist)
