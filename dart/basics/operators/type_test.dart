// ignore_for_file: unnecessary_type_check

void main() {
  // Type test operators allows us to type cast and check if a value is of certain type
  //As
  Object var1 = "Hello world";
  print(var1); // type object

  var1 = var1 as String; // typecast to string;
  print(var1); // type string

  //is
  int age = 100;
  print(age is int); //check if age is of int type

  bool isStudent = true;
  print(isStudent is bool);

  //is! (is not)
  print(age is! String);

  print(isStudent is! double);
}
