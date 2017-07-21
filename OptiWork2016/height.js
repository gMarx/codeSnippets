window.optlyHeight = document.getElementById('rightbar').scrollHeight + document.getElementById('opcoes-pacote').scrollHeight + document.getElementById('precos-pacote').scrollHeight;

$("#content").css({"position":"relative", "left":0, "top":0, "width":1431, "height":optlyHeight});


$("#sp-mais") --?> #pacote-escolhido > div:nth-child(8)


window.optlyHeight = 87 + 159 + document.getElementById('pacote-escolhido').scrollHeight;
$("#content").css({"position":"relative", "left":0, "top":0, "width":1431, "height":optlyHeight});


window.onload = function(){
  window.optlyRight = document.getElementById('opcoes-pacote').scrollHeight + document.getElementById('precos-pacote').scrollHeight;
  window.optlyLeft = document.getElementById('pacote-escolhido').scrollHeight;
  window.optlyHeight = 87 + 159 + Math.max(optlyRight,optlyLeft) + 40;
  $("#content").css({"position":"relative", "left":0, "top":0, "width":1431, "height":optlyHeight});
console.log(optlyHeight);
};
