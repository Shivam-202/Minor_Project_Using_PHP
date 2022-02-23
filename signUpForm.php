
<?php
    if(isset($_POST['save'])){

        if(isset($_FILES['img'])){
            $error = array();
           
            $file_name = $_FILES['img']['name'];
            $file_size = $_FILES['img']['size'];
            $file_tmp = $_FILES['img']['tmp_name'];
            $file_type = $_FILES['img']['type'];
            $file_ext = strtolower(end(explode('.',$file_name)));
            $extensions = array("jpeg","jpg","png");
        
            if(in_array($file_ext,$extensions) === false){
                $error[] = "This extensions file is not allowed";
            }
        
            if($file_size > 2097152){
                $error[] = "File size must be 2MB or lower";
            }
        
            if(empty($error) == true){
                move_uploaded_file($file_tmp,"profiles_photos/".$file_name);
            }else{
                print_r($error);
                die();
            }
        }

        include "connection.php";
       
       $fname = mysqli_real_escape_string($conn,$_POST['fname']);
       $lname = mysqli_real_escape_string($conn,$_POST['lname']);
       $uname = mysqli_real_escape_string($conn,$_POST['uname']);
       $mail = mysqli_real_escape_string($conn,$_POST['mail']);
       $genders = mysqli_real_escape_string($conn,$_POST['genders']);
       $repassword = md5(mysqli_real_escape_string($conn,$_POST['repassword']));  
       
       $sql = "INSERT INTO userdata (firstname,lastname,username,mail,image,gender,password)
               VALUES ('{$fname}','{$lname}','{$uname}','{$mail}','{$file_name}','{$genders}','{$repassword}')";
       
       if(mysqli_query($conn,$sql)){
             header("Location: index.php"); 
        }
       else{
            echo '<script>';
            echo 'alert("Customer Added Unsuccessfully!!")';
            echo '</script>';
       }

    }

?>



                                      
                  

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>

    <link rel="stylesheet" href="styling.css">

     <!-- Font Awesome Link -->
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.1.1/css/all.css">

     <!-- BootStrap CSS Link -->
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    
     <link rel="stylesheet" href="quiz1.css">
     
     <script src="authenticate.js"></script>
</head>
<body id="back" onload="captcha()">


    <section id="home">
        <div class="container">
        <h1 class="text-center mt-3 mb-2">Sign Up Form</h1>
            <div class="row mx-auto" >
           
                <div class="col-md-10 mt-3" style="background:white;"> 
                  
        
                        <form action="<?php $_SERVER['PHP_SELF']; ?>" class="row g-2 mt-3" onsubmit="return validate()" method="post" enctype="multipart/form-data">
                            
                              <div class="col-md-5  me-1 mb-2">                         
                                <label for="fname" class="form-label labelcss">First name</label>
                                <input type="text" class="form-control" style="border:1.5px solid rgb(0, 132, 255)" name="fname" onkeyup="firstnamecheck(this)" placeholder="First Name" value="" >
                                <p id="finam" class="errmsg"></p>
                            </div>

                            <div class="col-md-5 me-1 mb-2" >
                                <label for="lname" class="form-label labelcss">Last name</label>
                                <input type="text" class="form-control" style="border:1.5px solid rgb(0, 132, 255)" name="lname" onkeyup="lastnamecheck(this)" value="" placeholder="Last Name" >
                                <p id="linam" class="errmsg"></p>
                            </div>
                           
                            <div class="col-md-5 me-1 mb-2" >
                             <label for="uname" class="form-label labelcss">Username</label>
                              <input type="text" class="form-control" style="border:1.5px solid rgb(0, 132, 255)" name="uname" onkeyup="usernamecheck(this)" value="" placeholder="User Name" >
                              <p id="uinam" class="errmsg"></p>
                            </div>
                           
                            <div class="col-md-5 me-1 mb-4">
                                <label for="mail" class="form-label labelcss">Email Id</label>
                                <input type="email" class="form-control" style="border:1.5px solid rgb(0, 132, 255)" name="mail" onkeyup="mailcheck(this)" placeholder="Email" >
                                <p id="mail" class="errmsg"></p>
                            </div>

                         <div class="col-md-5 me-1 mb-4" >
                                <label for="img" class="form-label labelcss">Upload Profile Photo</label>
                                <input type="file" class="form-control" style="border:1.5px solid rgb(0, 132, 255)"  name="img" value=""  >
                         </div>

                            
                            
                            <div class="col-md-5  me-1">                           
                                <label class="form-label labelcss">Gender : </label>
                                        
                                <div class="form-check-inline" >
                                  <span class="p-3 ">
                                    <input type="radio" class="form-check-input" onclick="gendercheck(this)" id="male" style="border:1.5px solid rgb(0, 132, 255)" name="genders" value="Male">
                                    <label for="male" class="form-check-label labelcss">Male</label>
                                  </span>
                                  <span class="p-3">
                                    <input type="radio" class="form-check-input" onclick="gendercheck(this)" id="female" style="border:1.5px solid rgb(0, 132, 255)" name="genders"
                                        value="FeMale">
                                    <label for="female" class="form-check-label labelcss">Female</label>
                                  </span>
                                  <span class="p-3 mb-4">
                                    <input type="radio" class="form-check-input" onclick="gendercheck(this)" id="other" style="border:1.5px solid rgb(0, 132, 255)" name="genders"
                                        value="Other">
                                    <label for="other" class="form-check-label labelcss">Other</label>
                                  </span>
                                 </div>
                                 <p id="gen" class="errmsg"></p>
                            </div>

                    


                            <div class="col-md-5  me-1 mb-4 ">
                                <label for="lname" class="form-label labelcss">Create Password</label>
                                <input type="password" class="form-control" style="border:1.5px solid rgb(0, 132, 255)" name="password" onkeyup="passwordcheck(this)" value="" placeholder="Create Password" >
                                <p id="password" class="errmsg"></p>
                            </div>

                            <div class="col-md-5  me-1 mb-4">                           
                                  <label for="lname" class="form-label labelcss">Re-Enter Password</label>
                                <input type="password" class="form-control" style="border:1.5px solid rgb(0, 132, 255)" name="repassword" onkeyup="repasswordcheck(this)" value="" placeholder="Re-Enter Password" >
                                <p id="repassword" class="errmsg"></p>
                            </div>

                            

                    
                            <div class="col-md-5  me-1 mb-4">
                            <label for="lname" class="form-label labelcss">Captcha</label>
                                <input type="text" id="capch" class="form-control text-center bg-dark" style="color:yellow; padding-top:0px; padding-bottom:0px; font-size:1.5rem; font-weight:600; letter-spacing: 5px;" value="" readonly> 
                               
                            </div>
                            <div class="col-md-5  me-1 mb-4">
                                <label for="lname" class="form-label labelcss">Enter Captcha</label>
                                <input type="text" id="entcapch" class="form-control w-100" style="border:1.5px solid rgb(0, 132, 255)" name="captchar" onkeyup="capchacheck(this)" placeholder="Enter Captcha" >
                                <p id="capcha" class="errmsg"></p>
                            </div>

                        
                            <div class="col-md-5 mx-auto m-3">
                                <input type="submit" class="btn btn-success w-100" style="border:1.5px solid rgb(0, 132, 255)" name="save" value="Sign Up" > 
                               
                            </div>
                                  
                         
                        </form>

                    
                </div>
            </div>
        </div>
    </section>

   
</body>


<!-- BootStrap JS Link -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
    integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
    crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"
    integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT"
    crossorigin="anonymous"></script>

</html>



