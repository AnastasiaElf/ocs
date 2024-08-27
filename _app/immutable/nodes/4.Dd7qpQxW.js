import{s as X,n as U,e as ce,v as Te,w as Ue,x as qe,y as Oe,c as pe,a as me}from"../chunks/scheduler.65mkkQyi.js";import{S as J,i as K,u as F,g as I,d,e as g,t as q,s as B,c as $,a as k,b as O,m as Ae,f as H,n as x,h as p,B as Le,A as he,x as Ge,C as xe,j as W,D as Qe,H as We,E as je,F as Fe,k as A,l as L,o as P,p as m,y as G,q as _,w as Q,r as R}from"../chunks/index.D8qVAbbg.js";import{p as Xe}from"../chunks/stores.Bu9SBaHe.js";import{e as ae,A as Ye,c as Je}from"../chunks/Avatar.BFgR6mlr.js";import{b as ne}from"../chunks/paths.C73FGyZA.js";import{I as Pe}from"../chunks/ItemsDivider.hYLlHrhI.js";import{H as Ke,m as ie}from"../chunks/HeadMeta.DA3XSwYJ.js";function Ze(l){const e=parseInt(l.slice(1,3),16),s=parseInt(l.slice(3,5),16),t=parseInt(l.slice(5,7),16);return[e,s,t]}function et(l){const[e,s,t]=l;return(e*299+s*587+t*114)/1e3}function tt(l){return et(Ze(l))>128?"#000":"#fff"}const fe={1:[{hex:"#f3ab04",parts:["eyes"]},{hex:"#dba66e"},{hex:"#835530"},{hex:"#402110"},{hex:"#47200d",parts:["spikes"]},{hex:"#260f03",parts:["horns"]},{hex:"#651d12",parts:["hair"]}],2:[{hex:"#201f1b"},{hex:"#333c45"},{hex:"#4c5f6d"},{hex:"#5c7c87"},{hex:"#ecca83"},{hex:"#feb41f"},{hex:"#dec4a1"}],3:[{hex:"#fbf1e5"},{hex:"#f9d5ab"},{hex:"#eda379"},{hex:"#9ad5a8"},{hex:"#58ac83"},{hex:"#59ac84",parts:["paws"]},{hex:"#ea8f80",parts:["mouth"]},{hex:"#f5a092",parts:["tongue"]},{hex:"#ea8664",parts:["nose"]},{hex:"#f9896d",parts:["eyes"]},{hex:"#eaeaca",parts:["eye white"]},{hex:"#fff7ee",parts:["teeth","claws"]}],4:[{hex:"#211b19"},{hex:"#2d2523",parts:["paws"]},{hex:"#312b29"},{hex:"#4c413f"},{hex:"#61534f"},{hex:"#ccbeba"},{hex:"#e3b28d",parts:["eye white"]},{hex:"#ff835e",parts:["eyes"]}],5:[{hex:"#f8f8f8",parts:["body"]},{hex:"#bfbfbf",parts:["eyes"]},{hex:"#dfcc34",parts:["eyes"]},{hex:"#b30000",parts:["eyes"]}],6:[{hex:"#c92b0d"},{hex:"#ff9b1d",parts:["eyes"]},{hex:"#dfd08c"},{hex:"#7e7b00"},{hex:"#002d18"}],7:[{hex:"#4b5f66"},{hex:"#3cbd85"},{hex:"#d3d956"},{hex:"#f8f7f2"}],8:[{hex:"#413936"},{hex:"#a59595"},{hex:"#c2b8b7"},{hex:"#bd878d"},{hex:"#92b4e1"},{hex:"#335777"}],9:[{hex:"#ffffff",parts:["eyes"]},{hex:"#cccccc"},{hex:"#ababab"},{hex:"#535353"},{hex:"#333333"},{hex:"#5a9593"}],10:[{hex:"#d4bf94"},{hex:"#a78b4f"},{hex:"#97742e"},{hex:"#473817"},{hex:"#feec8a"}],11:[{hex:"#df464c"},{hex:"#ea5966"},{hex:"#f27f69"},{hex:"#ee8052"},{hex:"#f8d6d9"},{hex:"#f5e1be",parts:["skin"]},{hex:"#fff158"},{hex:"#a1cf12",parts:["eyes"]},{hex:"#48aeff"}],12:[{hex:"#4b0711"},{hex:"#9d0f26"},{hex:"#b13b38"},{hex:"#ddcbbd"},{hex:"#ffffff"},{hex:"#fcde5a"},{hex:"#269d0f",parts:["eyes"]}],13:[{hex:"#0d0907",parts:["nose","claws"]},{hex:"#181310"},{hex:"#b18e64"},{hex:"#997851",parts:["paws"]},{hex:"#eaa221",parts:["eyes"]},{hex:"#7b343a",parts:["mouth"]},{hex:"#cd777f",parts:["tongue"]}],14:[{hex:"#afb7bf",parts:["paws"]},{hex:"#818793",parts:["body"]},{hex:"#5b636c",parts:["eyes"]},{hex:"#43494f",parts:["nose","claws"]}],15:[{hex:"#392a23",parts:["hair"]},{hex:"#5b4035",parts:["claws"]},{hex:"#8f6849"},{hex:"#b39b79"},{hex:"#dfc5a0"},{hex:"#fee4c1",parts:["paws"]},{hex:"#e9c8b5"},{hex:"#c58d7e",parts:["nose","tongue"]},{hex:"#9ea794",parts:["eyes"]},{hex:"#fee7a3",parts:["eye white"]}],16:[{hex:"#0c0c0c",parts:["nose","claws"]},{hex:"#141414",parts:["mane","tail"]},{hex:"#131716",parts:["brows","paws"]},{hex:"#1d2422",parts:["body"]},{hex:"#282b1e",parts:["willow branches"]},{hex:"#7a7833",parts:["tongue"]},{hex:"#383142",parts:["eyes"]}],17:[{hex:"#17100c"},{hex:"#7b4429"},{hex:"#dfba86"},{hex:"#edd5c8"},{hex:"#f4f4f4"},{hex:"#c7dfeb",parts:["eyes"]}],19:[{hex:"#69151c"},{hex:"#bf0000"},{hex:"#f28c33"},{hex:"#ebe9db"},{hex:"#6c7398"},{hex:"#464b64"},{hex:"#1b1f30"}],20:[{hex:"#fe9935"},{hex:"#ffb566"},{hex:"#ffd643"},{hex:"#ffe175"},{hex:"#ffeeb8"},{hex:"#f8f8f8"},{hex:"#b4ead2"},{hex:"#4dc292"},{hex:"#00a366"},{hex:"#028151"},{hex:"#84a7ff"}],22:[{hex:"#567c96",parts:["iris"]},{hex:"#79c1e7",parts:["pupil"]},{hex:"#3e2e28"},{hex:"#472f1e"},{hex:"#6c4a38"},{hex:"#7a5337"},{hex:"#817061"},{hex:"#7f746a"},{hex:"#988d8a"},{hex:"#9a8b7b"},{hex:"#a69482"},{hex:"#bbb6b3"},{hex:"#d0c9bf"}],23:[{hex:"#342928"},{hex:"#40332f"},{hex:"#522721"},{hex:"#532726"},{hex:"#5a2d28"},{hex:"#672b2b"},{hex:"#7e342b"},{hex:"#854a3a"},{hex:"#b87042"},{hex:"#a67451"},{hex:"#d4caa5"},{hex:"#d2cda3"},{hex:"#dbd6b8"},{hex:"#dfe1d4"},{hex:"#755a59"},{hex:"#543331"},{hex:"#96b8c2",parts:["eyes"]}],24:[{hex:"#193136"},{hex:"#434842"},{hex:"#425257"},{hex:"#5c5b57"},{hex:"#4f5f63"},{hex:"#5f6369"},{hex:"#787a7e"},{hex:"#80797b"},{hex:"#a4949b",parts:["eyes"]},{hex:"#a28c78"}],25:[{hex:"#eeeeee",parts:["body"]},{hex:"#cccccc",parts:["nose","inside ears","brows (alt)"]},{hex:"#39355b",parts:["horns","claws","nails"]},{hex:"#b4a9e6",parts:["mouth"]},{hex:"#d1caef",parts:["tongue","paws"]},{hex:"#6f63cf",parts:["iris"]},{hex:"#343153",parts:["pupil"]},{hex:"#8f82ed",parts:["flight feathers"]},{hex:"#b8aeff",parts:["pr. & sec. coverts"]},{hex:"#414047",parts:["mane","hair","brows"]},{hex:"#f3cfbb",parts:["humanoid skin"]}],26:[{hex:"#333333",parts:["body"]},{hex:"#222222",parts:["nose","inside ears","brows (alt)"]},{hex:"#335f53",parts:["horns","claws","nails"]},{hex:"#8adbbe",parts:["mouth"]},{hex:"#afe9d4",parts:["tongue","paws"]},{hex:"#1c9373",parts:["iris"]},{hex:"#223e37",parts:["pupil"]},{hex:"#01a87d",parts:["flight feathers"]},{hex:"#2fc19c",parts:["pr. & sec. coverts"]},{hex:"#d0d6df",parts:["mane","hair","brows"]},{hex:"#e7b79d",parts:["humanoid skin"]}],27:[{hex:"#333333",parts:["nose","brows","claws"]},{hex:"#717171",parts:["mouth"]},{hex:"#999999",parts:["body"]},{hex:"#eea48f",parts:["tongue"]},{hex:"#fff0e0",parts:["teeth"]},{hex:"#505c5a",parts:["eyes"]}],28:[{hex:"#3e2a23",parts:["mane","hair","hooves"]},{hex:"#52342a",parts:["inside snout"]},{hex:"#6e4a3a",parts:["snout","inside ears"]},{hex:"#805a4d",parts:["body"]},{hex:"#f6d3c0",parts:["tusks"]},{hex:"#ffece2",parts:["teeth"]},{hex:"#a86b7f",parts:["tongue"]},{hex:"#884c57",parts:["mouth"]},{hex:"#17497f",parts:["iris"]}],29:[{hex:"#af8e0d"},{hex:"#6b6b66"},{hex:"#a4a49a"},{hex:"#f5f6fa"},{hex:"#d4ccfe"},{hex:"#bcb6fe",parts:["eyes"]},{hex:"#9d93fe"},{hex:"#4d4f60",parts:["eye white"]}],30:[{hex:"#403439"},{hex:"#605559"},{hex:"#b39ea5"},{hex:"#e6dada"},{hex:"#ffc0c4"},{hex:"#f087a3"},{hex:"#d2a579",parts:["iris"]},{hex:"#553d38",parts:["pupil"]}],31:[{hex:"#242525"},{hex:"#eeeff5"},{hex:"#fc8b01",parts:["mouth"]},{hex:"#ff6100"},{hex:"#f34509",parts:["tongue"]},{hex:"#a03927",parts:["eyes (angry)"]},{hex:"#5d963e",parts:["eyes"]},{hex:"#0b6f4d",parts:["nose"]},{hex:"#fff5e4",parts:["eye white","teeth"]}],32:[{hex:"#ffe077"},{hex:"#c97310"},{hex:"#9f4e20"},{hex:"#acb76a"},{hex:"#7b8951"},{hex:"#fff7ee",parts:["eye white","teeth"]},{hex:"#527425",parts:["iris"]},{hex:"#29310e",parts:["pupil"]},{hex:"#c4611d",parts:["tongue"]},{hex:"#e5ae5b",parts:["mouth"]}],33:[{hex:"#212b36"},{hex:"#2c465b"},{hex:"#2f6b92"},{hex:"#6a9ab8"},{hex:"#b7cedb"},{hex:"#d9effc"},{hex:"#997c74",parts:["claws"]},{hex:"#ea8770",parts:["tongue"]},{hex:"#eacdc6",parts:["mouth","nose","paws"]},{hex:"#ffffff",parts:["teeth"]},{hex:"#c4e9e4",parts:["eyes"]},{hex:"#afc4de",parts:["eye white"]},{hex:"#b58b64",parts:["feather"]},{hex:"#d1c4c1",parts:["feather"]},{hex:"#4e2923",parts:["feather"]}]};function _e(l,e,s){const t=l.slice();return t[8]=e[s],t}function be(l,e,s){const t=l.slice();return t[11]=e[s],t}function at(l){let e,s,t,a,r="download the palette",c,n,i,f,h,o=ae(l[1]),u=[];for(let b=0;b<o.length;b+=1)u[b]=ve(be(l,o,b));let y=l[0]&&ge(l);return{c(){e=g("div"),s=g("div"),t=q("Choose a color or "),a=g("div"),a.textContent=r,c=B(),n=g("div");for(let b=0;b<u.length;b+=1)u[b].c();i=B(),y&&y.c(),this.h()},l(b){e=$(b,"DIV",{class:!0});var N=k(e);s=$(N,"DIV",{class:!0});var w=k(s);t=O(w,"Choose a color or "),a=$(w,"DIV",{class:!0,"data-svelte-h":!0}),Ae(a)!=="svelte-nvbec9"&&(a.textContent=r),w.forEach(d),c=H(N),n=$(N,"DIV",{class:!0});var T=k(n);for(let S=0;S<u.length;S+=1)u[S].l(T);T.forEach(d),i=H(N),y&&y.l(N),N.forEach(d),this.h()},h(){x(a,"class","text-link svelte-1u0by6"),x(s,"class","info svelte-1u0by6"),x(n,"class","colors svelte-1u0by6"),x(e,"class","color-palette svelte-1u0by6")},m(b,N){I(b,e,N),p(e,s),p(s,t),p(s,a),p(e,c),p(e,n);for(let w=0;w<u.length;w+=1)u[w]&&u[w].m(n,null);p(e,i),y&&y.m(e,null),f||(h=Le(a,"click",l[3]),f=!0)},p(b,N){if(N&7){o=ae(b[1]);let w;for(w=0;w<o.length;w+=1){const T=be(b,o,w);u[w]?u[w].p(T,N):(u[w]=ve(T),u[w].c(),u[w].m(n,null))}for(;w<u.length;w+=1)u[w].d(1);u.length=o.length}b[0]?y?y.p(b,N):(y=ge(b),y.c(),y.m(e,null)):y&&(y.d(1),y=null)},d(b){b&&d(e),he(u,b),y&&y.d(),f=!1,h()}}}function ve(l){let e,s,t;function a(){return l[7](l[11])}return{c(){e=g("div"),this.h()},l(r){e=$(r,"DIV",{class:!0,style:!0}),k(e).forEach(d),this.h()},h(){x(e,"class","color svelte-1u0by6"),Ge(e,"background-color",l[11].hex),xe(e,"selected",l[0]&&l[0].hex===l[11].hex)},m(r,c){I(r,e,c),s||(t=Le(e,"click",a),s=!0)},p(r,c){l=r,c&3&&xe(e,"selected",l[0]&&l[0].hex===l[11].hex)},d(r){r&&d(e),s=!1,t()}}}function ge(l){let e,s,t,a,r=l[0].hex.toLocaleUpperCase()+"",c,n,i,f=l[0].parts&&$e(l);return{c(){e=g("div"),s=g("div"),t=q("Color "),a=g("span"),c=q(r),n=q(" copied to clipboard!"),i=B(),f&&f.c(),this.h()},l(h){e=$(h,"DIV",{class:!0});var o=k(e);s=$(o,"DIV",{});var u=k(s);t=O(u,"Color "),a=$(u,"SPAN",{class:!0});var y=k(a);c=O(y,r),y.forEach(d),n=O(u," copied to clipboard!"),u.forEach(d),i=H(o),f&&f.l(o),o.forEach(d),this.h()},h(){x(a,"class","color-name svelte-1u0by6"),x(e,"class","color-details svelte-1u0by6")},m(h,o){I(h,e,o),p(e,s),p(s,t),p(s,a),p(a,c),p(s,n),p(e,i),f&&f.m(e,null)},p(h,o){o&1&&r!==(r=h[0].hex.toLocaleUpperCase()+"")&&W(c,r),h[0].parts?f?f.p(h,o):(f=$e(h),f.c(),f.m(e,null)):f&&(f.d(1),f=null)},d(h){h&&d(e),f&&f.d()}}}function $e(l){let e,s=ae(l[0].parts),t=[];for(let a=0;a<s.length;a+=1)t[a]=we(_e(l,s,a));return{c(){e=g("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=$(a,"DIV",{class:!0});var r=k(e);for(let c=0;c<t.length;c+=1)t[c].l(r);r.forEach(d),this.h()},h(){x(e,"class","parts svelte-1u0by6")},m(a,r){I(a,e,r);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,null)},p(a,r){if(r&1){s=ae(a[0].parts);let c;for(c=0;c<s.length;c+=1){const n=_e(a,s,c);t[c]?t[c].p(n,r):(t[c]=we(n),t[c].c(),t[c].m(e,null))}for(;c<t.length;c+=1)t[c].d(1);t.length=s.length}},d(a){a&&d(e),he(t,a)}}}function we(l){let e,s=l[8]+"",t;return{c(){e=g("div"),t=q(s),this.h()},l(a){e=$(a,"DIV",{class:!0});var r=k(e);t=O(r,s),r.forEach(d),this.h()},h(){x(e,"class","part svelte-1u0by6")},m(a,r){I(a,e,r),p(e,t)},p(a,r){r&1&&s!==(s=a[8]+"")&&W(t,s)},d(a){a&&d(e)}}}function st(l){let e,s=l[1]&&at(l);return{c(){s&&s.c(),e=F()},l(t){s&&s.l(t),e=F()},m(t,a){s&&s.m(t,a),I(t,e,a)},p(t,[a]){t[1]&&s.p(t,a)},i:U,o:U,d(t){t&&d(e),s&&s.d(t)}}}function rt(l,e,s){let{characterId:t}=e,{characterName:a}=e,{characterNameId:r}=e,c=null,n=fe[t];function i(o){c&&c.hex===o.hex?s(0,c=null):(s(0,c=o),navigator.clipboard.writeText(o.hex.replace("#","").toUpperCase()))}function f(){if(!n)return;const o=document.createElement("canvas"),u=o.getContext("2d"),y=300,b=n.length,N=y*b,w=1200,T=60,S=1200+T;if(o.width=N,o.height=S,!u)return;n.forEach(({hex:C},D)=>{u.fillStyle=C,u.fillRect(D/b*N,0,N/b,w);const E=C.toUpperCase(),z=(D+.5)/b*N,v=w/2;u.fillStyle=tt(C),u.font="bold 36px Quicksand",u.textAlign="center",u.textBaseline="middle",u.fillText(E,z,v)}),u.fillStyle="#333333",u.fillRect(0,w,N,T);const Z=`${a} ✦ AnastasiaElf's OCs ✦ ocs.anastasiaelf.com/${r}`,ee=20,j=S-28;u.fillStyle="#eeeeee",u.font="26px Quicksand",u.textAlign="start",u.textBaseline="middle",u.fillText(Z,ee,j);const V=document.createElement("a");V.href=o.toDataURL("image/png"),V.download=a.toLowerCase()+"_color_palette.png",V.click()}const h=o=>i(o);return l.$$set=o=>{"characterId"in o&&s(4,t=o.characterId),"characterName"in o&&s(5,a=o.characterName),"characterNameId"in o&&s(6,r=o.characterNameId)},[c,n,i,f,t,a,r,h]}class lt extends J{constructor(e){super(),K(this,e,rt,st,X,{characterId:4,characterName:5,characterNameId:6})}}function ct(l){let e,s;return{c(){e=g("img"),this.h()},l(t){e=$(t,"IMG",{src:!0,class:!0,alt:!0,loading:!0}),this.h()},h(){ce(e.src,s=ne+"/images/ref/"+l[0]+".webp")||x(e,"src",s),x(e,"class","reference svelte-1emtsp4"),x(e,"alt","Character reference"),x(e,"loading","lazy")},m(t,a){I(t,e,a)},p(t,[a]){a&1&&!ce(e.src,s=ne+"/images/ref/"+t[0]+".webp")&&x(e,"src",s)},i:U,o:U,d(t){t&&d(e)}}}function nt(l,e,s){let{characterId:t}=e;return l.$$set=a=>{"characterId"in a&&s(0,t=a.characterId)},[t]}class it extends J{constructor(e){super(),K(this,e,nt,ct,X,{characterId:0})}}function ke(l,e,s){const t=l.slice();return t[1]=e[s],t[3]=s,t}function ye(l){let e,s=ae({length:l[0].outfitsNumber}),t=[];for(let a=0;a<s.length;a+=1)t[a]=Ie(ke(l,s,a));return{c(){e=g("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=$(a,"DIV",{class:!0});var r=k(e);for(let c=0;c<t.length;c+=1)t[c].l(r);r.forEach(d),this.h()},h(){x(e,"class","outfits svelte-1f64ok2")},m(a,r){I(a,e,r);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,null)},p(a,r){if(r&1){s=ae({length:a[0].outfitsNumber});let c;for(c=0;c<s.length;c+=1){const n=ke(a,s,c);t[c]?t[c].p(n,r):(t[c]=Ie(n),t[c].c(),t[c].m(e,null))}for(;c<t.length;c+=1)t[c].d(1);t.length=s.length}},d(a){a&&d(e),he(t,a)}}}function Ie(l){let e,s;return{c(){e=g("img"),this.h()},l(t){e=$(t,"IMG",{src:!0,class:!0,alt:!0,loading:!0}),this.h()},h(){ce(e.src,s=ne+"/images/outfit/"+l[0].id+"/"+(l[3]+1)+".webp")||x(e,"src",s),x(e,"class","outfit svelte-1f64ok2"),x(e,"alt","Character outfit"),x(e,"loading","lazy")},m(t,a){I(t,e,a)},p(t,a){a&1&&!ce(e.src,s=ne+"/images/outfit/"+t[0].id+"/"+(t[3]+1)+".webp")&&x(e,"src",s)},d(t){t&&d(e)}}}function ft(l){let e,s=l[0].outfitsNumber&&l[0].outfitsNumber>0&&ye(l);return{c(){s&&s.c(),e=F()},l(t){s&&s.l(t),e=F()},m(t,a){s&&s.m(t,a),I(t,e,a)},p(t,[a]){t[0].outfitsNumber&&t[0].outfitsNumber>0?s?s.p(t,a):(s=ye(t),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},i:U,o:U,d(t){t&&d(e),s&&s.d(t)}}}function ht(l,e,s){let{characterData:t}=e;return l.$$set=a=>{"characterData"in a&&s(0,t=a.characterData)},[t]}class ot extends J{constructor(e){super(),K(this,e,ht,ft,X,{characterData:0})}}function Ve(l){return l.toLocaleDateString("en-US",{day:"numeric",month:"long"})}function ut(l){let e,s,t=l[3][l[0]].content+"",a,r;return{c(){e=Qe("svg"),s=new We(!0),this.h()},l(c){e=je(c,"svg",{class:!0,viewBox:!0,xmlns:!0});var n=k(e);s=Fe(n,!0),n.forEach(d),this.h()},h(){s.a=null,x(e,"class",a="icon icon-"+l[1]+" icon-"+l[2]+" svelte-bhuw02"),x(e,"viewBox",r=l[3][l[0]].viewBox),x(e,"xmlns","http://www.w3.org/2000/svg")},m(c,n){I(c,e,n),s.m(t,e)},p(c,[n]){n&1&&t!==(t=c[3][c[0]].content+"")&&s.p(t),n&6&&a!==(a="icon icon-"+c[1]+" icon-"+c[2]+" svelte-bhuw02")&&x(e,"class",a),n&1&&r!==(r=c[3][c[0]].viewBox)&&x(e,"viewBox",r)},i:U,o:U,d(c){c&&d(e)}}}function dt(l,e,s){let{type:t}=e,{size:a="md"}=e,{color:r="accent"}=e;const c={birthday:{viewBox:"0 0 448 512",content:'<path d="M86.4 5.5L61.8 47.6C58 54.1 56 61.6 56 69.2V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L105.6 5.5C103.6 2.1 100 0 96 0s-7.6 2.1-9.6 5.5zm128 0L189.8 47.6c-3.8 6.5-5.8 14-5.8 21.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L233.6 5.5C231.6 2.1 228 0 224 0s-7.6 2.1-9.6 5.5zM317.8 47.6c-3.8 6.5-5.8 14-5.8 21.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L361.6 5.5C359.6 2.1 356 0 352 0s-7.6 2.1-9.6 5.5L317.8 47.6zM128 176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c-35.3 0-64 28.7-64 64v71c8.3 5.2 18.1 9 28.8 9c13.5 0 27.2-6.1 38.4-13.4c5.4-3.5 9.9-7.1 13-9.7c1.5-1.3 2.7-2.4 3.5-3.1c.4-.4 .7-.6 .8-.8l.1-.1 0 0 0 0s0 0 0 0s0 0 0 0c3.1-3.2 7.4-4.9 11.9-4.8s8.6 2.1 11.6 5.4l0 0 0 0 .1 .1c.1 .1 .4 .4 .7 .7c.7 .7 1.7 1.7 3.1 3c2.8 2.6 6.8 6.1 11.8 9.5c10.2 7.1 23 13.1 36.3 13.1s26.1-6 36.3-13.1c5-3.5 9-6.9 11.8-9.5c1.4-1.3 2.4-2.3 3.1-3c.3-.3 .6-.6 .7-.7l.1-.1c3-3.5 7.4-5.4 12-5.4s9 2 12 5.4l.1 .1c.1 .1 .4 .4 .7 .7c.7 .7 1.7 1.7 3.1 3c2.8 2.6 6.8 6.1 11.8 9.5c10.2 7.1 23 13.1 36.3 13.1s26.1-6 36.3-13.1c5-3.5 9-6.9 11.8-9.5c1.4-1.3 2.4-2.3 3.1-3c.3-.3 .6-.6 .7-.7l.1-.1c2.9-3.4 7.1-5.3 11.6-5.4s8.7 1.6 11.9 4.8l0 0 0 0 0 0 .1 .1c.2 .2 .4 .4 .8 .8c.8 .7 1.9 1.8 3.5 3.1c3.1 2.6 7.5 6.2 13 9.7c11.2 7.3 24.9 13.4 38.4 13.4c10.7 0 20.5-3.9 28.8-9V288c0-35.3-28.7-64-64-64V176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48H256V176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48H128V176zM448 394.6c-8.5 3.3-18.2 5.4-28.8 5.4c-22.5 0-42.4-9.9-55.8-18.6c-4.1-2.7-7.8-5.4-10.9-7.8c-2.8 2.4-6.1 5-9.8 7.5C329.8 390 310.6 400 288 400s-41.8-10-54.6-18.9c-3.5-2.4-6.7-4.9-9.4-7.2c-2.7 2.3-5.9 4.7-9.4 7.2C201.8 390 182.6 400 160 400s-41.8-10-54.6-18.9c-3.7-2.6-7-5.2-9.8-7.5c-3.1 2.4-6.8 5.1-10.9 7.8C71.2 390.1 51.3 400 28.8 400c-10.6 0-20.3-2.2-28.8-5.4V480c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32V394.6z"/>'},world:{viewBox:"0 0 512 512",content:'<path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/>'},genderless:{viewBox:"0 0 512 512",content:'<path d="M192 144a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 288a176 176 0 1 0 0-352 176 176 0 1 0 0 352z"/>'},mars:{viewBox:"0 0 448 512",content:'<path d="M289.8 46.8c3.7-9 12.5-14.8 22.2-14.8H424c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-33.4-33.4L321 204.2c19.5 28.4 31 62.7 31 99.8c0 97.2-78.8 176-176 176S0 401.2 0 304s78.8-176 176-176c37 0 71.4 11.4 99.8 31l52.6-52.6L295 73c-6.9-6.9-8.9-17.2-5.2-26.2zM400 80l0 0h0v0zM176 416a112 112 0 1 0 0-224 112 112 0 1 0 0 224z"/>'},venus:{viewBox:"0 0 384 512",content:'<path d="M80 176a112 112 0 1 1 224 0A112 112 0 1 1 80 176zM224 349.1c81.9-15 144-86.8 144-173.1C368 78.8 289.2 0 192 0S16 78.8 16 176c0 86.3 62.1 158.1 144 173.1V384H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v32c0 17.7 14.3 32 32 32s32-14.3 32-32V448h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H224V349.1z"/>'},"mars-and-venus":{viewBox:"0 0 512 512",content:'<path d="M337.8 14.8C341.5 5.8 350.3 0 360 0H472c13.3 0 24 10.7 24 24V136c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-24.7 24.7C407 163.3 416 192.6 416 224c0 80.2-59 146.6-136 158.2V408h24c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V456H208c-13.3 0-24-10.7-24-24s10.7-24 24-24h24V382.2C155 370.6 96 304.2 96 224c0-88.4 71.6-160 160-160c39.6 0 75.9 14.4 103.8 38.2L382.1 80 343 41c-6.9-6.9-8.9-17.2-5.2-26.2zM448 48l0 0h0v0zM352 224a96 96 0 1 0 -192 0 96 96 0 1 0 192 0z"/>'},download:{viewBox:"0 0 640 512",content:'<path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"/>'}};return l.$$set=n=>{"type"in n&&s(0,t=n.type),"size"in n&&s(1,a=n.size),"color"in n&&s(2,r=n.color)},[t,a,r,c]}class oe extends J{constructor(e){super(),K(this,e,dt,ut,X,{type:0,size:1,color:2})}}function Ce(l){let e,s,t,a=l[0].shortName+"",r,c;return e=new Pe({}),{c(){A(e.$$.fragment),s=B(),t=g("span"),r=q(a)},l(n){L(e.$$.fragment,n),s=H(n),t=$(n,"SPAN",{});var i=k(t);r=O(i,a),i.forEach(d)},m(n,i){P(e,n,i),I(n,s,i),I(n,t,i),p(t,r),c=!0},p(n,i){(!c||i&1)&&a!==(a=n[0].shortName+"")&&W(r,a)},i(n){c||(m(e.$$.fragment,n),c=!0)},o(n){_(e.$$.fragment,n),c=!1},d(n){n&&(d(s),d(t)),R(e,n)}}}function Ne(l){let e,s,t,a=l[0].description+"",r,c;return e=new Pe({}),{c(){A(e.$$.fragment),s=B(),t=g("span"),r=q(a)},l(n){L(e.$$.fragment,n),s=H(n),t=$(n,"SPAN",{});var i=k(t);r=O(i,a),i.forEach(d)},m(n,i){P(e,n,i),I(n,s,i),I(n,t,i),p(t,r),c=!0},p(n,i){(!c||i&1)&&a!==(a=n[0].description+"")&&W(r,a)},i(n){c||(m(e.$$.fragment,n),c=!0)},o(n){_(e.$$.fragment,n),c=!1},d(n){n&&(d(s),d(t)),R(e,n)}}}function De(l){let e,s,t,a,r=l[0].pronoun+"",c,n;return s=new oe({props:{type:l[0].gender}}),{c(){e=g("div"),A(s.$$.fragment),t=B(),a=g("span"),c=q(r),this.h()},l(i){e=$(i,"DIV",{class:!0});var f=k(e);L(s.$$.fragment,f),t=H(f),a=$(f,"SPAN",{class:!0});var h=k(a);c=O(h,r),h.forEach(d),f.forEach(d),this.h()},h(){x(a,"class","svelte-181942w"),x(e,"class","icon-param svelte-181942w")},m(i,f){I(i,e,f),P(s,e,null),p(e,t),p(e,a),p(a,c),n=!0},p(i,f){const h={};f&1&&(h.type=i[0].gender),s.$set(h),(!n||f&1)&&r!==(r=i[0].pronoun+"")&&W(c,r)},i(i){n||(m(s.$$.fragment,i),n=!0)},o(i){_(s.$$.fragment,i),n=!1},d(i){i&&d(e),R(s)}}}function Ee(l){let e,s,t,a,r=Ve(new Date(l[0].birthday))+"",c,n;return s=new oe({props:{type:"birthday"}}),{c(){e=g("div"),A(s.$$.fragment),t=B(),a=g("span"),c=q(r),this.h()},l(i){e=$(i,"DIV",{class:!0});var f=k(e);L(s.$$.fragment,f),t=H(f),a=$(f,"SPAN",{class:!0});var h=k(a);c=O(h,r),h.forEach(d),f.forEach(d),this.h()},h(){x(a,"class","svelte-181942w"),x(e,"class","icon-param svelte-181942w")},m(i,f){I(i,e,f),P(s,e,null),p(e,t),p(e,a),p(a,c),n=!0},p(i,f){(!n||f&1)&&r!==(r=Ve(new Date(i[0].birthday))+"")&&W(c,r)},i(i){n||(m(s.$$.fragment,i),n=!0)},o(i){_(s.$$.fragment,i),n=!1},d(i){i&&d(e),R(s)}}}function ze(l){let e,s,t,a,r=l[0].world+"",c,n;return s=new oe({props:{type:"world"}}),{c(){e=g("div"),A(s.$$.fragment),t=B(),a=g("span"),c=q(r),this.h()},l(i){e=$(i,"DIV",{class:!0});var f=k(e);L(s.$$.fragment,f),t=H(f),a=$(f,"SPAN",{class:!0});var h=k(a);c=O(h,r),h.forEach(d),f.forEach(d),this.h()},h(){x(a,"class","svelte-181942w"),x(e,"class","icon-param svelte-181942w")},m(i,f){I(i,e,f),P(s,e,null),p(e,t),p(e,a),p(a,c),n=!0},p(i,f){(!n||f&1)&&r!==(r=i[0].world+"")&&W(c,r)},i(i){n||(m(s.$$.fragment,i),n=!0)},o(i){_(s.$$.fragment,i),n=!1},d(i){i&&d(e),R(s)}}}function pt(l){let e,s,t,a,r,c,n,i=l[0].name+"",f,h,o,u,y,b=l[0].species+"",N,w,T,S,Z,ee,j;s=new Ye({props:{characterId:l[0].noAvatar?"avatar":l[0].id}});let V=l[0].shortName&&Ce(l),C=l[0].description&&Ne(l),D=l[0].gender&&l[0].pronoun&&De(l),E=l[0].birthday&&Ee(l),z=l[0].world&&ze(l);return{c(){e=g("div"),A(s.$$.fragment),t=B(),a=g("div"),r=g("div"),c=g("div"),n=g("span"),f=q(i),h=B(),V&&V.c(),o=B(),u=g("div"),y=g("span"),N=q(b),w=B(),C&&C.c(),T=B(),S=g("div"),D&&D.c(),Z=B(),E&&E.c(),ee=B(),z&&z.c(),this.h()},l(v){e=$(v,"DIV",{class:!0});var M=k(e);L(s.$$.fragment,M),t=H(M),a=$(M,"DIV",{class:!0});var Y=k(a);r=$(Y,"DIV",{class:!0});var se=k(r);c=$(se,"DIV",{class:!0});var re=k(c);n=$(re,"SPAN",{});var ue=k(n);f=O(ue,i),ue.forEach(d),h=H(re),V&&V.l(re),re.forEach(d),o=H(se),u=$(se,"DIV",{class:!0});var le=k(u);y=$(le,"SPAN",{});var de=k(y);N=O(de,b),de.forEach(d),w=H(le),C&&C.l(le),le.forEach(d),se.forEach(d),T=H(Y),S=$(Y,"DIV",{class:!0});var te=k(S);D&&D.l(te),Z=H(te),E&&E.l(te),ee=H(te),z&&z.l(te),te.forEach(d),Y.forEach(d),M.forEach(d),this.h()},h(){x(c,"class","name svelte-181942w"),x(u,"class","description svelte-181942w"),x(r,"class","main-info svelte-181942w"),x(S,"class","params svelte-181942w"),x(a,"class","info svelte-181942w"),x(e,"class","character-bio svelte-181942w")},m(v,M){I(v,e,M),P(s,e,null),p(e,t),p(e,a),p(a,r),p(r,c),p(c,n),p(n,f),p(c,h),V&&V.m(c,null),p(r,o),p(r,u),p(u,y),p(y,N),p(u,w),C&&C.m(u,null),p(a,T),p(a,S),D&&D.m(S,null),p(S,Z),E&&E.m(S,null),p(S,ee),z&&z.m(S,null),j=!0},p(v,[M]){const Y={};M&1&&(Y.characterId=v[0].noAvatar?"avatar":v[0].id),s.$set(Y),(!j||M&1)&&i!==(i=v[0].name+"")&&W(f,i),v[0].shortName?V?(V.p(v,M),M&1&&m(V,1)):(V=Ce(v),V.c(),m(V,1),V.m(c,null)):V&&(G(),_(V,1,1,()=>{V=null}),Q()),(!j||M&1)&&b!==(b=v[0].species+"")&&W(N,b),v[0].description?C?(C.p(v,M),M&1&&m(C,1)):(C=Ne(v),C.c(),m(C,1),C.m(u,null)):C&&(G(),_(C,1,1,()=>{C=null}),Q()),v[0].gender&&v[0].pronoun?D?(D.p(v,M),M&1&&m(D,1)):(D=De(v),D.c(),m(D,1),D.m(S,Z)):D&&(G(),_(D,1,1,()=>{D=null}),Q()),v[0].birthday?E?(E.p(v,M),M&1&&m(E,1)):(E=Ee(v),E.c(),m(E,1),E.m(S,ee)):E&&(G(),_(E,1,1,()=>{E=null}),Q()),v[0].world?z?(z.p(v,M),M&1&&m(z,1)):(z=ze(v),z.c(),m(z,1),z.m(S,null)):z&&(G(),_(z,1,1,()=>{z=null}),Q())},i(v){j||(m(s.$$.fragment,v),m(V),m(C),m(D),m(E),m(z),j=!0)},o(v){_(s.$$.fragment,v),_(V),_(C),_(D),_(E),_(z),j=!1},d(v){v&&d(e),R(s),V&&V.d(),C&&C.d(),D&&D.d(),E&&E.d(),z&&z.d()}}}function mt(l,e,s){let{character:t}=e;return l.$$set=a=>{"character"in a&&s(0,t=a.character)},[t]}class xt extends J{constructor(e){super(),K(this,e,mt,pt,X,{character:0})}}function _t(l){let e,s;const t=l[1].default,a=Te(t,l,l[0],null);return{c(){e=g("div"),a&&a.c(),this.h()},l(r){e=$(r,"DIV",{class:!0});var c=k(e);a&&a.l(c),c.forEach(d),this.h()},h(){x(e,"class","character-section svelte-1f251xg")},m(r,c){I(r,e,c),a&&a.m(e,null),s=!0},p(r,[c]){a&&a.p&&(!s||c&1)&&Ue(a,t,r,r[0],s?Oe(t,r[0],c,null):qe(r[0]),null)},i(r){s||(m(a,r),s=!0)},o(r){_(a,r),s=!1},d(r){r&&d(e),a&&a.d(r)}}}function bt(l,e,s){let{$$slots:t={},$$scope:a}=e;return l.$$set=r=>{"$$scope"in r&&s(0,a=r.$$scope)},[a,t]}class Re extends J{constructor(e){super(),K(this,e,bt,_t,X,{})}}function vt(l){let e,s="Character not found";return{c(){e=g("div"),e.textContent=s,this.h()},l(t){e=$(t,"DIV",{class:!0,"data-svelte-h":!0}),Ae(e)!=="svelte-nhsgpl"&&(e.textContent=s),this.h()},h(){x(e,"class","error-message")},m(t,a){I(t,e,a)},p:U,i:U,o:U,d(t){t&&d(e)}}}function gt(l){let e,s,t,a,r,c;s=new Re({props:{$$slots:{default:[$t]},$$scope:{ctx:l}}});let n=fe[l[0].id]&&Se(l),i=!l[0].noReference&&Be(l),f=l[0].outfitsNumber&&l[0].outfitsNumber>0&&He(l);return{c(){e=g("div"),A(s.$$.fragment),t=B(),n&&n.c(),a=B(),i&&i.c(),r=B(),f&&f.c(),this.h()},l(h){e=$(h,"DIV",{class:!0});var o=k(e);L(s.$$.fragment,o),t=H(o),n&&n.l(o),a=H(o),i&&i.l(o),r=H(o),f&&f.l(o),o.forEach(d),this.h()},h(){x(e,"class","character svelte-2il6o6")},m(h,o){I(h,e,o),P(s,e,null),p(e,t),n&&n.m(e,null),p(e,a),i&&i.m(e,null),p(e,r),f&&f.m(e,null),c=!0},p(h,o){const u={};o&17&&(u.$$scope={dirty:o,ctx:h}),s.$set(u),fe[h[0].id]?n?(n.p(h,o),o&1&&m(n,1)):(n=Se(h),n.c(),m(n,1),n.m(e,a)):n&&(G(),_(n,1,1,()=>{n=null}),Q()),h[0].noReference?i&&(G(),_(i,1,1,()=>{i=null}),Q()):i?(i.p(h,o),o&1&&m(i,1)):(i=Be(h),i.c(),m(i,1),i.m(e,r)),h[0].outfitsNumber&&h[0].outfitsNumber>0?f?(f.p(h,o),o&1&&m(f,1)):(f=He(h),f.c(),m(f,1),f.m(e,null)):f&&(G(),_(f,1,1,()=>{f=null}),Q())},i(h){c||(m(s.$$.fragment,h),m(n),m(i),m(f),c=!0)},o(h){_(s.$$.fragment,h),_(n),_(i),_(f),c=!1},d(h){h&&d(e),R(s),n&&n.d(),i&&i.d(),f&&f.d()}}}function $t(l){let e,s;return e=new xt({props:{character:l[0]}}),{c(){A(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,a){P(e,t,a),s=!0},p(t,a){const r={};a&1&&(r.character=t[0]),e.$set(r)},i(t){s||(m(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){R(e,t)}}}function Se(l){let e,s;return e=new Re({props:{$$slots:{default:[wt]},$$scope:{ctx:l}}}),{c(){A(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,a){P(e,t,a),s=!0},p(t,a){const r={};a&17&&(r.$$scope={dirty:a,ctx:t}),e.$set(r)},i(t){s||(m(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){R(e,t)}}}function Me(l){let e,s;return e=new lt({props:{characterId:l[0].id,characterNameId:l[0].nameId,characterName:l[0].name}}),{c(){A(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,a){P(e,t,a),s=!0},p(t,a){const r={};a&1&&(r.characterId=t[0].id),a&1&&(r.characterNameId=t[0].nameId),a&1&&(r.characterName=t[0].name),e.$set(r)},i(t){s||(m(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){R(e,t)}}}function wt(l){let e=l[0].id,s,t,a=Me(l);return{c(){a.c(),s=F()},l(r){a.l(r),s=F()},m(r,c){a.m(r,c),I(r,s,c),t=!0},p(r,c){c&1&&X(e,e=r[0].id)?(G(),_(a,1,1,U),Q(),a=Me(r),a.c(),m(a,1),a.m(s.parentNode,s)):a.p(r,c)},i(r){t||(m(a),t=!0)},o(r){_(a),t=!1},d(r){r&&d(s),a.d(r)}}}function Be(l){let e,s;return e=new it({props:{characterId:l[0].id}}),{c(){A(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,a){P(e,t,a),s=!0},p(t,a){const r={};a&1&&(r.characterId=t[0].id),e.$set(r)},i(t){s||(m(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){R(e,t)}}}function He(l){let e,s;return e=new ot({props:{characterData:l[0]}}),{c(){A(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,a){P(e,t,a),s=!0},p(t,a){const r={};a&1&&(r.characterData=t[0]),e.$set(r)},i(t){s||(m(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){R(e,t)}}}function kt(l){let e,s,t,a,r,c;e=new Ke({});const n=[gt,vt],i=[];function f(h,o){return h[0]?0:1}return t=f(l),a=i[t]=n[t](l),{c(){A(e.$$.fragment),s=B(),a.c(),r=F()},l(h){L(e.$$.fragment,h),s=H(h),a.l(h),r=F()},m(h,o){P(e,h,o),I(h,s,o),i[t].m(h,o),I(h,r,o),c=!0},p(h,[o]){let u=t;t=f(h),t===u?i[t].p(h,o):(G(),_(i[u],1,1,()=>{i[u]=null}),Q(),a=i[t],a?a.p(h,o):(a=i[t]=n[t](h),a.c()),m(a,1),a.m(r.parentNode,r))},i(h){c||(m(e.$$.fragment,h),m(a),c=!0)},o(h){_(e.$$.fragment,h),_(a),c=!1},d(h){h&&(d(s),d(r)),R(e,h),i[t].d(h)}}}function yt(l,e,s){let t,a,r,c;return pe(l,ie,n=>s(3,r=n)),pe(l,Xe,n=>s(2,c=n)),l.$$.update=()=>{l.$$.dirty&4&&s(1,t=c.params.character),l.$$.dirty&2&&s(0,a=Je.find(n=>n.id===t||n.nameId===t)),l.$$.dirty&1&&(a?me(ie,r={pageName:a.name},r):me(ie,r={},r))},[a,t,c]}class St extends J{constructor(e){super(),K(this,e,yt,kt,X,{})}}export{St as component};
