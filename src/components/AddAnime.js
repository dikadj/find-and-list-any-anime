import React from "react"

const AddAnime = ({ onChangeTitle, onEnterKey, onAddClick }) => (
  <div className="form-group">
    <input type="text" className="form-control" id="animeTitle"
      placeholder="Add your favorite anime..."
      onChange={onChangeTitle} // onChangeTitle
      onKeyUp={onEnterKey}
    />
    <button className="btn btn-warning form-control" id="addClick"
      onClick={onAddClick}
    >
      Add
    </button>
  </div>
)

export default AddAnime
