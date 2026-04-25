import 'dart:io';

void main() {
  stdout.write("Enter student's Score: ");
  int score = int.parse(stdin.readLineSync()!);

  switch (score) {
    case int x when x >= 80 && x <= 100:
      print("A - Excellent");
    case int x when x >= 70 && x < 80:
      print("B - Very-good");
    case int x when x >= 60 && x < 70:
      print("C - Good");
    case int x when x >= 50 && x < 60:
      print("C - Pass");
    case int x when x >= 40 && x < 50:
      print("d - pass (Just go , try harder next time)");
    case int x when x >= 0 && x < 40:
      print("f - fail");
    default:
      print("Enter Real score");
  }

  stdout.write("Enter a number? ");
  int num1 = int.parse(stdin.readLineSync()!);

  var tenery = num1 % 2 == 0 ? "even" : "odd";

  print(tenery);

  stdout.write("Enter any number from 1 - 10? ");
  int halo = int.parse(stdin.readLineSync()!);

  switch (halo) {
    case 2:
    case 4:
    case 6:
    case 8:
    case 10:
      print("$halo is Even number between 1- 10");
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
      print("$halo is Odd number between 1- 10");
    default:
      print("Enter number fro range 1- 10");
  }
}
