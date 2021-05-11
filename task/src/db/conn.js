const mymogo = require("mongoose");
const url = "mongodb://localhost:27017/sam";

mymogo.connect(url, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log("connection successful");
}).catch((e) => {
    console.log("no connection");
})