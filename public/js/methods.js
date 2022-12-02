
function toggleDiv(divToToggle){
    console.log("INSIDE" + divToToggle);
    for (let element of document.getElementsByClassName(divToToggle)){
        if (element.style.display != "block") {
            element.style.display = "block";
          } else {
            element.style.display = "none";
          }
     }
}

function toggleEdit(divToToggle){
    console.log("INSIDE" + divToToggle);
    for (let element of document.getElementsByName(divToToggle)){
        if (element.style.display != "block") {
            element.style.display = "block";
          } else {
            element.style.display = "none";
          }
     }
}