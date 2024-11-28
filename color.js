// Use the following to include this JavaScript file 
// <script src="script1.js"></script>
      var Body={
        SetColor: function(color){
          $('body').css('color',color);
          //document.querySelector('body').style.color=color;
        },
        SetBackgroundColor: function(color){
          $('body').css('backgroundColor',color);
          //document.querySelector('body').style.backgroundColor=color;
        }
      }
      
      var Links={
        SetColor: function(color){
          $('a').css('color',color);
          // var alist=document.querySelectorAll('a');
          // for(var i=0;i<alist.length;i++){
          //   alist[i].style.color=color;
          // }
        }
      }
      
      function nightDayHandler(self){
        var target=document.querySelector('body');
        
        if(self.value === 'night'){
          Body.SetBackgroundColor('black');
          Body.SetColor('white');
          self.value='day';
          
          Links.SetColor('powderblue');
        }
        else{
          Body.SetBackgroundColor('white');
          Body.SetColor('black');
          self.value='night';
          
          Links.SetColor('blue');
        }
      }