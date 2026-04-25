
String friut = "Orange";
// String pet; //Error
late String pet;
// late: is used when you do not known the value that the variable will hold during declaration, but value must be intialized later before variable use
void main(){
  // print(pet); //error: late variable must be initailize before use.
  pet = "Dog";
  print(pet);
  //immutability in Dart variables
  //Cannot be change - immutability

  //const: value must be known at compile time and should not change during runtime
  const double PI = 3.15149;
  print(PI);

  // PI = 6.8; //error
  // print(PI);

  // final: value is know during runtime, but can not change after that. it is set once

  final String city = "lagos";
  print(city);

  // city = "ilorin"; //error

  final DateTime travelTime = DateTime.now();
  final DateTime footBallHalfTime = DateTime.now();

  print(travelTime);
  print(footBallHalfTime);

  // travelTime = 

}
