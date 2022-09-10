function validateForm() {
    let name = document.forms["myForm"]["fname"].value;
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }

    let email = document.forms["myForm"]["femail"].value;
    if (email == "") {
      alert("Email must be filled out");
      return false;
    }

    let phone = document.forms["myForm"]["fphone"].value;
    if (phone == "") {
      alert("Phone number must be filled out");
      return false;
    }

    let brand = document.forms["myForm"]["fbrand"].value;
    if (brand == "") {
      alert("Brand must be filled out");
      return false;
    }

    let message = document.forms["myForm"]["fmessage"].value;
    if (message == "") {
      alert("Message must be filled out");
      return false;
    }
  }

  function phonenumber(inputtxt)
{
  var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if( inputtxt.value.match(phoneno))
        {
      return true;
        }
      else
        {
        alert("message");
        return false;
        }
}