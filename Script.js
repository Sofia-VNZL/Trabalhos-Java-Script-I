//input

anoNascimento = 2001


nome = "Ludo" 

//Processamento
hoje = new Date()
anoAtual = hoje.getFullYear()
idade = anoAtual - anoNascimento
mensagem = "sou " + nome + " e tenho " + idade + " anos "


//output 
alert (mensagem)