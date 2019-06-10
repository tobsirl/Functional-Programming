function sing(callback) {
  if(callback){
  console.log('la la la la');
  callback();
  }
}

function meow() {
  console.log('meow meow');
}

sing();
