<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>::: BLOG N' LOG /// PROFILE: Glitched Jimmy :::</title>
    <style>
        /* ============================================
           RESET + ANALOG HORROR / VHS CORRUPTION
        ============================================ */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: radial-gradient(circle at 20% 30%, #0a020f, #000000);
            min-height: 100vh;
            padding: 2rem 1rem;
            font-family: 'Courier New', 'VT323', 'Lucida Console', monospace;
            position: relative;
            overflow-x: hidden;
        }

        /* VHS static + scanlines overlay */
        body::before {
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: repeating-radial-gradient(circle at 20% 40%, rgba(0,0,0,0.2), #000 2px, transparent 3px, transparent 8px);
            pointer-events: none;
            z-index: 5;
            opacity: 0.35;
            mix-blend-mode: overlay;
        }

        body::after {
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(transparent 50%, rgba(0, 0, 0, 0.4) 50%);
            background-size: 100% 4px;
            pointer-events: none;
            z-index: 6;
            opacity: 0.3;
            animation: vhsRoll 8s linear infinite;
        }

        @keyframes vhsRoll {
            0% { background-position: 0 0; }
            100% { background-position: 0 20px; }
        }

        /* glitch animations */
        @keyframes textFlicker {
            0% { text-shadow: -2px 0 red, 2px 0 blue; opacity: 0.9; }
            25% { text-shadow: 2px -1px cyan, -3px 1px magenta; letter-spacing: 0.5px; }
            50% { text-shadow: -3px 2px lime, 3px -2px red; opacity: 1; transform: skew(0.5deg); }
            75% { text-shadow: 4px 0px #ff00c1, -2px -1px #00ffea; }
            100% { text-shadow: -1px -1px red, 1px 1px blue; opacity: 0.95; }
        }

        @keyframes horizontalGlitch {
            0% { transform: translateX(0); clip-path: inset(0 0 0 0); }
            20% { transform: translateX(4px); clip-path: inset(15% 0 30% 0); }
            40% { transform: translateX(-3px); clip-path: inset(55% 0 20% 0); }
            60% { transform: translateX(2px); clip-path: inset(5% 0 70% 0); }
            80% { transform: translateX(-2px); clip-path: inset(80% 0 5% 0); }
            100% { transform: translateX(0); clip-path: inset(0 0 0 0); }
        }

        /* main container - corrupted grid */
        .profile-container {
            max-width: 1300px;
            margin: 0 auto;
            position: relative;
            z-index: 10;
        }

        /* marquee horror style */
        .marquee-container {
            background: #000000;
            color: #ff0044;
            padding: 6px;
            overflow: hidden;
            white-space: nowrap;
            font-family: monospace;
            font-size: 14px;
            border: 2px inset #ff3366;
            margin-bottom: 20px;
        }
        .marquee {
            display: inline-block;
            animation: marqueeScroll 18s linear infinite;
        }
        @keyframes marqueeScroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
        }

        /* GLITCH GRID */
        .grid-container {
            display: grid;
            grid-template-areas:
                'username username username username username username'
                'picture picture picture picture request request'
                'picture picture picture picture message message'
                'name name name name name name'
                'pronouns pronouns pronouns pronouns pronouns pronouns'
                'bio bio bio post1 post1 post1'
                'bio bio bio post2 post2 post2'
                'bio bio bio post3 post3 post3';
            grid-gap: 12px;
            background-color: #1a0033;
            padding: 20px;
            border: 4px solid #8b008b;
            box-shadow: 0 0 0 2px #ff00b3, 0 0 0 6px black, inset 0 0 20px #ff00c1;
            transition: all 0.2s ease;
            backdrop-filter: blur(1px);
        }

        .grid-container:hover {
            animation: containerGlitch 0.2s infinite steps(2);
        }

        @keyframes containerGlitch {
            0% { transform: translate(0); border-color: #ff00cc; }
            25% { transform: translate(-1px, 1px); border-color: #00ffff; }
            50% { transform: translate(2px, -1px); border-color: #ff0000; }
            75% { transform: translate(-2px, 0); border-color: #ffff00; }
            100% { transform: translate(0); border-color: #ff00b3; }
        }

        .grid-container > div {
            background-color: rgba(0, 0, 0, 0.85);
            border: 2px ridge #cc33ff;
            padding: 18px 12px;
            font-size: 1.2rem;
            font-weight: bold;
            color: #e0ffb0;
            text-align: center;
            transition: 0.1s linear;
            font-family: 'Courier New', 'VT323', monospace;
            letter-spacing: 1px;
            word-break: break-word;
            backdrop-filter: blur(2px);
            box-shadow: inset 0 0 8px #ff44dd22, 0 2px 5px black;
        }

        .grid-container > div:hover {
            animation: horizontalGlitch 0.12s infinite;
            background-color: #1e001f;
            border-color: #ff44aa;
            color: #fff0c0;
        }

        .item1 {
            grid-area: username;
            font-size: 2.2rem !important;
            background: #110022;
            text-transform: uppercase;
            letter-spacing: 5px;
            color: #ff6699;
            text-shadow: 0 0 3px red, 0 0 8px magenta;
            border-bottom: 3px solid #ff3366;
            animation: usernameGlow 1.4s infinite alternate;
        }
        @keyframes usernameGlow {
            0% { text-shadow: -2px -1px red, 2px 1px blue; letter-spacing: 3px; }
            100% { text-shadow: 4px 2px #ff00c1, -3px -1px cyan; letter-spacing: 6px; background: #2a0033; }
        }

        .item2 {
            grid-area: picture;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #000000aa !important;
            padding: 10px !important;
            position: relative;
            overflow: hidden;
        }
        .item2 > img {
            max-width: 220px;
            width: 100%;
            border: 4px solid #ff00aa;
            box-shadow: 0 0 0 2px black, 0 0 15px rgba(255, 0, 255, 0.8);
            filter: grayscale(30%) contrast(120%) brightness(0.9);
            transition: 0.2s;
            image-rendering: crisp-edges;
        }
        .item2 > img:hover {
            filter: hue-rotate(15deg) contrast(200%) brightness(0.7) blur(0.6px);
            transform: scale(1.02) skew(1deg);
            animation: imgGlitch 0.15s infinite;
        }
        @keyframes imgGlitch {
            0% { clip-path: inset(0 0 0 0); transform: translateX(0); }
            25% { clip-path: inset(5% 0 10% 0); transform: translateX(3px); }
            50% { clip-path: inset(20% 0 30% 0); transform: translateX(-2px); }
            100% { clip-path: inset(0 0 0 0); }
        }

        .item3, .item4 {
            background: #2c0b2e !important;
            font-size: 1.5rem !important;
            text-transform: uppercase;
            color: #ffb347;
            border: 2px outset #ff66cc;
            cursor: pointer;
            transition: 0.08s linear;
        }
        .item3:active, .item4:active {
            transform: scale(0.96);
            background: #5a1a5a;
            box-shadow: inset 0 0 15px red;
        }

        .item5, .item6 {
            font-size: 1.8rem;
            background: #0b001a;
            color: #b2f0ff;
            border-left: 6px solid magenta;
            border-right: 6px solid cyan;
        }

        .item7 {
            grid-area: bio;
            text-align: left;
            background: #000000cc;
            font-size: 1.1rem;
            line-height: 1.5;
            border: 1px dashed #ff44aa;
            overflow-y: auto;
            max-height: 280px;
            color: #ffc0cb;
        }
        .item7::-webkit-scrollbar { width: 8px; background: #2f0036; }
        .item7::-webkit-scrollbar-thumb { background: #ff00c3; }

        .item8, .item9, .item10 {
            background: #1c0a1f;
            border-left: 8px solid #c41eff;
            font-size: 1rem;
            padding: 12px;
            text-align: left;
            position: relative;
        }
        .item8::before, .item9::before, .item10::before {
            content: "⚠️ STATIC ⚠️";
            position: absolute;
            top: -8px;
            right: 8px;
            font-size: 0.55rem;
            background: black;
            color: #ff4d4d;
            padding: 0 4px;
        }
        .item8:hover, .item9:hover, .item10:hover {
            animation: textFlicker 0.08s infinite;
            background: #2d0040;
            border-left-color: #ff0000;
        }


        .guestbook-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: linear-gradient(180deg, #8b008b, #4a004a);
            border: 3px outset #ff44aa;
            font-family: 'Comic Sans MS', monospace;
            padding: 10px 18px;
            cursor: pointer;
            font-size: 14px;
            z-index: 1000;
            color: #ffccff;
            font-weight: bold;
            box-shadow: 0 0 12px magenta;
        }

        /* modals */
        .guestbook-modal, .corruption-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
            backdrop-filter: blur(6px);
        }
        .guestbook-content {
            background: #111111;
            border: 6px ridge #ff44aa;
            width: 500px;
            max-width: 90%;
            max-height: 80%;
            overflow-y: auto;
            padding: 20px;
            font-family: 'Courier New', monospace;
            color: #ffcc88;
        }
        .guestbook-header {
            display: flex;
            justify-content: space-between;
            border-bottom: 2px solid magenta;
            margin-bottom: 15px;
        }
        .guestbook-entry {
            background: #220022;
            margin: 10px 0;
            padding: 8px;
            border-left: 4px solid #ff44aa;
        }
        .guestbook-form input, .guestbook-form textarea {
            width: 100%;
            background: black;
            color: #0f0;
            border: 1px solid magenta;
            padding: 6px;
            margin: 6px 0;
        }
        .close-btn {
            background: #ff3366;
            border: none;
            cursor: pointer;
            padding: 0 8px;
            font-weight: bold;
        }

        @media (max-width: 800px) {
            .grid-container {
                grid-template-areas:
                    'username username'
                    'picture picture'
                    'request message'
                    'name name'
                    'pronouns pronouns'
                    'bio bio'
                    'post1 post1'
                    'post2 post2'
                    'post3 post3';
            }
        }
    </style>
</head>
<body>

<div class="profile-container">

    <!-- Glitch Marquee -->
    <div class="marquee-container">
        <div class="marquee">
            ⚠️⚠️ WARNING: THIS PROFILE IS CORRUPTED ⚠️⚠️ || BLOG N' LOG EST. 2003 || Jimmy is watching || DO NOT STAY LONG ||
        </div>
    </div>

    <!-- MAIN PROFILE GRID (scary + glitchy) -->
    <div class="grid-container">
        <div class="item1">
            <span class="glitch-text">xX_BigManJimmy_Xx</span>
            <span style="font-size: 12px; display: block; color:#ff3366;">[ENTITY UNSTABLE]</span>
        </div>
        <div class="item2">
            <!-- Corrupted avatar SVG + glitch effect -->
            <img src="source"
                 alt="glitch pfp">
        </div>
        <div class="item3" id="friendReqBtn"> SEND FR!END REQ </div>
        <div class="item4" id="msgBtn"> MESSAGE // ANOMALY </div>
        <div class="item5"> [⚠️ CORRUPTED ⚠️]</div>
        <div class="item6">It/Its ████ // SYS.ID: ERR://0x23A</div>
        <div class="item7">
            I'm scared.... <br>
            Where am I?..<br>
            Hello?<br>
            Who's there? <br>
            I don't want to be alone... <br><br>
            <span style="color:#ff66aa;">⚠️ WARNING: This profile contains unstable data ⚠️</span><br>
            ████████████████████████████████████████████████████<br>
            <span style="font-size:0.7rem;">&gt; _ you should not be here _ &lt;</span>
        </div>
        <div class="item8">
            Where has everyone gone? <br>
            <span style="color:#ff0000;">[ERROR: Entity has breached containment]</span>
        </div>
        <div class="item9">
            I just wanted to have friends forever.....<br>
            <span style="color: #ff88aa;">&gt;&gt; 404: friends not found</span>
        </div>
        <div class="item10">
            i'm sorry<br>
            <span style="font-family:monospace;"> last online: ██/██/199█</span>
        </div>
    </div>


    <button class="guestbook-btn" id="guestbookBtn">✍️ SIGN GUESTBOOK ✍️</button>
</div>

<!-- Guestbook Modal -->
<div id="guestbookModal" class="guestbook-modal" style="display: none;">
    <div class="guestbook-content">
        <div class="guestbook-header">
            <h3>✧✧✧ Jimmy's Guestbook ✧✧✧</h3>
            <button class="close-btn" id="closeGuestbook">✖</button>
        </div>
        <div class="guestbook-entries" id="guestbookEntriesList">
            <div class="guestbook-entry"><strong>Xx_BigManJimmy_xX</strong> [05.20.03]<br>This profile is glitching my screen, love it!</div>
            <div class="guestbook-entry"><strong>EmoGothCyberWoman</strong> [05.19.03]<br>so creepy but iconic</div>
            <div class="guestbook-entry"><strong>CoolDude99</strong> [05.18.03]<br>first!! also... HEEEEEELLLLP!!! OH GOD IT HURTS</div>
        </div>
        <div class="guestbook-form">
            <h4>Leave a message:</h4>
            <input type="text" id="guestName" placeholder="Your username...">
            <textarea id="guestMsg" rows="2" placeholder="Your message..."></textarea>
            <button id="submitGuestEntry"> SIGN GUESTBOOK </button>
        </div>
    </div>
</div>

<script>
    (function(){
        // -------------------------------
        // 2000s style visitor counter + time
        let visitor = 4872;
        const visitorSpan = document.getElementById('visitorCount');
        function updateVisitor() {
            visitor += Math.floor(Math.random() * 4);
            if(visitorSpan) visitorSpan.innerText = visitor;
        }
        setInterval(updateVisitor, 5000);
        
        function updateTime() {
            const now = new Date();
            const timeStr = now.toLocaleString();
            const timeEl = document.getElementById('liveTime');
            if(timeEl) timeEl.innerText = timeStr;
        }
        updateTime();
        setInterval(updateTime, 1000);
        
        // GLITCH POPUP SIMULATION (friend request / message)
        const friendBtn = document.getElementById('friendReqBtn');
        const msgBtn = document.getElementById('msgBtn');
        
        function showCorruptionPopup(type) {
            const modalDiv = document.createElement('div');
            modalDiv.className = 'corruption-modal';
            modalDiv.innerHTML = `
                <div class="guestbook-content" style="background:black; border-color:#ff0044; text-align:center;">
                    <h3 style="color:#ff3366;">⚠️ SYSTEM CORRUPTION ⚠️</h3>
                    <p style="color:#ffaa88;">${type === 'friend' ? 'FRIEND REQUEST INTERCEPTED... Jimmy can see you. run.' : 'MESSAGE LOST IN STATIC. Your words have been consumed.'}</p>
                    <button id="closeCorruptModal" style="margin-top:12px; padding:6px 12px; background:#ff3366; border:none;">[ABORT]</button>
                </div>
            `;
            document.body.appendChild(modalDiv);
            const closeBtn = modalDiv.querySelector('#closeCorruptModal');
            closeBtn.onclick = () => modalDiv.remove();
            // glitch effect on container
            const container = document.querySelector('.grid-container');
            container.style.transform = 'translate(2px, -1px)';
            setTimeout(() => container.style.transform = '', 180);
        }
        
        if(friendBtn) friendBtn.onclick = () => showCorruptionPopup('friend');
        if(msgBtn) msgBtn.onclick = () => showCorruptionPopup('msg');
        
        // GUESTBOOK modal logic
        const guestbookBtn = document.getElementById('guestbookBtn');
        const guestModal = document.getElementById('guestbookModal');
        const closeGuest = document.getElementById('closeGuestbook');
        
        guestbookBtn.onclick = () => { guestModal.style.display = 'flex'; };
        closeGuest.onclick = () => { guestModal.style.display = 'none'; };
        
        // add guestbook entry with glitchy effect
        const submitEntry = document.getElementById('submitGuestEntry');
        const entriesContainer = document.getElementById('guestbookEntriesList');
        submitEntry.onclick = () => {
            const nameInput = document.getElementById('guestName');
            const msgInput = document.getElementById('guestMsg');
            const name = nameInput.value.trim();
            const message = msgInput.value.trim();
            if(name && message) {
                const newEntryDiv = document.createElement('div');
                newEntryDiv.className = 'guestbook-entry';
                const date = new Date().toLocaleDateString();
                newEntryDiv.innerHTML = `<strong>${escapeHtml(name)}</strong> [${date}]<br>${escapeHtml(message)}`;
                entriesContainer.prepend(newEntryDiv);
                nameInput.value = '';
                msgInput.value = '';
                // glitch feedback
                newEntryDiv.style.animation = 'horizontalGlitch 0.2s';
                setTimeout(() => newEntryDiv.style.animation = '', 300);
            } else {
                alert("ERROR: name and message required (don't be shy)");
            }
        };
        
        function escapeHtml(str) {
            return str.replace(/[&<>]/g, function(m) {
                if(m === '&') return '&amp;';
                if(m === '<') return '&lt;';
                if(m === '>') return '&gt;';
                return m;
            }).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, function(c) {
                return c;
            });
        }
        
        // Random profile link -> just random glitch reload
        const randomLink = document.getElementById('randomLink');
        if(randomLink) {
            randomLink.onclick = (e) => {
                e.preventDefault();
                document.body.style.animation = 'none';
                setTimeout(() => {
                    const glitchOverlay = document.createElement('div');
                    glitchOverlay.style.position = 'fixed';
                    glitchOverlay.style.top=0; glitchOverlay.style.left=0; glitchOverlay.style.width='100%'; glitchOverlay.style.height='100%';
                    glitchOverlay.style.background='black'; glitchOverlay.style.zIndex=9999;
                    glitchOverlay.style.opacity='0.8';
                    document.body.appendChild(glitchOverlay);
                    setTimeout(() => {
                        window.location.reload();
                    }, 180);
                }, 30);
            };
        }
        
        // extra analog horror: random flicker on post items and bio
        const posts = ['.item8', '.item9', '.item10'];
        setInterval(() => {
            if(Math.random() < 0.25) {
                const randPost = document.querySelector(posts[Math.floor(Math.random() * posts.length)]);
                if(randPost) {
                    randPost.style.transform = 'translateX(2px)';
                    randPost.style.backgroundColor = '#3a0b3f';
                    setTimeout(() => {
                        if(randPost) randPost.style.transform = '';
                        if(randPost) randPost.style.backgroundColor = '';
                    }, 120);
                }
            }
            // random username glitch
            const usernameDiv = document.querySelector('.item1');
            if(usernameDiv && Math.random() < 0.2) {
                usernameDiv.style.textShadow = '3px 2px red, -2px -2px blue';
                setTimeout(() => usernameDiv.style.textShadow = '', 150);
            }
            // bio corruption blink
            const bioDiv = document.querySelector('.item7');
            if(bioDiv && Math.random() < 0.15) {
                bioDiv.style.color = '#ff44aa';
                setTimeout(() => bioDiv.style.color = '', 200);
            }
        }, 1900);
        
        // additional fake "visitor counter" analog effect
        const lastCorruptSpan = document.getElementById('lastCorrupt');
        if(lastCorruptSpan) {
            setInterval(() => {
                const randomYear = 1998 + Math.floor(Math.random() * 6);
                lastCorruptSpan.innerText = `profile corrupted: 0${Math.floor(Math.random() * 9)+1}.${Math.floor(Math.random() * 28)+1}.${randomYear}`;
            }, 8000);
        }
        
        
        
        // Console warning easter egg
        console.log("%c⚠️⚠️ BLOG N' LOG // PROFILE CORRUPTED ⚠️⚠️", "color: #ff00cc; font-size: 18px; font-family: monospace;");
        console.log("%c xX_BigManJimmy_Xx profile contains unstable data. Do not stay long.", "color: #0f0");
    })();
</script>
</body>
</html>