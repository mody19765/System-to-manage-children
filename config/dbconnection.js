import mysql2 from 'mysql2'
   const q= mysql2.createConnection({
        host: "localhost",
        database: 'task',
        user:'root'
    })
export { q }