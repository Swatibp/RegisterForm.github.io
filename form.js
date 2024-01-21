function validate()
{
    var up = /^[A-Za-z]+$/
    var php =/^[6-9]{1}[0-9]{9}$/
    var uv = document.getElementById("uname").value
    if(uv=="")
    {
        document.getElementById("msg").innerHTML="Enter the user name."
        return false
    }
    if(uv.match(up))
    true;
else
{
    document.getElementById("msg").innerHTML="Enter the should be alphabetic."
    return false
}
if(uv.length<3)
{
    document.getElementById("msg").innerHTML="User name should contain minimum 3 Characters."
    return false
}
if(uv.length>8)
{
    document.getElementById("msg").innerHTML="User name should maximum 8 characters."
    return false
}
if(pv=="")
{
    document.getElementById("msg").innerHTML="Enter the Phone Number."
        return false
    }
    if(pv.match(php))
    true;
else
{
    document.getElementById("msg1").innerHTML="Invalid Phone Number."
    return false
}
}