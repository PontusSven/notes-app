const chalk = require('chalk');
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs
yargs.version('1.1.0')

// add
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body content',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
})

// remove 
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing a note!')
    }
})

// read
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading a note!')
    }
})
// list
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: function(){
        console.log('Listing the notes!')
    }
})

yargs.parse()
// console.log(yargs.argv)

