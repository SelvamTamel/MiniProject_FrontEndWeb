$('ul').on('click', "li", function() {
    $(this).toggleClass('grey')

})

$('ul').on('click', 'span', function(event) {
    $(this).parent().fadeOut(1000, function() {
        $(this).remove()
    })
    event.stopPropagation()
})

$('input').on('keypress', function(event)  {
    if (event.which === 13) {
        let newTODO = $(this).val()
        $(this).val('')

        $('ul').append(`<li> <span><i class="far fa-times-circle"></i></span> ${newTODO}</li>`)
    }
    
})



//     //if li grey
    
//     if ($(this).css('color') === 'rgb(128, 128, 128)') {
//         // change to black
//         $(this).css({
//             color: 'black',
//             textDecoration: 'none'
//         });
//     }   // else li is black
//         else {
//              // change to grey  
//              $(this).css({
//                 color: 'grey',
//                 textDecoration: 'line-through'
//             }); 
//         }

