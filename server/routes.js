const fs = require('fs');


const home = '/';
const addProduct = '/add-product'


function requestHandler(req, res) {
    const url = req.url;
    const method = req.method;
    const msg = ['Write', 'a message', 'Write a message']
    if(url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter your message</title></head>')
        res.write('<body>')
        res.write('<form action="/message" method="POST">')
        res.write('<input type="text" name="message"><button type="submit">Send</button>')
        res.write('</form>')
        res.write(`<label style="color:red;">${msg[1]}</label>`)
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }

    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>My first node page</title></head>')
    res.write('<body>')
    res.write('<h1> Hello from my node server</h1>')
    res.write('</body>')
    res.write('</html>')
    res.end();
};


module.exports = {
    requestHandler: requestHandler,
    homePage: home,
    addProduct: addProduct
}


/**
 * module.exports = {}
 * module.exports.nomeAtributo = valor
 * module.nomeAtributo
 */
