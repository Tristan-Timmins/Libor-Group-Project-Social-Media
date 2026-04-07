<!-- src/routes/trending/+page.svelte -->
<script>
    import { fade } from 'svelte/transition';
    import { goto } from '$app/navigation';
    
    // Visitor counter (continuing the 2000s theme)
    let visitorCount = 18472;
    
    // Current time display
    let currentTime = new Date().toLocaleString();
    
    // Update time every second
    setInterval(() => {
        currentTime = new Date().toLocaleString();
    }, 1000);
    
    // Marquee text - trending specific
    let marqueeText = "★ HOT TRENDS! ★ Check out what's popular! ★ New posts every day! ★ Comment & share! ★";
    
    // Random color generator
    let bgColor = "#ffffff";
    
    function randomizeColors() {
        const colors = ["#ffffff", "#ffffcc", "#ffccff", "#ccffff", "#ffcc99", "#ccffcc"];
        bgColor = colors[Math.floor(Math.random() * colors.length)];
    }
    
    // ============================================
    // TRENDING & NEW POSTS DATA
    // ============================================
    
    // Sample posts data
    let allPosts = [
        {
            id: 1,
            title: "Just finished my NeoPets collection! 🎉",
            author: "Xx_BigManJimmy_xX",
            avatar: "🌟",
            content: "After 3 months of grinding, I finally collected all 50 rare NeoPets! Who else is collecting? Post your collections below!",
            timestamp: "2024-01-15T14:30:00",
            likes: 127,
            comments: 34,
            tags: ["gaming", "collection", "achievement"]
        },
        {
            id: 2,
            title: "HTML tutorial: How to add blink tags!",
            author: "EmoGothCyberWoman",
            avatar: "🖤",
            content: "Remember the <blink> tag? It's making a comeback! Here's how to use it properly (and why you shouldn't 😂)",
            timestamp: "2024-01-15T10:15:00",
            likes: 89,
            comments: 23,
            tags: ["coding", "tutorial", "nostalgia"]
        },
        {
            id: 3,
            title: "Rate my new desktop wallpaper!",
            author: "CoolDude99",
            avatar: "💿",
            content: "Just made this sick Matrix-style wallpaper in MS Paint. Took me 4 hours! What do you think?",
            timestamp: "2024-01-14T22:45:00",
            likes: 234,
            comments: 56,
            tags: ["art", "desktop", "matrix"]
        },
        {
            id: 4,
            title: "AIM away messages - post your best ones!",
            author: "Philip's Diary",
            avatar: "📓",
            content: "I'm reviving the art of the AIM away message. Here's mine: 'Gone to get pizza - be back in 20... or 200 😎' What's yours?",
            timestamp: "2024-01-14T18:20:00",
            likes: 156,
            comments: 89,
            tags: ["aim", "nostalgia", "chat"]
        },
        {
            id: 5,
            title: "My first website on Angelfire!",
            author: "WebMaster_Sarah",
            avatar: "✨",
            content: "Just launched my personal site on Angelfire! Check it out: www.angelfire.com/sarahs-site (under construction though!)",
            timestamp: "2024-01-14T15:10:00",
            likes: 67,
            comments: 18,
            tags: ["webdev", "angelfire", "personal"]
        },
        {
            id: 6,
            title: "Best Windows 98 themes?",
            author: "RetroGamer88",
            avatar: "🖥️",
            content: "Looking for the best Windows 98 themes. I'm tired of the classic silver. Any recommendations?",
            timestamp: "2024-01-14T12:00:00",
            likes: 45,
            comments: 27,
            tags: ["windows98", "themes", "retro"]
        }
    ];
    
    // State for likes and comments
    let posts = allPosts;
    
    // Sort posts: trending by likes+comments, new by date
    $: trendingPosts = [...posts].sort((a, b) => {
        let scoreA = a.likes + a.comments;
        let scoreB = b.likes + b.comments;
        return scoreB - scoreA;
    }).slice(0, 5);
    
    $: newPosts = [...posts].sort((a, b) => {
        return new Date(b.timestamp) - new Date(a.timestamp);
    }).slice(0, 5);
    
    // Stats
    $: totalPosts = posts.length;
    $: totalTrendingScore = trendingPosts.reduce((sum, post) => sum + post.likes + post.comments, 0);
    $: uniqueAuthors = new Set(posts.map(p => p.author)).size;
    
    // Handle like button
    function handleLike(postId) {
        const post = posts.find(p => p.id === postId);
        if (post) {
            post.likes++;
            // Trigger reactivity
            posts = [...posts];
        }
    }
    
    // Handle comment
    let showCommentModal = false;
    let currentPost = null;
    let commentText = "";
    
    function openCommentModal(post) {
        currentPost = post;
        commentText = "";
        showCommentModal = true;
    }
    
    function addComment() {
        if (commentText.trim() && currentPost) {
            currentPost.comments++;
            posts = [...posts];
            showCommentModal = false;
            commentText = "";
        }
    }
    
    // Guestbook (same as home page)
    let showGuestbook = false;
    let guestbookEntries = [
        { name: "Xx_BigManJimmy_xX", message: "These posts are fire! 🔥", date: "01.15.04" },
        { name: "EmoGothCyberWoman", message: "Love the trending section!", date: "01.14.04" },
        { name: "CoolDude99", message: "First comment on trending page!", date: "01.14.04" }
    ];
    
    let newEntry = { name: "", message: "" };
    
    function addGuestbookEntry() {
        if (newEntry.name && newEntry.message) {
            guestbookEntries.unshift({
                ...newEntry,
                date: new Date().toLocaleDateString()
            });
            newEntry = { name: "", message: "" };
            showGuestbook = false;
        }
    }
