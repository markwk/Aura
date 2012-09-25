jQuery(document).ready(function (){
    jQuery('form#signup-share-track-join #edit-mail').val('Your Email Address');
    jQuery('form#signup-share-track-join #edit-mail').blur(function() {
        jQuery(this).val();
        if(jQuery(this).val() == '') {
            jQuery(this).val('Your Email Address')
        }
    });
    jQuery('form#signup-share-track-join #edit-mail').focus(function() {
        jQuery(this).val();
        if(jQuery(this).val() == 'Your Email Address') {
            jQuery(this).val('')
        }
    });
});