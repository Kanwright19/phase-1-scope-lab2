// Write your solution in this file!
var customerName = "bob";
//var bestCustomer = "not bob"
const leastFavoriteCustomer = "james"

    function upperCaseCustomerName(){
        return customerName = customerName.toUpperCase();
      
    }

    var bestCustomer = 'not bob'

    function setBestCustomer(){
        bestCustomer = 'amy'
        return bestCustomer 
    }

    function overwriteBestCustomer(){
        return bestCustomer = "maybe bob"
    }
    
    function changeLeastFavoriteCustomer(){
        return leastFavoriteCustomer = "marsha"
    }

//setBestCustomer(): Write a function that when called, 
//declares a variable called bestCustomer in global scope 
//and assigns it to be 'not bob'. (Poor Bob.) Also, poor us,
// declaring a global variable from inside a function is one of those things we would never want to do normally,
// but is good for us to explore right now.