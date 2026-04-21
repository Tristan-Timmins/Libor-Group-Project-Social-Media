<!DOCTYPE html>
 

<script>
  import { asset } from "$app/paths";
</script>


<div class="Overall">
 

 <!--Profile picture-->
<div class="pfp">
 

<img src="/images/default Profile.jpg/" alt="Example Image" style="width: 100%; height: auto;">

</div>
<!--Username-->
<div class="username">

    <p>My Username</p>

</div>
<!--Bio-->
<div class="Bio">

    <p>My Bio</p>

</div>
<!--Pronouns-->
<div class="Pronouns">

    <p>My Pronouns</p>

</div>



</div>





<style>
.pfp{
 border-style: solid;
border-radius: 5px;

}

img{
border-style: solid;
border-radius: 5px;
max-width: 500px;
max-height: 500px;


padding: 15px 25px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #000000;
  border: none;
  border-radius: 5px;

}



img:hover {background-color: #252525}

img:active {
  background-color: #ffffff;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}



.username{
 border-style: solid;
border-radius: 5px;
}

.Bio{
 border-style: solid;
border-radius: 5px;
}

.Pronouns{
 border-style: solid;
border-radius: 5px;
}


.Overall{
display: grid;
grid-template-columns: repeat(2, 1fr);

}
 </style>


