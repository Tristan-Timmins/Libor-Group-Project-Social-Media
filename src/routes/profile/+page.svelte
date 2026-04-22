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

    <h1>My Username</h1>

    <input type="Username" id="user-username" 
         placeholder="my username here"
         maxlength="30"
         >

</div>
<!--Bio-->
<div class="Bio">

    <h1>My Bio</h1>


         <textarea class="Bio-Input">
          
         </textarea>



</div>
<!--Pronouns-->
<div class="Pronouns">

    <h1>My Pronouns</h1>

    
		<input type="Pronouns" id="user-Pronouns" 
         placeholder="my pronouns here"
         maxlength="30"
         >

</div>



</div>





<style>

.Bio-Input{

height: 420px;
font-family: 'Comic Sans MS';
font-size: 30px;
}


.pfp{
 border-style: solid;
border-radius: 5px;
justify-self: center;
}

img{
border-style: solid;
border-radius: 5px;
max-width: 500px;
max-height: 500px;
grid-column: 1/ span 1;
grid-row: 1/ span 1;


padding: 20px 25px;
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
grid-column: 1/ span 1;
max-height: 120px;
font-family: 'Comic Sans MS';
}

h1{
  font-family: 'Comic Sans MS';
}

input{
  font-family: 'Comic Sans MS';
  font-size: 30px;
}

.Bio{
 border-style: solid;
border-radius: 5px;
grid-column: 2/ span 1;
grid-row: 1/ span 1;
}

.Pronouns{
 border-style: solid;
border-radius: 5px;
max-height: 120px;

}


.Overall{
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);

}
 </style>


