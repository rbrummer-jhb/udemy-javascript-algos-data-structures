/*
The following code is a simplified search mechanism used to search for specific
vehicles in a database. You can search for certain criteria such as colour, mileage
and price. The code incorporates both a specification pattern, as well as a factory
pattern, to create specific specification instances used to search for vehicles.

Never used a specification pattern before? Don't stress! The pattern has been
implemented and all you are required to do is implement the search part.
To make things easier, here is a quick description of what the specification pattern is:

The specification pattern is a software design pattern aimed at simplifying business
rule sets by allowing rules to be chained together using boolean logic. A specification
pattern outlines a business rule that is combinable with other business rules.
In this pattern, a unit of business logic inherits its functionality from the
abstract aggregate Composite Specification class. The Composite Specification class
has one function, called 'isSatisfiedBy()', that returns a boolean value.
After instantiation, the specification is 'chained' with other specifications,
making new specifications easily maintainable, yet highly customizable business
logic. In short, the problem allows for encapsulation of domain logic into a
single unit that can be reused throughout a codebase.

Your goal is to complete the 'vehicleSearch()' function to return a collection of
vehicles based on three different search parameters: color, mileage and price.
The following are possible inputs:

Color:
1. Red
2. Blue
3. White

Mileage (x):
1. low mileage: x <= 40,000
2. medium mileage: 40,000 < x <120,000
3. high mileage: x > 120,000

Price:
1. low price: x <= 50,000
2. medium price: 50,000 < x < 100,000
3. high price: x > 100,000
*/

function vehicleSearch(color, price, mileage) {
    let ret = [];
    let colFac = new colorFactory();
    let milFac = new mileageFactory();
    let priFac = new priceFactory();
    let colorSpec = colFac.makeInstance(color); 
    let mileageSpec = milFac.makeInstance(mileage); 
    let priceSpec = priFac.makeInstance(price); 
    
    this.vehicleCollection.forEach(
        function(vehicle) {
            if (colorSpec.and(priceSpec.and(mileageSpec)).isSatisfiedBy(vehicle)) {
                ret.push(vehicle);
            }
        });
    return ret;
}