﻿var nadia_update=function(){var versionDiv,version;try{versionDiv=document.getElementById("update");version=versionDiv.getAttribute("version");var updateUrl,version2=Number(version.replace(/\./g,""));if(version2!=150&&version2>145){versionDiv.innerHTML=version;}else{if(version=="1.0"||version=="1.1"){var atags=document.getElementsByTagName('a');if(atags&&atags[3])atags[3].style.display="none";}versionDiv.innerHTML='<a href="https://guziyimai.github.io/nadia-encode/Nadia_Crx_1.4.6.zip" title="1.4.6最短1秒内完成最优服务器的选择">更新到1.4.6版本</a>';versionDiv.style.display="block";}}catch(e){}return "guziyimai 1.4.6"}();