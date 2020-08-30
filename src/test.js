import string from'./css'
// let n = 1->添加到属性
// const demo1 = document.querySelector('#demo1');
// const demo2 = document.querySelector('#demo2');
// let n = 1
// demo1.innerText = string.substr(0,n)
// demo2.innerHTML = string.substr(0,n)
// let time = 100
// let id
// let id = player.play();不可以先用后声明所以放到后面
// const run = () =>{
//     n+=1
//     if(n>string.length){
//         pause()
//         return
//     }
//     demo1.innerText = string.substr(0,n)
//     demo2.innerHTML = string.substr(0,n)
//     demo1.scrollTop = demo1.scrollHeight
// }
//为什么用箭头函数，because不喜欢用this
const player = {
    n : 1,
    time : 100,
    id : undefined,
    events : {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    ui:{
        demo1 : document.querySelector('#demo1'),
        demo2 : document.querySelector('#demo2')
    },
    init:()=>{//初始化代码
        player.ui.demo1.innerText = string.substr(0,player.n)
        player.ui.demo2.innerHTML = string.substr(0,player.n)
        player.play();//简化代码内置
        player.bindEvent()
    },
    bindEvent : ()=>{
        for(let key in player.events){
            if(player.events.hasOwnProperty(key)){
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
            //Object.prototype.x=1
            //有可能会遍历到从原型链继承下来的属性
            // const value = player.events[key]
            // document.querySelector(key).onclick = player[value]
        }
    },
    run : () =>{
        player.n+=1
        if(player.n>string.length){
            window.clearInterval(player.id)
            return
        }
        player.ui.demo1.innerText = string.substr(0,player.n)
        player.ui.demo2.innerHTML = string.substr(0,player.n)
        player.ui.demo1.scrollTop = player.ui.demo1.scrollHeight
    },
    play : ()=>{
        player.id = setInterval(player.run,player.time)
    },
    pause : ()=>{
        window.clearInterval(player.id)
    },
    slow :()=>{
        player.pause()
        player.time=300
        // id = player.play();
        player.play();
    },
    normal : ()=>{
        player.pause()
        player.time=100
        // id = player.play();
        player.play();
    },
    fast : ()=>{
        player.pause()
        player.time=0
        // id = player.play();
        player.play();
    }
}
// let id = player.play();
player.init();
// const play =()=>{
//     return setInterval(run,time)
// }
// const pause =()=>{
//     window.clearInterval(id)
// }
// let id = play();
// const slow =()=>{
//     pause()
//     time=300
//     id = play();
// }
// const normal =()=>{
//     pause()
//     time=100
//     id = play();
// }
// const fast = ()=>{
//     pause()
//     time=0
//     id = play();
// }
// document.querySelector('#btnPause').onclick = player.pause
// document.querySelector('#btnPlay').onclick = player.play
// document.querySelector('#btnSlow').onclick=player.slow
// document.querySelector('#btnNormal').onclick=player.normal
// document.querySelector('#btnFast').onclick=player.fast
