    let {log} = console
    let keys = [
        ['q','w','e','r','t','y','u','i','o','p'],
        ['a','s','d','f','g','h','j','k','l'],
        ['z','x','c','v','b','n','m']
    ]
    let hash = {
        'q': 'www.qq.com',
        'w': 'www.weibo.com',
        'e': 'element.eleme.cn',
        'r': 'www.reactjscn.com',
        't': 'www.taobao.com',
        'y': 'y.qq.com',
        'i': 'iqiyi.com',
        'a': 'www.acfun.cn',
        's': 'www.swiper.com.cn',
        'f': 'www.freecodecamp.org',
        'g': 'github.com',
        'h': 'www.hupu.com',
        'j': 'javascript.ruanyifeng.com',
        'z': 'www.zhihu.com',
        'v': 'www.v2ex.com/',
        'b': 'www.bilibili.com'
    }

// 若之前存过网址就覆盖原来的网址
// 取出localStorage中的newVal
    let hashInLocalStorage = JSON.parse(localStorage.getItem('newVal') || 'null')
    if (hashInLocalStorage) {
        hash = hashInLocalStorage
    }

        // 加三个div
    for (let i = 0; i < keys.length; i++) {
        let div = document.createElement('div')
        div.className = 'row'
        // id为main的标签可直接使用
        main.appendChild(div)
        // 每个div添加对应数量的kbd
        for (let j = 0; j < keys[i].length; j++) {
            let kbd = document.createElement('kbd')
            // 给kbd加id为kbd对应的字母
            kbd.id = keys[i][j]
            kbd.className = 'key' 
            // 给每个kbd加一个btn
            let btn = document.createElement('button')
            // 每个btn的id为其父元素kbd的对应的字母
            btn.id = keys[i][j]
            btn.textContent = '编辑'
            // 每个kbd加一个span
            let span = document.createElement('span')
            // span内容为kbd对应的字母
            span.textContent = keys[i][j]
            // 显示网站icon
            let img = document.createElement('img')
            if(hash[ keys[i][j] ]){
                img.src = 'https://' + hash[ keys[i][j] ] + '/favicon.ico'
            }else{
                img.src = './app.png'
            }
            // icon加载失败
            img.onerror = function(e){
                    e.target.src = './warn.png'
            }
            kbd.appendChild(span)
            kbd.appendChild(img)
            kbd.appendChild(btn)
            div.appendChild(kbd)

            
            // 给btn加点击事件
            btn.onclick = function(e){
                // 阻止冒泡 不让父元素kbd也被点击
                e.stopPropagation()
                // target为触发事件的元素
                let key = e.target.id
                // 拿到btn的兄弟img
                let prev = e.target.previousSibling
                // 拿到新网址赋给x
                let x = prompt("给我一个网址。若编辑后打开网址失败，请在此输入完整的网址（包括网址前面的http协议）")
                // 若新网址x为true 把新网址赋给原网址
                if (x) {
                hash[key] = x
                    // 更改网址icon
                    prev.src = 'https://' + x + '/favicon.ico'
                }
                // img加载失败
                prev.onerror = function(e){
                    e.target.src = './warn.png'
                }
                // 把网址存到localStorage
                // localStorage只能存字符串
                localStorage.setItem('newVal', JSON.stringify(hash))
            }

            // span加点击事件
            span.onclick = function(e){
                // log(e.target.parentNode.id)
                let key = e.target.parentNode.id
                // 拿到按键对应的网址
                let website = hash[key]
                // log(website)
                // 打开网址 若网址为true 以http或https开头 直接打开网址
                if(website == undefined) return
                if (website && 
                    (website.slice(0, 5) == 'http:' || website.slice(0, 6) == 'https:')
                    ) {
                    // location.href = website
                    window.open(website, '_blank')
                }
                // 若网址为true 不以http或https开头 网址前加https再打开
                if (website.slice(0, 5) != 'http:' && website.slice(0, 6) != 'https:'){
                    // location.href = 'https://' + website
                    window.open('https://' + website, '_blank')
                }
        }

            // img加点击事件
            img.onclick = function(e){
                // log(e.target.parentNode.id)
                let key = e.target.parentNode.id
                // 拿到按键对应的网址
                let website = hash[key]
                // log(website)
                // 打开网址 若网址为true 以http或https开头 直接打开网址
                if(website == undefined) return
                if (website && 
                    (website.slice(0, 5) == 'http:' || website.slice(0, 6) == 'https:')
                    ) {
                    // location.href = website
                    window.open(website, '_blank')
                }
                // 若网址为true 不以http或https开头 网址前加https再打开
                if (website.slice(0, 5) != 'http:' && website.slice(0, 6) != 'https:'){
                    // location.href = 'https://' + website
                    window.open('https://' + website, '_blank')
                }
        }

            // 给kbd加点击事件
            kbd.onclick = function(e){
                    // e为事件对象
                    // log(e)
                    // 拿到按键
                let key = e.target.id
                // log(e.target.id)
                // 拿到按键对应的网址
                let website = hash[key]
                // log(website)
                // 打开网址 若网址为true 以http或https开头 直接打开网址
                if(website == undefined) return
                if (website && 
                    (website.slice(0, 5) == 'http:' || website.slice(0, 6) == 'https:')
                    ) {
                    // location.href = website
                    window.open(website, '_blank')
                }
                // 若网址为true 不以http或https开头 网址前加https再打开
                if (website.slice(0, 5) != 'http:' && website.slice(0, 6) != 'https:'){
                    // location.href = 'https://' + website
                    window.open('https://' + website, '_blank')
                }

            }
            
        }
    }


    // 添加键盘事件
            document.onkeypress = function (e) {
                // e为事件对象
                // log(e)
                // 拿到按键
                let key = e.key
                // 拿到按键对应的网址
                let website = hash[key]
                // log(website)
                // 打开网址 若网址为true 以http或https开头 直接打开网址
                if(website == undefined) return
                if (website && 
                    (website.slice(0, 5) == 'http:' || website.slice(0, 6) == 'https:')
                    ) {
                    // location.href = website
                    window.open(website, '_blank')
                }
                // 若网址为true 不以http或https开头 网址前加https再打开
                if (website.slice(0, 5) != 'http:' && website.slice(0, 6) != 'https:') {
                    // location.href = 'https://' + website
                    window.open('https://' + website, '_blank')
                }

            }




