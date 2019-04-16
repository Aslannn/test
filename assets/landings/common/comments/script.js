function send_event_comment_read()
{
    var t = setTimeout(function () {
        if (document.readyState === "complete") {
            dataLayer.push({'event': 'comment_read'});
        } else {
            send_event_comment_read();
        }
    }, 200)
}

function get_comments_id()
{
    var vk = 'vk_comments';
    var cackle = 'mc-container';

    if (document.getElementById(vk)) {
        return vk;
    }

    if (document.getElementById(cackle)) {
        return cackle;
    }

    return false;
}

var comment_element = get_comments_id();
if (comment_element) {
    var comment_element_position = $('#'+comment_element).offset().top;
    var is_sent_scroll_event_comment = false;
    $(window).on('scroll', function() {
        var y_scroll_pos = window.pageYOffset;

        if( !is_sent_scroll_event_comment && (y_scroll_pos > comment_element_position) ) {
            is_sent_scroll_event_comment = true;

            send_event_comment_read();
        }
    });
}
