var modal = [];
var img = [];
var modalImg = [];
var span = [];
for (var i = 0; i < 10; i++) {
    modal[i] = document.getElementsByClassName("modal")[i];
}
for (var i = 0; i < 10; i++) {
    img[i] = document.getElementsByClassName("image")[i];
}
for (var i = 0; i < 10; i++) {
    modalImg[i] = document.getElementsByClassName("modal-content")[i];
}
for (var i = 0; i < 10; i++) {
    span[i] = document.getElementsByClassName("close")[i];
}

for (var j = 0; j < 10; j++) {
    img[j].onclick = function() {
        for (var i = 0; i < 10; i++) {
            modal[i].style.display = "block";
            modalImg[i].src = this.src;
        }
    }
}

for (var i = 0; i < 10; i++) {
    span[i].onclick = function() {
        for (var j = 0; j < 10; j++) {
            modal[j].style.display = "none";
        }
    }
}
