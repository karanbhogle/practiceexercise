names = Array("Karan","Mihir","Divya","Vaibhav","Kevin","Ritu","Rohit","Devansh","Manan","jfakldsf");
names.forEach(fetchNames);


//List of Functions
function fetchNames(item, index)
{
    document.write("<tr>");
        document.write("<td>" + (index+1) + "</td>");
        document.write("<td>" + item + "</td>");
    document.write("</tr>");
}


function addName(name)
{
    newName = document.getElementById("txtAddName");
    console.log(newName.value);
    names.push(newName.value);
    console.log(names);
}

function deleteName()
{
    deleteName = document.getElementById("txtDeleteName");
    console.log(deleteName.value + names.indexOf(deleteName.value));
    names.splice(names.indexOf(deleteName.value),1);
    console.log(names);
}
