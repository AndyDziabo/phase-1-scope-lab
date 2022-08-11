var customerName = "bob";
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
}
function setBestCustomer(){
    window.bestCustomer = "not bob";
}
function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
}
const leastFavoriteCustomer = "tom";
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "dave";
}