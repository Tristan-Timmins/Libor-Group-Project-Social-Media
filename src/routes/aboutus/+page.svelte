<style>
    .item1 {grid-area: header;}
    .item2 {grid-area: left;}
    .item3 {grid-area: main;}
    .item4 {grid-area: right;}
    
    .about-container{
        text-align: center;
    }

    .grid-container{
        display: grid;
        grid-template-areas: 
            'header header header header header header'
            'left left main main right right'
            'left left main main right right';
        grid-gap: 10px;
        background-color: #074b80;
        padding: 10px;
    }

    .grid-container > div {
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 50px 0;
        font-size: 30px;
    }

</style>

<div class="about-container">
<section>
    <h2>Welcome to The Founders page...</h2>
    <p>
        We've decided to create a website to surpass all other social platforms. 
        Tired of feeling like you don't have a cool place for you and your friends to hang out?
        Well worry no more.
    </p>
</section>

<div class="grid-container">
<div class="item1">Meet The Founders!</div>
<div class="item2">Founder 1</div>
<div class="item3">Founder 2</div>
<div class="item4">Founder 3</div>
</div>

</div>



