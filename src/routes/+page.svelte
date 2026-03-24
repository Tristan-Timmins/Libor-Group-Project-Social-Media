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

    // State for 2000s styling (will be expanded in later commits)
    let showRetroStyle = true; // Toggle this to switch between old and new design
</script>

<!-- Page Container -->
<div class="home-container" class:retro-style={showRetroStyle}>
    <!-- About Teaser Section -->
    <section class="about-teaser">
        <h2>Welcome!</h2>
        <p>
            Feel free to hang out here. 
        </p>
        <a href="{resolve('/aboutus')}" class="learn-more">Want to know more? Check out The Founders →</a>
    </section>
    
    <div class="friends-section">
        <!-- Friends Section will be replaced with retro version in next commit -->
        THIS IS THE FRIENDS SECTION
    </div>

    <div class="recent-posts">
        YOUR RECENT POSTS
    </div>

    <div class="friends-posts">
        FRIENDS RECENT POSTS
    </div>
</div>

<style>
    /* Keep your existing styles */
    .home-container {
        display: grid;
        grid-template-columns: repeat(3, [col-start] 1fr);
        gap: 20px;
    }
    
    /* About Teaser */
    .about-teaser {
        text-align: center;
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
    
    /* Desktop Formatting */
    @media (min-width: 769px) {
        .friends-section {
            grid-column: col-start 1 / span 1;
            grid-row: 2;
            background-color: blueviolet;
            color: aliceblue;
            height: 800px;
        }
        .recent-posts {
            grid-column: col-start 2 / span 1;
            grid-row: 2;
            background-color: seagreen;
            color: aliceblue;
            height: 400px;
        }
        .friends-posts {
            grid-column: col-start 2 / span 1;
            grid-row: 3;
            background-color: hotpink;
            color: aliceblue;
            height: 400px;
        }
    }

    /* Phone Formatting */
    @media (max-width: 768px) {
        .friends-section {
            grid-column: col-start 1 / span 1;
            grid-row: 2;
            background-color: blueviolet;
            color: aliceblue;
            height: 800px;
        }
        .recent-posts {
            grid-column: col-start 1 / span 1;
            grid-row: 3;
            background-color: seagreen;
            color: aliceblue;
            height: 400px;
        }
        .friends-posts {
            grid-column: col-start 1 / span 1;
            grid-row: 4;
            background-color: hotpink;
            color: aliceblue;
            height: 400px;
        }
    }
    
    /* Retro styles - will be expanded in next commits */
    .retro-style .about-teaser {
        background: linear-gradient(180deg, #6699cc, #336699);
        border: 3px groove #ccccff;
        padding: 20px;
        color: white;
        text-shadow: 2px 2px 0 #000066;
    }
    
    .retro-style .about-teaser h2 {
        font-family: 'Papyrus', 'Comic Sans MS', fantasy;
        font-size: 38px;
        margin-bottom: 10px;
    }
</style>