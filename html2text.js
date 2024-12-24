import {nodefs, writeChanged, readTextContent, deepReadDir} from 'ptk/nodebundle.cjs'
await nodefs;
//數字倒排, maybe with _2 _3
const compare=(a,b)=>{
    const m1=a.match(/read_([\d_]+)\.html$/);
    const m2=b.match(/read_([\d_]+)\.html$/);
    const [n11,n12]=m1[1].split('_');
    const [n21,n22]=m2[1].split('_');
    let r1,r2;
    r1=(parseInt(n11)-100000)*32+ (32-parseInt(n12||'0'));
    r2=(parseInt(n21)-100000)*32+ (32-parseInt(n22||'0'));

    const r=r2-r1;
    
    return r;
}
const files=(await deepReadDir("raw")).flat().sort(compare);
let predir='',out=[];
const tidy=(content)=>{
    const at1=content.indexOf('<div id="content" class="content">');
    if (~at1) content=content.slice(at1);
    // const at2=content.lastIndexOf("<script");
    // if (~at2) content=content.slice(at2)
    content= content.replace(/<p>/g,'\n').replace(/<[^>]+>/g,'');
    const at3=content.indexOf('全文未完')
    const at4=content.indexOf('✿ 继续阅读');
    const at5=content.indexOf('PuTiXia.Net')
    if (~at3 && ~at5) content=content.slice(0,at3);
    else if (~at4 && ~at5) content=content.slice(0,at4);

    return content.replace(/\(P(\d+)\)/g,"^pg$1");

}
for (let i=0;i<files.length;i++){
    const m=files[i].match(/([a-z_]+)\/([a-z_\d]+)\.html$/);
    if (!m) continue;
    const [m0,dir,fn]=m;
    if (predir!=dir) {
        if (dir) {
            if (predir) writeChanged('txt/'+predir+'.txt',out.join('\n'),true);
            predir=dir;
            out.length=0;
        }
    }
    out.push(tidy(readTextContent(files[i])));
}
if (predir) writeChanged('txt/'+predir+'.txt',out.join('\n'),true);