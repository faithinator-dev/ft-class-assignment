void main() {
  // Logical operators allows us to work with boolean return values

  int x = 10;
  int y = 20;

  // And (&&): Only evaluate to true if both conditions are true
  print(x > 2 && y < 10);
  print(x > 2 && y < 100);

  // OR (||): Evaluates To true if either is true
  print(y > 1000 || x < y);
  print(y > 1000 || x < y);

  // NOT (!) inverts the real result
  print(5 > 2);
  print(!(5 > 2));

  print(!(5 > 2 && 5 > 20));

  print(!false);
  print(!true);

  // Assignment
  //Create 6 logical operator statement
  //Two for AND, OR and NOT.
}
