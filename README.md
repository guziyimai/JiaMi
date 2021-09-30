# JiaMi
测试地址：
 https://guziyimai.github.io/JiaMi
 https://share.mockplus.cn/go/EXBFHMGGJHP58VKP/index.html
 https://jiami.pages.dev

联系作者：

 guziyimai@qq.com
 未经作者同意，禁止转载和修改源码！

网站截图：

https://lc-gluttony.s3.amazonaws.com/lWaoKXc5IVvx/7IXuaRPHg0rWRkvBQofwNEAEUjagcOli/Nadia001.jpg

https://lc-gluttony.s3.amazonaws.com/lWaoKXc5IVvx/wFeV1ww39LY6sL7TF8YfWE9S0CUt3nUr/Nadia002.jpg


说明：
1. 本软件仅作为纳迪亚之宝（Treasure of Nadia）游戏进行文本加密、解密用，禁止用于非法活动！
2. 将需要加密或解密的文字复制到上方文本框中
3. 点击“加密”或“解密”按钮即可；
4. 新增ASCII加密、Base64加密；
5. 如果密文在6万字内，可对密文任意位置添加汉字、中文标点、空白字符、贴吧表情，解密时自动忽略，Ascii码解密也可以掺杂英文、数字；
如果超过6万字，只能在开头添加中文说明，当遇到第一个英文或字母时开始解密，不判断中间是否掺杂汉字（为了第6点的解密速度）。
6. 百万文字谷歌浏览器加密、解密速度大约2秒左右。
7. 可以设置解密后，是否自动复制解密后的结果，或者打开结果中的第一个网址并复制提取码（该设置保持到Cookie）。


更新日志：

1.0-2.2：最初版，界面过于简陋，不记录日志了。

2.3版本更新：开头可以添加汉字说明，如“纳迪亚xx”、“ASCIIxx”、“Base64xx”等文字(xx代表任意汉字或冒号、空格)，解密时自动忽略这些说明文字；
目前关键词“纳迪亚加密器”已被百度、谷歌收录。

2.4更新：可以自定义密文头并保存到Cookie(后续版本已取消，但开头说明可以不含纳迪亚、ASCII、Base64等，但只能是汉字、中文标点、空白字符，解密时自动忽略)，添加了作者信息

2.5更新：增加了反盗链代码和F12彩蛋（彩蛋限谷歌内核）

2.6更新：可以设置在解密后复制内容或尝试自动打开网址

2.7更新：可以保存用户设置（只要不清除浏览器缓存），解密后也可以尝试自动打开磁力链接、迅雷、快车、旋风链接

2.8更新：可以补全百度云前缀、磁力链接前缀、阿里云前缀、迅雷前缀、微云前缀。

2.9更新：新增对Ascll码、Base64的加解密支持。并且，对于特征明显的密文，可以自动切换3种解密引擎。
扩展汉字说明，如果密文在6万字内，不仅仅是开头可以添加中文说明，密文中间、结尾都可以添加任意汉字、中文标点、空白字符、贴吧表情，解密时自动忽略。

3.0更新：替换了官方的Base64.js（对IE兼容性不佳）；将Ascll码加解密的方法也提出来，加上给IE补充的replaceAll、indexOf，合并为base.js并取消加密了。但即便如此，本加密器只兼容到IE8，IE7及以下实在太Out了不予支持！按F5刷新时，不会再切回第1个标签，你可以按自己的喜好将当前标签添加到收藏夹。

3.1更新：优化了百万级文字的加密速度，并限制加密文字最大长度为一百万字符。目前，我的加密器3种算法，谷歌浏览器百万文字加密、解密时间均在2秒左右（IE系列10秒左右吧）。兽音、佛曰那些没有此限制，大部分是直接崩溃，或者百万文字加密时间在90秒以上。

3.2更新：密文在6万字以下时，可自动过滤密文中间的汉字，直接解密。顺便，去除了几个可能导致和谐的密文字母，后续将不再更新核心算法。新增盲盒图标，点击左上角图标，盲盒变脸^_^
