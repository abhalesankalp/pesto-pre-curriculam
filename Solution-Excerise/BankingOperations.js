const fs = require('fs');

fs.readFile('BankingData.json', (err, data) => { 
    if (err) throw err; 
  
    var bankingDataOBJ =  JSON.parse(data, function(key, value){
        if(value.amount)
        console.log(value);
    });
    
}); 
