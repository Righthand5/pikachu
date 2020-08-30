const string = `.skin *{
    box-sizing: border-box;
margin: 0;
padding: 0;
}/*并把边框和内边距放入框中*/
.skin *::before, .skin *::after{box-sizing:border-box}
body{
}
.skin{
    position: relative;
    background: #fee433;
    min-height: 50vh;
    /*background: #fee600;*/
    /*height: 100vh;*/
}
.nose{
    border: 10px solid black;/*指的是厚度*/
    border-color: black transparent;
    border-bottom:none;
    width: 0px;
    height: 0px;
    position: absolute;
    left: 50%;/*左边的边在中间位置所以margin-left: -5px;*/
    top:145px;
    margin-left: -10px;/*左右两边的宽度为10px所以这里为-10px而不是-5px*/
    z-index:10;
}
@keyframes  wave {
    0%{
        transform: rotate(0deg);
}
    33%{
        transform: rotate(5deg);
}
    66%{
        transform: rotate(-5deg);
}
    100%{
        transform: rotate(0deg);
}
}
.nose:hover{
    transform-origin:50% 100% ;
    animation: wave 300ms infinite linear;/*无限的动*/
}
.circle{
    position: absolute;
    width: 20px;
    height: 6px;
    border-radius:10px 10px 0 0;
    background:black;
    top:-16px;
    left: -10px;
}
.eye{
    border:2px solid #000000;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius:50%;
}
.eye::before{
    content: '';
    display: block;
    border:2px solid #000000;
    width: 25px;
    height: 25px;
    background: #fff;
    position:relative;
    border-radius:50%;
    left: 8px;
    top:2px;
}
.eye.left{
    transform: translateX(-100px);
}
.eye.right{
    transform: translatex(100px);
}
.mouth{
    /*border:1px solid red;*/
    width: 200px;
    height:200px;
    position:absolute;
    left:50%;
    top:170px;
    margin-left: -100px;
}
.mouth .up{
    position: relative;
    top:-20px;
    z-index: 1;
}
/*省略代码的写法*/
.mouth .up .lip{
    border:3px solid black;
    height: 30px;
    width: 100px;
    border-top-color:transparent;
    border-right-color:transparent;
    position: relative;
    position:absolute;
    left:50%;
    margin-left: -50px;
    background: #fee433;
}
.mouth .up .lip.left{
    border-radius: 0 0 0 50px;
    transform: rotate(-15deg) translateX(-53px);
}
.mouth .up .lip.right{
    border-radius: 0 0 50px 0;
    transform: rotate(15deg) translateX(53px);
}
/*省略代码的写法*/
.mouth .up .lip::before{
    content: '';
    display: block;
    width:7px;
    height: 30px;
    position: absolute;
    right: -5px;
    background: #fee433;
    bottom: 0;
}
/*利用div遮住线条改出一个胡须的形状*/
.mouth .up .lip.left::before{
    right: -6px;
}
.mouth .up .lip.right::before{
    left: -6px;
}
.mouth .down{
    /*border:1px solid red;*/
    height:180px;
    position:absolute;
    top: 5px;
    width:100%;
    overflow: hidden;
}
.mouth .down .circle1{
    border: 3px solid black;
    height: 1000px;
    width:150px;
    position: absolute;
    left:50%;
    margin-left: -75px;
    bottom: 0;
    border-radius:75px/300px;
    background: #990513;
    overflow: hidden;
}
.mouth .down .circle1 .circle2{
    border:1px solid #fc4a62;
    width:200px;
    height:300px;
    position: absolute;
    background: #fc4a62;
    bottom: -155px;
    left:50%;
    margin-left: -100px;
    border-radius: 100px;

}
.face{
    position: absolute;
    width: 88px;
    height: 88px;
    border:3px solid black;
    left:50%;
    margin-left: -44px;
    top:200px;
    z-index: 3;
}
.face.left{
    transform: translateX(-180px);
    background: #fc0d1c;
    border-radius: 50%;
}
.face.right{
    transform: translateX(180px);
    background: #fc0d1c;
    border-radius: 50%;
}
.face>img{
    /*border:1px solid red;*/
    position: absolute;
    top:50%;
    left:50%
}
.face.left>img{
    transform:rotateY(180deg);
    transform-origin: 0 0;
}
`
export default string;
