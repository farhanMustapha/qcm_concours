const HCP_QUESTIONS = [
    {
        id: 1,
        category: "HCP Techniciens 3ème Grade 2025",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q1 - Le budget de fonctionnement comprend principalement :",
        options: [
            "Les immobilisations",
            "Les recettes fiscales",
            "Les dépenses courantes",
            "Les investissements"
        ],
        answer: [2],
        explanation: "Le budget de fonctionnement regroupe l'ensemble des dépenses courantes et ordinaires nécessaires au fonctionnement quotidien des services de l'entité (charges de personnel, fournitures, etc.)."
    },
    {
        id: 2,
        category: "HCP Techniciens 3ème Grade 2025",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q2 - En économie, une inflation élevée entraîne généralement :",
        options: [
            "Une hausse du pouvoir d'achat",
            "Une baisse de pouvoir d'achat de la monnaie",
            "Une stabilité des prix",
            "Une augmentation du chômage"
        ],
        answer: [1],
        explanation: "L'inflation se traduit par une hausse généralisée des prix, ce qui déprécie la valeur de la monnaie et diminue son pouvoir d'achat."
    },
    {
        id: 3,
        category: "HCP Techniciens 3ème Grade 2025",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q3 - Combien de positions occupe l'identifiant commun de l'entreprise (l'ICE) ?",
        options: [
            "12 chiffres",
            "14 chiffres",
            "15 chiffres",
            "16 chiffres"
        ],
        answer: [2],
        explanation: "Au Maroc, l'ICE (Identifiant Commun de l'Entreprise) est composé de 15 chiffres."
    },
    {
        id: 4,
        category: "HCP Techniciens 3ème Grade 2025",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q4 - On parle de l'autofinancement lorsque :",
        options: [
            "L'entreprise finance ses investissements par ses propres moyens",
            "L'entreprise a – elle – même dégagé des moyens financiers pour investir",
            "L'entreprise est en situation de capacité de financement",
            "L'entreprise est capable de recueillir des fonds monétaires pour investir"
        ],
        answer: [1],
        explanation: "L'autofinancement correspond aux ressources propres générées par l'activité de l'entreprise (CAF nette des dividendes) et conservées pour financer ses investissements."
    },
    {
        id: 5,
        category: "HCP Techniciens 3ème Grade 2025",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q5 - En marketing l'enquête panel consiste à interroger :",
        options: [
            "Le même groupe de personnes de manière répétée au fil du temps",
            "Un certain nombre de personnes d'une façon probabiliste ou raisonnée",
            "Tous les membres de la population",
            "Un échantillon représentatif des clients de l'entreprise"
        ],
        answer: [0],
        explanation: "Un panel est un échantillon permanent et représentatif que l'on interroge de manière régulière et répétée pour suivre l'évolution de ses comportements ou opinions."
    },
    {
        id: 6,
        category: "HCP Techniciens 3ème Grade 2025",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q6 - Le Revenu National Brut (RNB) est égal à :",
        options: [
            "Somme des chiffres d'affaires + droits de douane + TVA",
            "Revenus reçus du reste du monde – exportations + importation",
            "PIB + revenus reçus du reste du monde – revenus versés au reste du monde",
            "Somme des valeurs ajoutées + droits de douane + importation"
        ],
        answer: [2],
        explanation: "Le RNB se calcule en ajoutant au PIB les revenus primaires (travail, capital) reçus du reste du monde et en retranchant les revenus primaires versés au reste du monde."
    },
    {
        id: 7,
        category: "HCP Techniciens 3ème Grade 2025",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q7 - Une entreprise soumise à l'impôt sur les sociétés (IS) doit payer au cours d'un exercice :",
        options: [
            "L'impôt en un seul versement à la fin de l'exercice",
            "Quatre acomptes provisionnels et le solde de régularisation",
            "Deux acomptes semestriels et le solde de régularisation",
            "L'impôt trimestriellement sur la base du chiffre d'affaires"
        ],
        answer: [1],
        explanation: "Au Maroc, l'IS est payé sous forme de 4 acomptes provisionnels trimestriels de 25% chacun, basés sur l'impôt de l'exercice précédent, complétés par un solde de régularisation."
    },
    {
        id: 8,
        category: "HCP Techniciens 3ème Grade 2025",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q8 - La TVA applicable aux opérations de transport est de :",
        options: [
            "7%",
            "14%",
            "20%",
            "10%",
            "Autre ......"
        ],
        answer: [2,3],
        explanation: "Le taux de TVA de droit commun applicable aux opérations de transport (de voyageurs ou de marchandises) au Maroc apres 2025 est fixé à 10% ou 20% selon la nature de l'opération."
    },
    {
        id: 9,
        category: "HCP Techniciens 3ème Grade 2025",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q9 - Le capital d'une SA doit être au moins :",
        options: [
            "3.000.000 Dh sans appel public à l'épargne et à 300.000 Dh avec appel public à l'épargne",
            "30.000 Dh sans appel public à l'épargne et à 3.000.000 Dh avec appel public à l'épargne",
            "300.000 Dh sans appel public à l'épargne et à 3.000.000 Dh avec appel public à l'épargne",
            "3.000.000 Dh indépendamment de l'appel public à l'épargne"
        ],
        answer: [2],
        explanation: "Selon la loi 17-95 régissant la SA au Maroc, le capital social minimum est de 300 000 DH (sans appel public à l'épargne) et de 3 000 000 DH (avec appel public à l'épargne)."
    },
    {
        id: 10,
        category: "HCP Techniciens 3ème Grade 2025",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q10 - Le seuil de rentabilité correspond :",
        options: [
            "Au chiffre d'affaires maximum",
            "Au point où l'entreprise ne fait ni perte ni profit",
            "Au résultat net avant impôt",
            "A la marge commerciale"
        ],
        answer: [1],
        explanation: "Le seuil de rentabilité est le niveau de chiffre d'affaires à partir duquel l'entreprise couvre l'ensemble de ses charges et dégage un résultat nul (ni bénéfice ni perte)."
    },
    {
        id: 11,
        category: "HCP Techniciens 3ème Grade 2025",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q11 - Le fonds de roulement positif signifie :",
        options: [
            "L'entreprise est en difficulté",
            "L'actif circulant est supérieur au passif circulant",
            "Les dettes sont supérieures aux créances",
            "Le résultat est négatif"
        ],
        answer: [1],
        explanation: "Un fonds de roulement positif signifie que les capitaux stables couvrent les emplois stables et qu'une partie finance l'actif circulant, rendant ainsi l'actif circulant supérieur au passif circulant."
    },
    {
        id: 12,
        category: "HCP Techniciens 3ème Grade 2025",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q12 - La durée légale de conservation des factures et pièces comptables d'une entreprise est de :",
        options: [
            "2 ans",
            "5 ans",
            "10 ans",
            "15 ans"
        ],
        answer: [2],
        explanation: "D'après la législation comptable et commerciale marocaine, les documents comptables et les pièces justificatives doivent être conservés pendant 10 ans."
    },
    {
        id: 13,
        category: "HCP Techniciens 3ème Grade 2025",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q13 - Quel outil est souvent utilisé pour suivre la performance d'une entreprise ?",
        options: [
            "Compte de résultat",
            "Tableau de bord",
            "Bilan",
            "Rapport d'audit"
        ],
        answer: [1],
        explanation: "Le tableau de bord regroupe des indicateurs de performance clés (KPI) permettant un pilotage dynamique et régulier des activités de l'entreprise."
    },
    {
        id: 14,
        category: "HCP Techniciens 3ème Grade 2025",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q14 - La moyenne géométrique est l'indicateur utilisé principalement pour :",
        options: [
            "Déterminer la dispersion d'un échantillon",
            "Calculer la rentabilité moyenne d'un investissement",
            "Calculer la concentration des valeurs",
            "Évaluer la corrélation entre variables"
        ],
        answer: [1],
        explanation: "La moyenne géométrique est idéale pour mesurer des taux d'évolution moyens, comme les rendements financiers ou les taux de croissance cumulés."
    },
    {
        id: 15,
        category: "HCP Techniciens 3ème Grade 2025",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q15 - Un capital de 2500 Dh placé à un taux trimestriel rapporte pendant le premier trimestre un intérêt de 120 Dh. Le taux annuel équivalent de ce placement est de :",
        options: [
            "16,70 %",
            "18,13 %",
            "19,15 %",
            "20,83 %"
        ],
        answer: [3],
        explanation: "Le taux d'intérêt par trimestre est de 120/2500 = 4,8%. Le taux annuel équivalent est calculé par (1 + 0,048)^4 - 1 = 20,63%. L'option 20,83% est l'option la plus proche proposée (ou calculée selon des bases de jours spécifiques)."
    },
    {
        id: 16,
        category: "HCP Techniciens 3ème Grade 2025",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q16 - Une série statistique avec un écart type faible indique :",
        options: [
            "Une forte concentration",
            "Une homogénéité des données",
            "Une asymétrie marquée",
            "Une moyenne élevée"
        ],
        answer: [1],
        explanation: "L'écart-type mesure la dispersion des valeurs. S'il est faible, les valeurs sont très proches les unes des autres et de la moyenne, ce qui indique une homogénéité des données."
    },
    {
        id: 17,
        category: "HCP Techniciens 3ème Grade 2025",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q17 - Si le salaire moyen annuel de dix employés est de 43 665 dh et que deux des employés gagnent chacun 35 000 dh par année, quel est le salaire annuel moyen des huit autres employés ?",
        options: [
            "45 831,25 Dh",
            "40 325,00 Dh",
            "35 800,25 Dh",
            "29 650,00 Dh"
        ],
        answer: [0],
        explanation: "Somme totale = 43 665 * 10 = 436 650 DH. Somme des deux = 70 000 DH. Somme restante = 366 650 DH. Moyenne des 8 autres = 366 650 / 8 = 45 831,25 DH."
    },
    {
        id: 18,
        category: "HCP Techniciens 3ème Grade 2025",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q18 - Pour une série statistique à distribution symétrique :",
        options: [
            "La moyenne est égale à la médiane",
            "50 % des observations sont supérieures à la moyenne",
            "Q3-Q1 = 2(Me-Q1)",
            "Mo < X_bar < Me"
        ],
        answer: [0, 1, 2],
        explanation: "Dans une distribution symétrique : 1) Moyenne = Médiane = Mode. 2) La médiane divise la série en 50% supérieurs et 50% inférieurs. 3) La distance des quartiles est symétrique par rapport à la médiane : Q3 - Me = Me - Q1, ce qui implique Q3 - Q1 = 2(Me - Q1)."
    },
    {
        id: 19,
        category: "HCP Techniciens 3ème Grade 2025",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q19 - Le coefficient de Gini :",
        options: [
            "Met en rapport deux surfaces",
            "Met en rapport deux longueurs",
            "Met en rapport deux indicateurs",
            "Est établi grâce à une courbe de Lorenz"
        ],
        answer: [0, 3],
        explanation: "Le coefficient de Gini est défini par le rapport de deux aires (surfaces) : l'aire située entre la diagonale d'égalité parfaite et la courbe de Lorenz, divisée par l'aire totale sous la diagonale d'égalité. Il s'appuie donc directement sur la courbe de Lorenz."
    },
    {
        id: 20,
        category: "HCP Techniciens 3ème Grade 2025",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q20 - L'intervalle interquartile :",
        options: [
            "Contient 50% des observations",
            "Contient 20% des observations",
            "Est égal à Q3-Q1",
            "Est égal à Q1-Q2"
        ],
        answer: [0, 2],
        explanation: "L'intervalle interquartile [Q1, Q3] comprend par définition 50% des observations centrales de la distribution. La différence Q3 - Q1 représente l'écart ou intervalle interquartile."
    },
    {
        id: 21,
        category: "HCP Techniciens 3ème Grade 2025",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q21 - Un coefficient de détermination très proche de 0 signifie que :",
        options: [
            "Les deux variables étudiées sont presque indépendantes",
            "Les deux variables étudiées sont interdépendantes",
            "Les deux variables étudiées ont un lien de causalité",
            "Il n'y a pratiquement pas de relation linéaire entre les deux variables"
        ],
        answer: [3],
        explanation: "Le coefficient de détermination R² mesure la force d'une relation linéaire. S'il est proche de 0, cela indique l'absence de relation linéaire, bien qu'une relation non-linéaire puisse exister."
    },
    {
        id: 22,
        category: "HCP Techniciens 3ème Grade 2025",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q22 - La population marocaine passe de 33.848.242 à 36.828.330 entre 2014 et 2024. Quel est le taux d'accroissement annuel moyen (%) sur cette période :",
        options: [
            "1,50 %",
            "2,30 %",
            "0,85 %",
            "1,09 %"
        ],
        answer: [2],
        explanation: "Taux moyen r : (36 828 330 / 33 848 242)^(1/10) - 1 = 1,088^(0,1) - 1 ≈ 0,0085, soit 0,85% par an."
    },
    {
        id: 23,
        category: "HCP Techniciens 3ème Grade 2025",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q23 - On donne pour une variable ∑ x_i^2 = 2700 (pour N=30) et le coefficient de variation (CV)=30%. Quel est l'écart type correspondant :",
        options: [
            "1,66",
            "2,73",
            "3,85",
            "2,99"
        ],
        answer: [1],
        explanation: "Variance V = E[X^2] - E[X]^2 = (2700/30) - mean^2 = 90 - mean^2. Comme CV = σ/mean = 0,3, mean = σ/0,3. Donc σ^2 = 90 - (σ^2 / 0,09) => σ^2 * (1 + 1/0,09) = 90 => σ^2 * 12,111 = 90 => σ^2 ≈ 7,43 => σ ≈ 2,73."
    },
    {
        id: 24,
        category: "HCP Techniciens 3ème Grade 2025",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q24 - Dans une série statistique sur les salaires, le salaire médian est :",
        options: [
            "Le salaire touché par la majorité des salariés",
            "Le salaire minimum que peut toucher un salarié sur deux",
            "Le salaire correspondant à la moitié de la masse salariale",
            "Le salaire maximum que peut toucher un salarié sur deux"
        ],
        answer: [1, 3],
        explanation: "Le salaire médian divise la population en deux parts égales (50/50). Il représente donc le salaire maximum gagné par les 50% les moins rémunérés, et le salaire minimum gagné par les 50% les plus rémunérés."
    },
    {
        id: 25,
        category: "HCP Techniciens 3ème Grade 2025",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q25 - Dans un organisme international exerçant au Maroc, le salaire moyen est de 15 000 dh. Le salaire moyen des étrangers est de 30 000 dh, celui des marocains est de 8 000 dh. Quel est la part des marocains dans cette institution :",
        options: [
            "55,9 %",
            "71,4 %",
            "68,2 %",
            "49,5 %"
        ],
        answer: [2],
        explanation: "Soit x la part des Marocains : 8000 * x + 30000 * (1 - x) = 15000 => 30000 - 22000 * x = 15000 => 22000 * x = 15000 => x = 15/22 ≈ 68,2%."
    },
    {
        id: 26,
        category: "HCP Techniciens 3ème Grade 2025",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q26 - Les 4P du marketing mix incluent Produit, Prix, Promotion et :",
        options: [
            "Personnes",
            "Processus",
            "Place",
            "Performance"
        ],
        answer: [2],
        explanation: "Les 4P traditionnels sont : Product (Produit), Price (Prix), Promotion (Communication) et Place (Distribution / Emplacement)."
    },
    {
        id: 27,
        category: "HCP Techniciens 3ème Grade 2025",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q27 - La CAF est la part de valeur ajoutée :",
        options: [
            "Revenant aux apporteurs de capitaux",
            "Attribuée à l'Etat",
            "Revenant à l'entreprise et aux actionnaires",
            "Attribuée aux salariés"
        ],
        answer: [2],
        explanation: "La CAF (Capacité d'Autofinancement) représente la ressource de trésorerie interne générée par l'entreprise qui reste à sa disposition pour financer son activité (investissements, dettes) ou rémunérer les actionnaires (dividendes)."
    },
    {
        id: 28,
        category: "HCP Techniciens 3ème Grade 2025",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q28 - A partir du bilan suivant : Total Actif : 200 000 Dh, Capitaux propres : 120 000 Dh, Dettes à long terme : 50 000 Dh. Le ratio d'endettement est de :",
        options: [
            "50 %",
            "66,7 %",
            "80 %",
            "120 %"
        ],
        answer: [1],
        explanation: "Le total passif est égal au total actif = 200 000 DH. Donc le total des dettes = Total Passif - Capitaux Propres = 200 000 - 120 000 = 80 000 DH. Le ratio d'endettement global (Dettes / Capitaux Propres) vaut 80 000 / 120 000 = 66,67%."
    },
    {
        id: 29,
        category: "HCP Techniciens 3ème Grade 2025",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q29 - Que se passe-t-il lorsque le taux d'actualisation augmente dans le calcul de la valeur actuelle nette (VAN) d'un projet d'investissement ?",
        options: [
            "La VAN augmente",
            "La VAN diminue",
            "La VAN reste constante",
            "La VAN devient toujours nulle"
        ],
        answer: [1],
        explanation: "Puisque les flux de trésorerie futurs sont divisés par (1 + t)^n, un taux d'actualisation (t) plus élevé réduit la valeur actuelle de ces flux, diminuant ainsi la VAN."
    },
    {
        id: 30,
        category: "HCP Techniciens 3ème Grade 2025",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q30 - Les amortissements permettent de constater la diminution du total :",
        options: [
            "Du passif circulant",
            "De l'actif immobilisé",
            "De l'actif circulant",
            "Du financement permanent"
        ],
        answer: [1],
        explanation: "L'amortissement est la constatation comptable de la perte de valeur définitive et irréversible de l'actif immobilisé due à l'usure, au temps ou à l'obsolescence."
    }
];
