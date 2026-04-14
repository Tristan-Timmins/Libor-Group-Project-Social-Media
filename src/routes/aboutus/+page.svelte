<div class="about-container">
<section>
<div>
    <div>
        <h2 class="welcome-banner">Welcome to The Founders Page!</h2>
    <p class="welcome-paragraph">
        We've decided to create a website to surpass all other social platforms. 
        Tired of feeling like you don't have a cool place for you and your friends to hang out?
        Well worry no more.
    </p>
    </div>
</section>
<div>
    <h2 class="founders">Meet the Founders!</h2>
</div>

<section class="info-section">
    <div class="beatrice">Founder 1: Beatrice Murphy
        <p class="beatrice-text">
            Beatrice was born in the suburbs as an only child. Since she was little, she dreamed of 
            creating a site where she could talk to her friends at all times. Other sites didn't 
            meet her needs, and so she put together a team of the people she trusted the most to
            get the job done!
        </p>
    </div>
    <div class="alex">Founder 2: Alex Humphrey
        <p class="alex-text">
            Alex never cared much for social media, but when she heard Beatrice wanted to make a 
            place that she and her friends always dreamed of, she couldn't turn the offer down!
            Having a profound knowledge of computer science, putting the site together was 
            as easy as could be!
        </p>
    </div>
    <div class="jimmy">Founder 3: Jimmy Jackson
        <p class="jimmy-text">
            Oh Jimmy, god where do I even begin? I get that he's a trusted friend of Beatrice's but 
            seriously? Jimmy..grew up in a broken home, and used football as an escape from the hurt
            the world dealt him when he was little. He agreed to help if he could use it to start 
            a football forum within the site. We reluctantly agreed..
        </p>
    </div>

</section>

<h2 class="closing-text">Now that you've met The Founders, support their noble cause and join us today! 
    Blog N' Log was designed by folks like you, for you!! You'll never want to leave!!

    <p class="closing-pg">Sign up now and create an account to get chatting with your friends. 
        What are you waiting for? Do it now!
    You don't want our idea to fail, do you?</p>
</h2>

</div>

<style>
    .item2 {grid-area:left;
        width: 500px;}
    .item3 {grid-area: main;
        width: 500px;}
    .item4 {grid-area: right;
        width: 500px;}
    /*CONTAINER FOR BEGINNING OF PAGE**/
    .about-container{
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
    /*INTRO PARAGRAPH**/
    .welcome-banner{
        font-family: 'Comic Sans MS';
        text-align: center;
        margin: 0;
        padding: 10px;
        border: 5px solid #646e96;
        border-radius: 5px;    
        box-sizing: border-box;
        background-color: #b4e3fc;
        text-shadow: 1px 2px rgb(163, 163, 255);
    }

    .welcome-paragraph{
        font-family: 'Comic Sans MS';
        color: #571b1b;
        padding: 10px;
    }
    /*FOUNDER INFORMATION SECTION**/
    .info-section{
        font-family: 'Comic Sans MS';
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        border: 5px solid #646e96;
        background-color: #b4e3fc;
    }

    .founders{
        font-family: 'Courier New', Courier, monospace;
        border: 2px solid #ff8851;
        background-color: #fcddb9;
        text-shadow: 1px 1px rgb(169, 109, 59);
    }
    /*FOUNDER 1**/
    .beatrice{
        font-family: 'Courier New', Courier, monospace;
        font-weight: bolder;
        border: 2px solid #646e96;
        border-left: 5px solid #646e96;
        padding: 5px;
    }
    .beatrice-text{
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
        font-size: small;
        padding: 10px;
    }
    
    /*FOUNDER 2**/
    .alex{
        font-family: 'Courier New', Courier, monospace;
        font-weight: bolder;
        border: 2px solid #646e96;
        padding: 5px;
    }
    .alex-text{
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
        font-size: small;
        padding: 10px;
    }
    
    /*FOUNDER 3**/
    .jimmy{
        font-family: 'Courier New', Courier, monospace;
        font-weight: bolder;
        border: 2px solid #646e96;
        padding: 5px;
    }
    .jimmy-text{
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
        font-size: small;
        padding: 10px;
    }
    /*CLOSING MESSAGE**/
    .closing-text{
        font-family: 'Comic Sans MS';
        padding: 10px;
        font-size: medium;
        border: 2px solid #e4c632;
        background-color: #fefcc3;
    }
    .closing-pg{
        font-family: 'Courier New', Courier, monospace;
        padding: 10px;
        font-size: small;
    }
</style>

