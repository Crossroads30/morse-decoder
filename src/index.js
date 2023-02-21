const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
   // expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"
   expr = expr.split('');
   const arr = expr;
   const res = [];
      while (arr.length > 0) {
         const chunk = arr.splice(0, 10);
         res.push(chunk);
      };

   let res1 = []
   res.forEach(el=>{
      for (let i = 0; i < el.length; i += 2) {
         let cut = el.slice(i, i + 2);
         res1.push(cut);
      };
   });

   let res2 = [];
      for ( i=0; i<res1.length;i++){
         res2.push(res1[i].join(''))
      };

   let res3 = [];
   while (res2.length > 0) {
      let cut = res2.splice(0, 5);
      res3.push(cut);
   };

      let morseCode = []
      res3.forEach(el=>{
         for (let i = 0; i < el.length; i++) {
            if ( el[i] == '10'){
               el[i] = '.'
            } else if ( el[i] == '11' ) {
               el[i] = '-'
            } else if ( el[i] == '**' ) {
               el[i] = ' '
            } else 
               el[i] = ''
         }
      })
   
      res3.forEach(el=>{
         morseCode.push(el.join('').replace(/ /,'').replace(/ /,'').replace(/ /,'').replace(/ /,''))
      })
   
      let entries = Object.entries(MORSE_TABLE);
      console.log(entries);
   
      entries.forEach(el=>{
         for (let i = 0; i < morseCode.length; i +=1){
            if ( el[0] == morseCode[i]){
               morseCode[i]= el[1]
            }
         }
      })
      return morseCode.join('')
   };

module.exports = {
    decode
}