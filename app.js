//objeto padre en el navegador
let win = window;
let dom = document;
let head = document.head;
let body = dom.body;

const $header = dom.querySelector('header');
const $header_class = dom.querySelector('.header');
const $header_class_all = dom.querySelectorAll('.header');
const $header_id = dom.querySelector('#header');

const id = document.getElementById('header');
const _class = document.getElementsByClassName('header');

const $main = dom.querySelector('main')

// const $buscar = dom.querySelectorAll('div.card > ul.list > li.list__item > a')
const $buscar = dom.querySelector("#propiedad");

console.log(win);
console.log(dom);
console.log(head);
console.log(body);
console.log(dom.title);
console.log(dom.styleSheets);
console.log(dom.header);


console.log($header)
console.log($header_class)
console.log($header_id)
console.log(id)
console.log(_class)

console.log($header_class_all)

console.clear();

console.log(body.childNodes)
console.log($main.childNodes)

$main.childNodes.forEach((nodo) => {
  console.log(nodo);
})

// const arregloNodo = Array.from($main.childNodes);

const arregloNodo = [...$main.childNodes];

const nuevo2 = arregloNodo.filter((nodo) =>  (nodo.nodeType === nodo.TEXT_NODE) ? true : false )

console.log(nuevo2);

console.clear();

console.log($main.children); //hijos
console.log($main.parentElement) //El papa
console.log($main.previousElementSibling) // El hermno
console.log($main.nextElementSibling) // El hermno
console.log($buscar);

console.clear();


const $form = dom.querySelector('#search') //ubicamos el formulario mediante el id

console.log($form);

$form.setAttribute('method', 'GET') //agregamos un atributo
$form.firstElementChild.removeAttribute("placeholder"); //borramos un atributo
$form.firstElementChild.setAttribute("autocomplete",'on'); //modificamos algun atributo

$form.classList.add('otra__clase'); //aqui agrega las clases

console.log($form.classList);

$form.classList.remove('otra__clase'); //aqui quita las clases


console.log($form.classList);

$form.classList.toggle('otra__clase'); //con esto si tiene la clase la quita y si no la tiene la agrega

console.log($form.classList);