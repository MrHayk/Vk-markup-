const $lis = $('li');
const $allSquares = $('.col');

$(document).ready(function () {
    $('.container .col').on('click', function () {
        const clickedElement = $(this);
        swappingNode(clickedElement);
    });

    function swappingNode(clickedElement) {
        if (!clickedElement.is(':last-child')) {
            clickedElement.insertAfter(clickedElement.next());
        } else  {
            const first = clickedElement.siblings().first();
            clickedElement.insertBefore(first);
            first.insertAfter(clickedElement.siblings().last());
        }
    }
});


