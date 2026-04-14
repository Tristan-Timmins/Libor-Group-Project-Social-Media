<script>
  import { asset } from "$app/paths";
</script>

<div class="grid-container">
  <div class="item1">Trololololo94</div>
  <div class="item2"> 
     <img src={asset("/images/leScreenshot.png")}/> </div>
  <div class="item3">Send Friend Request</div>
  <div class="item4">Message</div>
  <div class="item5">TROLL!!!</div>
  <div class="item6">he/him</div>
  <div class="item7">You just got trolled epic style!!1!11!!
  </div>
  <div class="item8">xX_Frog_Gamer_Xx is mad at me because i said the phantom menace was terrible.
    sad to see people not accepting facts 
  </div>
  <div class="item9">I DONT CARE IF I GET BANNED FOR RUDE BEHAVIOR</div>
  <div class="item10">Jimmy...you know what you did</div>
  
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

.item1 { grid-area: username; }
.item2 { grid-area: picture; }
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