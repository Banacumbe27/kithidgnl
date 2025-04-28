
const scores=
[
["Phần","Tiếng Việt","Tiếng Anh","Toán học","Tư duy khoa học",'Tổng'],
["Điểm thi",'202','284','255','247','988'],
["Độ hài lòng với điểm số","6/10",'7/10','8/10','8/10','7.75/10']
];
function createTable(data,targetClass){
    const table=document.createElement('table');
for(let i=0;i<data.length;i++){
    const tr=document.createElement('tr');
for(let j=0;j<data[i].length;j++){
    const td=document.createElement('td');
    td.textContent=data[i][j];
    td.style.border='2px solid black'
    td.style.textAlign='center';
    if(i==1 && j!=0){
        td.style.background='yellow';
        td.classList.add('hover-effect')
        td.id=(j-1);
        td.onclick=()=>{open_iFrame(td.id);};
    }
    tr.appendChild(td);
}
table.appendChild(tr);
}   
document.querySelector(`${targetClass}`).appendChild(table);
}
createTable(scores,'.table-container');

file_src=['tiengviet.html','tienganh.html','toan.html','ptsl.html','overall.html']
function open_iFrame(index){
    let iframe=document.querySelector('iframe');
    iframe.src=file_src[JSON.parse(index)];
    iframe.classList.add('iopen');
    document.querySelector('.close').style.display='block';
    document.body.style.overflow='hidden';
}
function close_iFrame(){
    let iframe=document.querySelector('iframe');
    iframe.classList.remove('iopen');
    document.querySelector('.close').style.display='none';
    document.body.style.overflow='visible';
}