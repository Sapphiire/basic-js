const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  direct = true
  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  constructor(boolean) {
    this.direct = boolean
  }

  encrypt(message, key) {
    if(message === undefined || key === undefined) throw Error;
    const upper_key = key.toUpperCase().split('')
    let idx = 0;
    const result = message.toUpperCase().split('').reduce((accumulator, currentValue) => {
      if(this.alphabet.includes(currentValue)) {
        idx = idx == key.length ? 0 : idx
        return accumulator + this.alphabet[(this.alphabet.indexOf(currentValue) + this.alphabet.indexOf(upper_key[idx++])) % 26]
      }
      else
        return accumulator + currentValue;
    }, "")
    return !this.direct ? result : result.split('').reverse().join('')
  }    

  decrypt(message, key) {
    if(message === undefined || key === undefined) throw Error;
    const new_key = key.toUpperCase().split('').map(element => this.alphabet[(this.alphabet.length - this.alphabet.indexOf(element)) % 26]).join('')
    const result = this.encrypt(message, new_key)
    return !this.direct ? result : result.split('').reverse().join('')
  }
}

module.exports = VigenereCipheringMachine;
