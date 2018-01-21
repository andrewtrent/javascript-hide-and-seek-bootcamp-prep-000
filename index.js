function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("#nested .target");
}

function increaseRankBy(n){
  var adder = n
  var listQueue = document.querySelectorAll(".ranked-list li");
  for(var i=0;i<listQueue.length;i++){
    listQueue[i].innerHTML = parseInt(listQueue[i].innerHTML) + adder
  }
return listQueue
}

function deepestChild(){
  var gn = document.querySelector('div + div');
  var gnc = [gn]
for(var i = 0; i < 10; i++){
  if(gnc[0].children === true){

    gnc.push(gnc[0].children[0])
    gnc.shift()
  } else{
  return gnc[0]
  }
}
}