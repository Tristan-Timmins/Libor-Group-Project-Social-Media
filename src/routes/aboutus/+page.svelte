<div class="about-container">
<section>
    <div>
        <h2 class="welcome-banner">Welcome to The Founders page...</h2>
    <p>
        We've decided to create a website to surpass all other social platforms. 
        Tired of feeling like you don't have a cool place for you and your friends to hang out?
        Well worry no more.
    </p>
    </div>
</section>

<div class="grid-container">
<div>Meet The Founders!</div>
<div class="item2">Founder 1: Beatrice Murphy
    
</div>
<div class="item3">Founder 2: Alex Humphrey
    
</div>
<div class="item4">Founder 3: Jimmy Jackson

</div>
</div>

</div>

<style>
    .item2 {grid-area:left;
        width: 500px;}
    .item3 {grid-area: main;
        width: 500px;}
    .item4 {grid-area: right;
        width: 500px;}
    
    .about-container{
        text-align: center;
        max-width: 900px;
        margin: 0 auto;
        background-color: #ffffff;
        border-left: 1px solid #c0c0c0;
        border-right: 1px solid #c0c0c0;
        border-bottom: 170px solid #ffffff;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
        padding: 15px; 
    }

    .grid-container{
        background-color: #074b80;
        padding: 5px;
    }

    .grid-container > div {
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 50px 0;
        font-size: 20px;
    }

    .welcome-banner{
        font-family: 'Comic Sans MS';
    }
</style>

