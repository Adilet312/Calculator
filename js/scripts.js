
function add(intNumber1,intNumber2)
{
  return (intNumber1 + intNumber2);
};

function subtract(intNumber1,intNumber2)
{
  return (intNumber1 - intNumber2);
}

function multiply(intNumber1,intNumber2)
{
  return (intNumber1 * intNumber2);
}

function divide(intNumber1,intNumber2)
{
  return (intNumber1 / intNumber2);
}
$(document).ready(function()
{
  $("form#add").submit(function(event)
  {
    event.preventDefault();
    var intNumber1 = parseInt($("#add1").val());
    var intNumber2 = parseInt($("#add2").val());
    var output = add(intNumber1,intNumber2);
    $("#output").text(output);
  });
});
