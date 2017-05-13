var glob = require('glob');
var path = require('path')

function getEntries (globPath) {
    var entries = {}
    /**
    * 读取src目录,并进行路径裁剪
    */
    glob.sync(globPath).forEach(function (entry) {
        /**
        * path.basename 提取出用 ‘/' 隔开的path的最后一部分，除第一个参数外其余是需要过滤的字符串
        * path.extname 获取文件后缀
        */
console.log(entry)
        var basename = path.basename(entry, path.extname(entry))
console.log(basename)
        // ***************begin***************
        // 当然， 你也可以加上模块名称, 即输出如下： { module/main: './src/module/index/main.js', module/test: './src/module/test/test.js' }
        // 最终编译输出的文件也在module目录下， 访问路径需要时 localhost:8080/module/index.html
        // slice 从已有的数组中返回选定的元素, -3 倒序选择，即选择最后三个
        var tmp = entry.split('/').splice(-3)
console.log(tmp)
        if(basename!==tmp[1]) return;  //过滤其他js文件
        var pathname = tmp.splice(0, 1) + '/' + basename; // splice(0, 1)取tmp数组中第一个元素
console.log(basename)
        entries[pathname] = new Array().concat(entry)
    });
    console.log(entries);
    return entries;
}
/*
    entry：     ../src/html/index/index.js
    basename:   index
    tmp:        [ 'html', 'index', 'index.js' ]
    pathname:   html/index
    enteries:   { 
                    'html/first': [ '../src/html/first/first.js' ],
                    'html/index': [ '../src/html/index/index.js' ] 
                }
*/

 getEntries('../src/html/*/*.js')