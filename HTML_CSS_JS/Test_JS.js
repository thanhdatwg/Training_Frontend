function myFunction() {
    var x = document.getElementsByTagName('input')
    var y = document.getElementsByTagName('label')
    for (let i = 0; i < x.length; i++) {
      console.log(x[i].value);
      y[i].innerHTML = x[i].value;
    }
}