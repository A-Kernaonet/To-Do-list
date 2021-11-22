// $(function(){
//     $("#buttonAdd").click(function(){
//         $("ul").append("<li> Marche pas!! Visualise pas!! Marche pas!! Visualise pas!!</li>");
//     });
// });
$(function(){
    function addItem(text){
        var id = $('li').length+1;
        var item =  `<li data-toto="${id}" class="tasks">
                        <p>${text}
                        <svg data-toto="${id}" xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                        </svg>
                        </p>
                    </li>`;

        $('#ulList').append(item);
        $('#nameTask').val('').focus();
        }
        
        $('#buttonAdd').click(function(){
        var listInput = document.getElementById('nameTask').value;
        addItem(listInput);
        });

        $('#ulList').on('click', ".bi-trash-fill", function(){
            $(this).parent().parent().remove();
        });
});