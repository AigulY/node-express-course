const text = require('./practice2.js')
console.log(text)

const os = require('os')
console.log('os done')

const fs = require('fs')
console.log('fs done')

const { writeFile } = require('fs');

const fileCreated = text;
    
writeFile(
    './content/practice.txt',
    `Here is the file created : ${fileCreated}, ${os.userInfo().username}`,
    (err, text) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('practice.txt is created');
    }
)
console.log('this task is done')