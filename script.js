document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Gestion de l'Horloge Système ---
    const clockElement = document.getElementById('clock');
    
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('fr-FR', { hour12: false });
        clockElement.textContent = timeString;
    }
    
    setInterval(updateClock, 1000);
    updateClock();

    // --- 2. Base de Données du Contenu ---
    const nodeContent = {
        home: `
            <div class="content-fade-in">
                <h1>Manda Arolala Andrianina</h1>
                <p class="highlight">] Développeuse Fullstack JavaScript</p>
                <p style="margin-top: 20px;">Bienvenue sur le Core System v1.0.</p>
                <p>Basée à Madagascar · Master 2 ENI Fianarantsoa</p>
                <p style="margin-top: 15px; font-style: italic; opacity: 0.7;">"Tout n'est qu'une question de motivation et de persévérance."</p>
                <div style="margin-top: 30px; display: flex; gap: 40px; flex-wrap: wrap;">
                    <div><span class="highlight">6+</span><br>Ans d'apprentissage</div>
                    <div><span class="highlight">M2</span><br>Diplôme ENI</div>
                    <div><span class="highlight">4</span><br>Expériences</div>
                    <div><span class="highlight">∞</span><br>Curiosité</div>
                </div>
                <p style="margin-top: 30px;">Explorez les nœuds pour analyser mon profil.</p>
            </div>
        `,
        about: `
            <div class="content-fade-in">
                <h2>[ PROFIL_SYSTÈME ]</h2>
                <p>Je suis <span class="highlight">ANDRIANINA Manda Arolala</span>, développeuse fullstack JavaScript basée à Madagascar.</p>
                <p style="margin-top:10px;">Titulaire d'un Master 2 en Informatique à l'ENI Fianarantsoa, je transforme vos idées en applications robustes et maintenables.</p>
                <p style="margin-top:10px;">Depuis l'enfance, les technologies me fascinent par leur capacité à transformer le quotidien. Cette passion m'a poussée à explorer continuellement de nouvelles technologies, accumulant 6 ans d'apprentissage intense.</p>

                <h2>[ FORMATION ]</h2>
                <p>> <span class="highlight">Master 2 en Informatique</span> — ENI Fianarantsoa (2024–2025)</p>
                <p>> Développement logiciel avancé, systèmes d'information, méthodes Agile.</p>

                <h2>[ ENGAGEMENTS ]</h2>
                <p>> <span class="highlight">Mentor en programmation</span> — CoderDojo Fianarantsoa (2020–2025)</p>
                <p>> Initiation de lycéens à l'HTML/CSS et JavaScript dans 4 lycées.</p>
                <p>> <span class="highlight">Photographe bénévole</span> — ARTCENI · ENI (2022–2025)</p>

                <h2>[ LANGUES ]</h2>
                <p>> Malgache — Langue maternelle</p>
                <p>> Français — Courant</p>
                <p>> Anglais — Intermédiaire</p>
            </div>
        `,
        skills: `
            <div class="content-fade-in">
                <h2>[ STACK_TECHNIQUE ]</h2>
                <div class="data-grid">
                    <div class="data-card">
                        <h3>Frontend</h3>
                        <p>Vue.js, React, Angular, JavaScript, HTML/CSS, Tailwind</p>
                    </div>
                    <div class="data-card">
                        <h3>Backend</h3>
                        <p>Node.js, Symfony, PHP, Python, C# / C++</p>
                    </div>
                    <div class="data-card">
                        <h3>Bases de données</h3>
                        <p>PostgreSQL, MySQL, Supabase, SQL</p>
                    </div>
                    <div class="data-card">
                        <h3>IA & Outils</h3>
                        <p>RASA, OpenAI API, Git, Figma</p>
                    </div>
                    <div class="data-card">
                        <h3>Méthodes & Architecture</h3>
                        <p>UML, Agile / Scrum, REST · JSON, API Design</p>
                    </div>
                </div>
            </div>
        `,
        projects: `
            <div class="content-fade-in">
                <h2>[ PROJETS_DÉPLOYÉS ]</h2>
                <div class="data-grid">
                    <div class="data-card">
                        <h3>Portfolio Personnel</h3>
                        <p>Portfolio moderne et interactif avec back-end Node.js et base de données Supabase.</p>
                        <p style="margin-top:8px; font-size:0.85em; opacity:0.7;">HTML/CSS · JavaScript · Node.js · Supabase</p>
                        <a href="#" class="highlight">[ VOIR ]</a>
                    </div>
                    <div class="data-card">
                        <h3>Backoffice – Portfolio</h3>
                        <p>Interface d'administration pour consulter les statistiques du portfolio en temps réel.</p>
                        <p style="margin-top:8px; font-size:0.85em; opacity:0.7;">HTML/CSS · JavaScript · Supabase</p>
                        <a href="#" class="highlight">[ VOIR ]</a>
                    </div>
                </div>

                <h2 style="margin-top: 30px;">[ EXPÉRIENCES ]</h2>
                <div class="data-grid">
                    <div class="data-card">
                        <h3><span class="highlight">Star</span> — Développeuse Fullstack</h3>
                        <p style="font-size:0.85em; opacity:0.7;">Août 2025 → Aujourd'hui</p>
                        <p style="margin-top:8px;">Agent conversationnel, maintenance d'applications, refonte d'une application existante.</p>
                        <p style="margin-top:8px; font-size:0.85em; opacity:0.7;">Python · RASA · Angular · Symfony · MySQL</p>
                    </div>
                    <div class="data-card">
                        <h3><span class="highlight">SK Group</span> — Développeuse Fullstack</h3>
                        <p style="font-size:0.85em; opacity:0.7;">Juil. – Août 2025</p>
                        <p style="margin-top:8px;">Front-end, back-end et design Figma avec une équipe de 4 stagiaires.</p>
                        <p style="margin-top:8px; font-size:0.85em; opacity:0.7;">Figma · Node.js · Vue.js · PostgreSQL</p>
                    </div>
                    <div class="data-card">
                        <h3><span class="highlight">ABIDYS</span> — Développeuse Fullstack</h3>
                        <p style="font-size:0.85em; opacity:0.7;">Sep. – Déc. 2023</p>
                        <p style="margin-top:8px;">Application de gestion des inscriptions et paiements scolaires.</p>
                        <p style="margin-top:8px; font-size:0.85em; opacity:0.7;">Vue.js · PHP · MySQL</p>
                    </div>
                    <div class="data-card">
                        <h3><span class="highlight">Oniversity FJKM</span> — Stage Fullstack</h3>
                        <p style="font-size:0.85em; opacity:0.7;">Sep. – Déc. 2022</p>
                        <p style="margin-top:8px;">Application de gestion : bibliothèque, notes, enseignants.</p>
                        <p style="margin-top:8px; font-size:0.85em; opacity:0.7;">Vue.js · PHP · PostgreSQL</p>
                    </div>
                </div>
            </div>
        `,
        contact: `
            <div class="content-fade-in">
                <h2>[ ÉTABLIR_CONNEXION ]</h2>
                <p>Disponible pour de nouveaux projets. Canaux de communication ouverts.</p>
                <div style="margin-top: 20px; font-size: 1.1rem; line-height: 2.2;">
                    <p>EMAIL &nbsp;&nbsp;&nbsp;: <a href="mailto:mandaarolalaa@gmail.com" class="highlight">mandaarolalaa@gmail.com</a></p>
                    <p>TEL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <a href="tel:+261333477548" class="highlight">+261 33 34 775 48</a></p>
                    <p>LINKEDIN : <a href="https://www.linkedin.com/in/manda-arolala-andrianina" target="_blank" class="highlight">/in/manda-arolala-andrianina</a></p>
                    <p>GITHUB &nbsp;&nbsp;: <a href="https://github.com/MandaArolala3118" target="_blank" class="highlight">/MandaArolala3118</a></p>
                    <p>CV &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <a href="./CV_ANDRIANINA_Manda_Arolala.pdf" target="_blank" class="highlight">[ TÉLÉCHARGER PDF ]</a></p>
                </div>
            </div>
        `
    };

    // --- 3. Moteur de Navigation ---
    const mainDisplay = document.getElementById('main-display');
    const navButtons = document.querySelectorAll('.nav-btn');

    function loadNode(nodeName) {
        navButtons.forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector(`[data-node="${nodeName}"]`);
        if (activeBtn) activeBtn.classList.add('active');

        mainDisplay.innerHTML = `<p class="highlight">>>> LOADING NODE: ${nodeName.toUpperCase()}...</p>`;
        
        setTimeout(() => {
            mainDisplay.innerHTML = nodeContent[nodeName] || '<p class="highlight">>>> ERROR: NODE NOT FOUND.</p>';
        }, 300);
    }

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const node = button.getAttribute('data-node');
            loadNode(node);
        });
    });

    // --- 4. Initialisation ---
    setTimeout(() => {
        loadNode('home');
    }, 2000);

});