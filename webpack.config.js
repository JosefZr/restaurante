const path = require('path');
module.exports={
    mode:"production",
    entry: './src/index',
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'dist')
    }
};
//this code is saying go to the src folder and look at index.js
//is where the logic of our code will be writen

// and ones u run the webpack command write this show main.js
// so src is the source of our code and main is the destination