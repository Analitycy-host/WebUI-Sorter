const skladapi = 'http://127.0.0.1:8080/api/lowestNum';
const sortapi = 'http://127.0.0.1:8080/api/sort';

function getSklad() {
    fetch(skladapi, {
        method: 'GET'
    }).then(response => {
        return response.json()
    }).then(data => {
        document.getElementById("img").innerHTML = `<img src="${data.fileNumber}">`,
        document.getElementById("ajdi").innerHTML = `<h2>${data.id}</h2>`
        document.getElementById("ajdi2").innerHTML = data.id
    })
};

function sendSkladEu07() {
    var file = document.getElementById("ajdi2").innerHTML
    fetch(sortapi, {
        method: 'POST',
        headers: {
            'typ': "eu07",
            'file': file
        }
    }).then(response => {
        return response.json()
    }).then(data => {
    })
}

function sendSkladEt22() {
    var file = document.getElementById("ajdi2").innerHTML
    fetch(sortapi, {
        method: 'POST',
        headers: {
            'typ': "et22",
            'file': file
        }
    }).then(response => {
        return response.json()
    }).then(data => {
    })
}

function sendSkladEn57() {
    var file = document.getElementById("ajdi2").innerHTML
    fetch(sortapi, {
        method: 'POST',
        headers: {
            'typ': "en57",
            'file': file
        }
    }).then(response => {
        return response.json()
    }).then(data => {
    })
}

function sendSkladTraxx() {
    var file = document.getElementById("ajdi2").innerHTML
    fetch(sortapi, {
        method: 'POST',
        headers: {
            'typ': "traxx",
            'file': file
        }
    }).then(response => {
        return response.json()
    }).then(data => {
    })
}

function sendSkladSm42() {
    var file = document.getElementById("ajdi2").innerHTML
    fetch(sortapi, {
        method: 'POST',
        headers: {
            'typ': "sm42",
            'file': file
        }
    }).then(response => {
        return response.json()
    }).then(data => {
    })
}

function sendSklad182() {
    var file = document.getElementById("ajdi2").innerHTML
    fetch(sortapi, {
        method: 'POST',
        headers: {
            'typ': "182",
            'file': file
        }
    }).then(response => {
        return response.json()
    }).then(data => {
    })
}

function sendOtherSklad() {
    //var typ = document.getElementById("inny").value
    console.log(document.getElementById("ajdi2").innerHTML)
}