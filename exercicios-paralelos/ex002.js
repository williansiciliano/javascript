function disemvowel(str) {
  
    return str.replace(/[aeiouà-ú]/gi,'');
  }

  var resultado = disemvowel (`Esse site é um lixo!`)

  console.log(resultado)