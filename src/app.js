import "bootstrap";
import "./style.css";

window.onload = function () {

  let who = ['Un gato callejero', 'Mi primo pequeño', 'El vecino loco', 'Un cuervo misterioso'];
  let action = ['quemó', 'perdió', 'mojó', 'tiró por la ventana'];
  let what = ['mi poyecto final', 'mis apuntes', 'la presentación', 'el informe que tenía listo'];
  let when = ['justo antes de salir', 'en medio de la tormenta', 'cuando iba camino a clase', 'mientras me preparaba para venir', 'hace solo unos minutos'];

  let randomWho = who[Math.floor(Math.random() * who.length)]
  let randomAction = action[Math.floor(Math.random() * action.length)]
  let randomWhat = what[Math.floor(Math.random() * what.length)]
  let randomWhen = when[Math.floor(Math.random() * when.length)]

  let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`

  document.getElementById("excuse").innerHTML = excuse
  console.log(excuse);

};
