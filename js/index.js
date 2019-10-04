function addItem() {
    $("#addItemBtn").on('click', function (event) {
        event.preventDefault();
        console.log("you did it champ");

        let item = $("#item").val();
        if (item != "") {
            $("#shoppingList").append(`<li> ${item}<div class="buttons"><button type="submit" class="checkBtn">Check</button><button type="submit" class="deleteBtn">Delete</button></div></li>`);
            $("#item").val("");
        }

        
    });  
}



addItem();