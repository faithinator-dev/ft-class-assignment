import 'dart:io';

void main() {
  stdout.write("Enter your Age");
  int age = int.parse(stdin.readLineSync()!);

  //tenaty syntax : condition ? evaluation if true
  String votingNotification = age >= 18
      ? "you are eligible."
      : "You are underage";

  print(votingNotification);

  int num = int.parse(stdin.readLineSync()!);
  print("$num is ${num % 2 == 0 ? "Even" : "Odd"}");

  //nested tenary
  var voterage = 30;
  bool isCitizen = true;
  bool hasVoterCard = !true;

  // logic not correct currently, fix as assignment
  String votingStatus = isCitizen == !true
      ? "You are not a citizen"
      : voterage < 18
      ? "you are not old enough"
      : hasVoterCard == !true
      ? "Get a pvc"
      : "you are Eligible";

  print(votingStatus);

  int num1 = 80, num2 = 90;
  int max = num1 > num2 ? num1 : num2;
  print(max);

  bool isLoggedin = false;
  String loginStatus = isLoggedin == true ? "user online" : "user offline";
  print(loginStatus);
}
