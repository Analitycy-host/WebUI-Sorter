const skladapi = 'http://127.0.0.1:8080/api/lowestNum';
const sortapi = 'http://127.0.0.1:8080/api/sort';
const deleteapi = 'http://127.0.0.1:8080/api/delete'

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

function deleteSklad() {
    var file = document.getElementById("ajdi2").innerHTML
    fetch(deleteapi, {
        method: 'DELETE',
        headers: {
            'file': file
        }
    }).then(response => {
        return response.json()
    }).then(data => {
    })
}

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

function sendSkladEu44() {
    var file = document.getElementById("ajdi2").innerHTML
    fetch(sortapi, {
        method: 'POST',
        headers: {
            'typ': "eu44",
            'file': file
        }
    }).then(response => {
        return response.json()
    }).then(data => {
    })
}

function sendSkladE189() {
    var file = document.getElementById("ajdi2").innerHTML
    fetch(sortapi, {
        method: 'POST',
        headers: {
            'typ': "e189",
            'file': file
        }
    }).then(response => {
        return response.json()
    }).then(data => {
    })
}

function sendSkladImpuls() {
    var file = document.getElementById("ajdi2").innerHTML
    fetch(sortapi, {
        method: 'POST',
        headers: {
            'typ': "impuls",
            'file': file
        }
    }).then(response => {
        return response.json()
    }).then(data => {
    })
}

function sendSkladEt41() {
    var file = document.getElementById("ajdi2").innerHTML
    fetch(sortapi, {
        method: 'POST',
        headers: {
            'typ': "et41",
            'file': file
        }
    }).then(response => {
        return response.json()
    }).then(data => {
    })
}

function sendSkladEp07() {
    var file = document.getElementById("ajdi2").innerHTML
    fetch(sortapi, {
        method: 'POST',
        headers: {
            'typ': "ep07",
            'file': file
        }
    }).then(response => {
        return response.json()
    }).then(data => {
    })
}

function sendOtherSklad() {
    var typ = document.getElementById("inny").value
    var file = document.getElementById("ajdi2").innerHTML
    fetch(sortapi, {
        method: 'POST',
        headers: {
            'typ': typ,
            'file': file
        }
    }).then(response => {
        return response.json()
    }).then(data => {
    })
}