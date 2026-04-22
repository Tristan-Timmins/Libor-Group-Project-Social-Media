<script>
    import { goto } from '$app/navigation';
    import { resolve } from '$app/paths';
    /*on:click={() => goto(resolve('/'))}**/

    let name = '';
    let password = '';

    $: isLongEnough = password.length >= 8;
    $: hasName = name;
    $: isValid = isLongEnough && hasName;
</script>

<div class="form-container">
    <section>
        <h2 class="form">
            Sign Up now to access the wonders Blog N' Log has to offer!!
        </h2>
        <form class="" method="POST" action="">
            <label class="label">
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
                
            >Sign Up</button>
            {#if isValid}
                on:click={() => goto(resolve('/'))}
            {/if}
        </form>
    </section>   
</div> 


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

.button {
    padding: 1px 6px;
    border: 1px outset buttonborder;
    border-radius: 3px;
    color: #070707;
    background-color: #e7e7e7;
    text-decoration: none;
}
</style>