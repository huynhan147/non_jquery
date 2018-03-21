  function myFunction() {
    let show = document.getElementById('txtinput');
    let clearsss = document.getElementsByClassName('clear');
    // clearsss.style.display='none';
    // console.log(clearsss);
    show.style.display="inline-block";
    let li =document.createElement("li");
    hr = document.createElement("hr");
    let valueInput = document.getElementById("txtinput").value;
    var input = document.createElement("INPUT");
    input.setAttribute("type", "checkbox");
    input.setAttribute("id", "checkbox");
    input.setAttribute("name", "namecheckbox");              
    var textnode = document.createTextNode(valueInput);      

        li.appendChild(input);

        if(valueInput!=""){
            document.getElementById("ul-list").appendChild(li);
            li.appendChild(input);
            li.appendChild(textnode);
            li.appendChild(hr);
            let showli = document.getElementsByTagName('LI');
        let dem=0;
        for(let i =0 ;i<showli.length;i++){
            let classli = showli[i].getAttribute('class');
                if(classli!='checked'){
                    dem =dem+1;
                }           
            }
        let ax =document.getElementById('item').innerHTML= dem +" Item";

        }else{
        }
        
        document.getElementById("txtinput").value ="";
        let span = document.createElement("span");
        let x = document.createTextNode("\u00D7");
        span.className= "close";
        span.appendChild(x);
        li.appendChild(span);
        close =document.getElementsByClassName("close");
        let checkli = document.getElementsByTagName('LI');
        for( let i =0;i<checkli.length;i++){
            close[i].onclick =function(){
                // for()
                let dp =this.parentElement;
                document.getElementById("ul-list").removeChild(dp);
                // checkli = document.getElementsByTagName('LI');
                 let showli = document.getElementsByTagName('LI');
                             let dem=0;
                            for(let i =0 ;i<showli.length;i++){
                                 let classli = showli[i].getAttribute('class');
                             if(classli!='checked'){
                              dem =dem+1;
                         }           
                              }
                         let ax =document.getElementById('item').innerHTML= dem +" Item";
                              // let checkli = document.getElementsByTagName('LI');


            }
        }
                
           let abc = document.getElementsByName('namecheckbox');
    
                for(let i =0;i<abc.length;i++){
                        abc[i].onclick =function(){
                            parentss=this.parentElement;
                    		parentss.classList.toggle('checked');
                            let showli = document.getElementsByTagName('LI');
                             let dem=0;
                            for(let i =0 ;i<showli.length;i++){
                                 let classli = showli[i].getAttribute('class');
                             if(classli!='checked'){
                              dem =dem+1;
                         }           
                              }
                         let ax =document.getElementById('item').innerHTML= dem +" Item";
                let tmp=0;
            	for(let i =0 ;i<checkli.length;i++){
                	let classli = checkli[i].getAttribute('class');
               			if(classli=='checked'){
              		    	tmp=1;
                		}
                		if(tmp==1){
                		clearrs = document.getElementsByClassName('clear');
                		clearrs[0].style.display ='inline-block';
               			 }else{
                			clearrs[0].style.display ='none';
                		}
            	}
                }
                }
        
}

function completed(){
			document.getElementsByClassName('completed')[0].classList.add('activess');
             document.getElementsByClassName('alls')[0].classList.remove('activess');
             document.getElementsByClassName('active')[0].classList.remove('activess');
            let checkli = document.getElementsByTagName('LI');
            for(let i =0 ;i<checkli.length;i++){
                let classli = checkli[i].getAttribute('class');
                if(classli!='checked'){
                    checkli[i].style.display='none';
                }else{
                    checkli[i].style.display='block';
                }
            }
}
function clearss(){
            // let xs =0;
            // classli =[];
            let checkli = document.getElementsByTagName('LI');
            for(let i =0 ;i<checkli.length;i++){
                 classli = checkli[i].getAttribute('class');
                    if(classli=='checked'){
                        document.getElementById("ul-list").removeChild(checkli[i]);
                         // xs +=1;
                        // console.log(xs);
                        clearss();
                }
            }
            for(let i =0 ;i<checkli.length;i++){
                    checkli[i].style.display='block';
            }
            clearrs = document.getElementsByClassName('clear');
                		clearrs[0].style.display ='none';
             document.getElementsByClassName('alls')[0].classList.add('activess');
             document.getElementsByClassName('active')[0].classList.remove('activess');
             document.getElementsByClassName('completed')[0].classList.remove('activess');
             // document.getElementsByClassName('alls')[0].classList.add('activess');

}
function actives(){
			document.getElementsByClassName('active')[0].classList.add('activess');
             document.getElementsByClassName('alls')[0].classList.remove('activess');
             document.getElementsByClassName('completed')[0].classList.remove('activess');
            let checkli = document.getElementsByTagName('LI');
            for(let i =0 ;i<checkli.length;i++){
                let classli = checkli[i].getAttribute('class');
                if(classli=='checked'){
                    checkli[i].style.display='none';
                }else{
                    checkli[i].style.display='block';

                }
            }

}
    function allx(){
    		document.getElementsByClassName('alls')[0].classList.add('activess');
             document.getElementsByClassName('completed')[0].classList.remove('activess');
             document.getElementsByClassName('active')[0].classList.remove('activess');
        let checkli = document.getElementsByTagName('LI');
            for(let i =0 ;i<checkli.length;i++){
                    checkli[i].style.display='block';
            }

    }
function runScript(e) {
    if (e.keyCode == 13) {
     myFunction();
    }
}