</script>

<!-- Page Container -->
<div class="trending-container" style="background-color: {bgColor}">
    
    <!-- Top Bar -->
    <div class="top-bar">
        <div class="visitor-counter">
            <span class="counter-label">Visitors:</span>
            <span class="counter-number">{visitorCount}</span>
        </div>
        <div class="current-time">
            {currentTime}
        </div>
    </div>
    
    <!-- Marquee -->
    <div class="marquee-container">
        <div class="marquee">
            {marqueeText}
        </div>
    </div>
    
    <!-- Page Header -->
    <div class="page-header">
        <h1>🔥 TRENDING & NEW POSTS 🔥</h1>
        <p>What's hot on Blog N' Log right now!</p>
    </div>
    
    <!-- Stats Dashboard -->
    <div class="stats-dashboard">
        <div class="stat-card">
            <div class="stat-number">{totalPosts}</div>
            <div class="stat-label">Total Posts</div>
        </div>
        <div class="stat-card">
            <div class="stat-number">{trendingPosts.length}</div>
            <div class="stat-label">Trending Now</div>
        </div>
        <div class="stat-card">
            <div class="stat-number">{totalTrendingScore}</div>
            <div class="stat-label">Total Engagement</div>
        </div>
        <div class="stat-card">
            <div class="stat-number">{uniqueAuthors}</div>
            <div class="stat-label">Active Users</div>
        </div>
    </div>
    
    <!-- Two Column Layout -->
    <div class="two-columns">
        
        <!-- LEFT COLUMN: TRENDING POSTS -->
        <div class="trending-section">
            <div class="section-header">
                <h2>🔥 TRENDING NOW 🔥</h2>
                <div class="header-decoration">✦✦✦</div>
            </div>
            
            <div class="posts-list">
                {#each trendingPosts as post, index}
                    <div class="post-card trending" transition:fade>
                        <div class="trending-rank">#{index + 1}</div>
                        <div class="post-header">
                            <div class="post-author">
                                <span class="author-avatar">{post.avatar}</span>
                                <span class="author-name">{post.author}</span>
                            </div>
                            <div class="post-date">
                                {new Date(post.timestamp).toLocaleDateString()}
                            </div>
                        </div>
                        <h3 class="post-title">{post.title}</h3>
                        <p class="post-content">{post.content}</p>
                        <div class="post-tags">
                            {#each post.tags as tag}
                                <span class="tag">#{tag}</span>
                            {/each}
                        </div>
                        <div class="post-actions">
                            <button class="action-btn like-btn" on:click={() => handleLike(post.id)}>
                                ❤️ {post.likes} Likes
                            </button>
                            <button class="action-btn comment-btn" on:click={() => openCommentModal(post)}>
                                💬 {post.comments} Comments
                            </button>
                        </div>
                        <div class="trending-flame">🔥 HOT POST 🔥</div>
                    </div>
                {/each}
            </div>
        </div>
        
        <!-- RIGHT COLUMN: NEW POSTS -->
        <div class="new-section">
            <div class="section-header">
                <h2>🆕 LATEST POSTS 🆕</h2>
                <div class="header-decoration">✦✦✦</div>
            </div>
            
            <div class="posts-list">
                {#each newPosts as post}
                    <div class="post-card new" transition:fade>
                        <div class="post-header">
                            <div class="post-author">
                                <span class="author-avatar">{post.avatar}</span>
                                <span class="author-name">{post.author}</span>
                            </div>
                            <div class="post-date">
                                {new Date(post.timestamp).toLocaleDateString()}
                            </div>
                        </div>
                        <h3 class="post-title">{post.title}</h3>
                        <p class="post-content">{post.content}</p>
                        <div class="post-tags">
                            {#each post.tags as tag}
                                <span class="tag">#{tag}</span>
                            {/each}
                        </div>
                        <div class="post-actions">
                            <button class="action-btn like-btn" on:click={() => handleLike(post.id)}>
                                ❤️ {post.likes} Likes
                            </button>
                            <button class="action-btn comment-btn" on:click={() => openCommentModal(post)}>
                                💬 {post.comments} Comments
                            </button>
                        </div>
                        <div class="new-badge">🆕 NEW</div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
    
    <!-- Random Color Button -->
    <div class="randomizer">
        <button on:click={randomizeColors} class="random-btn">
            🎨 Click for Random Colors! 🎨
        </button>
    </div>
    
    <!-- Footer -->
    <div class="footer">
        <div class="footer-links">
            <a href="/">✦ Home ✦</a> |
            <a href="/aboutus/">✦ About ✦</a> |
            <a href="/trending/">✦ Trending ✦</a> |
            <a href="/signup/">✦ SignUp ✦</a>
        </div>
        <div class="copyright">
            © 2003-2004 Blog N' Log Team | Last Updated: January 15, 2004
        </div>
        <div class="browser-logos">
            <span>Best viewed in Netscape Navigator 4.0+</span>
        </div>
    </div>
    
    <!-- Guestbook Button -->
    <button on:click={() => showGuestbook = true} class="guestbook-btn">
        ✍️ Sign My Guestbook! ✍️
    </button>
    
    <!-- Guestbook Modal -->
    {#if showGuestbook}
        <div class="guestbook-modal">
            <div class="guestbook-content">
                <div class="guestbook-header">
                    <h3>✧✧✧ Guestbook ✧✧✧</h3>
                    <button on:click={() => showGuestbook = false} class="close-btn">✖</button>
                </div>
                
                <div class="guestbook-entries">
                    <h4>Recent Signatures:</h4>
                    {#each guestbookEntries as entry}
                        <div class="guestbook-entry">
                            <div class="entry-header">
                                <strong>{entry.name}</strong>
                                <span class="entry-date">[{entry.date}]</span>
                            </div>
                            <p>{entry.message}</p>
                        </div>
                    {/each}
                </div>
                
                <div class="guestbook-form">
                    <h4>Sign Your Name:</h4>
                    <input bind:value={newEntry.name} placeholder="Your cool name here..." />
                    <textarea bind:value={newEntry.message} placeholder="Leave a message!" rows="3"></textarea>
                    <button on:click={addGuestbookEntry}>✍️ Sign Guestbook ✍️</button>
                </div>
            </div>
        </div>
    {/if}
    
    <!-- Comment Modal -->
    {#if showCommentModal}
        <div class="comment-modal">
            <div class="comment-content">
                <div class="comment-header">
                    <h3>💬 Add a Comment</h3>
                    <button on:click={() => showCommentModal = false} class="close-btn">✖</button>
                </div>
                <div class="comment-post-info">
                    <strong>Replying to:</strong> {currentPost?.title}
                </div>
                <textarea bind:value={commentText} placeholder="Write your comment here..." rows="4"></textarea>
                <div class="comment-actions">
                    <button on:click={addComment} class="submit-comment">💬 Post Comment</button>
                    <button on:click={() => showCommentModal = false} class="cancel-comment">Cancel</button>
                </div>
            </div>
        </div>
    {/if}
</div>

<style>
    /* ============================================
       GLOBAL STYLES
    ============================================ */
    .trending-container {
        max-width: 1280px;
        margin: 0 auto;
        background-color: #ffffff;
        border-left: 1px solid #c0c0c0;
        border-right: 1px solid #c0c0c0;
        font-family: 'Times New Roman', 'Arial', sans-serif;
        padding: 15px;
        transition: background-color 0.3s ease;
    }
    
    /* ============================================
       TOP BAR
    ============================================ */
    .top-bar {
        background: linear-gradient(180deg, #e8e8e8 0%, #c0c0c0 100%);
        border-bottom: 2px groove #808080;
        padding: 5px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 11px;
        font-family: 'Courier New', monospace;
        margin-bottom: 10px;
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
    
    /* ============================================
       MARQUEE
    ============================================ */
    .marquee-container {
        background: #000066;
        color: #ffff00;
        padding: 5px;
        overflow: hidden;
        white-space: nowrap;
        font-family: 'Courier New', monospace;
        font-size: 12px;
        border: 1px inset #ffcc00;
        margin-bottom: 20px;
    }
    
    .marquee {
        display: inline-block;
        animation: marquee 20s linear infinite;
    }
    
    @keyframes marquee {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
    }
    
    /* ============================================
       PAGE HEADER
    ============================================ */
    .page-header {
        text-align: center;
        background: linear-gradient(135deg, #ffcc99, #ff9966);
        padding: 30px;
        margin-bottom: 20px;
        border: 3px ridge #cc6600;
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
    }
    
    .page-header h1 {
        font-family: 'Comic Sans MS', cursive;
        font-size: 36px;
        margin: 0;
        color: #663300;
        text-shadow: 2px 2px 0px #ffcc66;
    }
    
    .page-header p {
        font-size: 14px;
        color: #333;
        margin-top: 10px;
    }
    
    /* ============================================
       STATS DASHBOARD
    ============================================ */
    .stats-dashboard {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 15px;
        margin-bottom: 30px;
    }
    
    .stat-card {
        background: linear-gradient(135deg, #e6f0ff, #cce0ff);
        border: 2px ridge #6699cc;
        text-align: center;
        padding: 15px;
        transition: transform 0.2s;
    }
    
    .stat-card:hover {
        transform: scale(1.05);
        background: linear-gradient(135deg, #ffe6e6, #ffcccc);
    }
    
    .stat-number {
        font-size: 32px;
        font-weight: bold;
        color: #cc6600;
        font-family: 'Courier New', monospace;
    }
    
    .stat-label {
        font-size: 12px;
        color: #666;
        margin-top: 5px;
    }
    
    /* ============================================
       TWO COLUMN LAYOUT
    ============================================ */
    .two-columns {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 25px;
        margin-bottom: 30px;
    }
    
    /* Section Headers */
    .section-header {
        text-align: center;
        margin-bottom: 20px;
        padding-bottom: 10px;
        border-bottom: 3px ridge #ff9966;
    }
    
    .section-header h2 {
        font-family: 'Comic Sans MS', cursive;
        font-size: 24px;
        color: #cc6600;
        margin: 0;
    }
    
    .header-decoration {
        font-size: 12px;
        color: #ff9966;
        margin-top: 5px;
    }
    
    /* Posts List */
    .posts-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    
    /* Post Cards */
    .post-card {
        background: #ffffcc;
        border: 2px ridge #ccaa77;
        padding: 15px;
        position: relative;
        transition: all 0.2s ease;
    }
    
    .post-card:hover {
        transform: translateY(-5px);
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
    }
    
    .post-card.trending {
        border-left: 8px solid #ff4400;
    }
    
    .post-card.new {
        border-left: 8px solid #44ff00;
    }
    
    .post-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        padding-bottom: 8px;
        border-bottom: 1px dotted #ccaa77;
    }
    
    .post-author {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    
    .author-avatar {
        font-size: 20px;
    }
    
    .author-name {
        font-weight: bold;
        color: #663399;
        font-family: 'Comic Sans MS', sans-serif;
    }
    
    .post-date {
        font-size: 10px;
        color: #886633;
        font-family: 'Courier New', monospace;
    }
    
    .post-title {
        font-size: 18px;
        margin: 10px 0;
        color: #cc6600;
    }
    
    .post-content {
        font-size: 13px;
        color: #333;
        line-height: 1.4;
        margin-bottom: 12px;
    }
    
    .post-tags {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        margin-bottom: 12px;
    }
    
    .tag {
        background: #ffe6cc;
        font-size: 10px;
        padding: 2px 6px;
        border: 1px solid #ff9966;
        font-family: 'Courier New', monospace;
    }
    
    .post-actions {
        display: flex;
        gap: 15px;
    }
    
    .action-btn {
        background: linear-gradient(180deg, #e8e8e8 0%, #c0c0c0 100%);
        border: 2px outset #d0d0d0;
        padding: 5px 12px;
        cursor: pointer;
        font-size: 12px;
        font-family: inherit;
        transition: all 0.1s;
    }
    
    .action-btn:active {
        border-style: inset;
    }
    
    .like-btn:hover {
        background: linear-gradient(180deg, #ffcccc 0%, #ff9999 100%);
    }
    
    .comment-btn:hover {
        background: linear-gradient(180deg, #ccffcc 0%, #99ff99 100%);
    }
    
    .trending-rank {
        position: absolute;
        top: -10px;
        left: -10px;
        background: #ff4400;
        color: white;
        font-weight: bold;
        padding: 5px 10px;
        font-size: 14px;
        border: 2px solid #ffcc00;
        transform: rotate(-15deg);
    }
    
    .trending-flame {
        position: absolute;
        bottom: -10px;
        right: -10px;
        background: #ff4400;
        color: #ffff00;
        padding: 3px 8px;
        font-size: 10px;
        font-weight: bold;
        transform: rotate(5deg);
    }
    
    .new-badge {
        position: absolute;
        top: -10px;
        right: -10px;
        background: #44ff00;
        color: #006600;
        padding: 3px 8px;
        font-size: 10px;
        font-weight: bold;
        transform: rotate(5deg);
        border: 1px solid #006600;
    }
    
    /* ============================================
       RANDOM COLOR BUTTON
    ============================================ */
    .randomizer {
        text-align: center;
        margin: 20px 0;
    }
    
    .random-btn {
        background: linear-gradient(180deg, #ffcc99 0%, #ff9966 100%);
        border: 2px outset #ffaa66;
        font-family: 'Comic Sans MS', sans-serif;
        padding: 8px 20px;
        cursor: pointer;
        font-size: 14px;
    }
    
    .random-btn:active {
        border-style: inset;
    }
    
    /* ============================================
       FOOTER
    ============================================ */
    .footer {
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
    }
    
    /* ============================================
       GUESTBOOK MODAL
    ============================================ */
    .guestbook-btn {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(180deg, #ffcc99 0%, #ff9966 100%);
        border: 3px outset #ffaa66;
        font-family: 'Comic Sans MS', sans-serif;
        padding: 10px 15px;
        cursor: pointer;
        font-size: 14px;
        z-index: 1000;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    }
    
    .guestbook-modal, .comment-modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
    }
    
    .guestbook-content, .comment-content {
        background: #ffffcc;
        border: 8px ridge #ccaa77;
        width: 500px;
        max-width: 90%;
        max-height: 80%;
        overflow-y: auto;
        padding: 20px;
        font-family: 'Comic Sans MS', sans-serif;
    }
    
    .comment-content {
        background: #ffffff;
    }
    
    .guestbook-header, .comment-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 3px groove #ccaa77;
        margin-bottom: 15px;
        padding-bottom: 10px;
    }
    
    .close-btn {
        background: #ff6666;
        border: 2px outset #ff9999;
        cursor: pointer;
        font-size: 16px;
        width: 25px;
        height: 25px;
    }
    
    .guestbook-entry {
        background: #fff9e6;
        border: 1px solid #ccaa77;
        padding: 10px;
        margin-bottom: 10px;
    }
    
    .guestbook-form, .comment-post-info {
        margin-top: 20px;
    }
    
    .guestbook-form input,
    .guestbook-form textarea,
    .comment-content textarea {
        border: 2px inset #ccaa77;
        background: white;
        padding: 8px;
        font-family: inherit;
        font-size: 12px;
        width: 100%;
        margin-bottom: 10px;
    }
    
    .comment-actions {
        display: flex;
        gap: 10px;
        margin-top: 10px;
    }
    
    .submit-comment, .cancel-comment {
        padding: 8px 15px;
        cursor: pointer;
        font-family: 'Comic Sans MS', sans-serif;
        border: 2px outset #ccaa77;
    }
    
    /* ============================================
       MOBILE RESPONSIVE
    ============================================ */
    @media (max-width: 768px) {
        .two-columns {
            grid-template-columns: 1fr;
        }
        
        .stats-dashboard {
            grid-template-columns: repeat(2, 1fr);
        }
        
        .page-header h1 {
            font-size: 24px;
        }
    }
</style>