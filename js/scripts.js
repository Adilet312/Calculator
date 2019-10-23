
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
    $("#output1").val(output);
  });
 });

  $(document).ready(function()
  {
    $("form#subtract").submit(function(event)
    {
      event.preventDefault();
      var intNumber1 = parseInt($("#subtract1").val());
      var intNumber2 = parseInt($("#subtract2").val());
      var output = subtract(intNumber1,intNumber2);
      $("#output2").val(output);
    });
   });

  $(document).ready(function()
  {
    $("form#multiply").submit(function(event)
    {
      event.preventDefault();
      var intNumber1 = parseInt($("#multiply1").val());
      var intNumber2 = parseInt($("#multiply2").val());
      var output = subtract(intNumber1,intNumber2);
      $("#output3").val(output);
    });
   });

   $(document).ready(function()
   {
     $("form#divide").submit(function(event)
     {
       event.preventDefault();
       var intNumber1 = parseInt($("#divide1").val());
       var intNumber2 = parseInt($("#divide2").val());
       var output = subtract(intNumber1,intNumber2);
       $("#output4").val(output);
     });
    });
