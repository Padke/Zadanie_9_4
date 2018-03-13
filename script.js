
function drawTree (height) {
   for (var i = 1; i<=height; i++) {
        var star = '';
        for (var j = 1; j <= i/*ile razy wykonuje się pętla*/; j++) {
            star+='*';
        }
        console.log(star);
    } 
}

drawTree(prompt("wysokość choinki: "));


function drawTree (height) {
   for (var i = 1; i<=height; i++) {
        var star = '';
        for (var j = 1; j <= i/*ile razy wykonuje się pętla*/; j=j+2) {
            star+='*';
        }
        console.log(star);
    } 
}
drawTree(prompt("wysokość choinki: "));