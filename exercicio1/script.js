let coxinha = prompt("Deseja comer mais coxinha?\n Sim = S\n Não = N ").toUpperCase();
let coxinhasAoTodo = 0;

while(coxinha === "S"){
    coxinhasAoTodo = coxinhasAoTodo + 1
    coxinha = prompt("Deseja comer mais coxinha?\n Sim = S\n Não = N  ").toUpperCase()
}
    console.log("Sua conta é de " + coxinhasAoTodo*2.50);


