console.log('Simply.js demo!');


function GetValues()
{
  var weatherUrl = 'http://www.onlyspike.co.za/PsychicTest/GetTestValues.ashx';
  console.log('Getting Values!');      
  
        ajax({ url: weatherUrl, type: 'json' }, function(data) {
        
        var tESP = "";
          tESP = data.ESP;
        var tCards = "";
          tCards = data.Cards;
        var tAnimals = "";
          tAnimals = data.Animals;
          
        console.log('Got Values');
          simply.subtitle('1. ' + tESP + '\n2. ' + tCards + '\n3. ' + tAnimals);
      }, function(data) {
        simply.title('Error');
        console.log('Error Location '+ data);
      } );
        
}

setInterval(function(){ 
  
  GetValues();
  
}, 5000);
