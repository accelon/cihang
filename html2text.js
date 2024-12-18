import {nodefs, writeChanged, readTextContent, deepReadDir} from 'ptk/nodebundle.cjs'
await nodefs;
//數字倒排
const files=(await deepReadDir("raw")).flat().sort((b, a) => a > b ? 1 : a < b ? -1 : 0)

let predir='',out=[];
const tidy=(content)=>{
    const at1=content.indexOf('<div id="content" class="content">');
    if (~at1) content=content.slice(at1);
    // const at2=content.lastIndexOf("<script");
    // if (~at2) content=content.slice(at2)
    return content.replace(/<p>/g,'\n').replace(/<[^>]+>/g,'');
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