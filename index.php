<?php
if(isset($_POST['login'])){
   include "connection.php";
   $username = mysqli_real_escape_string($conn,$_POST['username']);
   $password = md5($_POST['password']);
   
   $sql = "SELECT userid,username,password,status FROM userdata WHERE username = '{$username}' AND password = '{$password}'";
   $result = mysqli_query($conn,$sql) ;
 
   if(mysqli_num_rows($result) > 0){
      while($row = mysqli_fetch_assoc($result)){
         session_start();
         $_SESSION['username'] = $row['username'];
         $_SESSION['userid'] = $row['userid'];
         $_SESSION['status'] = $row['status'];

         header("Location: quiz.php");
      }
   }else{
       echo "<h3 class='alert alert-danger w-75 mt-2' style='text-align:center;'>Username Or Password Incorrect!!</h3>";
   }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign In</title>
    
     <!-- Font Awesome Link -->
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.1.1/css/all.css">


    <!-- BootStrap CSS Link -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="quiz1.css">

    <script src="authenticate.js"></script>
</head>

<body id="back" onload="captcha()">
    <section>
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-md-12 mt-2 mb-0">
                    <h1 id="title">Cricket Quiz4U</h1>
                    <div id="login">
                      <h2 class="mt-2 p-4">Sign In Form</h2> 
                          <form class="row " action="<?php $_SERVER['PHP_SELF']; ?>" method ="POST" onsubmit="return loginvalidate()" autocomplete="off">
                          
                           <div id="forming">
                            <div class="col-md-8">
                                <label for="fname" class="form-label lablecss">User name</label>
                                <input type="text" class="form-control" name="username" id="username"  placeholder="User Name" style="border:2px solid rgb(0, 132, 255)">
                            </div>
                            <div class="col-md-8">
                                <label for="lname" class="form-label">Password</label>
                                <input type="password" class="form-control" name="password" id="password" value="" style="border: 2px solid rgb(0, 132, 255)" placeholder="Password">
                            </div>

                            <div class="col-md-8">
                                <input type="text" id="capch" style="color:red; padding-top:0px; padding-bottom:0px; font-size:1.5rem; font-weight:600; letter-spacing: 5px;" class="form-control text-center" value="" readonly>
                            </div>
                            <div class="col-md-8">
                                <label for="lname" class="form-label">Enter Capchar</label>
                                <input type="text" name="capchar" id="entcapch" class="form-control" onkeyup="capcahcheck(this)" style="border: 2px solid rgb(0, 132, 255)" placeholder="Enter Captcha">
                                <p id="logincapcha" class="loginerrmsg"></p>
                            </div>

                            <div class="col-12 mt-2">
                                <input type="submit" name="login" class="btn btn-primary w-50" style="border: 2px solid rgb(0, 132, 255)" value="Login" required />
                            </div>

                            <div class="col-md-8">
                                <p for="lname" class="form-label">You Don't have an account <a href="signUpForm.php"> Sign Up</a></p> 
                            </div>
                        </div>
                     </form>


                        




                    </div>
                </div>
            </div>
        </div>
    </section>

</body>

</html>

 <!-- ************************************************************************************** -->