const me = Object.create(null, {
  name: {
    value: "Justina"
  },
  lastName: {
    value: "Vickers"
  },
  dateOfBirth: {
    value: "03 / 01 / 1993"
  },
  placeOfBirth: {
    value: "Denver,CO"
  },
  currentCity: {
    value: "La Vergne",
    writable: true
  },
  currentState: {
    value: "Tennessee",
    writable: true
  },
  
  toString: {
  value: function () {
   return `
   ${me.name}  ${me.lastName} was born in ${me.placeOfBirth}. She was born on ${me.dateOfBirth}.
    She currently lives in ${me.currentCity}. ` // Your code goes here
    
  }
  }
  
})
 console.log(me.toString())