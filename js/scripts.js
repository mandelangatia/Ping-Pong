// business logic//
var numberArr = [];
var pingPong = function (number) {
  for (var index = 1; index <=number; index+=1) {
    if(index  % 15 === 0){
      numberArr.push("pingpong");
    }else if (index % 5 === 0){
      numberArr.push("pong");
    }else if (index % 3 ===0){
      numberArr.push("ping");
    }else{
      numberArr.push(index);
    }
  }
};
// user interface//
$(document).ready(function() {
  $("form#arr").submit(function() {
    event.preventDefault();
    var number= parseInt($("input#number").val());
  pingPong(number);
  numberArr.forEach(function (number) {
    $("#showResult").append('<li>' + number + "</li>");
  });
  });
});
