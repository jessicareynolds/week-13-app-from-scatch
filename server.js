const express = require('express')
const port = process.env.PORT || 5000

const app = express()

app.get("/", (req, res) => {
    res.send("Hello world - we are running live")
})

app.listen(port, () => {
    console.log("Success! Your app is running" )
    console.log("go to http://localhost:5000/")
})

const { sequelize } = require('./database/sequelize-common');

/**
    A note on decimals to follow up on a missed discussion from last night.
    A common column type for decimals like money will saves values such as 99,999,999,999.99
    `DECIMAL(13,2)`  
 */
/**
    See async-await.md
 */
(async () => {

    /**
    There are often use cases in which it easiest 
    to execute raw / already prepared SQL queries, we can 
    use the `sequelize.query` method for this

    See <https://sequelize.org/master/manual/raw-queries.html>

     */

    // <https://dev.mysql.com/doc/refman/8.0/en/create-table.html>
    await sequelize.query(`
        DROP TABLE thu_demo_user
    
    `);

    /*
        to provide feedback on the sql above we get all tables

        See <https://dev.mysql.com/doc/refman/8.0/en/show.html>
        and <https://dev.mysql.com/doc/refman/8.0/en/show-tables.html>
    */
    const [results, metadata] = await sequelize.query(`
        SHOW TABLES
    `);

    console.log({results, metadata});

})().catch(error => {
    console.log({error});
});