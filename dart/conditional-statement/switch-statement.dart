import 'dart:io';

void main() {
  // switch statement we evaluate a value against a certain number of cases
  int score = 50;

  // without Default for a fallback

  switch (score) {
    case 100:
      print("Excellent");
  }

  //with fallback
  switch (score) {
    case 100:
      print("Excellent");
    default:
      print("You are below the threshold of 100");
  }
  stdout.write("Enter the day you want check as a number(1-7)");
  int day = int.parse(stdin.readLineSync()!);

  switch (day) {
    case 1:
      print("The Day is Sunday");
    case 2:
      print("The day is Monday");
    case 3:
      print("The day is Tuesday");
    case 4:
      print("The day is Wednessday");
    case 5:
      print("The day is Thursday");
    case 6:
      print("The day is Friday");
    case 7:
      print("The day is Saturday");
    default:
      print("That not the day of the month");
  }

  // Keywords(break and when)
  //Break: this is just a Legacy(old) Way of Stoping a code

  stdout.write("Which Screen do you want to navigate to? ");
  String? screen = stdin.readLineSync()!;

  switch (screen.toLowerCase()) {
    case "home":
      print("Welcome to Home Screen");
      break;
    case "setting":
      print("Welcome to setting");
      break;
    case "Stats":
      print("Welcome to Stats Screen");
      break;
    case "favourite":
      print("Welcome to Favourite");
      break;
  }

  // When: Do this when something is true
  stdout.write("Welcome to jaiyelo Bar Enter your Age: ");
  int age = int.parse(stdin.readLineSync()!);

  switch (age) {
    case int x when x >= 18:
      print("At age $age, you are old Enough to drink");
    case int x when x < 18 && x > 0:
      print("At age $age, You are Not old Enough to drink");
    default:
      print("you dey whine? what kind of age is that?");
  }

  switch (age) {
    case int num when num < 0:
      print("Omo O lo far oo");
    case int num when num % 2 == 0:
      print("Your Age is an even num");
    default:
      print("Your age is an odd number");
  }

  // Stacking Case
  String animal = "Jaguar";

  switch (animal) {
    case "Lion":
    case "Tiger":
    case "Leopard":
    case "Hyena":
      print("$animal is a cannibal");
      break;
    case "cow":
    case "Goat":
    case "Sheep":
    case "Gorila":
      print("$animal is a herbivour");
      break;
    default:
      print("I do not recongnize $animal");
  }

  //switch Expression
  String grade = "a";

  var result = switch (grade.toUpperCase()) {
    "A" => "Excellent",
    "B" => "Very Good",
    "C" => "Average",
    "D" => "Pass",
    "E" => "Poor",
    "F" => "Fail",
    _ => "Invalid Grade",
  };
  print(result);
}
