$(document).ready(function()
{
    $(document).on('click','.ovo_url',function(e)
    {
        e.preventDefault();
        var url = $(this).data('url'),
        target = $(this).data('target');

        window.open(url, target);
    });
  $('#cookieChoiceInfo').remove();
})
