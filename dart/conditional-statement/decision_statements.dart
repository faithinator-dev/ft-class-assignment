import 'dart:io';

void main() {
  //if
  int numOfPeople = 8;
  // if (condition) {body or Instruction to be executed}
  if (numOfPeople >= 10) {
    print("Hello world");
  }

  stdout.write("Enter Your name:");
  String? userName = stdin.readLineSync();
  stdout.write("Hi $userName \nEnter Your Age:");

  int userAge = int.parse(stdin.readLineSync()!);

  int votingAge = 18;

  if (userAge >= votingAge) {
    print("Congratulations $userName! you are Eligible to vote");
  } else {
    print("Sorry! $userName, You are not old Enough to vote");
  }
  stdout.write("Enter Your Name: ");
  String? studentName = stdin.readLineSync()!;

  if (studentName.length <= 5) {
    print("Hello $studentName");
  } else {
    print("Hi $studentName");
  }

  // Mini Calculator
  //if-else if -else

  stdout.write("Enter First Number: ");
  double? num1 = double.parse(stdin.readLineSync()!);

  stdout.write("Enter Second Number: ");
  double? num2 = double.parse(stdin.readLineSync()!);

  print("Available Arithmetic Operations");
  print(
    "1. Addition(+) \n2. Subtraction(-) \n3. Division(/) \n4. Multiplication(x)",
  );
  stdout.write("Select the Operation you want to perform (Enter Symbol): ");
  String? operation = stdin.readLineSync()!;
  double? result;

  // if (num1 == 0 || num2 == 0) {
  //   print("Enter a number Greater than zero");
  //   return;
  // }

  if (operation == "-") {
    result = num1 - num2;
  } else if (operation == "/") {
    if (num2 == 0) {
      print("Can't divide by zero");
      return;
    }
    result = num1 / num2;
  } else if (operation == "+") {
    result = num1 + num2;
  } else if (operation == "*") {
    result = num1 * num2;
  } else {}
  print("$num1 $operation $num2 = $result");
}
