function dxActiveted() {
    var img = document.createElement('img');
    img.src = 'images/Securite-cadenas.png';
    document.getElementsByTagName('body')[0].appendChild(img);
    document.getElementsByTagName('body')[0].style = 'background-color: #3fc359';
}

function dxInstalled() {
    var img = document.createElement('img');
    var body = document.getElementsByTagName('body')[0];
    img.src = 'images/Bibo.png';
    body.appendChild(img);
    body.style = 'background-color: #009FE3';
    document.getElementById("banner").hidden = false;
}

function dxNotInstalled() {
    var img = document.createElement('img');
    var body = document.getElementsByTagName('body')[0];
    img.src = 'images/Vie-privee-sur-un-plateau.png';
    body.appendChild(img);
    body.style = 'background-color: #BE1622';
    document.getElementById("banner").hidden = false;
}