$('#why').click(function(event){
   $('#why-text').css('display','block')          
   $('#part-text').css('display','none')          
   $('#corp-text').css('display','none')   
             });
$('#part').on('click', function(event){
   $('#why-text').css('display','none')          
   $('#part-text').css('display','block')          
   $('#corp-text').css('display','none')     
             });
$('#corp').on('click', function(event){
   $('#why-text').css('display','none')          
   $('#part-text').css('display','none')          
   $('#corp-text').css('display','block')          
             });