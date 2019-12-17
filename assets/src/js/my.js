$( document ).ready(function() {
    $('.js-toggle').click(function(evt) {
        var contentId = evt.target.getAttribute('data-header-for');
        console.log(contentId);
        $(document).find('#' + contentId).slideToggle()
    })
});
