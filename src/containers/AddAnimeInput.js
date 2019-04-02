import { connect } from "react-redux"
import { joinApiQuery } from "./../reducers"
import { addAnime } from "./../actionCreators"
import AddAnime from "./../components/AddAnime"

const mapStateToAddAnimeProps = state => ({
  onChangeTitle: ()=>{/* for improvement: create suggestion list */},
  onEnterKey: e => {
    if (e.keyCode === 13 ) { // click #addClick on Enter key
      document.getElementById("addClick").click()
    }
  }
})

const mapDispatchToAddAnimeProps = ( dispatch, ownProps) => ({
  onAddClick: e => {
    e.preventDefault()

    if (document.getElementById("animeTitle").value.length > 0) {
      fetch(joinApiQuery(document.getElementById("animeTitle").value))
      .then(data => data.json())
      .then(data => {
        dispatch(addAnime(data))
      })
    }

    // code below will be on hold for the time being, further improvement coming soon
    // const store = ownProps.context
    // document.getElementById("animeTitle").value.length > 0 ?
    //   fetch(joinApiQuery(document.getElementById("animeTitle").value))
    //     .then(data => data.json())
    //     .then(data => {
    //       dispatch(addAnime(data))
    //     })
    //     .then(() => {
    //       console.log(store.getState()) // REMOVE IN PRODUCTION
    //     })
    //   :
    //   console.log(store.getState()) // later for handling error

    document.getElementById("animeTitle").value = "" // clear input, as new item added
  }
})

const AddAnimeInput = connect(
  mapStateToAddAnimeProps,
  mapDispatchToAddAnimeProps
)(AddAnime)

export default AddAnimeInput
