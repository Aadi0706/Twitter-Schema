

const connect= require('./configs/db');
const app=require('./index');

app.listen(5000, async (req, res) => {
    try {
     await connect();
        
    } catch (error) {
        console.log(error);
    }
console.log('listening on port 5000...');

})