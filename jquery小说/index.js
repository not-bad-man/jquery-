function turnNovel (allPageIndex) {
   var wrapper = $('.wrapper');
   var content = $('.content');
   var colWidth = content.width();
   var colGap = parseInt( $('.content').css('column-gap') );
   var moveDis = colWidth + colGap;
   var pageIndex = 0;

   wrapper.on('mousedown', function (e) {
      console.log('mousedown')
      var posDownX, posDownY, posUpX, posUpY;

      posDownX = e.offsetX;
      posDownY = e.offsetY;

      wrapper.on('mouseup', function (e) {

         posUpX = e.offsetX;
         posUpY = e.offsetY;

         var dir = null;
         var X = posUpX - posDownX;
         var Y = Math.abs(posUpY - posDownY);
         
         if ( X > 0 && X > Y ) { dir = 'right' }          //右
         if ( X < 0 && Math.abs(X) > Y ) { dir = 'left' }   //左 
         
         
         if (dir == 'right' && pageIndex > 0) {
            pageIndex --;
         } else if (dir == 'left' && pageIndex < allPageIndex-1) {
            pageIndex ++;
         }

         content.css({
            transform: 'translate(' + -moveDis*pageIndex + 'px)'
         })
         
         console.log(posDownX, posDownY, posUpX, posUpY, pageIndex)
         // wrapper.off('mouseup')

      })
      // wrapper.off('mousedown')
   })


}

turnNovel(6);