consoleText(['choose an index', 'define a strategy', 'calculate your returns'], 'text',['darkseagreen','darksalmon','lightblue']);

// var jsonfile = {
//   "jsonarray": [{
//      "name": "Joe",
//      "age": 12
//   }, {
//      "name": "Tom",
//      "age": 14
//   }]
// };

// var labels = jsonfile.jsonarray.map(function(e) {
//   return e.name;
// });
// var data = jsonfile.jsonarray.map(function(e) {
//   return e.age;
// });;

// var config = {
//   type: 'line',
//   data: {
//      labels: labels,
//      datasets: [{
//         label: 'Graph Line',
//         data: data,
//         backgroundColor: 'rgba(0, 119, 204, 0.3)'
//      }]
//   },
//   options: {
//     layout: {
//       padding: {
//         left: 50,
//         right: 50,
//         top: 25,
//         bottom: 25
//       }
//     }
//   }
// };

// var chart = new Chart(document.getElementById('myChart'), config);

// function([string1, string2],target id,[color1,color2])    
function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}
