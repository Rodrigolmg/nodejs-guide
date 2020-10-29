const homePage = '/';
const userListCreated = '/create-user';

function requestHandler(req, res) {
    const url = req.url;
    const method = req.method;

    res.setHeader('Content-Type', 'text/html');

    if(url === homePage){
        res.write('<html>')
        res.write('<head><title>Welcome</title></head>')
        res.write('<body>')
        res.write('<h1>Welcome User! This a brand new page for you!</h1>')
        res.write('<h2>Please, enter your username to register:</h2>')
        res.write(`<form action="${userListCreated}" method="POST">`)
        res.write('<input type="text" name="user"><button type="submit">Register</button>')
        res.write('</form>')
        
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }

    if(url === userListCreated && method === 'POST'){
        const body = [];

        req.on('data', chunk => {
            body.push(chunk)
        })
        
        res.write('<html>')
        res.write('<head><title>User list</title></head>')
        res.write('<body>')

        res.write('<ul>')
        for(number of [1, 2, 3, 4, 5]){
            res.write(`<li>User ${number}</li>`)
        }
        res.write('</ul>')
        res.write('</body>')
        res.write('</html>')

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            res.statusCode = 200;
            console.log(username)
            res.end();
        });


    }
}


module.exports = requestHandler;
