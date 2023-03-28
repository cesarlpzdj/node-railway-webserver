const http = require('http');

http.createServer((req, res) => {

    //Write a JSON object

    // res.writeHead(200, { 'Content-Type': 'application/json' })
    
    // const person = {
    //     id: 1,
    //     name: 'Cesar'
    // }
    // res.write(JSON.stringify(person));

    //Write a CSV file and dowload it

    // res.setHeader('Content-Disposition', 'attachment; filename=list.csv')
    // res.writeHead(200, { 'Content-Type': 'application/csv' });

    // res.write('id, nombre\n');
    // res.write('1, Cesar\n');
    // res.write('2, Laura\n');
    // res.write('3, Luis\n');
    // res.write('4, Uvaldo\n');

    res.write('hola mundo');

    res.end();
})
.listen(8080);

console.log('Listening to port ', 8080);