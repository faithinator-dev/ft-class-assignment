void main() {
  // Bitwise operators are used to mainipulate values on the bit level.
  int a = 2;
  int b = 3;

  //And (&) operator
  print(a & b); //0010 & 0011   = 0010 = 2

  //Or (|) operator
  print(a | b); //0010 | 0011 = 0011 = 3

  //Xor (^) operator exclusive or
  print(a ^ b); //0011 ^ 0010 = 0001 = 1

  //Not (~ (x + 1)) operator
  print(~b); //~0011 = 1100 = -4
  print(~a); //~0010 = 1101 = -3

  // left Shift
  print(a << 1); //0100 = 4
  print(a << 2); //1000 = 8

  // right Shift
  print(b >> 1); //0001 = 1 //
  print(b >> 2); //0000 = 0
}
