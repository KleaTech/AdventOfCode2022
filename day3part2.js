require('./readDay.js')(3).then(i => 
  i.match(/.*\n.*\n.*\n/dg)
   .map(g => g.split('\n').slice(0, -1)
              .map(l => l.split('')))
   .map(([a,b,c]) => a.filter(e => b.includes(e))
                      .filter(e => c.includes(e))[0])
   .map(c => Math.max(0, c.charCodeAt(0)-96)||c.charCodeAt(0)-38)
   .reduce((x,y) => x+y, 0)
)
.then(console.log)