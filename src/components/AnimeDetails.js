import React, { Component } from "react"
import PropTypes from "prop-types"

export default class AnimeDetails extends Component {

  render() {
    const { title="n/a", watched, onChangeWatched, imgSrc, imgAlt, year, rating } = this.props
    return (
      <div>

        <hr /> {/* remove when necessary */}

        <h3>
          {title}
          {
            watched ?
            <small> (watched)</small> :
            ""
          }
        </h3>
        <p>
          {
            watched ?
            <small style={{ color: "red" }}>haven't watched this? click to change status </small> :
            <small style={{ color: "green" }}>already watched this? click to change status </small>
          }
          <button onClick={onChangeWatched} className="btn btn-sm btn-light">
            click
          </button>
        </p>
        <div>
          <img
            src={imgSrc}
            alt={imgAlt}
          />
        </div>

        <br /> {/* remove when necessary */}

        <p>released in {year}</p>
        <p>rating: {rating}</p>
      </div>
    )
  }
}

AnimeDetails.propTypes = {
  title: PropTypes.string,
  watched: PropTypes.bool,
  onChangeWatched: PropTypes.func,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  year: PropTypes.number,
  rating: PropTypes.number
}
