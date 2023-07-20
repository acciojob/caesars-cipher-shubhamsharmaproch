// Your Script here.

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  let decodedArr = "";
	for(let i=0;i<encodedStr.length;i++) {
		const charCode=encodedStr.charCodeAt(i);
		if(charCode>=65 && charCode<=90) {
			decodedArr=charCode+13;
		} else {
			decodedArr+=encodedStr.charAt(i);
		}
		decodedArr=String.fromcharCode(decodedArr);
		
	}
	return decodedArr;
window.rot13 = rot13;
