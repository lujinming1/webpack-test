import './css/common.css';
import Layer from './components/layer/layer.js';


function App(){
  const NUM = 1;
  alert(NUM);
  console.log(Layer);
  
  var dom = document.getElementById('app');
  var layer = new Layer();
  console.log(layer.tpl);
  console.log(dom);
  dom.innerHTML = layer.tpl;
}

new App();
