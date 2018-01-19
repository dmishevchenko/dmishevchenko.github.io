    $("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#wrapper").offset().top
    }, 1000)});


    var chatMessages = [{
  name: "ms1",
  delay: 1000,
  align: "left",
  showTime: true,
  img:true
},
{
      name: "ms2",
  delay: 1000,
  align: "right",
  showTime: true,
  msg:'Nulla malesuada'
},
{
      name: "ms3",
  delay: 1000,
  align: "left",
  showTime: true,
  msg:'Nulla malesuada fermentum purus. Nullam blandit ligula eget hendrerit ultricies. Suspendisse potenti. Phasellus euismod ultrices ligula, venenatis suscipit mauris tempor id.'
},{
      name: "ms4",
  delay: 1000,
  align: "right",
  showTime: true,
  msg:'Nulla malesuada fermentum purus. Nullam blandit ligula eget hendrerit ultricies. Suspendisse potenti. Phasellus euismod ultrices ligula, venenatis suscipit mauris tempor id.'
},{
      name: "ms5",
  delay: 1000,
  align: "left",
  showTime: true,
  msg:'Nulla malesuada fermentum purus. Nullam blandit ligula eget hendrerit ultricies. Suspendisse potenti. Phasellus euismod ultrices ligula, venenatis suscipit mauris tempor id.'
}
                        
                   ];
    var shop=[{
  name: "ms1",
  delay: 1000,
  align: "left",
  showTime: true,
  img:true
},
{
      name: "ms2",
  delay: 1000,
  align: "right",
  showTime: true,
  msg:'there is a shop chat'
},
{
      name: "ms3",
  delay: 1000,
  align: "left",
  showTime: true,
  msg:'Nulla malesuada fermentum purus. Nullam blandit ligula eget hendrerit ultricies. Suspendisse potenti. Phasellus euismod ultrices ligula, venenatis suscipit mauris tempor id.'
},
{
      name: "ms4",
  delay: 1000,
  align: "right",
  showTime: true,
  msg:'Nulla malesuada fermentum purus. Nullam blandit ligula eget hendrerit ultricies. Suspendisse potenti. Phasellus euismod ultrices ligula, venenatis suscipit mauris tempor id.'
}
                   ];
    var night=[{
  name: "ms1",
  delay: 1000,
  align: "left",
  showTime: true,
  img:true
},
{
      name: "ms2",
  delay: 1000,
  align: "right",
  showTime: true,
  msg:'there is a night chat'
},
{
      name: "ms3",
  delay: 1000,
  align: "left",
  showTime: true,
  msg:'Nulla malesuada fermentum purus. Nullam blandit ligula eget hendrerit ultricies. Suspendisse potenti. Phasellus euismod ultrices ligula, venenatis suscipit mauris tempor id.'
},
{
      name: "ms4",
  delay: 1000,
  align: "right",
  showTime: true,
  msg:'Nulla malesuada fermentum purus. Nullam blandit ligula eget hendrerit ultricies. Suspendisse potenti. Phasellus euismod ultrices ligula, venenatis suscipit mauris tempor id.'
}
                   ];
    var food=[{
  name: "ms1",
  delay: 1000,
  align: "left",
  showTime: true,
  img:true
},
{
      name: "ms2",
  delay: 1000,
  align: "right",
  showTime: true,
  msg:'there is a food chat'
},
{
      name: "ms3",
  delay: 1000,
  align: "left",
  showTime: true,
  msg:'Nulla malesuada fermentum purus. Nullam blandit ligula eget hendrerit ultricies. Suspendisse potenti. Phasellus euismod ultrices ligula, venenatis suscipit mauris tempor id.'
},{
      name: "ms4",
  delay: 1000,
  align: "left",
  showTime: true,
  msg:'Nulla malesuada fermentum purus. Nullam blandit ligula eget hendrerit ultricies. Suspendisse potenti. Phasellus euismod ultrices ligula, venenatis suscipit mauris tempor id.'
}
                   ];
var chatDelay = 0;

