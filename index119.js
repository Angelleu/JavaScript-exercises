const data=[42,true,function(){return 'The meaning of life is:'}];
const greeting=data[2];
if(data[1]===true){
    console.log(greeting(),data[0]);
}