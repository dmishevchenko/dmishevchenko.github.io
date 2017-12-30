$('#why').click(function(event){
   $('#why-text').css('display','block')          
   $('#part-text').css('display','none')          
   $('#corp-text').css('display','none')  
    $('#why .line').css('opacity','1')
    $('#part .line').css('opacity','0')
    $('#corp .line').css('opacity','0')
             });
$('#part').on('click', function(event){
   $('#why-text').css('display','none')          
   $('#part-text').css('display','block')          
   $('#corp-text').css('display','none') 
      $('#why .line').css('opacity','0')
    $('#part .line').css('opacity','1')
    $('#corp .line').css('opacity','0')
             });
$('#corp').on('click', function(event){
   $('#why-text').css('display','none')          
   $('#part-text').css('display','none')          
   $('#corp-text').css('display','block')  
      $('#why .line').css('opacity','0')
    $('#part .line').css('opacity','0')
    $('#corp .line').css('opacity','1')
             });

$('#itm-1').on('click', function(event){         
   $('.second-content').css('display','none')          
   $('.first-content').css('display','block')          
             });
$('#itm-2').on('click', function(event){         
   $('.first-content').css('display','none')          
   $('.second-content').css('display','block')          
             });
$('#address-item').on('click', function(event){         
   $('#contact').css('display','none')          
   $('#address').css('display','block')          
   $('#careers').css('display','none')          
             });
$('#contact-item').on('click', function(event){         
   $('#contact').css('display','block')          
   $('#address').css('display','none')          
   $('#careers').css('display','none')          
             });
$('#careers-item').on('click', function(event){         
   $('#contact').css('display','none')          
   $('#address').css('display','none')          
   $('#careers').css('display','block')          
             });