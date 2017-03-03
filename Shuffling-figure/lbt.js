//定义一个 log
var log = function(){
    console.log.apply(console, arguments)
}

// 元素选择器
var e = function(selector) {
    return document.querySelector(selector)
}

//删除class
var removeClassAll = function(className) {
    var selector = '.' + className
    var elements = document.querySelectorAll(selector)
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i]
        e.classList.remove(className)
    }
}


// 绑定‘下一张按钮’ click事件
var bindEventbuttonx = function(){
    var buttonx = e(".buttonx")
    buttonx.addEventListener('click',function(event){
        // log('下一张 按钮 绑定成功')
        // 找到按钮的父元素 div
        var fys = event.target.parentElement
        //找到点点的父元素
        var dians = e('.diandianf')
        // 找到图片总数 和 当前下标(同时找到点点总数和当前点点下标)
        var tupianzh = parseInt(fys.dataset.imgs)
        var dqxb = parseInt(fys.dataset.imgno1)
        // log('图片和', typeof tupianzh, '当前图片', typeof dqxb)
        // 算出下一张图片的下标 与 下一个点的下标
        // 0,1,2 0,1,2 总数是 3
        var newxb = (dqxb + 1) % tupianzh
        // 设置父元素的 data-imgno1 为 新下标
         fys.dataset.imgno1 = newxb
        // 设置点点父元素 的data-imgno1 为新下标
         dians.dataset.imgno1 = newxb

        // 图片和点 新的 ID
        var newId = '#id-img-' + String(newxb)
        var newdianId = '#id-dian-' + String(newxb)

        //删除当前图片和点点的class
        var className = 'hua-imgno1'
        var dianclass = 'hua-diandian'
        removeClassAll(className)
        removeClassAll(dianclass)

        // 给下一张图片和点加上 class
        var diandian = e(newdianId)
        diandian.classList.add(dianclass)
        var img = e(newId)
        img.classList.add(className)
    })
}



// 绑定‘上一张按钮’ click事件
var bindEventbuttons = function() {
    var buttonx = e(".buttons")
    buttonx.addEventListener('click',function(event){
        // log('上一张 按钮 绑定成功')
        // 找到按钮的父元素 div
        var fys = event.target.parentElement
        //找到点点的父元素
        var dians = e('.diandianf')
        // 找到图片总数 和 当前下标(同时找到点点总数和当前点点下标)
        var tupianzh = parseInt(fys.dataset.imgs)
        var dqxb = parseInt(fys.dataset.imgno1)
        // log('图片和', typeof tupianzh, '当前图片', typeof dqxb)
        // 算出上一张图片的下标 与 上一个点的下标
        // 0，2 ，1  0，2，1
        var newxb = ((dqxb - 1) + tupianzh) % tupianzh
        // 设置父元素的 data-imgno1 为 新下标
         fys.dataset.imgno1 = newxb
         // 设置点点父元素 的data-imgno1 为新下标
         dians.dataset.imgno1 = newxb
         // 图片和点 新的 ID
         var newId = '#id-img-' + String(newxb)
         var newdianId = '#id-dian-' + String(newxb)
         //删除当前图片和点点的class
         var className = 'hua-imgno1'
         var dianclass = 'hua-diandian'
         removeClassAll(className)
         removeClassAll(dianclass)
         // 给上一张图片和点加上 class
         var diandian = e(newdianId)
         diandian.classList.add(dianclass)
         var img = e(newId)
         img.classList.add(className)
    })
}


//
// 定时器
// setInterval(code,millisec,lang)
var xiayizhang = function(){
    var buttonx = e(".buttonx")
    // log('下一张 按钮 绑定成功')
    // 找到按钮的父元素 div
    var fys = e('.img-lunbotu')
    //找到点点的父元素
    var dians = e('.diandianf')
    // 找到图片总数 和 当前下标(同时找到点点总数和当前点点下标)
    var tupianzh = parseInt(fys.dataset.imgs)
    var dqxb = parseInt(fys.dataset.imgno1)
    // log('图片和', typeof tupianzh, '当前图片', typeof dqxb)
    // 算出下一张图片的下标 与 下一个点的下标
    // 0,1,2 0,1,2 总数是 3
    var newxb = (dqxb + 1) % tupianzh
    // 设置父元素的 data-imgno1 为 新下标
     fys.dataset.imgno1 = newxb
    // 设置点点父元素 的data-imgno1 为新下标
     dians.dataset.imgno1 = newxb

    // 图片和点 新的 ID
    var newId = '#id-img-' + String(newxb)
    var newdianId = '#id-dian-' + String(newxb)

    //删除当前图片和点点的class
    var className = 'hua-imgno1'
    var dianclass = 'hua-diandian'
    removeClassAll(className)
    removeClassAll(dianclass)

    // 给下一张图片和点加上 class
    var diandian = e(newdianId)
    diandian.classList.add(dianclass)
    var img = e(newId)
    img.classList.add(className)
}


var int = self.setInterval("xiayizhang()",3000)



// 鼠标悬停到点上切换至相应图片
var bindEventdian = function(){
    var diandians = document.querySelectorAll('.diandian')
    for (var i = 0; i < diandians.length; i++) {
        var d = diandians[i]
        // log('d是什么',d)
        d.addEventListener('mouseover',function(event){
            // log('点点绑定成功')
            // 切换点点的class
            var target = event.target
            if (target.classList.contains('hua-diandian')) {
                target.classList.remove('hua-diandian')
            }else {
                target.classList.add('hua-diandian')
            }

            // 切换到对应图片
            //
            //
            var buttonx = e(".buttonx")
            // log('下一张 按钮 绑定成功')
            // 找到按钮的父元素 div
            var fys = e('.img-lunbotu')
            //找到点点的父元素
            var dians = e('.diandianf')
            // 找到图片总数 和 当前下标(同时找到点点总数和当前点点下标)
            var tupianzh = parseInt(fys.dataset.imgs)
            var dqxb = parseInt(fys.dataset.imgno1)
            // log('图片和', typeof tupianzh, '当前图片', typeof dqxb)
            // 算出下一张图片的下标 与 下一个点的下标
            // 0,1,2 0,1,2 总数是 3
            var newxb = target.id.slice(-1)
            // log('ID',newxb)
            // 设置父元素的 data-imgno1 为 新下标
             fys.dataset.imgno1 = newxb
            // 设置点点父元素 的data-imgno1 为新下标
             dians.dataset.imgno1 = newxb

            // 图片和点 新的 ID
            var newId = '#id-img-' + String(newxb)
            var newdianId = '#id-dian-' + String(newxb)

            //删除当前图片和点点的class
            var className = 'hua-imgno1'
            var dianclass = 'hua-diandian'
            removeClassAll(className)
            removeClassAll(dianclass)

            // 给下一张图片和点加上 class
            var diandian = e(newdianId)
            diandian.classList.add(dianclass)
            var img = e(newId)
            img.classList.add(className)

            // 关闭定时器
            clearInterval(int)
        })
    }
}





// 程序主入口
var _main_ = function() {
    bindEventbuttonx()
    bindEventbuttons()
    bindEventdian()
}

_main_()
