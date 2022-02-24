const yargs = require('yargs');    
const chalk = require('chalk');
const notes = require('./notes.js');     // this is going to import an object of functions  

// ADDING A NOTE
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
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {          
        notes.addNote(argv.title, argv.body);      
    }
})

// REMOVING A NOTE
yargs.command({
    command: 'remove',     // this will set the command to remove
    describe: 'Remove a note',    
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {          
        notes.removeNote(argv.title);
    }
})

// LISTING NOTES
yargs.command({
    command: 'list',     
    describe: 'List your notes',    
    handler() {         
        notes.listNotes();
    }
})

// READING NOTES
yargs.command({
    command: 'read',     // this will set the command to read
    describe: 'Read a note', 
    buildder: {          // it is required coz we r passing arguments
        title: 'Read note',
        demandOption: true,
        type: 'string'
    },   
    handler(argv) {         
        notes.readNotes(argv.title);
    }
})

yargs.parse();