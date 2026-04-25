void main() {
  //  Type Casting: it the mechanism in dart that allow us to convert value of one data type to another
  // 1. Explicit Type Casting: this is when the programmer does the convertion by him/herself
  Object userName = "john";
  Object PI = 3.14159;
  Object numberOfFans = "4";

  print(userName);
  print(PI);
  print(numberOfFans);

  // Error: object parent class in dart, have no assess to properties of
  // child classes
  // print(userName.length) //Error
  // print(PI.ceil()); //Error

  // type Casted to their specific types, for access to their methods and properties
  PI = PI as double;
  userName = userName as String;
  // numberOfFans = numberOfFans as int;

  // Works after type casting
  print(userName.length); //works
  print(PI.ceil());
  // print(numberOfFans.isEven);

  dynamic fuelPrice = 1_300;
  print(fuelPrice);

  print(fuelPrice.isOdd); //Works, but very unsafe

  fuelPrice = fuelPrice as int; //Type Casted
  print(fuelPrice.isOdd); //Works, and safe because of the type casting

  // 2. Implicit Type Casting: This is done automatically by the Dart type System
  var userCourse = "Mobile app development";
  print(userCourse);
  print(userCourse.length);

  var userAge = 100;
  print(userAge);
  print(userAge.isOdd);

  // print(userCourse.isOdd); //Error
  // print(userAge.lenght) //Error

  //Type Casting methods(fall under explicit type of casting)
  //int.parse(); converts string to int
  String test1 = "3";
  String test2 = "2";
  print(test1 + test2); //32
  print(int.parse(test1) + int.parse(test2));

  //toString(); convert from numeric type to string
  int num1 = 200;
  print(num1);

  int num2 = 201;
  print(num2);

  print("As int: ${num1 + num2}");

  String convertedNum1 = num1.toString();
  print(convertedNum1);

  String convertNum2 = num2.toString();
  print(convertNum2);

  print("As String: ${convertedNum1 + convertNum2}");

  //double.parse() converts from String to Double

  String rates1 = "4.5";
  String rates2 = "4.6";

  print(rates1);
  print(rates2);
  print("${rates1} + ${rates2} = ${rates1 + rates2} (as String) ");

  double actualrates1 = double.parse(rates1);
  double actualrates2 = double.parse(rates2);

  print(actualrates1);
  print(actualrates2);
  print(
    "$actualrates1 + $actualrates2 = ${actualrates1 + actualrates2} (As double)",
  );

  // 1. create three String variables and convert them to int using int.parse()
  // 2. Create three int variables and convert them to String using toString()
  // 3. Create three double Variable and convert them to strings using toString()
  // 4. Create three String Variable and convert them to double using
  // double.parse()
  // 5. Create one variable each for String, int,double, and bool using the
  //object keyword and reasign them with type casting using the as keyword

  // typecasting int type to double
  double price = 60.7;
  int priceInt = 60;
  print(price + priceInt); //implicit priceInt typecase from int to double
  // print(2+ int.parse("2"));

  double var1 = 9.20;
  int var2 = var1.toInt(); // Convert the double to an integer
  print(var2);

  double var3 = 10.7;
  print(var3.truncate()); // remove the decimal

  print(price.ceil()); // Round up to the nearest bigest integer/whole number
  print(
    price.floor(),
  ); // Round down to the nearest smallest integer/whole number
  print(
    var3.round(),
  ); //Rounds to the nearest integer/whole number e.g 4.3 = 4, 4.7 = 5
}