function onRowAdded() {
  $('.chat-message-list').animate({
    scrollTop: $('.chat-message-list').prop('scrollHeight')
  });
};
$.each(chatMessages, function(index, obj) {
  chatDelay = chatDelay+1000;
  chatDelay2 = chatDelay + obj.delay;
  chatDelay3 = chatDelay2 + 10;
  scrollDelay = chatDelay;
  chatTimeString = " ";
  msgname = "." + obj.name;
  msginner = ".messageinner-" + obj.name;
  spinner = ".sp-" + obj.name;

    if(obj.img == true){
          $(".chat-message-list").append("<div class='message-" + obj.align + " " + obj.name + "' hidden><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hidden><div class='received-photo'><img src='img/chat-img.png'></div>" +  "</div></div>");
    }
    else{
         $(".chat-message-list").append("<div class='message-" + obj.align + " " + obj.name + "' hidden><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hidden><div class='message-text'>" + obj.msg + "</div>" +"</div></div>");
    }
    
 
  $(msgname).delay(chatDelay).fadeIn();
  $(spinner).delay(chatDelay2).hide(1);
  $(msginner).delay(chatDelay3).fadeIn();
  setTimeout(onRowAdded, chatDelay);
  setTimeout(onRowAdded, chatDelay3);
  chatDelay = chatDelay3;
});
    $('#shop').on('click',function(){
            chatDelay=0;
        console.log(chatDelay);
         $(".chat-message-list").append()
        $.each(shop, function(index, obj) {
 chatDelay = chatDelay+1000;
  chatDelay2 = chatDelay + obj.delay;
  chatDelay3 = chatDelay2 + 10;
  scrollDelay = chatDelay;

  msgname = "." + obj.name;
  msginner = ".messageinner-" + obj.name;
  spinner = ".sp-" + obj.name;

   if(obj.img == true){
          $(".chat-message-list").html("<div class='message-" + obj.align + " " + obj.name + "' hidden><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hidden><div class='received-photo'><img src='img/3.png'></div>" +  "</div></div>");
    }
    else{
         $(".chat-message-list").append("<div class='message-" + obj.align + " " + obj.name + "' hidden><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hidden><div class='message-text'>" + obj.msg + "</div>" +"</div></div>");
    }
    
 
 $(msgname).delay(chatDelay).fadeIn();
  $(spinner).delay(chatDelay2).hide(1);
  $(msginner).delay(chatDelay3).fadeIn();
  setTimeout(onRowAdded, chatDelay);
  setTimeout(onRowAdded, chatDelay3);
  chatDelay = chatDelay3;
});
    });  $('#food').on('click',function(){
        chatDelay=0;
         $(".chat-message-list").append()
        $.each(food, function(index, obj) {
 chatDelay = chatDelay+=1000;
              console.log(chatDelay);
  chatDelay2 = chatDelay + obj.delay;
  chatDelay3 = chatDelay2 + 10;
  scrollDelay = chatDelay;
  msgname = "." + obj.name;
  msginner = ".messageinner-" + obj.name;
  spinner = ".sp-" + obj.name;

  
    if(obj.img == true){
          $(".chat-message-list").html("<div class='message-" + obj.align + " " + obj.name + "' hidden><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hidden><div class='received-photo'><img src='img/2.png'></div>" +  "</div></div>");
    }
    else{
         $(".chat-message-list").append("<div class='message-" + obj.align + " " + obj.name + "' hidden><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hidden><div class='message-text'>" + obj.msg + "</div>" +"</div></div>");
    }
    
    
 $(msgname).delay(chatDelay).fadeIn();
  $(spinner).delay(chatDelay2).hide(1);
  $(msginner).delay(chatDelay3).fadeIn();
  setTimeout(onRowAdded, chatDelay);
  setTimeout(onRowAdded, chatDelay3);
  chatDelay = chatDelay3;
});
    });
    $('#night').on('click',function(){
            chatDelay=0;
         $(".chat-message-list").append()
        $.each(night, function(index, obj) {
            console.log(chatDelay);
       chatDelay = chatDelay+1000;
  chatDelay2 = chatDelay + obj.delay;
  chatDelay3 = chatDelay2 + 10;
  scrollDelay = chatDelay;

  msgname = "." + obj.name;
  msginner = ".messageinner-" + obj.name;
  spinner = ".sp-" + obj.name;

  
       if(obj.img == true){
          $(".chat-message-list").html("<div class='message-" + obj.align + " " + obj.name + "' hidden><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hidden><div class='received-photo'><img src='img/1.png'></div>" +  "</div></div>");
    }
    else{
         $(".chat-message-list").append("<div class='message-" + obj.align + " " + obj.name + "' hidden><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hidden><div class='message-text'>" + obj.msg + "</div>" +"</div></div>");
    }
    
 
 $(msgname).delay(chatDelay).fadeIn();
  $(spinner).delay(chatDelay2).hide(1);
  $(msginner).delay(chatDelay3).fadeIn();
  setTimeout(onRowAdded, chatDelay);
  setTimeout(onRowAdded, chatDelay3);
  chatDelay = chatDelay3;
});
    });
  
    
    