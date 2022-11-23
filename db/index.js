const { Pool } = require("pg"); //requiring pg module and destructuring out Pool

const pool = new Pool({
  connectionString: process.env.POSTGRES_CONNECTION_URL, //this elephantSQL url was saved in .env
}); //making a variable and storing in it a new instance of Pool

//What we're making available to require in other files
module.exports = {
  //query key in our export object
  //value of the query key is a function
  query: (text, params) => {
    //text: SQl query
    //params: parameterised queries (prepared statements)
    //we removed callback as a final parameter as it is not needed for now
    return pool.query(text, params); //returns result of handing text and params to the pool
  },
};
