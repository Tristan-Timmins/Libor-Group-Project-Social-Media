<script>
  import { asset } from "$app/paths";
</script>

<div class="grid-container">
  <div class="item1">xX_Frog_Gamer_Xx</div>
  <div class="item2">
    <img src={asset("/images/pfp1.png")}/>

  </div>

  <!---Items 8,9 and 10 are the users 3 most recent posts--->

  <div class="item3">Send Friend Request</div>
  <div class="item4">Message</div>
  <div class="item5">Frog Gamer</div>
  <div class="item6">She/Her</div>
  <div class="item7">Simply a gamer XD. 
    Im quite awesome sauce! LOL XD!!!
  I'm a fan of Star Wars and My Little Pony. I like gaming, especially
Mario Galaxy! If you ever wanna chat about anything really, my 
messages are always open! </div>
  <div class="item8">After 3 months of grinding, I finally collected all 50 rare Neopets! is anyone else collecting?  </div>
  <div class="item9"> I'm thinking of starting a Youtube channel. Any pieces of advice?</div>
  <div class="item10">I don't know how long I've spent on this website, and honestly I can't stop</div>
  
</div>




<style>



.grid-container {
  display: grid;
  grid-template-areas:
  'username username username username username username'
  'picture picture picture picture request request'
  'picture picture picture picture message message'
  'name name name name name name'
  'pronouns pronouns pronouns pronouns pronouns pronouns'
  'bio bio bio post1 post1 post1'
  'bio bio bio post2 post2 post2'
  'bio bio bio post3 post3 post3';
  grid-gap: 10px;
  background-color: rgb(218, 98, 255);
  padding: 10px;
}


.grid-container > div {
  background-color: rgba(201, 244, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}

.item1 { 
  grid-area: username; 
color: rgba(255, 54, 54, 0.8); 
}
.item2 { grid-area: picture;
width: 61%; }

.item2 > img {
  max-width: 350px;
  max-height: 350px;

  
  border-style: solid;
border-radius: 5px;
max-width: 500px;
max-height: 500px;

}

.item3 { grid-area: request; }
.item4 { grid-area: message; }
.item5 { grid-area: name;
width: 50%;}
.item6 { grid-area: pronouns;
width: 50%;}
.item7 { grid-area: bio;}
.item8 { grid-area: post1;}
.item9 { grid-area: post2;}
.item10 { grid-area: post3;}


</style>