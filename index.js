
var tablinks = document.getElementsByClassName("links");
        var tabcontent = document.getElementsByClassName("content");

      function opentab(tabname)
    {
     for(tblnk of tablinks)
     {
        tblnk.classList.remove("active") ;
     }

     for(tabconts of tabcontent)
     {
        tabconts.classList.remove("active-tab") ;
     }
     event.currentTarget.classList.add("active") ;
     document.getElementById(tabname).classList.add("active-tab") ;
    
    }

    var sidemeu = document.getElementById("sidemenu");

        function openmenu(){
            sidemeu.style.right = "0" ;

        }
        function closemenu(){
            sidemeu.style.right = "-200px" ;
            
        }

        const scriptURL = 'https://script.google.com/macros/s/AKfycbxguW6Ut2czIa_VW7E1d6UhwMreAg0xD-SLT_y3LeigXxhDlXfMyuZ9R_CPjVNbCozAYA/exec'
        const form = document.forms['submit-to-google-sheet']
      const msg = document.getElementById("msg")

        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => 
            {
                msg.innerHTML="Message Sent Successfully"
                setTimeout(function(){
                    msg.innerHTML = ""
                },5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })

       