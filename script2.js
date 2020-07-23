function insert(num){
    var curr = document.getElementById("curr");
    if(num ==='.' && curr.innerHTML.includes('.'))  return;  
    if((num === '*' || num ==='/' ) && curr.innerHTML.trim()==='') return;
    var check = curr.innerHTML[0];
    if(curr.innerHTML.length === 1 && (check==='+' || check === '-' ) && (num === '*' || num ==='/')) return;
    var last = curr.innerHTML[curr.innerHTML.length - 1];
    if((num === '*' || num ==='/'|| num==='+' || num === '-' )&& (last === '*' || last ==='/'|| last ==='+' || last === '-') ){
        var val = curr.innerHTML.slice(0,-1);
        curr.innerHTML = val +num;
        return
    }
    curr.innerHTML = curr.innerHTML + num;
}

function equal(){
    var curr = document.getElementById("curr");
    var prev = document.getElementById("prev");

    var ans = eval(curr.innerHTML);
    curr.innerHTML = ans;
    prev.innerHTML = ans;
}

function back(){
    var curr = document.getElementById("curr");
    curr.innerHTML = curr.innerHTML.slice(0,-1);
}

function clean(){
    var curr = document.getElementById("curr");
    var prev = document.getElementById("prev");

    curr.innerHTML='';
    prev.innerHTML='';
}