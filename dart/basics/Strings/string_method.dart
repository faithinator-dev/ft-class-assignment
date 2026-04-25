void main() {
  String word1 = 'Hello', word2 = "world";

  //Properties
  print(word1.length);
  print(word1.isEmpty);
  print(word1.isNotEmpty);
  print(word1.runes.toList()); //acIII

  // Methods
  //.toUppercase()
  print(word1.toUpperCase());

  var word3 = word1.toUpperCase();
  print(word3);
  print(word1);
  print("John".toUpperCase());

  //.toLowerCase()
  word3 = word3.toLowerCase();
  print(word3);

  //.Trim()
  String word4 = "   hi.  ";
  print(word4);
  print(word4.trim());

  //.contain()
  word3 = "Hello";
  print(word3.contains('el'));
  print(word3.contains('al'));

  //.Startwith()
  String word = "Faith";
  print(word.startsWith('Fai'));
  print(word.startsWith('Fia'));

  //.endsWith(l)
  print(word.endsWith('ith'));
  print(word.endsWith('ait'));

  //mini classwork
  String animalName = ' Dog ';
  print(animalName.trim());
  animalName = animalName.trim();
  print(animalName.startsWith('D'));
  print(animalName.startsWith(' '));
  print(animalName.endsWith('g'));
  print(animalName.endsWith(' '));
  print(animalName.contains('o'));
  print(animalName.contains('e'));
  print(animalName.toLowerCase());
  print(animalName.toUpperCase());

  String birdName = animalName.toUpperCase();
  print(identical(animalName, birdName));

  //.split()
  word = "How are you doing?";
  print(word.split(""));

  // .subString()
  int stopingIndex = 10;
  String secondPerson = word.substring(8, stopingIndex + 1);
  print(secondPerson);
  print(word.substring(8));

  //Classwork
  String greet = 'How is everything';
  print(greet);
  String text1 = greet.substring(7, 12);
  print(text1);
  int stopin = 15;
  String text2 = greet.substring(12, stopin + 1);
  print(text2);

  // .replaceAll()
  print('Hello'.replaceAll("e", "a"));
  print('Hello'.replaceAll("ell", "arr"));

  //.indexOf()
  print("Word".indexOf('w'));
  print("Word".indexOf('Word'));

  String userName = "123John";
  print(userName.indexOf(RegExp('[A-Z][a-z]')));

  userName = "123John";
  print(userName.indexOf(RegExp('123[A-Z][a-z]')));
}
