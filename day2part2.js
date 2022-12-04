require('./readDay.js')(2).then(i =>
  i.split(/\n/)
   .slice(0, -1)
   .map(l => l.split(' ')
              .reduce((a,b) => [a.charCodeAt(0)-64, -(b.charCodeAt(0)-87)+4])) // transforms A,B,C to 1,2,3 and X,Y,Z to 3,2,1
   .map(([x,y]) => (+!!((x-y)*(x-y)))              // gives 0 for paper
                   *(((((7*x)+(11*y))%3)%2)*2-1)   // gives 0 for rock, 1 for scissors and subtracts 1 because later 2 will be added
                   +2                              // adds 2 because paper worth 2
                   +((-y+3)*3)                     // gives 0 for X, 3 for Y, 6 for Z
       )
   .reduce((a,b) => a+b, 0)
).then(console.log)