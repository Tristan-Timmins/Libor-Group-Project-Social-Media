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

    // State for 2000s styling
    let showRetroStyle = true;
    
    // Visitor counter (classic 2000s feature)
    let visitorCount = 18472;
    
    // Current time display
    let currentTime = new Date().toLocaleString();
    
    // Update time every second
    setInterval(() => {
        currentTime = new Date().toLocaleString();
    }, 1000);
</script>

<!-- Page Container -->
<div class="home-container" class:retro-style={showRetroStyle}>
    <!-- Classic 2000s Header with Visitor Counter -->
    <div class="top-bar">
        <div class="visitor-counter">
            <span class="counter-label">Visitors:</span>
            <span class="counter-number">{visitorCount}</span>
        </div>
        <div class="current-time">
            {currentTime}
        </div>
    </div>
    
    <!-- About Teaser Section -->
    <section class="about-teaser">
        <h2>✦ Welcome to Blog N' Post!! ✦</h2>
        <p>
            Feel free to hang out here. This site is best viewed with Internet Explorer 5+ at 800x600 resolution.
        <a href="{resolve('/aboutus/')}" class="learn-more">
            ≫ Want to know more? Check out The Founders ≪
        </a>
    </section>
    
    <div class="friends-section">
        <div class="section-header">
            <h3>My Friends</h3>
        </div>
        <div class="friends-list">
            <div class="friend-card">
                /*ADD FRIEND PFP HERE*/
                <a href="#">☆ Xx_BigManJimmy_xX ☆</a>
            </div>
            <div class="friend-card">
                /*ADD FRIEND PFP HERE*/
                <a href="#">★ Ethan Cumthorne ★</a>
            </div>
            <div class="friend-card">
                /*ADD FRIEND PFP HERE*/
                <a href="#">♦ EmoGothCyberWoman ♦</a>
            </div>
            <div class="friend-card">
                /*ADD FRIEND PFP HERE*/
                <a href="#">♥ Philip's Diary ♥</a>
            </div>
        </div>
        <div class="webring">
            <span>[Previous] [Random] [Next]</span>
        </div>
    </div>

    <div class="recent-posts">
        <div class="section-header">
            <h3>Latest Updates</h3>
        </div>
        <div class="posts-list">
            <div class="post-entry">
                <span class="post-date">[05.20.03]</span>
                <span class="post-title">Added new MIDI files!</span>
            </div>
            <div class="post-entry">
                <span class="post-date">[05.18.03]</span>
                <span class="post-title">Updated my links page</span>
            </div>
            <div class="post-entry">
                <span class="post-date">[05.15.03]</span>
                <span class="post-title">New background pattern!</span>
            </div>
        </div>
    </div>

    <div class="friends-posts">
        <div class="section-header">
            <h3>Friend's Recent Updates</h3>
        </div>
        <div class="posts-list">
            <div class="post-entry">
                <span class="post-date">[05.19.03]</span>
                <span class="post-title">Joe: New game reviews!</span>
            </div>
            <div class="post-entry">
                <span class="post-date">[05.18.03]</span>
                <span class="post-title">Sarah: Episode 25 summary</span>
            </div>
            <div class="post-entry">
                <span class="post-date">[05.17.03]</span>
                <span class="post-title">Mike: Weekend gaming results</span>
            </div>
        </div>
    </div>
    
    <!-- Classic 2000s Footer -->
    <div class="footer">
        <div class="footer-links">
            <a href="#">✦ Home ✦</a> |
            <a href="/aboutus/">✦ About ✦</a> |
            <a href="/trending/">✦ Trending ✦</a> |
            <a href="/signup/">✦ SignUp ✦</a>
        </div>
        <div class="copyright">
            © 2003-2004 My Awesome Site | Last Updated: May 20, 2003
        </div>
        <div class="browser-logos">
            /* ADD MULTIPLE LOGO IMAGES HERE */
        </div>
    </div>
</div>

