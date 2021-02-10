let html = document.getElementById('demo')
let style = document.querySelector('#style')
let string = `
/* 你好，我是前端小白,贰贰
 * 接下来演示一下我的前端功底
 * 首先准备一个div
*/
#div1{
    color: red ;
    border:1px solid red;
    width:200px;
    height:200px;
}
/* 接下来我把div变成一个八卦图
 * 看好了
 * 首先，把div变成一个圆
*/
#div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, .5);
    border: none;
}

/* 八卦是阴阳形成的
 * 一白一黑
*/
#div1 {
    background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 100%);
}

/*加一黑一白的小球*/
/*加白色的球*/
#div1::before {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    display: block;
    background: radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 25%, rgba(255, 255, 255, 1) 25%, rgba(255, 255, 255, 1) 100%);
}

/*加黑色的球*/
#div1::after {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);  
    content: '';
    display: block;
    background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 25%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 100%);
}
`;

let n = 0;
let string2 = '';

let step = () => {
    setTimeout(() => {

        if (string[n] === '\n') {
            // 如果是回车 就加上<br>
            string2 += '<br>';

        } else if (string[n] === ' ') {
            string2 += '&nbsp;';
        } else { // 如果不是回车 就照搬
            string2 += string[n];
        }
        // demo.innerHTML = string.substring(0, n); 
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0,99999);
        html.scrollTo(0,9999);
        if (n < string.length - 1) {
            n += 1;
            //如果不是最后一个就加1
            step();
        }
    }, 0);
};
step();