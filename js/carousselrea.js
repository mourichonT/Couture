function moveToSelected(element) {
    let selected = "";
    if (element == "next") {
        selected = $(".selected").next();
    } else if (element == "prev") {
        selected = $(".selected").prev();
    } else {
        selected = element;
    }

    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();

    $(selected).removeClass().addClass("border_radius selected");

    $(prev).removeClass().addClass("border_radius prev");
    $(next).removeClass().addClass("border_radius next");

    $(nextSecond).removeClass().addClass("border_radius nextRightSecond");
    $(prevSecond).removeClass().addClass("border_radius prevLeftSecond");

    $(nextSecond).nextAll().removeClass().addClass('border_radius hideRight');
    $(prevSecond).prevAll().removeClass().addClass('border_radius hideLeft');

}

// Eventos teclado
$(document).keydown(function(e) {
    switch (e.which) {
        case 37: // left
            moveToSelected('prev');
            break;

        case 39: // right
            moveToSelected('next');
            break;

        default:
            return;
    }
    e.preventDefault();
});

$('#carousel div').click(function() {
    moveToSelected($(this));
});

$('#prev').click(function() {
    moveToSelected('prev');
});

$('#next').click(function() {
    moveToSelected('next');
});