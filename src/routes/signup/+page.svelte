<!DOCTYPE <html>
<html lang="en">
<head>
<meta charset="8">
<meta name="viewport" content="width-device-width, initial-scale=1.0, user-scalable=no">
<style>
.form-container{
    text-align: center;
        max-width: 900px;
        margin: 0 auto;
        background-color: #ffffff;
        border-left: 1px solid #c0c0c0;
        border-right: 1px solid #c0c0c0;
        border-bottom: 200px solid #ffffff;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 15px;
        padding: 15px; 
}

.label{
    padding: 10px;
}

a.button {
    padding: 1px 6px;
    border: 1px outset buttonborder;
    border-radius: 3px;
    color: #070707;
    background-color: #e7e7e7;
    text-decoration: none;
}
</style>

<script>import { goto } from '$app/navigation';
    import { resolve } from '$app/paths';
    /*on:click={() => goto(resolve('/'))}**/
</script>

</head>

<body>
<div class="form-container">
<section>
<div>
    <h2 class="form">Sign Up now to access the wonders Blog N' Log has to offer!!</h2>
   <form method="POST" action="">
	<label class="label">
		Email:
		<input type="email" id="user-email" required
         placeholder="you@example.com">
	</label>
	<label>
		Password:
		<input type="password" id="user-password" required
        placeholder="GoodPassword"

         minlength="8">
	</label>
	<!--<a href="/" class="button">Sign Up</a>-->
    <button type="submit">Sign Up</button>
</form>
</div>
</section>   
</div>

</body>
</html>    