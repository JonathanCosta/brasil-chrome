//dados
var textoPequeno = "Augue in amet lectus etiam sit, augue adipiscing? Placerat? Arcu a placerat massa placerat ridiculus lorem sagittis vel quis odio, dolor sit! Natoque turpis augue proin a elit magna et cras ac, vel non dignissim dis, odio porta nec mauris. Aliquam et, dolor pulvinar, tristique nascetur vel pulvinar rhoncus velit, scelerisque amet elit cursus egestas? Sagittis nisi augue arcu quis, lorem augue a eros pid magna etiam nec pulvinar nec. Proin lacus lundium, nunc tincidunt magna odio sed. Ultrices ut sed massa! Sit integer turpis a, elementum sagittis, odio pulvinar, nascetur phasellus cras dolor ultricies? In? Non mattis, nunc, magna.";

var nomes = ["Maria", "José", "Antônio", "João", "Francisco", "Ana", "Luiz", "Paulo", "Carlos", "Manoel", "Francisca", "Pedro", "Marcos", "Raimundo", "Sebastião",
			"Antônia", "Marcelo", "Jorge", "Márcia", "Geraldo", "Adriana", "Sandra", "Luis", "Fernando", "Fabio", "Roberto", "Márcio", "Edson", "André",
			"Sérgio", "Josefa", "Patrícia", "Daniel", "Rodrigo", "Rafael", "Joaquim", "Vera", "Ricardo", "Eduardo", "Tereza", "Sônia", "Renato", "Carolina",
			"Ivan", "Alexandre", "Cléber"];

//utils
function getRandomArbitary (min, max) { return Math.random() * (max - min) + min; }
function getRandomInt (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function gera_random(n) { var ranNum = Math.round(Math.random()*n); return ranNum; }
function mod(dividendo,divisor) { return Math.round(dividendo - (Math.floor(dividendo/divisor)*divisor)); }
function obterStringAleatoria(quantidade) {
	var chars = 'abcdefghijklmnopqrstuvwxyz';
	var retorno = '';

	while (quantidade > 0) {
		retorno += chars[gera_random(25)];

		quantidade--;
	}

	return retorno;
};

//geradores
function placa() {
	return obterStringAleatoria(3).toUpperCase() + "-" +
		getRandomInt(0, 9) +
		getRandomInt(0, 9) +
		getRandomInt(0, 9) +
		getRandomInt(0, 9);
};
function cpf() { var n = 9; var n1 = gera_random(n); var n2 = gera_random(n); var n3 = gera_random(n); var n4 = gera_random(n); var n5 = gera_random(n); var n6 = gera_random(n); var n7 = gera_random(n); var n8 = gera_random(n); var n9 = gera_random(n); var d1 = n9*2+n8*3+n7*4+n6*5+n5*6+n4*7+n3*8+n2*9+n1*10; d1 = 11 - ( mod(d1,11) ); if (d1>=10) d1 = 0; var d2 = d1*2+n9*3+n8*4+n7*5+n6*6+n5*7+n4*8+n3*9+n2*10+n1*11; d2 = 11 - ( mod(d2,11) ); if (d2>=10) d2 = 0; return ''+n1+n2+n3+'.'+n4+n5+n6+'.'+n7+n8+n9+'-'+d1+d2; }
function cnpj() { var n = 9; var n1 = gera_random(n); var n2 = gera_random(n); var n3 = gera_random(n); var n4 = gera_random(n); var n5 = gera_random(n); var n6 = gera_random(n); var n7 = gera_random(n); var n8 = gera_random(n); var n9 = 0; var n10 = 0; var n11 = 0; var n12 = 1; var d1 = n12*2+n11*3+n10*4+n9*5+n8*6+n7*7+n6*8+n5*9+n4*2+n3*3+n2*4+n1*5; d1 = 11 - ( mod(d1,11) ); if (d1>=10) d1 = 0; var d2 = d1*2+n12*3+n11*4+n10*5+n9*6+n8*7+n7*8+n6*9+n5*2+n4*3+n3*4+n2*5+n1*6; d2 = 11 - ( mod(d2,11) ); if (d2>=10) d2 = 0; return ''+n1+n2+'.'+n3+n4+n5+'.'+n6+n7+n8+'/'+n9+n10+n11+n12+'-'+d1+d2; }
function telefone(){
	return "(" + getRandomInt(1, 9) + getRandomInt(0, 9) + ") " +
	getRandomInt(1, 9) +
	getRandomInt(0, 9) +
	getRandomInt(0, 9) +
	getRandomInt(0, 9) + "-" +
	getRandomInt(0, 9) +
	getRandomInt(0, 9) +
	getRandomInt(0, 9) +
	getRandomInt(0, 9);
};
function cep(){
	return "" + getRandomInt(1, 9) +
	getRandomInt(0, 9) + "." +
	getRandomInt(0, 9) +
	getRandomInt(0, 9) +
	getRandomInt(0, 9) + "-" +
	getRandomInt(0, 9) +
	getRandomInt(0, 9) +
	getRandomInt(0, 9);
}
function nome(){
	return nomes[getRandomInt(0, nomes.length)];
};
function email(){
	return obterStringAleatoria(16) + "@example.com";
};


chrome.contextMenus.create({"title": "Nome", "contexts":["editable"], "onclick": function(info, tab){
	chrome.tabs.sendRequest(tab.id, nome());
}});

chrome.contextMenus.create({"title": "Cpf", "contexts":["editable"], "onclick": function(info, tab){
	chrome.tabs.sendRequest(tab.id, cpf());
}});

chrome.contextMenus.create({"title": "Cnpj", "contexts":["editable"], "onclick": function(info, tab){
	chrome.tabs.sendRequest(tab.id, cnpj());
}});

chrome.contextMenus.create({"title": "Telefone", "contexts":["editable"], "onclick": function(info, tab){
	chrome.tabs.sendRequest(tab.id, telefone());
}});

chrome.contextMenus.create({"title": "Email", "contexts":["editable"], "onclick": function(info, tab){
	chrome.tabs.sendRequest(tab.id, email());
}});

chrome.contextMenus.create({"title": "Cep", "contexts":["editable"], "onclick": function(info, tab){
	chrome.tabs.sendRequest(tab.id, cep());
}});

chrome.contextMenus.create({"title": "Placa", "contexts":["editable"], "onclick": function(info, tab){
	chrome.tabs.sendRequest(tab.id, placa());
}});

chrome.contextMenus.create({"title": "Texto Pequeno", "contexts":["editable"], "onclick": function(info, tab){
	chrome.tabs.sendRequest(tab.id, textoPequeno);
}});
