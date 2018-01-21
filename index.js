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
  document.querySelector()
}