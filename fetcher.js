const request = require('request');


const fetch = ([webpage, localPage])=>{
    console.log(webpage);
    console.log(localPage);
    request(webpage, (error, response, body) => {
        // console.log('error:', error); // Print the error if one occurred
        // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.

        const fs = require('fs');

        //const content = 'Some content!';
        console.log(localPage);
        fs.writeFile(localPage, body, err => {
        if (err) {
            console.error(err);
        }
    // file written successfully
});
        
});

    

}

const args = process.argv.slice(2);
fetch(args);