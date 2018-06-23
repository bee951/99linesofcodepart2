document.addEventListener('DOMContentLoaded',function() {
    var friends=['Bob', 'George', 'Henry', 'Fred', 'Loyd'];
    let btn=document.createElement('button');
    let btntext=document.createTextNode('Sing!')
    document.body.appendChild(btn);
    btn.appendChild(btntext);
    btn.style.justifyContent='center';
    btn.addEventListener("click",function() {
    for (let index = 0; index < friends.length; index++) {
        let div=document.createElement('div');
        div.className='friends';
        let h3=document.createElement('h3');
        let h3text=document.createTextNode(friends[index]);
        div.appendChild(h3);
        h3.appendChild(h3text);
        document.body.appendChild(div)
        let index1 = 98;
        for (;;) { 
            var index2=index1+1;
            var indexc=index1;
            if (indexc==0) {
            indexc='no more';
            }
            var out=index2+' lines of code in the file,'+index2+' lines of code;'+friends[index]+' strikes one out, clears it all out,'+indexc+' lines of code in the file'
            if(index1==-1)break;
            index1--;
            let ptext=document.createTextNode(out);
            let p=document.createElement('p');
            div.appendChild(p);
            p.appendChild(ptext);
        }
    }    
    })
    
})
