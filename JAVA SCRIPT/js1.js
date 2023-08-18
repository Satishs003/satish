var a=10;
var b=20;
var c=30;
alert(b);
console.log(b);
document.write("The value of C is " + c);
document.write("<br> First JS completed<br>");
var name='I am ';
document.write(name,"<br>",name.length,"<br>")
name +='Satish';
document.write(name);
document.write("<br>",name.length,"<br>");
var task='virat rohit,yuvi.';
document.write(task,"<br>");
var d=10;
document.write(d," is ");
document.write(typeof(d),"<br>");
var d='name';
document.write(d," is ");
document.write(typeof(d),"<br>");
var arr=['Satish',8,'IoT',true];
document.write(arr,',',arr[1],"<br>");
var arr=[100,200,300,400];
document.write(arr[1],',',arr[2],"<br>");
var obj={
    'name':'Satish',
    'rollno':'22MH5A4908',
    'college':'ACOE',
    'branch':'IOT'
}
console.log(obj.name,obj.college,obj.rollno,obj.branch);
var trainee=[
    {
        'name':'Satish',
        'Rollno':54908,
        'college':'ACOE',
        'branch':'IOT'
    },
    {
        'name':'Harsha',
        'Rollno':54903,
        'college':'ACOE',
        'branch':'IOT'
    },
    {
        'name':'Deva',
        'Rollno':54904,
        'college':'ACOE',
        'branch':'IOT'
    },
    {
        'name':'Sai',
        'Rollno':54907,
        'college':'ACOE',
        'branch':'IOT'
    },
    {
        'name':'Rohit',
        'Rollno':14906,
        'college':'ACOE',
        'branch':'IOT'
    }
]
for (var i=0;i<trainee.length;i++){
    for (var key in trainee[i]){
      document.write(trainee[i][key],",")
    }
    document.write("<br>")
}