﻿var nadia_update=function(){var versionDiv,version;try{var versionDiv=document.getElementById("update");var version=versionDiv.getAttribute("version");var isEgde=/edge?\//i.test(navigator.userAgent),updateUrl;if(Number(version.replace(/\./g,""))>140){versionDiv.innerHTML=version;}else if(true){if(version=="1.0"||version=="1.1"){var atags=document.getElementsByTagName('a');if(atags && atags[3]) atags[3].style.display="none";}versionDiv.innerHTML='<a href="\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x68\x61\x72\x65\x2e\x6d\x6f\x63\x6b\x70\x6c\x75\x73\x2e\x63\x6e\x2f\x67\x6f\x2f\x6e\x61\x64\x69\x61\x2f\x4e\x61\x64\x69\x61\x5f\x43\x72\x78\x5f\x31\x2e\x34\x2e\x31\x2e\x70\x72\x6f\x2e\x7a\x69\x70" title="1.4.1补档了几个说明文件，不用秒传的话，可以不升级" target="_blank">更新到1.4.1版本</a>';versionDiv.style.display="block";}}catch(e){}return "guziyimai 1.4.1"}();