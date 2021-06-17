function tugas22() {
  var string = "Saya ingin belajar bersama";
  var array = string.split(" ");

  array.map(function (item, index){
    console.log("Item : "+item+" Index ke "+index);
  })
}

tugas22()
