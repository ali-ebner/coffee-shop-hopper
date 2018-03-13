function coffeeShop(name,roasters,machine,year,rating){
  this.name = name;
  this.roasters = roasters;
  this.machine = machine;
  this.year = year;
  this.rating = rating;
}

var medici = new coffeeShop("Caffé Medici", ["Spyhouse", "Wild Gift Coffee", "Rotating Guest Roasters"], "La Marzocco", "Established in 2006", 4.6);
