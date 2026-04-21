<script>
  import { asset } from "$app/paths";
</script>

<div class="grid-container">
  <div class="item1">EmoGothCyberWoman</div>
  <div class="item2"> 
     <img src={asset("/images/animeGirl.png")}/> </div>

     <!---Items 8,9 and 10 are the users 3 most recent posts---> 

  <div class="item3">Send Friend Request</div>
  <div class="item4">Message</div>
  <div class="item5">Emily Goldsmith</div>
  <div class="item6">she/her</div>
  <div class="item7">"He was a skater boy, she said see you later boy" -Avril Lavigne </div>
  <div class="item8">have you ever loved something so much, that it hurts you?</div>
  <div class="item9">my mom wont stop telling me to get off of this website. 
    little does she know how much this place comforts me</div>
  <div class="item10">to hate is painful, but so is to love  </div>
  
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
  background-color: rgb(0, 0, 0);
  padding: 10px;
}


.grid-container > div {
  background-color: rgba(255, 161, 161, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}

.item1 { grid-area: username; }
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
.item5 { grid-area: name;}
.item6 { grid-area: pronouns;}
.item7 { grid-area: bio;
width: 75%;}
.item8 { grid-area: post1;}
.item9 { grid-area: post2;}
.item10 { grid-area: post3;}


</style>