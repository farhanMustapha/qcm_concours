const ALL_QUESTIONS = [
    {
        id: 1,
        category: "Comptabilité et Gestion",
        instruction: "Cochez-la ou les bonnes réponses dans la feuille des réponses :",
        question: "Q1 - Dans quels cas les comptes d'immobilisations amortissables doivent être soldés ?",
        options: [
            "Le cas d'une immobilisation en non-valeur totalement amortie",
            "Le cas d'une immobilisation cédée",
            "Le cas d'une immobilisation Corporelles totalement amortie",
            "La réponse c est vraie"
        ],
        answer: [0, 1],
        explanation: "Les immobilisations en non-valeur (frais préliminaires) doivent être impérativement soldées dès qu'elles sont totalement amorties (réponse a). De même, toute immobilisation cédée doit sortir du bilan et être soldée (réponse b). Par contre, une immobilisation corporelle totalement amortie reste à l'actif (avec une VNA nulle) tant qu'elle est utilisée par l'entreprise (réponse c est fausse)."
    },
    {
        id: 2,
        category: "Comptabilité et Gestion",
        instruction: "Cochez-la ou les bonnes réponses dans la feuille des réponses :",
        question: "Q2 - Le terme « exigibilité » est :",
        options: [
            "La capacité de l'entreprise à respecter les dates d'échéance de règlement des dettes",
            "L'aptitude de l'entreprise à transformer plus ou moins rapidement ses actifs en trésorerie",
            "La capacité de l'entreprise à régler l'ensemble des dettes"
        ],
        answer: [0],
        explanation: "L'exigibilité représente le délai restant avant le remboursement d'une dette. Respecter les dates d'échéance de règlement des dettes témoigne ainsi d'une bonne gestion de l'exigibilité (réponse a). Pour information, la transformation plus ou moins rapide des actifs en trésorerie désigne la liquidité (réponse b), tandis que la capacité à régler l'ensemble de ses dettes désigne la solvabilité (réponse c)."
    },
    {
        id: 3,
        category: "Comptabilité et Gestion",
        instruction: "Cochez-la ou les bonnes réponses dans la feuille des réponses :",
        question: "Q3 - Pour les 5 + (1) forces de Michael PORTER. Force représente :",
        options: [
            "L'état",
            "Les collectivités locales",
            "Le pouvoir Public"
        ],
        answer: [2],
        explanation: "Dans le modèle d'analyse stratégique des '5 + 1 forces de Porter', la force additionnelle (+1) représente l'impact de l'État et du Pouvoir Public (réponse c) sur l'environnement concurrentiel (par les lois, régulations, normes, etc.)."
    },
    {
        id: 4,
        category: "Comptabilité et Gestion",
        instruction: "Cochez-la ou les bonnes réponses dans la feuille des réponses :",
        question: "Q4 - Le modèle PESTEL au macro environnement signifie :",
        options: [
            "Politique Economique Social Technologique Economique légal",
            "Politique Economique structurel Technologique Economique légal",
            "Politique Economique stratégique Technologique Economique légal"
        ],
        answer: [0],
        explanation: "Le modèle PESTEL classe les influences macro-environnementales en Politique, Économique, Social, Technologique, Écologique, Légal. L'option a est la seule à mentionner 'Social' pour la lettre S (les options b et c mentionnent à tort 'structurel' et 'stratégique')."
    },
    {
        id: 5,
        category: "Comptabilité et Gestion",
        instruction: "Cochez-la ou les bonnes réponses dans la feuille des réponses :",
        question: "Q5 - La comptabilité analytique permet de :",
        options: [
            "Déterminer l'assiette fiscale",
            "Produire des preuves entre commerçants en justice",
            "Localiser les zones de performance et de non performance au sein d'une entreprise",
            "La réponse b est vraie"
        ],
        answer: [2],
        explanation: "La comptabilité analytique (ou de gestion) is un outil interne destiné à calculer les coûts, analyser la rentabilité des différents produits ou départements, et ainsi localiser précisément les zones de performance et de non-performance au sein de l'entreprise (réponse c). La détermination de l'assiette fiscale (a) et la force probante en justice (b) sont des rôles dévolus à la comptabilité générale (financière)."
    },
    {
        id: 6,
        category: "Comptabilité et Gestion",
        instruction: "Cochez-la ou les bonnes réponses dans la feuille des réponses :",
        question: "Q6 - Les entrées en stock des matières premières s’évaluent :",
        options: [
            "Au coût d’achat",
            "Au prix d’achat",
            "Au coût de production"
        ],
        answer: [0],
        explanation: "Les matières premières achetées par l'entreprise entrent en stock évaluées à leur coût d'achat (qui comprend le prix d'achat plus les frais accessoires d'achat comme le transport, les assurances, etc.). Le coût de production s'applique quant à lui aux produits fabriqués par l'entreprise."
    },
    {
        id: 7,
        category: "Comptabilité et Gestion",
        instruction: "Cochez-la ou les bonnes réponses dans la feuille des réponses :",
        question: "Q7 - Les charges prises en considération en comptabilité analytique et non en comptabilité générale constituent :",
        options: [
            "Des charges supplétives",
            "Des charges non incorporables",
            "Des charges incorporables"
        ],
        answer: [0],
        explanation: "Les charges supplétives sont des charges fictives prises en compte en comptabilité analytique pour des raisons d'analyse économique et de gestion, mais qui n'existent pas en comptabilité générale (ex : rémunération théorique des capitaux propres ou du travail de l'exploitant individuel)."
    },
    {
        id: 8,
        category: "Comptabilité et Gestion",
        instruction: "Cochez-la ou les bonnes réponses dans la feuille des réponses :",
        question: "Q8 - Indemnité pour perte d’emploi est fixée à :",
        options: [
            "0,48% sur un SBG non plafonné",
            "0,38% sur un SBG plafonné à 6000 dh",
            "1,6% sur un SBG non plafonné",
            "0,19% sur un SBG plafonné",
            "1,6% sur un SBG plafonné à 6000 dh"
        ],
        answer: [3],
        explanation: "La cotisation CNSS pour l'Indemnité de Perte d'Emploi (IPE) s'élève à 0,57% du Salaire Brut Global (SBG) plafonné à 6000 DH. La part patronale est de 0,38% et la part salariale est de 0,19% (réponse d)."
    },
    {
        id: 9,
        category: "Comptabilité et Gestion",
        instruction: "Cochez-la ou les bonnes réponses dans la feuille des réponses :",
        question: "Q9 - Le 1er amortissement constant d’une machine acheté le 20-04-2020 est 48 375 DH. Duré de vie du bien 6 ans et 8 mois, la valeur d’entrée de cette machine est de :",
        options: [
            "420 000",
            "430 000",
            "450 000",
            "430 000"
        ],
        answer: [1],
        explanation: "La durée de vie est de 6 ans et 8 mois (soit 80 mois), d'où un taux d'amortissement de 12/80 = 15%. La machine étant achetée le 20-04-2020, le prorata temporis pour 2020 is de 9 mois (avril à décembre). \nCalcul : 1ère annuité = VE * Taux * prorata => 48 375 = VE * 0,15 * (9/12) => 48 375 = VE * 0,1125 => VE = 430 000 DH (réponse b)."
    },
    {
        id: 10,
        category: "Comptabilité et Gestion",
        instruction: "Cochez-la ou les bonnes réponses dans la feuille des réponses :",
        question: "Q10 - La base de calcul de la TVA est égale :",
        options: [
            "Le prix de vente brut hors taxe augmente des frais accessoires",
            "Le prix de vente hors taxe net de toutes réductions augmenté des frais accessoires",
            "Le prix de vente hors taxe",
            "Le net à payer hors taxe",
            "La réponse d est fausse"
        ],
        answer: [1, 3],
        explanation: "La base d'imposition de la TVA est constituée par le prix net de vente hors taxe (après toutes déductions commerciales et financières) augmenté de tous les frais accessoires facturés au client (ex : transport, emballages). Cela correspond exactement au prix net de toutes réductions augmenté des frais accessoires (réponse b), ce qui équivaut au net à payer hors taxe (réponse d)."
    },
    {
        id: 11,
        category: "Comptabilité et Gestion",
        instruction: "Cochez-la ou les bonnes réponses dans la feuille des réponses :",
        question: "Q11 - Les charges incorporables à la CAE sont égales aux charges de la comptabilité générale plus :",
        options: [
            "Les charges supplétives – les charges non incorporables",
            "les charges non incorporables – Les charges supplétives",
            "Les charges non courantes – les charges financières"
        ],
        answer: [0],
        explanation: "Pour obtenir les charges de la comptabilité analytique (CAE) à partir de celles de la comptabilité générale, on doit : ajouter les charges supplétives (qui n'existent pas en comptabilité générale) et soustraire les charges non incorporables (qui ne relèvent pas de l'exploitation courante). Formule : Charges CAE = Charges Gên. + Charges Supplétives - Charges Non Inc. (réponse a)."
    },
    {
        id: 12,
        category: "Comptabilité et Gestion",
        instruction: "Cochez-la ou les bonnes réponses dans la feuille des réponses :",
        question: "Q12 - Quelle est la différence entre une action et une obligation :",
        options: [
            "Une action est un titre de propriété dont le revenu est un intérêt tandis qu’une obligation est un titre de créance dont le revenu est un dividende",
            "Une action est un titre de créance dont le revenu est un dividende tandis qu’une obligation est un titre de propriété dont le revenu est un intérêt",
            "Une action est un titre de propriété dont le revenu est un dividende tandis qu’une obligation est un titre de créance dont le revenu est un intérêt"
        ],
        answer: [2],
        explanation: "Une action confère des droits de propriété sur le capital social d'une société et donne droit à des dividendes (revenu variable). Une obligation est un titre de créance représentant une fraction d'emprunt à long terme et donne droit à des intérêts fixes (réponse c)."
    },
    {
        id: 13,
        category: "Comptabilité et Gestion",
        instruction: "Cochez-la ou les bonnes réponses dans la feuille des réponses :",
        question: "Q13 - Le résultat fiscal est :",
        options: [
            "Le résultat comptable",
            "Le résultat comptable minoré des réintégrations fiscales et majoré des déductions fiscales",
            "Le résultat comptable majoré des réintégrations fiscales et minoré des déductions fiscales",
            "La réponse c est vraie"
        ],
        answer: [2, 3],
        explanation: "Le résultat fiscal se calcule à partir du résultat comptable en réintégrant les charges non déductibles (majorations) et en déduisant les produits non imposables (minorations). Formule : Résultat fiscal = Résultat comptable + Réintégrations - Déductions (réponse c). Par conséquent, la réponse d est vraie également."
    },
    {
        id: 14,
        category: "Comptabilité et Gestion",
        instruction: "Cochez-la ou les bonnes réponses dans la feuille des réponses :",
        question: "Q14 - Les titres sociaux d'une activité à responsabilité limités sont :",
        options: [
            "Des parts sociales",
            "Des actions",
            "Des obligations"
        ],
        answer: [0],
        explanation: "Dans le cas d'une SARL (Société à Responsabilité Limitée), les titres représentatifs du capital social détenus par les associés sont appelés des parts sociales (réponse a). Les actions concernent les sociétés par actions (SA, SAS)."
    },
    {
        id: 15,
        category: "Comptabilité et Gestion",
        instruction: "Cochez-la ou les bonnes réponses dans la feuille des réponses :",
        question: "Q15 - Une entreprise achète un matériel, le 02/01/2015, à 180 000 Dhs TTC. amortissable sur 5 ans. Le 01/01/2019, elle le cède à 30 000 Dhs. Elle a réalisé :",
        options: [
            "Une plus-value de 6 000 Dhs",
            "Une moins-value de 6 000 Dhs",
            "Un résultat nul"
        ],
        answer: [2],
        explanation: "Calcul :\n1. Valeur HT = 180 000 / 1,2 = 150 000 DH (taux de TVA standard de 20%).\n2. Taux d'amortissement annuel = 100% / 5 ans = 20%.\n3. Durée d'utilisation (du 02/01/2015 au 01/01/2019) = 4 ans.\n4. Cumul amortissements = 150 000 * 20% * 4 = 120 000 DH.\n5. Valeur Nette d'Amortissement (VNA) = 150 000 - 120 000 = 30 000 DH.\n6. Résultat de cession = Prix de cession - VNA = 30 000 - 30 000 = 0 DH (Résultat nul, réponse c)."
    },
    {
        id: 16,
        category: "Comptabilité et Gestion",
        instruction: "Cochez-la ou les bonnes réponses dans la feuille des réponses :",
        question: "Q16 - Report à nouveau débiteur signifie :",
        options: [
            "Des bénéfices reportés dans l’attente d’une décision définitive de distribution ou de mise en réserve",
            "Des bénéfices distribués sous forme de dividendes",
            "Des pertes des exercices antérieurs reportés dans l’attente de bénéfices pour les compenser",
            "La réponse a est fausse"
        ],
        answer: [2, 3],
        explanation: "Un report à nouveau (RAN) débiteur représente le cumul des pertes des exercices antérieurs non encore épongées (réponse c). Le bénéfice reporté correspond quant à lui au report à nouveau créditeur (ce qui rend la proposition a fausse, d'où la réponse d est vraie également)."
    },
    {
        id: 17,
        category: "Comptabilité et Gestion",
        instruction: "Cochez-la ou les bonnes réponses dans la feuille des réponses :",
        question: "Q17 - Pour une SA au capital de 500 000 DH, quel est le montant de la réserve légale au titre de l’exercice 2019, sachant que le bénéfice est de 230 000 DH , le cumul de cette réserve avant répartition est de 47050 DH et le RAN (SC) est de 7 500 DH:",
        options: [
            "25 000",
            "11 500",
            "2950"
        ],
        answer: [2],
        explanation: "Calcul :\n1. Taux de réserve légale obligatoire (SA) = 5% du bénéfice net.\n2. Plafond légal = 10% du capital social = 10% * 500 000 = 50 000 DH.\n3. Cumul existant avant affectation = 47 050 DH.\n4. Dotation théorique = 5% * 230 000 = 11 500 DH.\n5. Dotation résiduelle maximale possible avant d'atteindre le plafond = 50 000 - 47 050 = 2 950 DH.\nPuisque la dotation théorique (11 500 DH) dépasse la limite nécessaire pour atteindre le plafond de 10%, la dotation is plafonnée à la dotation résiduelle, soit 2 950 DH (réponse c)."
    },
    {
        id: 18,
        category: "Comptabilité et Gestion",
        instruction: "Cochez-la ou les bonnes réponses dans la feuille des réponses :",
        question: "Q18 - Une variable est dite discrète :",
        options: [
            "Lorsqu’elle ne prend que des nombres finis",
            "Lorsqu’elle prend des valeurs infinies",
            "Lorsqu’elle prend des valeurs dans un intervalle",
            "La réponse c est fausse"
        ],
        answer: [0, 3],
        explanation: "Une variable statistique quantitative est discrète si elle prend des valeurs isolées (réponse a). En revanche, si elle prend toutes les valeurs possibles d'un intervalle, elle est dite continue (ce qui rend la proposition c fausse, d'où la réponse d est vraie également)."
    },
    {
        id: 19,
        category: "Comptabilité et Gestion",
        instruction: "Cochez-la ou les bonnes réponses dans la feuille des réponses :",
        question: "Q19 - L’étendue d’une série statistique est l’écart entre :",
        options: [
            "Sa valeur centrale et sa valeur inférieure",
            "Sa valeur centrale et sa valeur supérieure",
            "Sa valeur supérieure et sa valeur inférieure"
        ],
        answer: [2],
        explanation: "L'étendue d'une série statistique est la différence entre sa valeur maximale (valeur supérieure) et sa valeur minimale (valeur inférieure). Formule : Étendue = Max - Min (réponse c)."
    },
    {
        id: 20,
        category: "Comptabilité et Gestion",
        instruction: "Cochez-la ou les bonnes réponses dans la feuille des réponses :",
        question: "Q20 - Quel est l’élément qui ne fait pas partie du fonds de commerce :",
        options: [
            "La clientèle",
            "L’enseigne",
            "Le droit au bail",
            "Le local abritant le commerce (murs)",
            "Nom commercial"
        ],
        answer: [3],
        explanation: "Le fonds de commerce comprend des éléments incorporels (clientèle, nom commercial, droit au bail) et corporels (matériel, marchandises). Le local (les murs de l'immeuble) ne fait jamais partie du fonds de commerce ; il appartient au patrimoine immobilier et fait l'objet d'un iail commercial séparé (réponse d)."
    },
    {
        "id": 21,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q21 - La TVA récupérable :",
        "options": [
            "Représente une charge pour l’entreprise",
            "Représente une créance sur l’Etat",
            "Représente une dette envers l’Etat",
            "Représente un produit pour l’entreprise"
        ],
        "answer": [1],
        "explanation": "La TVA récupérable représente une créance de l'entreprise sur l'État (option b). Lors des achats, l'entreprise avance cette taxe à ses fournisseurs et détient le droit de la récupérer ou de la déduire de la TVA collectée. Ce n'est ni une charge ni un produit pour l'entreprise."
    },
    {
        "id": 22,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q22 - Quelles égalités devez-vous trouver dans la balance :",
        "options": [
            "Total débit = total crédit",
            "Total débit= total soldes débiteurs",
            "Total débit= total soldes créditeurs",
            "Total soldes débiteurs = total soldes créditeurs"
        ],
        "answer": [0, 3],
        "explanation": "Dans une balance comptable, en vertu du principe de la partie double, on doit obligatoirement retrouver deux égalités : le total des débits doit être égal au total des crédits (option a), et le total des soldes débiteurs doit être égal au total des soldes créditeurs (option d)."
    },
    {
        "id": 23,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q23 - Parmi ces affirmations, choisir celles qui vous semblent vraies :",
        "options": [
            "Le bilan regroupe les comptes des classes 1 à 5",
            "Le bilan regroupe les comptes de classes 1 à 7",
            "Le compte de résultat regroupe les comptes des classes 6 à 9",
            "Le compte de résultat regroupe les comptes des classes 6 à 8"
        ],
        "answer": [0, 3],
        "explanation": "Le bilan comptable regroupe les comptes de situation, à savoir les classes 1 à 5 du plan comptable (Financement permanent, Actif immobilisé, Actif circulant, Passif circulant, et Comptes de trésorerie). Le compte de résultat (ou CPC) regroupe quant à lui les comptes de gestion, c'est-à-dire les classes 6 à 8 (Charges, Produits, et Résultats)."
    },
    {
        "id": 24,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q24 - Combien d’acomptes une société soumise à l’impôt sur les sociétés doit-elle payer au cours d’un exercice :",
        "options": [
            "2",
            "3",
            "4",
            "La réponse c est vraie"
        ],
        "answer": [2, 3],
        "explanation": "Une société soumise à l'impôt sur les sociétés (IS) doit verser obligatoirement $4$ acomptes provisionnels trimestriels au cours de l'exercice comptable (chacun équivalant à $25\%$ de l'impôt dû au titre de l'exercice précédent). Les options c et d sont donc toutes les deux correctes."
    },
    {
        "id": 25,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q25 - Les cas qui peuvent donner lieu à une régularisation de la TVA sont :",
        "options": [
            "La cession d’une immobilisation",
            "La réception d’une facture d’avoir",
            "La disparition justifiée d’un bien",
            "La variation du prorata de déduction"
        ],
        "answer": [0, 1, 3],
        "explanation": "La régularisation de la TVA s'applique lors d'événements qui modifient les conditions initiales de déduction ou de collecte. Cela concerne la cession d'une immobilisation avant la fin de sa période de régularisation fiscale (option a), la réception d'un avoir qui réduit le montant de l'achat et donc de la TVA déductible associée (option b), et la variation du prorata de déduction d'une année sur l'autre (option d). À l'inverse, la disparition justifiée d'un bien (perte accidentelle, vol prouvé, etc.) dispense l'entreprise de reverser la TVA initialement déduite."
    },
    {
        "id": 26,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q26 - La déclaration de la TVA est établie par l’entreprise trimestriellement si le chiffre d’affaire annuel de l’entreprise précédente est :",
        "options": [
            "Strictement inférieur à 1 000 000 DH",
            "Supérieur ou égal à 1 000 000 DH",
            "Inférieur ou égal à 1 000 000 DH"
        ],
        "answer": [0],
        "explanation": "Selon les dispositions fiscales du Code Général des Impôts (CGI), le régime de la déclaration trimestrielle de la TVA est obligatoire pour les contribuables dont le chiffre d'affaires annuel taxable réalisé au cours de l'année précédente est strictement inférieur à $1\,000\,000 \text{ DH}$ (option a). Au-delà ou égal à ce seuil, le régime mensuel s'applique d'office."
    },
    {
        "id": 27,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q27 - En droit commercial, la réduction accordée lorsqu’une marchandise est défectueuse constitue :",
        "options": [
            "Un rabais",
            "Une remise",
            "Une ristourne",
            "La réponse c est fausse"
        ],
        "answer": [0, 3],
        "explanation": "En droit commercial, un rabais (option a) est une réduction de prix exceptionnelle pratiquée pour compenser un défaut de qualité de la marchandise ou une non-conformité. La remise dépend de l'importance des achats ou de la fidélité, et la ristourne est calculée sur le chiffre d'affaires global d'une période. Par conséquent, l'option c ('Une ristourne') étant fausse, la réponse d ('La réponse c est fausse') est également correcte."
    },
    {
        "id": 28,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q28 - Le financement par leasing ou par crédit-bail correspond à :",
        "options": [
            "Une opération de financement",
            "Une opération de location",
            "Une opération de financement et de location"
        ],
        "answer": [2],
        "explanation": "Le crédit-bail (ou leasing) est un contrat de location de biens d'équipement ou de matériel assorti d'une promesse unilatérale de vente (option d'achat). C'est un produit financier hybride qui combine une phase de location (versement de loyers) et une option de financement à terme (acquisition définitive du bien)."
    },
    {
        "id": 29,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q29 - Le fonds de commerce est constitué de :",
        "options": [
            "Eléments corporels",
            "Eléments incorporels",
            "Eléments corporels et incorporels",
            "La réponse b est fausse"
        ],
        "answer": [2, 3],
        "explanation": "Le fonds de commerce comprend à la fois des éléments incorporels (clientèle, nom commercial, droit au bail) et corporels (matériel, outillage, marchandises), ce qui valide l'option c. Par conséquent, l'affirmation b affirmant qu'il n'est composé *que* d'éléments incorporels est restrictive et considérée comme fausse, ce qui valide l'option d."
    },
    {
        "id": 30,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q30 - Selon le principe de prudence, quels sont les produits qui doivent être comptabilisés :",
        "options": [
            "Les produits probables",
            "Les produits certains",
            "Les produits à risques",
            "La réponse b est vraie"
        ],
        "answer": [1, 3],
        "explanation": "Le principe de prudence stipule que les produits ne doivent être comptabilisés que s'ils sont certains et définitivement acquis à la date de clôture de l'exercice (option b). À l'inverse, les charges doivent être comptabilisées dès qu'elles sont probables. L'option b étant correcte, l'option d ('La réponse b est vraie') l'est également."
    },
    {
        "id": 31,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q31 - Le montant de la cotisation minimale (IS) ne peut être en tout cas inférieur à :",
        "options": [
            "1500 DH",
            "3000 DH",
            "4500 DH"
        ],
        "answer": [1],
        "explanation": "Conformément à la législation fiscale en vigueur pour l'Impôt sur les Sociétés (IS), le montant annuel de la cotisation minimale due par les sociétés ne peut en aucun cas être inférieur à $3\,000 \text{ DH}$ (option b)."
    },
    {
        "id": 32,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q32 - Une variable est dite Continue :",
        "options": [
            "Lorsqu’elle ne prend que des nombres finis",
            "Lorsqu’elle prend des valeurs infinies",
            "Lorsqu’elle prend des valeurs dans un intervalle"
        ],
        "answer": [2],
        "explanation": "En statistiques, une variable quantitative est qualifiée de continue lorsqu'elle peut prendre un nombre infini de valeurs au sein d'un intervalle donné (option c), par exemple le poids, la taille ou la durée, contrairement à une variable discrète qui ne prend que des valeurs entières bien distinctes."
    },
    {
        "id": 33,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q33 - Dans le cas de l’intérêt simple, le capital reste invariable :",
        "options": [
            "Pendant toute la durée du prêt",
            "En début de période",
            "En fin de période"
        ],
        "answer": [0],
        "explanation": "Dans le cadre de calculs d'intérêts simples, contrairement aux intérêts composés, les intérêts générés ne sont pas recapitalisés au fur et à mesure. Ainsi, le capital de base servant au calcul reste constant et invariable du début à la fin de la durée du prêt ou du placement (option a)."
    },
    {
        "id": 34,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q34 - La valeur acquise par un capital placé à 5% est toujours égale à :",
        "options": [
            "Ses intérêts produits",
            "Sa valeur nominale augmentée des intérêts produits",
            "Sa valeur nominale augmentée de 5%"
        ],
        "answer": [1],
        "explanation": "La valeur acquise (ou valeur future) représente le montant total accumulé à l'échéance d'un placement. Elle est mathématiquement égale au capital initial (valeur nominale) additionné du montant global des intérêts produits pendant la période de placement (option b)."
    },
    {
        "id": 35,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q35 - La valeur acquise par un capital de 20 000 DH placé à intérêts simples calculés à 6% est égale, au bout d’un certain temps, à 20 400 DH la durée de placement est de :",
        "options": [
            "1 an",
            "6 mois",
            "120 jours"
        ],
        "answer": [2],
        "explanation": "Le montant des intérêts produits est de : \n$$20\,400 \text{ DH} - 20\,000 \text{ DH} = 400 \text{ DH}$$\n\nEn appliquant la formule de l'intérêt simple annuel pour une durée en jours ($T$) :\n$$\\text{Intérêt} = \\frac{\\text{Capital} \\times \\text{Taux} \\times T}{36\,000}$$\n$$400 = \\frac{20\,000 \\times 6 \\times T}{36\,000}$$\n$$400 = \\frac{120\,000 \\times T}{36\,000}$$\n$$400 = \\frac{10}{3} \\times T$$\n$$T = \\frac{400 \\times 3}{10} = 120 \\text{ jours (option c)}.$$"
    },
    {
        "id": 36,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q36 - Le tableau de financement comporte :",
        "options": [
            "La synthèse des masses du bilan",
            "Le tableau des emplois et ressources",
            "La synthèse des masses du bilan et le tableau des emplois et ressources"
        ],
        "answer": [2],
        "explanation": "Le tableau de financement est un état de synthèse qui explique les variations de la situation financière de l'entreprise lors d'un exercice. Il se compose obligatoirement de deux tableaux : la synthèse des masses du bilan d'une part, et le tableau des emplois et ressources d'autre part (option c)."
    },
    {
        "id": 37,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q37 - La capacité d’autofinancement est calculée :",
        "options": [
            "Avant l’affectation du résultat net",
            "Après l’affectation du résultat net",
            "Avant le paiement de l’impôt sur le résultat",
            "La réponse b est fausse"
        ],
        "answer": [0, 3],
        "explanation": "La capacité d'autofinancement (CAF) exprime le flux potentiel de trésorerie généré par l'activité de l'entreprise. Elle est calculée à partir du résultat net de l'exercice, c'est-à-dire avant que ce résultat ne fasse l'objet d'une quelconque affectation (mise en réserve ou distribution de dividendes) (option a). L'option b étant fausse, l'option d est donc également correcte."
    },
    {
        "id": 38,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q38 - Le financement par leasing ou par crédit-bail correspond à :",
        "options": [
            "Une opération de financement",
            "Une opération de location",
            "Une opération de financement et de location"
        ],
        "answer": [2],
        "explanation": "Le crédit-bail (ou leasing) est un contrat de location de biens d'équipement ou de matériel assorti d'une promesse unilatérale de vente (option d'achat). C'est un produit financier hybride qui combine une phase de location (versement de loyers) et une option de financement à terme (acquisition définitive du bien)."
    },
    {
        "id": 39,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q39 - L’endossement d’un effet de commerce permet de :",
        "options": [
            "Vendre l’effet à sa banque ayant la date de l’échéance",
            "Transférer la propriété de l’effet d’une personne à une autre",
            "Encaisser à sa date d’échéance moyennant rémunération",
            "La réponse b est vraie"
        ],
        "answer": [1, 3],
        "explanation": "L'endossement d'un effet de commerce consiste à apposer sa signature au dos du titre pour en transférer formellement la propriété à un tiers (l'endossataire), ce qui valide l'option b. Par voie de conséquence, l'affirmation d ('La réponse b est vraie') est également correcte."
    },
    {
        "id": 40,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q40 - La base amortissable d’un bien est constituée du :",
        "options": [
            "Prix d’achat HT + Frais d’installation et de montage + frais de transport + droits de douane + TVA non déductible",
            "Prix d’achat HT + TVA non déductible",
            "Prix d’achat HT + Frais d’installation et de montage",
            "La réponse a est fausse"
        ],
        "answer": [0],
        "explanation": "La base amortissable (ou valeur d'origine) d'une immobilisation corporelle acquise correspond à son coût d'acquisition historique. Celui-ci englobe le prix d'achat net de taxes récupérables (HT) augmenté de tous les frais accessoires directement engagés pour rendre le bien opérationnel : frais de transport, d'installation, de montage, les droits de douane, ainsi que la TVA non déductible."
    },
    {
        "id": 41,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q41 - Un stock de 700 articles ayant un coût d’acquisition unitaire de 200 DHS. L’entreprise enregistre une nouvelle entrée de 300 articles en stock pour un cout d’acquisition de 170 DHS. le CUMP est désormais égal à :",
        "options": [
            "191 DHS",
            "195 DHS",
            "180 DHS"
        ],
        "answer": [0],
        "explanation": "Le calcul du Coût Unitaire Moyen Pondéré (CUMP) s'effectue de la manière suivante :\n- Valeur du stock initial : $700 \\times 200 = 140\,000 \\text{ DHS}$\n- Valeur de la nouvelle entrée : $300 \\times 170 = 51\,000 \\text{ DHS}$\n- Valeur totale du stock : $140\,000 + 51\,000 = 191\,000 \\text{ DHS}$\n- Quantité totale d'articles : $700 + 300 = 1\,000 \\text{ articles}$\n- $\\text{CUMP} = 191\,000 \\text{ DHS} / 1\,000 = 191 \\text{ DHS}$ (option a)."
    },
    {
        "id": 42,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q42 - La provision pour risque et charges destinée à couvrir des risques correspondant à une :",
        "options": [
            "Baisse probable d’une créance de l’actif",
            "Baisse probable d’une dette du passif",
            "Augmentation probable d’une créance de l’actif",
            "Augmentation probable d’une dette du passif"
        ],
        "answer": [3],
        "explanation": "Les provisions pour risques et charges représentent un passif exigible de l'entreprise (dettes ou obligations potentielles envers des tiers) dont le montant ou l'échéance ne sont pas fixés de manière précise. Elles reflètent donc une augmentation probable d'une dette du passif (option d), contrairement aux provisions pour dépréciation qui constatent la baisse de valeur d'éléments d'actif (ex: baisse de valeur d'une créance)."
    },
    {
        "id": 43,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q43 - La variation des stocks de produits est-elle considérée comme :",
        "options": [
            "Un produit variable",
            "Une charge variable",
            "Un produit fixe",
            "Une charge fixe"
        ],
        "answer": [0],
        "explanation": "Dans la méthode des coûts variables (Direct Costing), la variation des stocks de produits est généralement considérée comme un ajustement rattaché aux produits variables (option a) car elle dépend directement du niveau d'activité et de fabrication de l'entreprise."
    },
    {
        "id": 44,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q44 - Une obligation :",
        "options": [
            "Est un droit de propriété",
            "Est un droit de créance",
            "Donne lieu à un revenu variable",
            "Rapporte un revenu fixe",
            "La réponse c est vraie"
        ],
        "answer": [1, 3],
        "explanation": "Une obligation représente une part d'un emprunt à long terme émis par une entreprise ou l'État, conférant ainsi un droit de créance à son titulaire (option b). Contrairement aux actions, elle n'est pas un titre de propriété et distribue un revenu périodique fixe et préétabli (les intérêts ou coupons) (option d)."
    },
    {
        "id": 45,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q45 - Parmi ces éléments, quel est celui qui ne peut pas faire l’objet d’amortissement :",
        "options": [
            "Une construction",
            "Un terrain",
            "Un véhicule de transport",
            "La réponse b est vraie"
        ],
        "answer": [1, 3],
        "explanation": "Un terrain nu (à l'exclusion des gisements et carrières) ne subit pas d'usure irréversible liée au temps et à l'usage ; il a une durée de vie infinie et n'est donc pas amortissable (option b). S'il perd de sa valeur, on procède à une provision pour dépréciation. L'option b étant correcte, l'option d ('La réponse b est vraie') l'est également."
    },
    {
        "id": 46,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q46 - Parmi les comptes de régularisations suivantes, le quel est-il retracé au passif du bilan :",
        "options": [
            "Produits constatés d’avance",
            "Charges constatées d’avance",
            "Charges à répartir sur plusieurs exercices",
            "La réponse a est vraie"
        ],
        "answer": [0, 3],
        "explanation": "Les produits constatés d'avance (PCA) sont rattachés au passif du bilan (dans la classe des comptes de régularisation-passif, compte 4491 au Maroc) car ils correspondent à des ventes enregistrées mais non encore livrées (option a). L'option a étant correcte, l'option d ('La réponse a est vraie') l'est également."
    },
    {
        "id": 47,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q47 - Formule de calcul de l’indice de sécurité est :",
        "options": [
            "(chiffre d’affaire – Seuil de rentabilité) x 100/chiffre d’affaires",
            "Marge de sécurité /Seuil de rentabilité",
            "Chiffre d’affaire/marge sur coût variable"
        ],
        "answer": [0],
        "explanation": "L'indice de sécurité exprime la marge de sécurité (Chiffre d'affaires - Seuil de rentabilité) en pourcentage du chiffre d'affaires. Sa formule est donc bien : \n$$\\frac{\\text{Chiffre d'affaires} - \\text{Seuil de rentabilité}}{\\text{Chiffre d'affaires}} \\times 100 \\text{ (option a).}$$"
    },
    {
        "id": 48,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q48 - Une entreprise a réalisé en 2019 un chiffre d’affaire de 210 000 Dhs sachant que le prix unitaire était de 15 Dhs, la quantité vendue durant cette année était de :",
        "options": [
            "13 000 Dhs",
            "14 000 Dhs",
            "15 000 Dhs"
        ],
        "answer": [1],
        "explanation": "La quantité vendue s'obtient en divisant le chiffre d'affaires par le prix unitaire de vente :\n$$\\frac{210\,000 \\text{ DHS}}{15 \\text{ DHS}} = 14\,000 \\text{ unités (option b).}$$\n*Note : Les options sur l'énoncé papier original ont conservé le label 'Dhs' à la place d'unités par erreur matérielle.*"
    },
    {
        "id": 49,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez le ou les intrus parmi les structures d’entreprise suivantes :",
        "options": [
            "Décisionnelle",
            "Hiérarchique",
            "Opérationnelle"
        ],
        "answer": [0],
        "explanation": "Les structures hiérarchique et opérationnelle sont des types d'organisation structurelle réels. La structure 'décisionnelle' fait référence aux processus de prise de décision mais n'est pas qualifiée en tant que structure formelle classique d'entreprise, c'est donc l'intrus (option a)."
    },
    {
        "id": 50,
        "category": "Comptabilité et Gestion",
        "instruction": "On parle de compte de l’exploitant dans le cas :",
        "options": [
            "D’une SA",
            "D’une SARL à « associé unique »",
            "D’une entreprise individuelle",
            "La réponse b est fausse"
        ],
        "answer": [2, 3],
        "explanation": "Le compte de l'exploitant (compte 1080) est exclusivement ouvert dans les entreprises individuelles (option c) pour enregistrer les retraits et apports personnels de l'exploitant. Dans les sociétés (SA, SARL, y compris à associé unique), on parle de capital social et de comptes courants d'associés, rendant l'option b fausse, ce qui valide également l'option d."
    },
    {
        "id": 51,
        "category": "Comptabilité et Gestion",
        "instruction": "Le premier dividende est la part des bénéfices distribués aux actionnaires, calculée sur :",
        "options": [
            "Le montant libéré et non amortie du capital social",
            "Le montant du capital libéré ou non",
            "Le capital libéré et amorti"
        ],
        "answer": [0],
        "explanation": "Le premier dividende (intérêt statutaire) est calculé sur le montant libéré et non amorti (non remboursé) du capital social détenu par les actionnaires (option a)."
    },
    {
        "id": 52,
        "category": "Comptabilité et Gestion",
        "instruction": "La réserve facultative est :",
        "options": [
            "Un compte dans lequel les sociétés sont tenues légalement d’affecter une partie de leur bénéfice",
            "Constitué librement par l’assemblée générale ordinaire",
            "Constituée par une disposition des statuts"
        ],
        "answer": [1],
        "explanation": "Contrairement aux réserves légales (obligatoires par la loi) ou statutaires (prévues par les statuts d'origine), la réserve facultative est décidée librement par l'Assemblée Générale Ordinaire (AGO) lors de l'affectation du bénéfice net de l'exercice (option b)."
    },
    {
        "id": 53,
        "category": "Comptabilité et Gestion",
        "instruction": "Quelle distinction éventuelle pourrait-on faire entre les provisions et les amortissements :",
        "options": [
            "Il n’y a pas de différences puisqu’il s’agit de deux appellations de la même notion",
            "Les provisions correspondent à des pertes potentielles ou prévisibles alors que les amortissements traduisent des dépréciations effectives",
            "Les amortissements concernent uniquement les immobilisations alors que les provisions concernent uniquement les stocks",
            "La réponse c est vraie"
        ],
        "answer": [1],
        "explanation": "L'amortissement constate une dépréciation comptable irréversible et effective d'un actif liée à l'usure ou au temps. La provision quant à elle est une correction d'évaluation comptabilisant une perte simplement probable et réversible d'un élément d'actif ou de passif (option b)."
    },
    {
        "id": 54,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q54 - Lequel de ces principes ne fait pas partie des principes comptables fondamentaux :",
        "options": [
            "Sincérité",
            "Clarté",
            "Importance significative",
            "Permanence des méthodes",
            "La réponse c est fausse"
        ],
        "answer": [0, 4],
        "explanation": "Le Code Général de Normalisation Comptable (CGNC) retient strictement 7 principes comptables fondamentaux : continuité d'exploitation, permanence des méthodes, coût historique, spécialisation des exercices, prudence, clarté, et importance significative. La 'Sincérité' (option a) est un objectif qualitatif majeur (lié à l'image fidèle et la régularité) mais ne figure pas formellement parmi ces 7 principes. L'option c étant un principe fondamental, l'affirmation 'La réponse c est fausse' (option e) est également correcte."
    },
    {
        "id": 55,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q55 - Le matériel de transport financé par crédit-bail doit être :",
        "options": [
            "Inscrit dans un compte d’actif immobilisé",
            "Inscrit dans un compte de charges",
            "Considéré comme un engagement hors bilan",
            "La réponse a est fausse"
        ],
        "answer": [0],
        "explanation": "Bien qu'en comptabilité générale marocaine (normes CGNC), le matériel financé par crédit-bail reste la propriété du bailleur et figure donc en hors-bilan (et ses redevances en charges), l'approche d'analyse financière (bilan financier et fonctionnel) retraite systématiquement le crédit-bail en l'inscrivant à l'actif immobilisé (option a, surlignée en bleu dans le document) avec une contrepartie en dettes au passif."
    },
    {
        "id": 56,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q56 - Le(s)quel(s) de ces éléments ne fait (font) pas partie de l’actif du bilan :",
        "options": [
            "Les stocks",
            "Les capitaux propres",
            "Les immobilisations",
            "La réponse a est vraie"
        ],
        "answer": [1],
        "explanation": "Les capitaux propres (option b) figurent au passif du bilan de l'entreprise (dans le financement permanent) puisqu'ils représentent les ressources stables internes (capital social, réserves, résultat). Les stocks et les immobilisations font partie intégrante de l'actif."
    },
    {
        "id": 57,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q57 - En droit fiscal, les documents comptables doivent-ils être conservés par le contribuable pendant :",
        "options": [
            "5 ans",
            "10 ans",
            "15 ans",
            "La réponse c est vraie"
        ],
        "answer": [1],
        "explanation": "Conformément à l'article 211 du Code Général des Impôts (CGI) marocain et à l'article 22 du Code de Commerce, les contribuables sont légalement tenus de conserver les livres comptables, pièces justificatives et documents pendant une durée de $10 \\text{ ans}$ (option b)."
    },
    {
        "id": 58,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q58 - La règle de la partie double consiste à :",
        "options": [
            "Débiter un compte et créditer par un autre",
            "Débiter deux comptes",
            "Créditer deux comptes",
            "La réponse b est fausse"
        ],
        "answer": [0, 3],
        "explanation": "Le principe fondamental de la partie double impose que tout enregistrement comptable implique au moins deux comptes, l'un étant débité et l'autre crédité pour un montant équivalent (option a). De ce fait, débiter uniquement deux comptes sans contrepartie créditrice est erroné (l'affirmation b est fausse), rendant l'option d également correcte."
    },
    {
        "id": 59,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q59 - Quelle est la règle fondamentale en ce qui concerne l’actif et le passif :",
        "options": [
            "Le passif doit toujours être supérieur à l’actif",
            "Le passif doit toujours être inférieur à l’actif",
            "Le passif doit toujours être égal à l’actif",
            "La réponse c est vraie"
        ],
        "answer": [2, 3],
        "explanation": "Le bilan comptable doit obligatoirement être équilibré, ce qui signifie que le total de l'Actif est rigoureusement égal au total du Passif ($\\text{Actif} = \\text{Passif}$) (option c). Par conséquent, l'affirmation d ('La réponse c est vraie') est également correcte."
    },
    {
        "id": 60,
        "category": "Comptabilité et Gestion",
        "instruction": "Cochez la ou les bonnes réponses dans la feuille des réponses :",
        "question": "Q60 - La société anonyme « FARAS » a emprunté 800 000 dhs auprès de son actionnaire MOUBARIK sur 9 mois au Taux de 4% le capital social de la société est de 600 000 dhs (totalement libéré) le taux autorisé par le ministère des finances est de 2,23%. Donnez respectivement le montant des intérêts déductibles et le montant des intérêts à réintégrer :",
        "options": [
            "24 000 ; 13 695",
            "10 035 ; 13 965",
            "18 400 ; 7965"
        ],
        "answer": [1],
        "explanation": "Les conditions de déductibilité des intérêts des comptes courants d'associés imposent une double limitation fiscale au Maroc (IS) :\n1. Limitation de la base : le montant de l'emprunt ouvrant droit à intérêt est plafonné au montant du capital social entièrement libéré (soit $600\\,000 \\text{ DHS}$ au lieu de $800\\,000 \\text{ DHS}$).\n2. Limitation du taux : le taux d'intérêt est plafonné au taux réglementaire autorisé (soit $2,23\\%$ au lieu de $4\\%$).\n\nCalculs :\n- Intérêts comptabilisés totaux :\n$$800\\,000 \\times 4\\% \\times \\frac{9}{12} = 24\\,000 \\text{ DHS}$$\n- Intérêts déductibles (soumis aux deux limites) :\n$$600\\,000 \\times 2,23\\% \\times \\frac{9}{12} = 10\\,035 \\text{ DHS}$$\n- Intérêts non déductibles à réintégrer fiscalement :\n$$24\\,000 - 10\\,035 = 13\\,965 \\text{ DHS}$$\nLe couple recherché (intérêts déductibles ; intérêts à réintégrer) correspond exactement à $(10\\,035 \\text{ ; } 13\\,965)$ (option b)."
    }
];
