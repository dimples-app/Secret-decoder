# Secret-decoder

---

## Encoding and Decoding Below Cipher

- Caesar Ciper
- Polybius square
- Substitution cipher

## Description of given technique

### Caesar shift
This cipher will encode or decode messages by shifting values a number of characters given by the user,
either to the right (positive shift value) or to the left (negative shift value).

input: a message given by the user to either encode or decode.
shift: a number to shift the message to encode or decode

### Polybius square 
This cipher will encode or decode messages by turning them into a a number representative of a position in a two dimensional array known as a polybius square.
The array used in this case is:

    const polybiusSquare = [
      ['a', 'f', 'l', 'q', 'v'],
      ['b', 'g', 'm', 'r', 'w'],
      ['c', 'h', 'n', 's', 'x'],
      ['d', 'i/j', 'o', 't', 'y'],
      ['e', 'k', 'p', 'u', 'z']
    ];

input: a message given by the user to either encode or decode.
encode: (boolean, default = true) true if encoding, false if decoding.

### Substitution cipher
This cipher will encode or decode messages by exchanging letters in the English alphabet with a different alphabet provided by the user.

input: a message given by the user to either encode or decode.
alphabet: a series of exactly 26 unique characters.
encode: (boolean, default = true) true if encoding, false if decoding.


## Tech Stack
- JavaScript
- Mocha - Chai Unit tests
- HTML, CSS

## Image

![Secret_Decoder](https://github.com/dimples-app/Secret-decoder/blob/main/Secret_DeCoder.png)
