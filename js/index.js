function addItem() {
    $("#addItemBtn").on('click', function (event) {
        event.preventDefault();

        let item = $("#item").val();
        if (item != "") {
            $("#shoppingList").append(`<li> ${item}<div class="buttons"><button type="submit" class="checkBtn">Check</button><button type="submit" class="deleteBtn">Delete</button></div></li>`);
            $("#item").val("");
        }

        
    });  

    $("#shoppingList").on('click', '.checkBtn', function(event) {
        event.preventDefault();
        let liElement = $(this).parent().parent();

        if ($(liElement).hasClass('crossed')) {
            $(liElement).removeClass('crossed');
        }
        else {
            $(liElement).addClass('crossed');
        }

        
    });
}



addItem();