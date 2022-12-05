const textanim = document.querySelector('h1');

new Typewriter(textanim,{
    //loop:true,
    deleteSpeed:30
    
    
})
.pauseFor(10)
.changeDelay(50)
.typeString('Salut moi c\'est Nathan, Dev')
.pauseFor(400)
.typeString('<strong> Full-Stack !</strong>')
.pauseFor(400)
.deleteChars(12)
.typeString('<span style="color:  #ea8564;"> HTML</span> !')
.pauseFor(400)
.deleteChars(7)
.typeString('<span style="color: #55a69f;"> CSS</span> !')
.pauseFor(400)
.deleteChars(7)
.typeString('<span style="color: #c44e45;"> JavaScript</span> !')
.pauseFor(300)
.deleteChars(12)
.typeString('<span style="color: #ea39ff;"> PHP</span> !')
.start()


