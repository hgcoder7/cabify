const mongoose=require('mongoose');


async function connectToDb() {
    await mongoose.connect('mongodb+srv://harshitsfs123:1lUjgTbBUttjGyms@cluster0.sy8dm.mongodb.net/uber')
    .then(()=>{
        console.log('connected to db');
    })
    .catch((err)=>{console.log(err)});
}
module.exports=connectToDb;
// mongodb+srv://harshitsfs123:1lUjgTbBUttjGyms@cluster0.sy8dm.mongodb.net/?