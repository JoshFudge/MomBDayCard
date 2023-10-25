"use strict"

$(document).ready( () => {
    $("#openedCard").hide()

$("#ClosedCard").click( () => {
    $("#ClosedCard").hide();
    $("#openedCard").show()
})

$("#openedCard").click( () => {
    $("#ClosedCard").show();
    $("#openedCard").hide()
})

})