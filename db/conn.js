const mongoose = require ('mongoose')

async function main(){
try {
    await mongoose.connect('mongodb+srv://JuanIndiano:9rAWouvlM09tvRtB@cluster0.fjlxaob.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log('Banco ok');
} catch (error){
    console.log('Erro:' + error);
}

}


module.exports = main