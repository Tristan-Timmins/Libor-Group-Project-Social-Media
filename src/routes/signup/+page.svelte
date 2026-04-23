<script>
    import { goto } from '$app/navigation';
    import { resolve } from '$app/paths';
    /*on:click={() => goto(resolve('/'))}**/

    let name = '';
    let password = '';
    let submitted = false;

    $: isLongEnough = password.length >= 8;
    $: hasName = name;
    $: isValid = isLongEnough && hasName;


    function submitForm() {
        console.log("here");
         event.preventDefault();
        submitted = true;
        // Set Item
        localStorage.setItem("Username", "name");
        localStorage.getItem("Username");
    }
</script>

<div class="form-container">
    <section>
        <h2 class="form-title">
            Sign Up now to access the wonders Blog N' Log has to offer!!
        </h2>
        <br>
        <form class="form" on:submit={() => submitForm()}>
            <label>
                Name:
                <input 
                    type="name" 
                    id="user-name" 
                    placeholder="Your Name"
                    required
                >
            </label>
            <label>
                Password:
                <input 
                    type="password" 
                    id="user-password"
                    placeholder="GoodPassword"
                    minlength="8"
                    required
                >
            </label>
            <!--<a href="/" class="button">Sign Up</a>-->
            <button 
                type="submit" 
                class="button"
            >Sign Up</button>
            {#if isValid}
                <button on:click={() => goto(resolve('/'))}>Return to Homepage</button>
            {/if}
        </form>
    </section>  
    
    <div>
        <h3 class="welcome-message">
            {#if submitted != false}
                ❗Welcome Home, New User❗
            {/if}
        </h3>
    </div>
</div> 

<style>
/*MAIN CONTAINER FOR FORM**/
.form-container{
    text-align: center;
    max-width: 900px;
    margin: 0 auto;
    background-color: #fce1be;
    border-left: 1px solid #c0c0c0;
    border-right: 1px solid #c0c0c0;
    border-bottom: 100px solid #ffffff;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 15px;
    padding: 15px; 
}
/*TITLE**/
.form-title{
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
    font-size: large;
    margin: 0 auto;
    background-color: #90c5fb;
    border: 5px solid #3195f9;
    padding: 10px;
    border-radius: 5px;
    padding: 10px;
}
/*FORM CONTENT**/
.form{
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
    font-size: large;
    margin: 0 auto;
    font-weight: bold;
}

.label{
    padding: 10px;
}

.button{
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    border-radius: 10px;
    background-color: #a2fb90;
    border:5px solid #2df852;
}
/*MESSAGE AFTER FORM SUBMISSION**/
.welcome-message{
    max-width: 900px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    
    animation: messageGlitch 0.15s infinite steps(4);
    border: 5px solid;
    border-width: 0;
    padding: 15px;
}

@keyframes messageGlitch {
    0% { transform: translate(0); color: #ff00cc; text-transform: uppercase; transform: scale(0.9); }
    15% { transform: translate(-5px, 3px); color: #00ffff; text-transform: uppercase; transform: scale(0.91);}
    20% { transform: translate(2px, -3px); color: #ff0000; text-transform: lowercase; transform: scale(0.95);}
    45% { transform: translate(-4px, 0); color: #ffff00; text-transform: lowercase; transform: scale(0.96);}
    70% { transform: translate(0); color: #ff00b3; text-transform: uppercase; transform: scale(0.93);}
}
</style>