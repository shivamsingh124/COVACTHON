let size1 = document.getElementsByClassName("size")[0]
 size1.addEventListener("click", ()=>{
    location.href = "https://healthvehicle.herokuapp.com/";
})

let size2 = document.getElementsByClassName("size")[1]
 size2.addEventListener("click", ()=>{
    location.href = "http://127.0.0.1:8000/";
})

let size3 = document.getElementsByClassName("size")[2]
 size3.addEventListener("click", ()=>{
    location.href = "https://60df10a4c5f3c1dcbcb16a8a--covicure-chat-application.netlify.app/";
})
//
// let button = document.getElementsByClassName("button2")[0]
//  button.addEventListener("click", ()=>{
//     location.href="report.html";
// })
// let button3 = document.getElementsByClassName("button1")[0]
//  button3.addEventListener("click", ()=>{
//     location.href="../Sign-Up.html";
// })
// let button2 = document.getElementsByClassName("button2")
//  button.addEventListener("click", ()=>{
//    console.log("click");
//     location.href="./report.html";
// })



$(document).ready(function(){

  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.nav').toggleClass('nav-toggle');
  });

  $(window).on('load scroll',function(){

    $('.fa-bars').removeClass('fa-times');
    $('.nav').removeClass('nav-toggle');

    if($(window).scrollTop() > 10){
      $('header').addClass('header-active');
    }else{
      $('header').removeClass('header-active');
    }

  });

  $('.facility').magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{
      enabled:true
    }
  });

});
