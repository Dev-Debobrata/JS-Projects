function ceaser(str) {
  
    var string = "";
    for(var i = 0; i < str.length; i++) {
      var temp = str.charAt(i);
      if(temp !== " " || temp!== "!" || temp!== "?") {
         string += String.fromCharCode(13 + String.prototype.charCodeAt(temp));
      } else {
        string += temp;
      }
    }
    
    return string;
  }
  
  const x = prompt('Enter Your String: ');
  const y = ceaser(x);
  console.log(y);