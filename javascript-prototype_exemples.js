;(function($) {
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Introduction_%C3%A0_JavaScript_orient%C3%A9_objet
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//Variables générales
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
var $body      = $('body');
var $main      = $('#main');
var $container = $('#container');

// Le constructeur Scene
var Scene = function (id) {
	var _this = this;
	_this.id = id;
	console.log('Nouvel objet Scene créé : ', _this.id);
}

Scene.prototype.direId = function() {
	var _this = this;
	console.log("Bonjour, je suis " + _this.id);
};
Scene.prototype.parler = function() {
	console.log("Salut man je suis une scene classique !");
};

// Le constructeur Scene1, qui héritera de Scene
function Scene1() {
	// On appelle le constructeur parent
	// pour profiter des propriétés définies dans la fonction
	Scene.call(this, 'scene1');
	this.container = $('#container');
};

// On déclare l'héritage pour bénéficier de la chaîne de prototypes
// Attention à ne pas utiliser "new Personne()". Ceci est incorrect
// on ne peut pas fournir l'argument "nom". C'est pourquoi on appelle
// Personne avant, dans le constructeur Étudiant.
Scene1.prototype = Object.create(Scene.prototype);
// on corrige le constructeur qui pointe sur celui de Personne
Scene1.prototype.constructor = Scene1;

// on remplace la méthode parler pour la scene 1
Scene1.prototype.parler = function() {
	console.log("Salut man je suis une scene 1 !");
};


var scene1     = new Scene1();
var scene2     = new Scene('scene222');

console.log(scene1.id);
console.log(scene2.id);
scene1.direId();
scene2.direId();
scene1.parler();
scene2.parler();

})(jQuery);
