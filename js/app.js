//Problem: it looks bad in smaller browser widths/devices
//Solutions: to hide the text links and swap them out with a more appropriate navigation

//Steps
//Create and select and append to #menu

var $select = $("<select></select>");
$("#menu").append($select);

//Cycle over menu links 
$("#menu a").each(function(){
    var $anchor = $(this);
    //Create options
    var $option = $("<option></option>");
    
    //Deal with the selected option and depending with the current page
   if($anchor.parent().hasClass("selected")){
    $option.prop("selected", true);
   }
    
    
    //Option's value is the href
    $option.val($anchor.attr('href'));
    
    //Option's text is the text of the link
    $option.text($anchor.text());
    //Append option to select
    $select.append($option);
});

/*
//Create a button 

var $button = $("<button>Go</button>");
$("#menu").append($button);
//Bind click to go to select's location
$button.click(function(){
    //Go to select button, getting the value of the selected option        
    window.location = $select.val();
});
*/

//Bind select to go to listener
$select.change(function(){
    //Go to select button, getting the value of the selected option        
    window.location = $select.val();
});
