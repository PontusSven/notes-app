const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => 'Your notes...'


const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'))

    } else {
        console.log(chalk.red.inverse('Note title taken'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title != title)

    if (notes.length === notesToKeep.length) {
        console.log(chalk.red.inverse('No note found!'))
    } else {
        console.log(chalk.green.inverse('Note removed with title ' + title))
    }

    saveNotes(notesToKeep)
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse('Your notes:'))
   
    notes.forEach(note => {
        console.log('Title: ' + note.title + ' Body: ' + note.body)
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

   if (note) {
       console.log(chalk.green(note.title) + ' : ' + note.body)
   } else {
       console.log(chalk.red.inverse('Error no note found!'))
   }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        // return empty array
        return [] 
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}