const button = document.getElementById('a');

button.addEventListener('click', function(){
    const r = Math.round(Math.random()*225 + 0);
    const g = Math.round(Math.random()*225 + 0);
    const b = Math.round(Math.random()*225 + 0);
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';

});