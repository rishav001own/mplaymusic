import React from 'react'
import { withRouter, Route } from 'react-router-dom'

import SearchedTrackList from '../SearchedTrackList/index'
import FeaturedPlaylist from '../FeaturedPlaylist/playlist'
import Playlist from '../Playlist/index'

import Grid from '../../styled/Grid'

// eslint-disable-next-line react/prop-types
function Content({ playTrack }) {
  return (
    <Grid overflow="auto">
      <Route
        path="/home"
        exact
        render={(props) => <FeaturedPlaylist {...props} />}
      />
      <Route
        path="/home/search/:searchedTrack"
        render={(props) => (
          <SearchedTrackList {...props} playTrack={playTrack} />
        )}
      />
      <Route
        path="/home/playlist/:playlistID"
        render={(props) => <Playlist {...props} playTrack={playTrack} />}
      />
    </Grid>
  )
}

export default withRouter(Content)
