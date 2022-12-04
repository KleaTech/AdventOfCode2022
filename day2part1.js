require('./readDay.js')(2).then(i =>
  i.split(/\n/)
   .slice(0, -1)
   .map(l => l.split(' ')
              .reduce((a,b) => [a.charCodeAt(0)-64, b.charCodeAt(0)-87])) // translate A/X, B/Y, C/Z to 1,2,3
   .map(([x,y]) => (+!!((x-y)*(x-y)))                                     // get 0 for draw, 1 for win/loose
                   *((+!((((7*x)+(11*y))%3)%2))*6-3)                      // get 0 for loose, 6 for win (-3 because it will be added later)
                   +3                                                     // 3 for draw
                   +y)                                                    // 1/2/3 for own shape
   .reduce((a,b) => a+b, 0)
).then(console.log)