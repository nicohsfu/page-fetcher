let args = process.argv.slice(2);
let destination = "/home/labber/lighthouse/page-fetcher/fetchedData.txt";

const fs = require('fs');

const request = require('request');
request('http://www.example.edu', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the http://www.example.edu homepage.

  fs.writeFile(destination, body, err => {

    if (err) {
      console.error(err);
    }

    // "file written successfully" message, we're assuming 1 character = 1 byte
    console.log(`Downloaded and saved ${body.length} bytes to ${destination}.`);
  });

});


// test in terminal:
// node fetcher.js http://www.example.edu/ /home/labber/lighthouse/page-fetcher/fetchedData.txt