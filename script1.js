function drawTree (height) {
   for (var i = 1; i <= height; i++) {
       var space = '';
        for (var y = 1; y <= height - i; y++) {
            space+=' ';
        }
       
        var star = '';
        for (var j = 1; j <= i*2-1; j++) {
            star+='*';
        }
        console.log(space + star);
    } 
}
drawTree(prompt("wysokość choinki: "));