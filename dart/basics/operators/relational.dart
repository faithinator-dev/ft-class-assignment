void main() {
  //Relational operators check if value are equal or if they are of same type. return bools
  int a = 5;
  int b = 8;
  String userName = "John Doe";

  //Equality
  print(a == b);
  print(userName == a); //false
  print(userName.length == b); //true

  //Not Equal
  print(a != b);
  print(b != userName);

  // greater than
  print(a > b);

  // less than
  print(a < b);

  //greater than or equal
  print(a >= b);

  //Less than or equal to
  print(a <= b);
}
