
(function ($) {
  Drupal.color = {
    logoChanged: false,
    callback: function(context, settings, form, farb, height, width) {
      // Change the logo to be the real one.
      if (!this.logoChanged) {
        $('#preview #preview-logo img').attr('src', Drupal.settings.color.logo);
        this.logoChanged = true;
      }
      // Remove the logo if the setting is toggled off. 
      if (Drupal.settings.color.logo == null) {
        $('div').remove('#preview-logo');
      }

      // Solid page background.
      $('#preview', form).css('backgroundColor', $('#palette input[name="palette[base]"]', form).val());
			
			// Text preview.
      $('#preview #preview-main h2, #preview .preview-content', form).css('color', $('#palette input[name="palette[text]"]', form).val());
      $('#preview #preview-content a', form).css('color', $('#palette input[name="palette[link]"]', form).val());
			
			// Userbar background, border
			$('#preview #preview-userbar', form).css('background-color', $('#palette input[name="palette[userbg]"]', form).val());
			$('#preview #preview-userbar', form).css('border-color', $('#palette input[name="palette[usersecondary]"]', form).val());
			
			// User and footer elems preview.
			$('#preview #preview-userelems a', form).css('border-color', $('#palette input[name="palette[userelems]"]', form).val());
			$('#preview #preview-userelems, #preview #preview-userelems a', form).css('color', $('#palette input[name="palette[userelems]"]', form).val());
			$('#preview #preview-footer-wrapper, #preview #preview-footer-wrapper .preview-content, #preview #preview-footer-wrapper .preview-content a', form).css('color', $('#palette input[name="palette[userelems]"]', form).val());
			$('#preview #preview-footer-wrapper .preview-block', form).css('border-color', $('#palette input[name="palette[userelems]"]', form).val());
			$('#preview #preview-footer-text, #preview #preview-footer-text a', form).css('color', $('#palette input[name="palette[userelems]"]', form).val());
			
			// Branding background.
			$('#preview #preview-branding', form).css('background-color', $('#palette input[name="palette[headerbg]"]', form).val());
			
			// Content background. 
			$('#preview #preview-main', form).css('background-color', $('#palette input[name="palette[contentbg]"]', form).val());
     
	  
	  	// Content headers preview.
	  	$('#preview #preview-main #preview-page-title, #preview #preview-block h2', form).css('color', $('#palette input[name="palette[contentheaders]"]', form).val());
	  
      // Sidebar block.
      $('#preview #preview-sidebar #preview-block', form).css('background-color', $('#palette input[name="palette[secondary]"]', form).val());
      $('#preview #preview-sidebar #preview-block, #preview #preview-block h2', form).css('border-color', $('#palette input[name="palette[sidebarborders]"]', form).val());

      // Footer wrapper background.
      $('#preview #preview-footer-wrapper', form).css('background-color', $('#palette input[name="palette[usersecondary]"]', form).val());
      
      // Footer standard background. 
      $('#preview #preview-standard-footer', form).css('background-color', $('#palette input[name="palette[userbg]"]', form).val());
			
			// Site title & slogan preview. 
      $('#preview #preview-site-name', form).css('color', $('#palette input[name="palette[titleslogan]"]', form).val());
      
      
      // Menu preview
      $('#preview #preview-main-menu', form).css('background-color', $('#palette input[name="palette[menubg]"]', form).val());
      $('#preview #preview-main-menu-links a', form).css('color', $('#palette input[name="palette[menulink]"]', form).val());
      $('#preview #preview-main-menu-links li:first-child a', form).css('background-color', $('#palette input[name="palette[menulinkactive]"]', form).val());
    }
  };
})(jQuery);
