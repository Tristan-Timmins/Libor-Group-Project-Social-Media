<script>
  import { asset } from "$app/paths";
</script>


<div class="grid-container">
  <div class="item1">DarkEagle36</div>
  <div class="item2">
  <img src={asset("/images/nyanCat.png")}/> </div>
    <!---Items 8,9 and 10 are the users 3 most recent posts---> 

  <div class="item3">Send Friend Request</div>
  <div class="item4">Message</div>
  <div class="item5">Ethan Cumsworth</div>
  <div class="item6">He/Him</div>
  <div class="item7">"Life is a highway". You only need 3 things in life, Booze, Birds and the Footie</div>
  <div class="item8">I heard a rumor that the founders of this website are hiding something </div>
  <div class="item9">I dont rememberr the last time I played my guitar. I'm honestly too addicted to my computer.
    this website specifically LOL!
  </div>
  <div class="item10">I actually used to know one of the owners of this site. I haven't heard from them in so long.</div>
  
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
  background-color: rgb(255, 168, 53);
  padding: 10px;
}


.grid-container > div {
  background-color: rgba(255, 253, 230, 0.8);
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