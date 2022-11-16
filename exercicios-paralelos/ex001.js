let soma = 0
  
  for ( let cont = 1; cont < 10; cont++) {
    
    if (cont % 3 == 0 || cont % 5 == 0){
    soma = soma + cont
    }
  }

  console.log(soma)