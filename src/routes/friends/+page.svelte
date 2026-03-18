<div class="grid-container">
  <div class="item1">Username</div>
  <div class="item2">Profile Picture</div>
  <div class="item3">Send Friend Request</div>
  <div class="item4">Message</div>
  <div class="item5">Name</div>
  <div class="item6">Pronouns</div>
  <div class="item7">User Bio</div>
  <div class="item8">Post 1</div>
  <div class="item9">Post 2</div>
  <div class="item10">Post 3</div>
  
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
.item7 { grid-area: bio;}
.item8 { grid-area: post1;}
.item9 { grid-area: post2;}
.item10 { grid-area: post3;}


</style>