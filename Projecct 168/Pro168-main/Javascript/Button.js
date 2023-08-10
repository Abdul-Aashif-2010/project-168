AFRAME.registerComponent("createButtons",{
    init: function(){
        //1. Create the Order button
        var button1 = document.createElement("button");
        button1.innerHTML = "ORDER NOW";
        button1.setAttribute("id", "order-button");
        button1.setAttribute("class", "btn btn-danger ml-3 mr-3");

        //1. Create the Bill button
        var button2 = document.createElement("button");
        button2.innerHTML = "VIEW BILL";
        button2.setAttribute("id", "order-summary-button");
        button2.setAttribute("class", "btn btn-danger ml-3");

        //1. Append Somewhere
        var buttonDiv = document.createElement("button-div");
        buttonDiv.appendChild(button1);
        buttonDiv.appendChild(button2);
    }
})