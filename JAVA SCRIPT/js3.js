let img1=document.getElementById('img1');
img1.style.width='250px';
img1.style.height='250px';
img1.style.borderRadius='50%';
img1.src="https://blog.logrocket.com/wp-content/uploads/2020/12/javascript-custom-events.png";
let p1=document.getElementById('p1');
p1.style.fontSize='35px'
p1.style.color='red';
let input1=document.getElementById('input1');
input1.value='satish';
input1.style.borderColor='red';
let class1=document.getElementsByClassName('class1');
for (let i = 0; i < 4; i++) {
    class1[i].style.color='blue';
    class1[i].style.textTransform='lowercase';
}
let li=document.getElementsByTagName('li');
for (let i = 0; i < 3; i++) {
    li[i].style.fontSize='20px';
    li[i].style.color='pink';
}
let td=document.getElementsByTagName('td')
for (let i=0; i<td.length; i++){
    td[i].innerText=td.length-i;
    td[i].style.width='50px';
    td[i].style.height='25px';
    td[i].style.textAlign='center';
}
let lis=document.querySelector('.query');
lis.innerText='Aditya';
let col=document.querySelectorAll('td');
for (let i=0; i<col.length; i++){
    col[i].style.backgroundColor='blue';
}