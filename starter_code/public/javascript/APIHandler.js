class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
}

  getFullList (params) {
    $.ajax({
      url: this.BASE_URL + params ,
      method: "GET",
      success: function (response) {
        let data = response;
        for (let i =1, i<data.length-1, i++) {
          let fullList = data[i]
          $('.name').html(""+fullList.name+"");
          $('.occupation').html(""+fullList.occupation);
          $('.debt').html(""+fullList.debt);
          $('.weapon').html(""+fullList.weapon);
        }
        console.log(data)
      }
  })
}


  getOneRegister () {

  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