<style>
    /* Global retro styles */
    .home-container {
        max-width: 1024px;
        margin: 0 auto;
        background-color: #ffffff;
        border-left: 1px solid #c0c0c0;
        border-right: 1px solid #c0c0c0;
        font-family: 'Times New Roman', 'Arial', sans-serif;
    }
    
    /* Top Bar with visitor counter */
    .top-bar {
        background: linear-gradient(180deg, #e8e8e8 0%, #c0c0c0 100%);
        border-bottom: 2px groove #808080;
        padding: 5px 20px;
        display: flex;
        justify-content: space-between;
        font-size: 11px;
        font-family: 'Courier New', monospace;
    }
    
    .visitor-counter {
        background: #000000;
        color: #00ff00;
        padding: 2px 8px;
        font-family: 'Courier New', monospace;
        font-weight: bold;
    }
    
    .counter-label {
        color: #ffffff;
    }
    
    .counter-number {
        background: #000000;
        padding: 0 4px;
    }
    
    .current-time {
        background: #f0f0f0;
        padding: 2px 8px;
        border: 1px inset #808080;
    }
    
    /* Layout grid */
    .home-container {
        display: grid;
        grid-template-columns: repeat(3, [col-start] 1fr);
        gap: 15px;
        padding: 15px;
    }
    
    /* Section headers */
    .section-header {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 15px;
        border-bottom: 2px ridge #c0c0c0;
        padding-bottom: 5px;
    }
    
    .section-header h3 {
        margin: 0;
        font-family: 'Comic Sans MS', 'Arial', sans-serif;
        font-size: 18px;
        color: #663399;
    }
    
    /* About Teaser */
    .about-teaser {
        text-align: center;
        grid-column: col-start 1 / span 3;
        grid-row: 1;
        background: #f8f0e0;
        border: 3px ridge #c0a080;
        padding: 20px;
        margin-bottom: 10px;
    }

    .about-teaser h2 {
        font-family: 'Comic Sans MS', 'Papyrus', fantasy;
        margin-bottom: var(--space-sm);
        font-size: 28px;
        color: #cc6600;
    }

    .about-teaser p {
        font-size: 14px;
        color: #333333;
        max-width: 60ch;
        margin: 0 auto var(--space-sm) auto;
    }

    .learn-more {
        font-size: 12px;
        color: #9900cc;
        text-decoration: none;
        background: #ffffcc;
        padding: 5px 15px;
        border: 2px outset #ffcc99;
        display: inline-block;
    }
    
    .learn-more:hover {
        border-style: inset;
        background: #ffcc99;
    }
    
    /* Friends Section */
    .friends-section {
        grid-column: col-start 1 / span 1;
        grid-row: 2;
        background: #e6f0ff;
        border: 2px ridge #6699cc;
        padding: 15px;
    }
    
    .friends-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    
    .friend-card {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 5px;
        border-bottom: 1px dotted #6699cc;
    }
    
    .friend-card a {
        color: #3366cc;
        text-decoration: none;
        font-family: 'Comic Sans MS', sans-serif;
        font-size: 12px;
    }
    
    .friend-card a:hover {
        text-decoration: underline;
        color: #ff6600;
    }
    
    .webring {
        margin-top: 15px;
        text-align: center;
        font-size: 11px;
        background: #ffffcc;
        padding: 5px;
        border: 1px dashed #ff9966;
    }
    
    /* Recent Posts Sections */
    .recent-posts {
        grid-column: col-start 2 / span 1;
        grid-row: 2;
        background: #fff0e6;
        border: 2px ridge #ff9966;
        padding: 15px;
    }
    
    .friends-posts {
        grid-column: col-start 2 / span 1;
        grid-row: 3;
        background: #f0ffe6;
        border: 2px ridge #66cc66;
        padding: 15px;
    }
    
    .posts-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
    .post-entry {
        padding: 8px;
        background: #ffffcc;
        border-left: 4px solid #ff9966;
        font-size: 12px;
    }
    
    .post-date {
        font-family: 'Courier New', monospace;
        color: #666666;
        font-weight: bold;
    }
    
    .post-title {
        margin-left: 10px;
        color: #333333;
    }
    
    /* Footer */
    .footer {
        grid-column: col-start 1 / span 3;
        grid-row: 4;
        background: linear-gradient(180deg, #e8e8e8 0%, #c0c0c0 100%);
        border-top: 2px groove #808080;
        padding: 15px;
        text-align: center;
        margin-top: 20px;
    }
    
    .footer-links {
        margin-bottom: 10px;
        font-size: 12px;
    }
    
    .footer-links a {
        color: #663399;
        text-decoration: none;
        margin: 0 5px;
    }
    
    .footer-links a:hover {
        text-decoration: underline;
    }
    
    .copyright {
        font-size: 10px;
        color: #666666;
        margin-bottom: 10px;
    }
    
    /* Desktop Formatting */
    @media (min-width: 769px) {
        .home-container {
            grid-template-columns: repeat(3, 1fr);
        }
        
        .recent-posts {
            grid-row: 2;
        }
        
        .friends-posts {
            grid-row: 3;
        }
    }

    /* Phone Formatting */
    @media (max-width: 768px) {
        .home-container {
            grid-template-columns: 1fr;
        }
        
        .about-teaser {
            grid-column: 1;
        }
        
        .friends-section,
        .recent-posts,
        .friends-posts,
        .footer {
            grid-column: 1;
        }
        
        .recent-posts {
            grid-row: 3;
        }
        
        .friends-posts {
            grid-row: 4;
        }
        
        .footer {
            grid-row: 5;
        }
    }
</style>