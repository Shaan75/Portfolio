
window.onscroll = function() {scrollFunction()};

function scrollFunction() 
{
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) 
    {
      document.getElementById("header").style.backgroundColor= "#01101D";
    }
    else 
    {
      document.getElementById("header").style.backgroundColor = "transparent";
    }
}


function Send()
{
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var contact = document.getElementById("phone").value;
  var sub = document.getElementById("subject").value;
  var mess = document.getElementById("message").value;

  var body = "Name: " + name + "<br/> Email: " + email + "<br/> Contact Number: " + contact + "<br/> Message:" + mess;
            
  console.log(body);
  Email.send(
  {
    SecureToken : "8ac92398-afa7-441f-a12b-d310aefc330a",
    To : 'satshaservices@gmail.com',
    From : "satshaservices@gmail.com",
    Subject : sub,
    Body : body
  }).then
  (
       message =>
       {
          if(message=='OK')
          {
             swal("Successfull", "Your Data Successfull Received", "success");
          }     
          else
          {
            swal("Something Wrong", "Your Data is not Received", "error");
          }
      }
  );

            
        
}