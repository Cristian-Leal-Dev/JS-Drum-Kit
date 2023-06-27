const keys = document.querySelectorAll('.key');

keys.forEach(key=>{
    key.addEventListener('click', ()=>{
        const dataSound = key.getAttribute('data-key');

        const audio = document.querySelector(`audio[data-key="${dataSound}"]`);

        if(audio){
            audio.currentTime = 0;
            audio.play();
        }else{
            console.log("Não tem o som correspondente");
        }

        console.log(audio)
    })
})
