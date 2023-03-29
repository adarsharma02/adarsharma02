






function fun() {
    setTimeout(() => {
        document.querySelector('#loader-area').style.display='none'
      document.querySelector('.slideshow-container').style.display = 'block'
      document.querySelector('#dots').style.display = 'block'
      document.querySelector('#section').style.display = 'block'
      document.querySelector('#form-area').style.display = 'block'
     
      document.querySelector('#body').style.overflowY = 'scroll'
      document.querySelector('#footer').style.display = 'flex'
      
      document.querySelector('#please-select').style.display = 'block'
     
      console.log('hello')


       
    }, 200);
}

addEventListener('load',fun)


var input_1 = document.querySelector('.cbx1')
var input_2 = document.querySelector('.cbx2')
var input_3 = document.querySelector('.cbx3')
var input_4 = document.querySelector('.cbx4')
var input_5 = document.querySelector('.cbx5')
var input_6 = document.querySelector('.cbx6')
var input_7 = document.querySelector('.cbx7')
var input_8 = document.querySelector('.cbx8')
var input_9 = document.querySelector('.cbx9')
var input_10 = document.querySelector('.cbx10')
var input_11 = document.querySelector('.cbx11')
var input_12 = document.querySelector('.cbx12')
var input_13 = document.querySelector('.cbx13')
var input_14 = document.querySelector('.cbx14')
var input_15 = document.querySelector('.cbx15')
var input_16 = document.querySelector('.cbx16')
var input_17 = document.querySelector('.cbx17')
var input_18 = document.querySelector('.cbx18')
var input_19 = document.querySelector('.cbx19')
var input_20 = document.querySelector('.cbx20')
var input_21 = document.querySelector('.cbx21')
var input_22 = document.querySelector('.cbx22')
var input_23 = document.querySelector('.cbx23')
var input_24 = document.querySelector('.cbx24')

var amount_popup = document.getElementById('prizing-popup')
var prizing_para = document.getElementById('prizing-number-para')



function amount() {
  var sum=0
  

 
  if(input_1.checked==true){
  sum=sum+400
 
   amount_popup.style.display='flex'
   prizing_para.innerText = sum
  } 
  else{
    prizing_para.innerText = 0
     amount_popup.style.display='none'
  }
   
 
    
 
   
  
   if(input_2.checked==true ){
    sum=sum+500
   amount_popup.style.display='flex'
   prizing_para.innerText = sum
 
    
  }
   
  
  if(input_3.checked==true){
    sum=sum+700
   amount_popup.style.display='flex'
   prizing_para.innerText = sum
   
    
 
   }
 

  if(input_4.checked==true){
  sum=sum+1200
   amount_popup.style.display='flex'
   prizing_para.innerText = sum
  
 }
  if(input_5.checked==true){
  sum=sum+500
   amount_popup.style.display='flex'
   prizing_para.innerText = sum
  
 }
  if(input_6.checked==true){
  sum=sum+700
   amount_popup.style.display='flex'
   prizing_para.innerText = sum
  
 }
  if(input_7.checked==true){
  sum=sum+800
   amount_popup.style.display='flex'
   prizing_para.innerText = sum
  
 }
  if(input_8.checked==true){
  sum=sum+550
   amount_popup.style.display='flex'
   prizing_para.innerText = sum
  
 }
  if(input_9.checked==true){
  sum=sum+150
   amount_popup.style.display='flex'
   prizing_para.innerText = sum
  
 }
  if(input_10.checked==true){
  sum=sum+200
   amount_popup.style.display='flex'
   prizing_para.innerText = sum
  
 }
  if(input_11.checked==true){
  sum=sum+350
   amount_popup.style.display='flex'
   prizing_para.innerText = sum
  
 }
  if(input_12.checked==true){
  sum=sum+80
   amount_popup.style.display='flex'
   prizing_para.innerText = sum
  
 }
  if(input_13.checked==true){
  sum=sum+5000
   amount_popup.style.display='flex'
   prizing_para.innerText = sum
  
 }
  if(input_14.checked==true){
  sum=sum+9000
   amount_popup.style.display='flex'
   prizing_para.innerText = sum
  
 }
  if(input_15.checked==true){
  sum=sum+6500
   amount_popup.style.display='flex'
   prizing_para.innerText = sum
  
 }
  if(input_16.checked==true){
  sum=sum+5000
   amount_popup.style.display='flex'
   prizing_para.innerText = sum
  
 }
  if(input_17.checked==true){
  sum=sum+200
   amount_popup.style.display='flex'
   prizing_para.innerText = sum
  
 }
  if(input_18.checked==true){
  sum=sum+200
   amount_popup.style.display='flex'
   prizing_para.innerText = sum
  
 }
  if(input_19.checked==true){
  sum=sum+180
   amount_popup.style.display='flex'
   prizing_para.innerText = sum
  
 }
  if(input_20.checked==true){
  sum=sum+150
   amount_popup.style.display='flex'
   prizing_para.innerText = sum
  
 }
  if(input_21.checked==true){
  sum=sum+100
   amount_popup.style.display='flex'
   prizing_para.innerText = sum
  
 }
  if(input_22.checked==true){
  sum=sum+80
   amount_popup.style.display='flex'
   prizing_para.innerText = sum
  
 }
  if(input_23.checked==true){
  sum=sum+100
   amount_popup.style.display='flex'
   prizing_para.innerText = sum
  
 }
  if(input_24.checked==true){
  sum=sum+250
   amount_popup.style.display='flex'
   prizing_para.innerText = sum
  
 }

    
 
  }
  addEventListener('click',amount)

