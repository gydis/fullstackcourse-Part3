const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log(
    'Please provide the password as an argument: node mongo.js <password>'
  )
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@cluster0.9t5sg.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv[3] && process.argv[4]) {
  const note = new Person({
    name: process.argv[3],
    number: process.argv[4],
  })

  note.save().then((result) => {
    console.log(`Added ${note.name} number ${note.number} to phonebook`)
    mongoose.connection.close()
  })
} else {
  Person.find({}).then((persons) => {
    console.log('phonebook:')
    persons.forEach((x) => console.log(`${x.name} ${x.number}`))
    mongoose.connection.close()
  })
}
