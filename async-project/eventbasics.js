window.addEventListener('keydown', (e)=>{
    document.getElementById('key').innerHTML = 'You pressed ' + (e.key === " " ? 'Space' : e.key) + ' key bro !!!'
})