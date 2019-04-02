import { visibilityFilter } from "./../reducers"

// id for "ADD_ANIME"
let animeId = 0 // as it is called on an action creator, it won't damage internal system

// action creators (for dispatching)
export const addAnime = data => ({ // API dependant
  type: "ADD_ANIME",
  id: animeId++, // iterate each time new item added
  title: data.results[0].title,
  imgSrc: data.results[0].image_url,
  imgAlt: data.results[0].title,
  year: new Date(data.results[0].start_date).getFullYear(),
  rating: data.results[0].score
})

export const setWatchedFilter = filter => ({
  type: "SET_WATCHED_FILTER",
  filter: visibilityFilter(filter)
})

export const toggleWatchedAnime = id => ({
  type: "TOGGLE_WATCHED_ANIME", id: id
})
