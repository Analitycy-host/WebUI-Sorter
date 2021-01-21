let express = require('express');
let app = express();
let fs = require('fs')

app.get('/api/lowestNum', function(req, res) {
    var files = fs.readdirSync(`${__dirname}/sorting/tosort`)
    res.json({
        fileNumber: `/sort/tosort/${files[0]}`,
        id: files[0]
    })
})

.post('/api/sort', function(req,res) {
    var typ = req.header('typ')
    var file = req.header('file')
    var typy = fs.readdirSync(`${__dirname}/sorting/sorted`)
    console.log(typ, file)
    if (typy.includes(typ)) {
        fs.copyFileSync(`${__dirname}/sorting/tosort/${file}`, `${__dirname}/sorting/sorted/${typ}/${file}`)
        fs.unlinkSync(`${__dirname}/sorting/tosort/${file}`)
    }
    else {
        fs.mkdirSync(`${__dirname}/sorting/sorted/${typ}`)
        fs.copyFileSync(`${__dirname}/sorting/tosort/${file}`, `${__dirname}/sorting/sorted/${typ}/${file}`)
        fs.unlinkSync(`${__dirname}/sorting/tosort/${file}`)
    }
})

.delete('/api/delete', function(req,res) {
    var file = req.header('file')
    fs.unlinkSync(`${__dirname}/sorting/tosort/${file}`)
})

.use('/', express.static(`${__dirname}/indegz/`))
.use('/sort/tosort', express.static('./sorting/tosort'))
.use('/sort/sorted', express.static('./sorting/sorted'))

.listen(8080)