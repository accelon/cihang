import {nodefs, writeChanged,  autoChineseBreak, readTextContent,  Paged, readTextLines} from 'ptk/nodebundle.cjs'
await nodefs;
const files=readTextLines('off/cihang.pgds');

const convertmarkup=content=>{
    return content
    .replace(/\^y[a-z\d]+〈([^〈〉]+)〉/g,"<章>$1</章>")
    .replace(/\^q【([^【】]+)】/g,"<經文>$1</經文>")
    .replace(/\^pg(\d+)/g,'<頁 n="$1"/>');
}
const convertfile=(content,fn)=>{
    const pgd=new Paged();
    const out=[];

    pgd.loadFromString(content);
    let chapter=0;
    for (let i=1;i<pgd.pagetexts.length;i++) {
        let t=convertmarkup(pgd.pagetexts[i]);
        if (~t.indexOf('<章>')) chapter++;
        if (pgd.pagenames[i]) {
            out.push('<文>'+pgd.pagenames[i]+'</文>')
        }
        const lines=t.split('\n');
        for(let j=0;j<lines.length;j++) {
            out.push(autoChineseBreak(lines[j]));
        }
    }
    if (chapter==0)     out.unshift('<章>無分章</章>')
    out.unshift('<書>'+pgd.header.title+'</書>')
//indexer need utf8 marker
    writeChanged("acc3/"+fn.replace('.pgd',".xml"),'\ufeff'+out.join("\n"),true);
}
files.forEach(fn=>{
    convertfile(readTextContent('off/'+fn),fn);
})