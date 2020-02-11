        function IsEmpty()
		{
    		var fname = document.getElementById("fname").value;
    		var lname = document.getElementById("lname").value;
            var email = document.getElementById("mail").value;
            var pswd = document.getElementById("pswd").value;
            var cpswd = document.getElementById("cpswd").value;
            var zip = document.getElementById("zip").value;
            var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test("90210");
            var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    		if(fname=="")
    		{
        		alert("Oops.. Please fill out the value of First Name");
                return false;
        		
			}
            else if(lname=="")
            {
                alert("Oops.. Please fill out the value of Last Name");
                return false;
            }
            else if(!email.match(format))
            {
                alert("Enter Valid Email id");
                return false;
            }
            else if(pswd!=cpswd)
            {
                alert("Password Doesnt match");
                return false;
            }
            else if(!zip.match(isValidZip))
            {
                alert("Enter Valid Zip code");
               return false;
            }
           
        }

       