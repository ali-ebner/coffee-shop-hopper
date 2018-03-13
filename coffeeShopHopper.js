function coffeeShop(name,locations,roasters,machine,year,rating){
  this.name = name;
  this.locations = locations;
  this.roasters = roasters;
  this.machine = machine;
  this.year = year;
  this.getAge = function(){
    return Date.now().getFullYear() - this.year;
  }
  this.rating = rating;

}

function oldestShop(shop1, shop2, ...arguments){
  for(let i=0;i<arguments.length;i++){
    return Math.min.apply(null,arguments);
  }
}

var medici = new coffeeShop("Caffé Medici", ["West Lynn", "Guadalupe", "Austonian", "South Lamar", "8C"],["Spyhouse", "Wild Gift Coffee", "Rotating Guest Roasters"], "La Marzocco", "Established in 2006", 4.6);
var houndstooth = new coffeeShop("Houndstooth Coffee", ["North Lamar", "Frost", "MLK"], ["Tweed"], "Strada", "Established in 2009", 4.7);
