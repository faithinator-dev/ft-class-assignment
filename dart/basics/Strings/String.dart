void main() {
  //String are sequence of Characters enclosed inside quotes (either single or double) in dart, String are immutable,
  //Which means any operation to modify the string creates a new copy. Lastly, Strings in dart are UTF-16 encorded and decorded
  //Which means we can use the decimal code of String characters as runes.
  print("Hello World");
  String userName = "John";
  String userPassword = '123abc&';

  var multiLineText = """ This is a 
  Multiline 
  text""";

  var word = "hello";

  print(userName);
  print(userPassword);
  print(multiLineText);
  print(word);

  var guestion = "How's your day going";
  print(guestion);

  guestion = 'hope you\'re fine';
  print(guestion);

  var message = 'hello' + 'world';
  print(message);
  print("2" + " 2");

  message =
      'How'
      'are'
      'you';

  print(message);

  String word1 = 'Hi';
  userName = 'steve';
  String greet = "$word1 $userName";
  print(greet);

  print('${userName.length >= 5 ? "hello $userPassword" : "hi $userName"}');

  // index
  //          C a s s a v a
  // index =  0 1 2 3 4 5 6
  // last index = string.Lenght - 1

  word = 'hello';
  print(word);
  print(word[0]);
  print(word[2]);
  print(word[word.length - 4]);

  // runes
  word1 = "Paul";
  print(word1.runes);
}
