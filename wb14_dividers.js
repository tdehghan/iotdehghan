   
   $(document).ready(function()
   {
      $("a[href*='#header']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_header').offset().top }, 600, 'easeOutCirc');
      });
      $('#ThemeableMenu1 .dropdown-toggle').dropdown({popperConfig:{placement:'bottom-start',modifiers:{computeStyle:{gpuAcceleration:false}}}});
      $(document).on('click','.ThemeableMenu1-navbar-collapse.show',function(e)
      {
         if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) 
         {
            $(this).collapse('hide');
         }
      });
      $("a[href*='#home']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_home').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#services']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_services').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#banner1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_banner1').offset().top-88 }, 600, 'easeOutCirc');
      });
      var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
      if (iOS)
      {
         $('#wb_home,#wb_banner1').css('background-attachment', 'scroll');
      }
   });
