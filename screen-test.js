var result = function(pass, opt_parent) {
  var node = document.createElement('p');
  node.style.fontWeight = 'bold';

  node.innerText = pass ? 'PASSED' : 'FAIL';
  node.style.color = pass ? 'green' : 'red';

  if (opt_parent) {
    opt_parent.appendChild(node);
  }

  return node;
};


document.addEventListener('DOMContentLoaded', function(){
  var s = window.screen;
  document.getElementById('width').innerText = s.width;
  document.getElementById('height').innerText = s.height;

  result((s.width && s.height), document.body);
});
