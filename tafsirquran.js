const _0x4b6a69=_0x1328;(function(_0x398f2f,_0x2e2ef1){const _0x4e1e52=_0x1328,_0x54cf56=_0x398f2f();while(!![]){try{const _0x25ef3b=parseInt(_0x4e1e52(0x109))/0x1*(parseInt(_0x4e1e52(0x125))/0x2)+parseInt(_0x4e1e52(0xff))/0x3*(-parseInt(_0x4e1e52(0xf4))/0x4)+-parseInt(_0x4e1e52(0x127))/0x5*(-parseInt(_0x4e1e52(0x132))/0x6)+parseInt(_0x4e1e52(0xfc))/0x7*(parseInt(_0x4e1e52(0x134))/0x8)+-parseInt(_0x4e1e52(0x102))/0x9+-parseInt(_0x4e1e52(0x119))/0xa*(-parseInt(_0x4e1e52(0x126))/0xb)+-parseInt(_0x4e1e52(0x120))/0xc;if(_0x25ef3b===_0x2e2ef1)break;else _0x54cf56['push'](_0x54cf56['shift']());}catch(_0x40db6c){_0x54cf56['push'](_0x54cf56['shift']());}}}(_0x40eb,0x90ffd));let currentVerseIndex=0x0,isPlaying=![],currentAudio=null;function displayVerses(){const _0x79f822=_0x1328,_0x5dd495=document[_0x79f822(0x105)](_0x79f822(0x123));_0x5dd495[_0x79f822(0x103)]='',selectedVerses[_0x79f822(0x106)](({sura:_0x4d1be5,aya:_0x13770c,arabic_text:_0x7e87bf,dichquran:_0x327243,dichchuhich:_0x260b76,translation:_0x63456d},_0x1c032a)=>{const _0x409ff0=_0x79f822,_0x43bab4=document[_0x409ff0(0x137)](_0x409ff0(0x12a));_0x43bab4['className']=_0x409ff0(0x122);const _0x43a0e6=document[_0x409ff0(0x137)](_0x409ff0(0x12a));_0x43a0e6[_0x409ff0(0x101)]=_0x409ff0(0xfd),_0x43a0e6[_0x409ff0(0x103)]=_0x409ff0(0x117)+_0x4d1be5+':'+_0x13770c+')';const _0x1a53e3=document[_0x409ff0(0x137)]('div');_0x1a53e3[_0x409ff0(0x101)]='controls-tim',_0x1a53e3['innerHTML']=_0x409ff0(0x10f)+_0x1c032a+_0x409ff0(0x121)+_0x4d1be5+_0x13770c+_0x409ff0(0xf5),_0x43a0e6['appendChild'](_0x1a53e3);const _0x34a3b8=document[_0x409ff0(0x137)]('p');_0x34a3b8[_0x409ff0(0x101)]=_0x409ff0(0x11b),_0x34a3b8[_0x409ff0(0x103)]=_0x7e87bf;const _0xa77dee=document[_0x409ff0(0x137)]('div');_0xa77dee['className']=_0x409ff0(0x114);const _0x152c30=document['createElement']('p');_0x152c30[_0x409ff0(0x101)]=_0x409ff0(0x11d),_0x152c30[_0x409ff0(0x12f)]=_0x327243||_0x409ff0(0x112);const _0x1d24f0=document['createElement']('p');_0x1d24f0[_0x409ff0(0x101)]=_0x409ff0(0xfa),_0x1d24f0[_0x409ff0(0x12f)]=_0x260b76||'Dịch\x20Chú\x20Hích\x20không\x20có\x20sẵn';const _0x3c41ab=document[_0x409ff0(0x137)]('p');_0x3c41ab[_0x409ff0(0x101)]=_0x409ff0(0x124),_0x3c41ab[_0x409ff0(0x12f)]=_0x63456d||_0x409ff0(0x118);const _0x4b6e2a=document[_0x409ff0(0x137)](_0x409ff0(0x100));_0x4b6e2a[_0x409ff0(0x101)]=_0x409ff0(0x11e),_0x4b6e2a[_0x409ff0(0xfe)]=_0x409ff0(0x128),_0x4b6e2a[_0x409ff0(0x12b)]=function(){const _0x14e4de=_0x409ff0,_0x16985b=_0x152c30[_0x14e4de(0x10e)][_0x14e4de(0x10b)]==='block';_0x152c30[_0x14e4de(0x10e)][_0x14e4de(0x10b)]=_0x16985b?_0x14e4de(0x10c):_0x14e4de(0xf7),_0x1d24f0['style'][_0x14e4de(0x10b)]=_0x16985b?_0x14e4de(0x10c):_0x14e4de(0xf7),_0x4b6e2a[_0x14e4de(0xfe)]=_0x16985b?_0x14e4de(0x128):_0x14e4de(0x130);},_0xa77dee[_0x409ff0(0x10a)](_0x152c30),_0xa77dee[_0x409ff0(0x10a)](_0x1d24f0),_0xa77dee['appendChild'](_0x3c41ab),_0x43bab4[_0x409ff0(0x10a)](_0x43a0e6),_0x43bab4[_0x409ff0(0x10a)](_0x34a3b8),_0x43bab4['appendChild'](_0x4b6e2a),_0x43bab4[_0x409ff0(0x10a)](_0xa77dee),_0x5dd495[_0x409ff0(0x10a)](_0x43bab4);});}function playNextVerse(){const _0x3f7a7b=_0x1328;if(currentVerseIndex>=selectedVerses[_0x3f7a7b(0x11f)]){isPlaying=![];return;}const {sura:_0x318f55,aya:_0x2efacc}=selectedVerses[currentVerseIndex],_0x50ac12=document[_0x3f7a7b(0xf8)](_0x3f7a7b(0x12d)+(currentVerseIndex+0x1)+')');_0x50ac12['scrollIntoView']({'behavior':_0x3f7a7b(0x136),'block':_0x3f7a7b(0x104)}),toggleAudio(currentVerseIndex);}function _0x40eb(){const _0x2c1316=['appendChild','display','none','active-verse','style','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22icon-audiotim\x22\x20onclick=\x22toggleAudio(',')\x20.quranarrandomtim','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M5\x203l14\x209-14\x209V3z\x22\x20fill=\x22currentColor\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','Dịch\x20Quran\x20không\x20có\x20sẵn','catch','dichContainer','onload','then','Quran\x20(','Dịch\x20không\x20có\x20sẵn','10QTufss','onended','quranarrandomtim','play','dichquran','toggle-button','length','11715228BZIZxd',')\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20id=\x22audioIcon','verserandomtim','content','translation','30gRDEdq','7211017zeNBFS','5pzgsIx','Hiện\x20bản\x20dịch','https://everyayah.com/data/Hudhaify_64kbps/','div','onclick','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M5\x203l14\x209-14\x209V3z\x22\x20fill=\x22currentColor\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','.verserandomtim:nth-child(','.mp3','textContent','Ẩn\x20bản\x20dịch','padStart','4310550TTRXKL','pause','16CxzbtT','audioIcon','smooth','createElement','1593272FfsCCi','\x22\x20fill=\x22none\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M5\x203l14\x209-14\x209V3z\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20stroke-width=\x222\x22\x20stroke=\x22currentColor\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','toString','block','querySelector','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M6\x206h12v12H6V6z\x22\x20fill=\x22currentColor\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','dichchuhich','classList','3720857MBwKvu','ayattim','innerText','3JTGkzK','button','className','7314705UrByJS','innerHTML','center','getElementById','forEach','https://quranvn/','remove','22945CCSwWF'];_0x40eb=function(){return _0x2c1316;};return _0x40eb();}function _0x1328(_0x555ef7,_0x357c85){const _0x40ebf6=_0x40eb();return _0x1328=function(_0x1328b6,_0x4d7acb){_0x1328b6=_0x1328b6-0xf4;let _0x55fc75=_0x40ebf6[_0x1328b6];return _0x55fc75;},_0x1328(_0x555ef7,_0x357c85);}function toggleAudio(_0x173b3a){const _0x479cff=_0x1328,_0x31b399=document[_0x479cff(0x105)]('audioPlayer'),{sura:_0xd18579,aya:_0x44ad15}=selectedVerses[_0x173b3a],_0x4cdd2e=_0x479cff(0x129)+_0xd18579['toString']()['padStart'](0x3,'0')+_0x44ad15[_0x479cff(0xf6)]()[_0x479cff(0x131)](0x3,'0')+_0x479cff(0x12e),_0x44bc1a=_0x479cff(0x107)+_0xd18579[_0x479cff(0xf6)]()[_0x479cff(0x131)](0x3,'0')+_0x44ad15[_0x479cff(0xf6)]()[_0x479cff(0x131)](0x3,'0')+_0x479cff(0x12e),_0x345730=document[_0x479cff(0x105)](_0x479cff(0x135)+_0xd18579+_0x44ad15);if(currentAudio){if(currentAudio['src']===_0x4cdd2e){currentAudio[_0x479cff(0x133)](),_0x345730['innerHTML']=_0x479cff(0x12c),isPlaying=![],currentAudio=null;return;}else currentAudio[_0x479cff(0x133)]();}currentAudio=new Audio(_0x4cdd2e);const _0x297b39=document[_0x479cff(0xf8)](_0x479cff(0x12d)+(_0x173b3a+0x1)+_0x479cff(0x110));_0x297b39[_0x479cff(0xfb)]['add'](_0x479cff(0x10d)),currentAudio[_0x479cff(0x11c)]()[_0x479cff(0x116)](()=>{const _0x1a715a=_0x479cff;_0x345730[_0x1a715a(0x103)]=_0x1a715a(0xf9),isPlaying=!![],currentAudio['onended']=()=>{const _0x18110e=_0x1a715a;playSecondAudio(_0x44bc1a,_0x345730),_0x297b39['classList'][_0x18110e(0x108)](_0x18110e(0x10d));};})['catch'](()=>{const _0xabeea1=_0x479cff;playSecondAudio(_0x44bc1a,_0x345730),_0x297b39[_0xabeea1(0xfb)][_0xabeea1(0x108)](_0xabeea1(0x10d));});}function playSecondAudio(_0x43ef2f,_0x10a056){const _0x415c1a=_0x1328,_0x45efd6=document[_0x415c1a(0x105)]('audioPlayer');currentAudio=new Audio(_0x43ef2f),currentAudio[_0x415c1a(0x11c)]()[_0x415c1a(0x116)](()=>{const _0x3319dc=_0x415c1a;currentAudio[_0x3319dc(0x11a)]=()=>{const _0x6dd53f=_0x3319dc;currentVerseIndex++,isPlaying=![],_0x10a056['innerHTML']=_0x6dd53f(0x12c),playNextVerse();};})[_0x415c1a(0x113)](()=>{const _0x5b0f3c=_0x415c1a;currentVerseIndex++,isPlaying=![],_0x10a056[_0x5b0f3c(0x103)]=_0x5b0f3c(0x111),playNextVerse();}),_0x10a056[_0x415c1a(0x103)]='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M6\x206h12v12H6V6z\x22\x20fill=\x22currentColor\x22></path>\x0a\x20\x20\x20\x20';}window[_0x4b6a69(0x115)]=function(){displayVerses();};
