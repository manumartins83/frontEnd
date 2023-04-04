// projet JS 2020 - codez 
var comments=document.getElementsByClassName('comment');

for (i=0;i<comments.length   ;i++){
    var elComment=comments[i];

    var num= elComment.id.substring(0,1);
    console.log(elComment);
    console.log(elComment.id);
    console.log(elComment.id.substring(0,1));
    //  elComment.addEventListener('mouseover',movingMyMouse(num));
    elComment.addEventListener('mouseover',function(){
        var annote=document.getElementById(elComment.id.substring(0,1) + '-annote');
        annote.setAttribute("style",'background-color:yellow');
    });


}

function movingMyMouse(_id) {
        var annote=document.getElementById(_id + '-annote');
        annote.setAttribute("style",'background-color:yellow');
    }




// comment1.addEventListener("mouseover", movingMyMouse);


// var annote1=document.getElementById('1-annote');
// annote1.addEventListener("mouseover",deleteyellowcolor);


// function movingMyMouse() {
//     var annote=document.getElementById('1-annote');
//     annote.setAttribute("style",'background-color:yellow');
// }

// function  deleteyellowcolor(){
  
//     var annote=document.getElementById('1-annote');
//     annote.removeAttribute("style");
// }

//////

// var comment3=document.getElementById('3-comment');
// comment2.addEventListener("mouseover", movingMyMouse);


// var annot3=document.getElementById('3-annote');
// annote2.addEventListener("mouseover",deleteyellowcolor);


// function movingMyMouse() {
//     var annote=document.getElementById('2-annote');
//     annote.setAttribute("style",'background-color:yellow');
// }

// function  deleteyellowcolor(){
  
//     var annote=document.getElementById('2-annote');
//     annote.removeAttribute("style");
// }
