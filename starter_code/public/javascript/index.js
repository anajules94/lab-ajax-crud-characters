const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com");
$(document).ready( () => {
  $('#fetch-all').on('click', () => {
    charactersAPI.getFullList("/characters");
  })

  $('#fetch-one').on('click', (e) => {

  })

  $('#delete-one').on('click', (e) => {

  })

  $('#edit-character-form').on('submit', (e) => {

  })

  $('#new-character-form').on('submit', (e) => {

  })
})
