import 'dart:io';

void main() {
  int age = 10;
  bool hasID = !false;

  /*  if (age >= 20 && hasID == true) {
    print("Access granted");
  } else {
    print("Access denied"); // why was access denied? age? hasID? or Both?
  } */

  // the fix is nested conditional statements

  if (age >= 20) {
    if (hasID == true) {
      print("Access granted");
    } else {
      print("You are old enough, but you are not Registered");
    }
  } else {
    print("you are not old enough");
  }

  // voting
  age = 30;
  bool isCitizen = true;
  bool hasVoterCard = !true;
  if (isCitizen == true) {
    if (age >= 18) {
      if (hasVoterCard == true) {
        print("You Voted Successfully");
      } else {
        print("Go and Get your PVC");
      }
    } else {
      print("You are not old enough to vote");
    }
  } else {
    print("You are not a citizen of Nigeria");
  }

  // Checking system
  // Nexting can also got messy
  // Staff Authentication and authorization
  // Admin 1 can change both  price and promo, admin2 can omly chane promo,
  // Staff can't change anyting
  String? password = "654321abc";
  String? storeStaff = "yes";
  String staffRole = "admin2";
  bool canChangePrce = true;
  bool canchangeDiscount = true;

  int price = 1000;
  int discount = 5;

  stdout.write("Enter your password:");
  String? enteredPassword = stdin.readLineSync();
  stdout.write("Enter User Name:");
  String? userName = stdin.readLineSync();

  if (enteredPassword == password && storeStaff == true) {
    print("Hi $userName, Welcome back");
    String? enteredRole = stdin.readLineSync();
    if (enteredRole == "admin1") {
      print("Hi Admin, you can change anything in th store");
      if (canChangePrce == true) {
        price = 2000;
        print("Senior Admin change Rice");
      } else {
        print("You are not authorized to change price");
      }

      if (canchangeDiscount == true) {
        discount = 7;
      }
    }
  } else {
    print("invalid password or username");
  }
}
