﻿var nadia_update=function(){var versionDiv,version;try{var versionDiv=document.getElementById("update");var version=versionDiv.getAttribute("version");var isEgde=/edge?\//i.test(navigator.userAgent),updateUrl;if(Number(version.replace(/\./g,""))>140){versionDiv.innerHTML=version;}else if(true){if(version=="1.0"||version=="1.1"){var atags=document.getElementsByTagName('a');if(atags && atags[3]) atags[3].style.display="none";}versionDiv.innerHTML='<a href="https://nadia-jiami.netlify.app/Nadia_Crx_1.4.1.pro.zip" title="1.4.1补档了几个说明文件，不用秒传的话，可以不升级" target="_blank">更新到1.4.1版本</a>';versionDiv.style.display="block";}}catch(e){}return "guziyimai 1.4.1"}();