void main(){
 // Type or var or Dynamic, variable name, assignment, = value

  var num1; //variable declaration
  var num2 = 10; //variable Definition (declaration and assignment)
  num1 = 20; // variable assignment
  num2 = 30; // variable reassignment

  print(num1);
  print(num2);
  

// 1. Explicit Variable defination
 String userName = "John"; //camelCasing
// String user_name = "Sam"; //snakeCasing
// String UserName = "Solomon"; // Pascal Case





  print("""$userName is in his room, 
  when $userName heard a load bang outside, 
  so $userName ran outside, 
  then $userName return to his room""");
  
  int userAge = 100;
  double userHeight = 6.0;
  bool isMale = true;

  print(userName);
  print(userAge);
  print(userHeight);
  print(isMale);

  //2. implicit variable definition (using variable declaration keywords var and dynamic)
  //var allow automatic Data type detention, nut when the type has been established, it must not change during runTime
  var price = 1100;
  var product = "petrol";
  print(price);
  print(product);

  price = 500;
  product = "fab biscuit";
  print(price);
  print(product);

  // price = true; //error
  // product = 60.5; //error


//dynamic allow automatic time detection, but also allow the data type to change during runtime
  dynamic myVal = 100;
  print(myVal);

  myVal = "London";
  print(myVal);

  myVal = true;
  print(myVal);

  myVal = 200.001;
  print(myVal);

  myVal = 10;
  print(myVal);



  String schoolName;
  String currentClass;

  schoolName = "SQI college of ict";
  currentClass = "level 3";

  print(schoolName);
  print(currentClass);


  // Object keyword variable declaration
  // Object is the parent class of all classes in dart, so it cannot inherit
  // method define for any class in dart including built in or user defined
  Object food = "Rice";
  String food2 = "Beans";
  print(food);
  print(food2);

  // print(food.length); //Error
  print(food2.length);
}


//assignment
// variable declaration one for favorite movie and movie character respectively
// variable definition for favourite phone, favourite pc, favourite car print out and reassign your 2rd favourite to them respectively and print out.



