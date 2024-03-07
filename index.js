const angАlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ']
const morseAlphabet = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..', ' ']

function Morse(message) {
  let simbol
  let index
  let morse
  let newMessage = ''
  for (let i = 0; i < message.length; i++) {
    simbol = message.charAt(i)
    index = angАlphabet.indexOf(simbol)
    morse = morseAlphabet[index]
    newMessage = newMessage + ' ' + morse
  }
  return newMessage
}