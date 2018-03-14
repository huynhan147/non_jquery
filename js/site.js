
function myFunction() {
	let show = document.getElementById('txtinput');
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
        for( let i =0;i<close.length;i++){
        	close[i].onclick =function(){
        		let dp =this.parentElement;
        		document.getElementById("ul-list").removeChild(checkli[i]);

        	}
        }
        		
           let abc = document.getElementsByName('namecheckbox');
    
       			for(let i =0;i<abc.length;i++){
       			abc[i].onclick =function(){
       				checkli[i].classList.toggle('checked');
       			}
       			}
}

function completed(){
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
function actives(){
	// console.log(active);
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