var input_25=document.querySelector('.cbx25')
var service_child_1=document.querySelector('.service-child-6')
var service_child_2=document.querySelector('.service-child-8')
var service_child_3=document.querySelector('.service-child-10')
var service_child_4=document.querySelector('.service-child-12')
var service_child_5=document.querySelector('.service-child-14')
var service_child_6=document.querySelector('.service-child-16')
var service_child_7=document.querySelector('.service-child-18')
var service_child_8=document.querySelector('.service-child-20')
var service_child_9=document.querySelector('.service-child-22')
var service_child_10=document.querySelector('.service-child-24')



var special_1=document.querySelector('.special-6')
var special_2=document.querySelector('.special-8')
var special_3=document.querySelector('.special-10')
var special_4=document.querySelector('.special-12')
var special_5=document.querySelector('.special-14')
var special_6=document.querySelector('.special-16')
var special_7=document.querySelector('.special-18')
var special_8=document.querySelector('.special-20')
var special_9=document.querySelector('.special-22')
var special_10=document.querySelector('.special-24')
function radio(checked) {
  if(input_25.checked==true){
  

      service_child_1.style.opacity='.4'
      service_child_2.style.opacity='.4'
      service_child_3.style.opacity='.4'
      service_child_4.style.opacity='.4'
      service_child_5.style.opacity='.4'
      service_child_6.style.opacity='.4'
      service_child_7.style.opacity='.4'
      service_child_8.style.opacity='.4'
      service_child_9.style.opacity='.4'
      service_child_10.style.opacity='.4'
    
   
    special_1.style.color='red'
    special_2.style.color='red'
    special_3.style.color='red'
    special_4.style.color='red'
    special_5.style.color='red'
    special_6.style.color='red'
    special_7.style.color='red'
    special_8.style.color='red'
    special_9.style.color='red'
    special_10.style.color='red'

    input_6.setAttribute('disabled','')
    input_8.setAttribute('disabled','')
    input_10.setAttribute('disabled','')
    input_12.setAttribute('disabled','')
    input_14.setAttribute('disabled','')
    input_16.setAttribute('disabled','')
    input_18.setAttribute('disabled','')
    input_20.setAttribute('disabled','')
    input_22.setAttribute('disabled','')
    input_24.setAttribute('disabled','')
  }
  else{
    service_child_1.style.opacity='1'
    service_child_2.style.opacity='1'
    service_child_3.style.opacity='1'
    service_child_4.style.opacity='1'
    service_child_5.style.opacity='1'
    service_child_6.style.opacity='1'
    service_child_7.style.opacity='1'
    service_child_8.style.opacity='1'
    service_child_9.style.opacity='1'
    service_child_10.style.opacity='1'
   
    special_1.style.color='red'
    special_2.style.color='red'
    special_3.style.color='red'
    special_4.style.color='red'
    special_5.style.color='red'
    special_6.style.color='red'
    special_7.style.color='red'
    special_8.style.color='red'
    special_9.style.color='red'
    special_10.style.color='red'

    input_6.removeAttribute('disabled','')
    input_8.removeAttribute('disabled','')
    input_10.removeAttribute('disabled','')
    input_12.removeAttribute('disabled','')
    input_14.removeAttribute('disabled','')
    input_16.removeAttribute('disabled','')
    input_18.removeAttribute('disabled','')
    input_20.removeAttribute('disabled','')
    input_22.removeAttribute('disabled','')
    input_24.removeAttribute('disabled','')
  }
}

addEventListener('click',radio)


  









 

 











