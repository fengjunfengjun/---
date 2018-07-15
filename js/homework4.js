 var num2 = new Array(); 
 var cal=new Array();
 var tempNum="";
 
 
		
  function jsq(num) {
     document.getElementById('screen').value += document.getElementById(num).value; 
	
	
	 var n=Number(document.getElementById(num).value);
	 	if(! isNaN(n)){
				tempNum+=document.getElementById(num).value;
				//alert("number");
				//alert(tempNum);
				
			}
			else{
				cal.push(document.getElementById(num).value);
			
				
				num2.push(tempNum);
			
				tempNum="";
				}
	 	
	 } 
	 
	 
 /*    function eva() { 
    //计算输入结果 
    document.getElementById("screen").value = eval(document.getElementById("screen").value); 
  } */
  
 function eva2(){
	 num2.push(tempNum);
	 num2=num2.valueOf();
	  for(var i=0;i<cal.length;i++){
		  	
		 
				if(cal[i]=="*"||cal[i]=="÷"||cal[i]=="%"){
						switch(cal[i]){
							case "*":
							
								num2[i+1]=num2[i]*num2[i+1];
								
								num2[i]="@";
								
							
								
							break;
							case "÷":
							
								num2[i+1]=num2[i]/num2[i+1];
								num2[i]="@";
								
							
							break;
							case "%":

								num2[i+1]=num2[i]%num2[i+1];
								num2[i]="@";
			
							break;
							}
							cal[i]="@";
					}
					
							 
 }
 
 	for(var j=0;j<num2.length;j++){
		if(num2[j]=="@"){
			num2.splice(j,1);
			cal.splice(j,1);
			--j;
			}
		}
		
		
		 num2=num2.valueOf();
for(var w=0;w<cal.length;w++){
	 
	 switch(cal[w]){
		 case "+":
		 					
								num2[w+1]=Number(num2[w])+Number(num2[w+1]);
								
							
		 break;
		 
		 
		 case "-":
		 
								
								num2[w+1]=num2[w]-num2[w+1];
								
								
								
		 break;
		 }
	 }
 	

		 document.getElementById("screen").value=num2[(num2.length)-1];
		 num2=[];
		 
		 cal=[];
		 tempNum=document.getElementById("screen").value;
		
	  };
  
  function clearNum() { 
    //清0 
    document.getElementById("screen").value = null; 
	num2=[];
		 cal=[];
		 tempNum="";
    document.getElementById("screen").focus(); 
  } 
  
  function tuiGe() { 
    //退格 
	
    var arr = document.getElementById("screen"); 
	var value2=arr.value.substring(arr.value.length - 1,arr.value.length );
    arr.value = arr.value.substring(0, arr.value.length - 1); 
	
	var n=Number(value2);
	if(isNaN(n)){
		alert("cal.pop();");
		cal.pop();
		}
		else{
			
			if(tempNum==""){
				tempNum=num2.pop();
				}
			tempNum=tempNum.substring(0, tempNum.length - 1); 
		
			}
  } 
  
  function onLoad(){ 
    //加载完毕后光标自动对应到输入框
	
    document.getElementById("screen").focus(); 
	 document.getElementById("screen").value = null; 
  } 
  
  
