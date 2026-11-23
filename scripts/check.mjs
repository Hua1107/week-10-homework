import {readFile,readdir,access} from 'node:fs/promises';
const required=['agent.md','README.md','index.html','assets/css/style.css','assets/js/slides.js','notes/wiki/night-market.md','workflow/outline.md'];
let errors=[];for(const p of required){try{await access(p)}catch{errors.push('缺少 '+p)}}
const files=(await readdir('notes/sources')).filter(x=>/^s[0-9]+\.md$/.test(x));if(files.length<5)errors.push('來源筆記不足五篇');
const wiki=await readFile('notes/wiki/night-market.md','utf8');for(const f of files){const id=f.replace('.md','').toUpperCase();if(!wiki.includes(id))errors.push(id+' 未列入 Wiki');const content=await readFile('notes/sources/'+f,'utf8');if(!/https:\/\//.test(content))errors.push(id+' 缺少來源連結')}
const html=await readFile('index.html','utf8');if(!html.includes('assets/css/style.css')||!html.includes('assets/js/slides.js'))errors.push('CSS/JS 連結缺漏');
if(errors.length){console.error(errors.join('\n'));process.exitCode=1}else console.log('通過：必要檔案、'+files.length+' 篇來源、Wiki 代號、CSS/JS 連結。注意：不檢查事實正確性或人工審核。');
