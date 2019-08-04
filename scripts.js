
//created a factory function with 3 parameters and defined an object with its keys and values
const createDoctor = (name, specialty, address) => ({
    
        "doctorsName": name,
        "specialty": specialty,
        "address": address

})

// defined a constant
const Doctor = createDoctor("Mark", "surgeon", "1121 3rd Ave N")

console.log(Doctor)

const createPet = (petName, petBreed) => ({
  "petsName": petName,
  "petsBreed": petBreed

})

const BowWowKennels = []
const pet1 = createPet("Max", "Husky")
const pet2 = createPet("Maya", "Husky")
const pet3 = createPet("Ruger", "German Sheperd")

BowWowKennels.push(pet1, pet2, pet3)

console.log(BowWowKennels)