<script>
    import { fade } from 'svelte/transition';
    import { resolve } from '$app/paths';
	import { goto } from '$app/navigation';
    import { CatalogueCard, Modal } from '$lib/components';
    import { catalogue } from '$lib/stores/catalogueStore.js';
    
    /**
     * Select a few featured items — e.g., first 4 items
	 * @type {any[]}
	 */
    let featuredItems = [];

    $: $catalogue && (featuredItems = $catalogue.slice(0, 4));

</script>

<!-- Page Container -->
<div class="home-container">

    <!-- About Teaser Section -->
    <section class="about-teaser">
        <h2>Welcome!</h2>
        <p>
            Feel free to hang out here. 
        </p>
        <a href="{resolve('/aboutus')}" class="learn-more">Want to know more? Check out The Founders →</a>
    </section>
    <div class = "friends-section">
    <!--Friends Section-->
    THIS IS THE FRIENDS SECTION
    </div>

    <div class = "recent-posts">
        YOUR RECENT POSTS
    </div>

    <div class = "friends-posts">
        FRIENDS RECENT POSTS
    </div>
</div>
<style>
    
    .home-container {
        display: grid;
        grid-template-columns: repeat(3, [col-start] 1fr);
        gap: 20px;
    }
    
    /* About Teaser */
    .about-teaser {
        text-align: center;
        /*padding: var(--space-lg) var(--space-md);
        /*background-color: var(--color-background);
        border-top: var(--border-default);
        background: linear-gradient(to top, var(--color-surface), transparent);
        background-image: url('/images/backgrounds/scroll-teaser.png');*/
        /*background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-blend-mode: overlay;*/
        grid-column: col-start 1 / span 1;
        grid-row: 1;
    }

    .about-teaser h2 {
        font-family: var(--font-heading);
        margin-bottom: var(--space-sm);
    }

    .about-teaser p {
        font-size: var(--font-base);
        color: var(--text-secondary);
        max-width: 60ch;
        margin: 0 auto var(--space-sm) auto;
    }

    .learn-more {
        font-size: var(--font-sm);
        color: var(--color-accent);
        text-decoration: none;
    }

   @media{
    .friends-section
    {
        grid-column: col-start 1 / span 1;
        grid-row: 2;
        background-color: blueviolet;
        color: aliceblue;
        height: 800px;
    }
    .recent-posts
    {
        grid-column: col-start 2 / span 1;
        grid-row: 2;
        background-color: seagreen;
        color: aliceblue;
        height: 400px;
    }
    .friends-posts
    {
        grid-column: col-start 2 / span 1;
        grid-row: 3;
        background-color: hotpink;
        color: aliceblue;
        height: 400px;
    }
   }
</style>
