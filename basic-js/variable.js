const accountId = 123456789;
let accountEmail = "prasadshivanand5@gmail.com";
var accountPassword = "prasad@123";
let accoountState;

 accountCity = "Pune";

 //accountId = 987654321; not allowed because accountId is a constant variable.

 accountEmail = "shiva@gmail.com";
 accountPassword = "shiva@123";


 /* prfer not to use var 
 because of issue block scope and function scope   */
 
 console.log(accountId);
 console.log(accountEmail);
 console.log(accountPassword);

 console.table({ accountId, accountEmail, accountPassword, accountCity, accoountState });   