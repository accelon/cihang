import {nodefs, writeChanged,  autoChineseBreak, readTextContent,  Paged, readTextLines} from './nodebundle.cjs'
await nodefs;
//accelon24 指定的源文件
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
            //切分成較短的行。 accelon3 
            //未來應切分 pgd 。
            out.push(autoChineseBreak(lines[j]));
        }
    }
    // 缺乏 篇名，補上章標記
    if (chapter==0)     out.unshift('<章>無分章</章>')
    out.unshift('<書>'+pgd.header.title+'</書>')
//accelon3 indexer 需 utf8 marker ，否則會視為 big5
    writeChanged("acc3/"+fn.replace('.pgd',".xml"),'\ufeff'+out.join("\n"),true);
}
files.forEach(fn=>{
    convertfile(readTextContent('off/'+fn),fn);
})