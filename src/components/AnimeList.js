import React from "react"
import { getVisibleList } from "./../reducers"
import AnimeDetails from "./AnimeDetails"

const AnimeList = ({ animeList, watchedFilter, onChangeWatched }) => (
  <div>
    {
      getVisibleList(animeList, watchedFilter) // passed as props
      // .sort((a, b) => b.score - a.score) // sort by rating
      .map((ani) => (
        <AnimeDetails
          key={ani.id}
          title={ani.title}
          watched={ani.watched}
          onChangeWatched={() => {
            onChangeWatched(ani.id)
          }}
          imgSrc={ani.imgSrc}
          imgAlt={ani.imgAlt}
          year={ani.year}
          rating={ani.rating}
        />
      ))
    }
  </div>
)

 export default AnimeList
