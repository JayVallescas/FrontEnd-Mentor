let userComment = document.getElementById('user-message');
let readComment = document.getElementById('num');
let stat = document.getElementsByClassName("status");
let box_content = document.getElementsByClassName("box-content-box");

read = () => {
    readComment.innerText = 0;
    for(let i = 0; i<=stat.length; i++){
        stat[i].style.display = "none";
        box_content[i].style.background = "none";
    }
}




