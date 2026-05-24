// QCM - Concours de recrutement des محررين قضائيين de 3ème Grade
// Spécialité : Gestion des entreprises / Comptabilité / Commerce / Droit
// Organisé par : Ministère de la Justice - Direction des Ressources Humaines
// Date : 24 Mai 2026
// Les réponses correctes sont basées sur le corrigé officiel (surlignées en jaune)

const JUSTICE_2026_QUESTIONS = [
    {
        "id": 1,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "L'article de la Constitution marocaine qui garantit l'indépendance du pouvoir judiciaire est :",
        "options": [
            "L'article 107.",
            "L'article 110.",
            "L'article 112.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [0],
        "explanation": "L'article 107 de la Constitution marocaine garantit l'indépendance du pouvoir judiciaire."
    },
    {
        "id": 2,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Le décret n° 2.22.400 déterminant les attributions et l'organisation du Ministère de la Justice vise à permettre de garantir la transformation numérique du système judiciaire. Cette transformation permet notamment :",
        "options": [
            "L'amélioration de l'accès à la justice.",
            "La modernisation des procédures judiciaires.",
            "L'efficacité du traitement des dossiers.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [0, 1, 2],
        "explanation": "Le décret n° 2.22.400 vise notamment à améliorer l'accès à la justice, moderniser les procédures judiciaires et améliorer l'efficacité du traitement des dossiers."
    },
    {
        "id": 3,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Selon le décret n° 2.23.665 relatif à la nouvelle carte judiciaire du royaume, les tribunaux de commerce vise au nombre de :",
        "options": [
            "Cinq tribunaux.",
            "Sept tribunaux.",
            "Neuf tribunaux.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [3],
        "explanation": "Toutes les réponses sont fausses. Le nombre de tribunaux de commerce selon ce décret ne correspond à aucune des options proposées."
    },
    {
        "id": 4,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "L'organe chargé du contrôle supérieur des finances publiques est :",
        "options": [
            "La Trésorerie Générale du Royaume.",
            "La Cour des comptes.",
            "L'Inspection Générale de l'Administration Territoriale.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [1],
        "explanation": "La Cour des comptes est l'organe constitutionnel chargé du contrôle supérieur des finances publiques au Maroc."
    },
    {
        "id": 5,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Le délai de paiement des entreprises dans le cadre des commandes publiques est :",
        "options": [
            "30 jours.",
            "60 jours.",
            "90 jours.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [0],
        "explanation": "Le délai légal de paiement dans le cadre des commandes publiques est de 30 jours."
    },
    {
        "id": 6,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Un litige entre un commerçant et son fournisseur sur une livraison défectueuse relève de la compétence :",
        "options": [
            "Tribunal de première instance.",
            "Tribunal administratif.",
            "Tribunal de commerce.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [2],
        "explanation": "Un litige commercial entre un commerçant et son fournisseur relève de la compétence du Tribunal de commerce."
    },
    {
        "id": 7,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "La Cour d'appel est une juridiction :",
        "options": [
            "De premier degré.",
            "De second degré.",
            "De cassation.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [1],
        "explanation": "La Cour d'appel est une juridiction de second degré : elle statue sur les appels des décisions rendues par les juridictions de première instance."
    },
    {
        "id": 8,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Selon le Code du commerce marocain, le redressement judiciaire d'une entreprise vise à :",
        "options": [
            "Liquider l'entreprise immédiatement.",
            "Sauver l'entreprise.",
            "Fermer l'entreprise.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [1],
        "explanation": "Le redressement judiciaire vise à sauver l'entreprise en difficulté, à maintenir l'emploi et à apurer le passif."
    },
    {
        "id": 9,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Selon le Code du travail marocain, le contrat de travail à durée déterminée (CDD) est valablement conclu pour :",
        "options": [
            "Remplacer un salarié temporairement absent.",
            "Accroissement temporaire d'activité.",
            "Emploi saisonnier.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [0, 1, 2],
        "explanation": "Le CDD peut être conclu pour remplacer un salarié temporairement absent, pour accroissement temporaire d'activité ou pour un emploi saisonnier."
    },
    {
        "id": 10,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "La variable statistique discrète se caractérise par :",
        "options": [
            "Un nombre infini de valeurs dans un intervalle.",
            "Des valeurs regroupées obligatoirement en classes.",
            "Un nombre fini ou dénombrable de valeurs, souvent entières.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [2],
        "explanation": "La variable statistique discrète prend un nombre fini ou dénombrable de valeurs, souvent des valeurs entières (ex : nombre d'enfants, nombre d'accidents)."
    },
    {
        "id": 11,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "L'histogramme est le mode de représentation spécifique des :",
        "options": [
            "Caractères qualitatifs nominaux.",
            "Caractères quantitatifs continus.",
            "Caractères qualitatifs ordinaux.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [1],
        "explanation": "L'histogramme est utilisé pour représenter les variables quantitatives continues regroupées en classes."
    },
    {
        "id": 12,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Un amortissement dérogatoire :",
        "options": [
            "Est un amortissement exceptionnel fiscal.",
            "Est comptabilisé dans les produits non courants.",
            "Est une provision réglementée.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [2],
        "explanation": "L'amortissement dérogatoire est comptabilisé en tant que provision réglementée dans les capitaux propres assimilés."
    },
    {
        "id": 13,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "La dotation aux amortissements est enregistrée dans :",
        "options": [
            "Les charges d'exploitation.",
            "Les charges non courantes.",
            "Les produits financiers.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [0, 1],
        "explanation": "La dotation aux amortissements peut être enregistrée dans les charges d'exploitation (amortissements ordinaires) ou dans les charges non courantes (amortissements exceptionnels)."
    },
    {
        "id": 14,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Une provision pour risques est :",
        "options": [
            "Une constatation d'une perte certaine.",
            "Une dépréciation d'un élément d'actif.",
            "Un passif dont l'échéance ou le montant est incertain.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [2],
        "explanation": "Une provision pour risques est un passif dont l'échéance ou le montant est incertain, constituée pour faire face à des charges probables."
    },
    {
        "id": 15,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Une provision non justifiée doit être :",
        "options": [
            "Neutralisée fiscalement.",
            "Amortie.",
            "Déduite.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [0],
        "explanation": "Une provision non justifiée fiscalement doit être réintégrée (neutralisée fiscalement) dans le résultat fiscal."
    },
    {
        "id": 16,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Les frais de constitution sont amortis sur une durée maximale de :",
        "options": [
            "5 ans.",
            "7 ans.",
            "10 ans.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [0],
        "explanation": "Selon le CGNC marocain, les frais de constitution (immobilisations en non-valeur) sont amortis sur une durée maximale de 5 ans."
    },
    {
        "id": 17,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Dans le cadre de l'évaluation des créances clients en fin d'exercice, une provision pour dépréciation est constituée sur :",
        "options": [
            "Le montant TTC de la créance.",
            "Le montant Hors Taxe de la créance.",
            "Le montant de la créance augmenté des frais de recouvrement.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [1],
        "explanation": "La provision pour dépréciation des créances clients est calculée sur le montant Hors Taxe (HT) de la créance."
    },
    {
        "id": 18,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Les \"Écarts de conversion actif\" apparaissant au bilan lorsqu'on constate :",
        "options": [
            "Des pertes latentes sur dettes en devises.",
            "Des pertes latentes sur créances en devises.",
            "Des gains latents sur créances en devises.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [0, 1],
        "explanation": "Les écarts de conversion actif correspondent aux pertes latentes de change : augmentation des dettes en devises ou diminution des créances en devises."
    },
    {
        "id": 19,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "La balance avant inventaire permet de :",
        "options": [
            "Présenter le résultat net définitif.",
            "Calculer l'impôt sur les sociétés.",
            "Établir le bilan définitif directement.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [3],
        "explanation": "La balance avant inventaire n'est qu'une étape intermédiaire. Elle ne permet pas directement d'établir le résultat définitif, l'IS ni le bilan sans les travaux d'inventaire."
    },
    {
        "id": 20,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Le report à nouveau débiteur (solde négatif) dans le bilan représente :",
        "options": [
            "Un bénéfice à distribuer.",
            "Une provision pour risque.",
            "Un emprunt à rembourser.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [3],
        "explanation": "Le report à nouveau débiteur représente des pertes accumulées des exercices antérieurs non couvertes. Aucune des options proposées ne le décrit correctement."
    },
    {
        "id": 21,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Selon le Code Général de Normalisation Comptable (CGNC) marocain, les frais d'augmentation du capital sont classés dans :",
        "options": [
            "Les charges d'exploitation de l'exercice.",
            "Les immobilisations en non-valeur.",
            "Les charges financières.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [1],
        "explanation": "Les frais d'augmentation du capital sont classés dans les immobilisations en non-valeur (compte 211) selon le CGNC marocain."
    },
    {
        "id": 22,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Selon le Code Général de Normalisation Comptable (CGNC) marocain, les immobilisations financières (titres de participation) sont évaluées à l'entrée au :",
        "options": [
            "Valeur nominale.",
            "Valeur de marché à la date d'acquisition.",
            "Coût d'acquisition incluant les frais accessoires.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [3],
        "explanation": "Selon le CGNC, les titres de participation sont évalués au coût d'acquisition hors frais accessoires. Aucune des options ne correspond exactement à cette définition."
    },
    {
        "id": 23,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "La notion de « partie double » s'applique à toutes les opérations, sauf :",
        "options": [
            "Les opérations de caisse.",
            "Les opérations d'inventaire.",
            "Les opérations de virement interne entre comptes bancaires.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [3],
        "explanation": "La partie double s'applique à TOUTES les opérations comptables sans aucune exception. Toutes les options proposées sont donc fausses."
    },
    {
        "id": 24,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Un compte de la classe 1 « Financement permanent » peut être débiteur dans les situations suivantes :",
        "options": [
            "Lorsqu'il enregistre un emprunt bancaire.",
            "Lorsqu'il enregistre une augmentation de capital.",
            "Lorsqu'il constate une perte reportée à nouveau.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [2],
        "explanation": "Un compte de la classe 1 peut être débiteur lorsqu'il constate une perte reportée à nouveau (report à nouveau débiteur, compte 119)."
    },
    {
        "id": 25,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Une entreprise marocaine reçoit une subvention d'investissement de l'État pour l'achat d'une machine. Cette subvention doit être comptabilisée initialement dans :",
        "options": [
            "Les produits d'exploitation.",
            "Les produits non courants.",
            "Les capitaux propres assimilés.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [2],
        "explanation": "Les subventions d'investissement sont initialement comptabilisées dans les capitaux propres assimilés (compte 131) selon le CGNC marocain."
    },
    {
        "id": 26,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "La comptabilité analytique se distingue de la comptabilité générale principalement par :",
        "options": [
            "Son caractère obligatoire.",
            "Son caractère facultatif.",
            "Sa périodicité exclusivement annuelle.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [1],
        "explanation": "La comptabilité analytique est facultative, contrairement à la comptabilité générale qui est obligatoire pour les entreprises."
    },
    {
        "id": 27,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Le(s) objectif(s) de la comptabilité analytique est (sont) :",
        "options": [
            "Établir les états de synthèse légaux.",
            "Calculer les coûts de revient par produit.",
            "Aider à la prise de décision.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [1, 2],
        "explanation": "La comptabilité analytique vise à calculer les coûts de revient par produit et à aider à la prise de décision. Les états de synthèse légaux relèvent de la comptabilité générale."
    },
    {
        "id": 28,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Une charge dite « supplétive » en comptabilité analytique est :",
        "options": [
            "Une charge réelle non enregistrée en comptabilité générale.",
            "Une charge récupérable sur les tiers.",
            "Une charge non courante exclue des coûts.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [3],
        "explanation": "Toutes les réponses sont fausses. Une charge supplétive est une charge fictive (ex : rémunération fictive de l'exploitant individuel) incorporée dans les coûts analytiques mais non comptabilisée en comptabilité générale."
    },
    {
        "id": 29,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Les charges indirectes sont réparties entre les sections analytiques en utilisant :",
        "options": [
            "Des clés de répartition.",
            "Les unités d'œuvre.",
            "Les coûts d'usage.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [0, 1],
        "explanation": "Les charges indirectes sont réparties entre les sections par des clés de répartition (répartition secondaire), puis imputées aux coûts via les unités d'œuvre."
    },
    {
        "id": 30,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Le seuil de rentabilité peut être exprimé en :",
        "options": [
            "Volume de production.",
            "Chiffre d'affaires.",
            "Nombre de jours d'activité.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [0, 1, 2],
        "explanation": "Le seuil de rentabilité (point mort) peut être exprimé en volume de production, en chiffre d'affaires critique, ou en nombre de jours d'activité nécessaires pour l'atteindre."
    },
    {
        "id": 31,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Le(s) centre(s) généralement considéré(s) comme auxiliaire(s) dans un tableau de répartition est (sont) :",
        "options": [
            "Administration générale.",
            "Service commercial.",
            "Entretien.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [0, 2],
        "explanation": "L'administration générale et l'entretien sont généralement des centres auxiliaires dont les coûts sont répartis vers les centres principaux."
    },
    {
        "id": 32,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Lorsque le stock final réel (inventaire physique) est supérieur au stock final théorique (inventaire permanent), on a un :",
        "options": [
            "Mali d'inventaire, à ajouter au résultat de comptabilité analytique d'exploitation.",
            "Boni d'inventaire, à retrancher du résultat de comptabilité analytique d'exploitation.",
            "Boni d'inventaire, à ajouter au résultat de comptabilité analytique d'exploitation.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [2],
        "explanation": "Quand le stock réel > stock théorique, il y a un boni d'inventaire (situation favorable), à ajouter au résultat analytique d'exploitation."
    },
    {
        "id": 33,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "La (les) méthode(s) de valorisation des sorties autorisée(s) par le Code Général de Normalisation Comptable est (sont) :",
        "options": [
            "LIFO (Last In, First Out).",
            "FIFO (First In, First Out).",
            "CMP (Coût Moyen Unitaire Pondéré) après chaque entrée.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [1, 2],
        "explanation": "Le CGNC marocain autorise uniquement le FIFO et le CMUP après chaque entrée. La méthode LIFO n'est pas autorisée au Maroc."
    },
    {
        "id": 34,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Un produit semi-fini est :",
        "options": [
            "Un encours ayant consommé moins de 50% des charges.",
            "Un produit fini mais non stockable.",
            "Un déchet réutilisable.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [3],
        "explanation": "Un produit semi-fini est un produit intermédiaire ayant subi une ou plusieurs phases de transformation et destiné à entrer dans une nouvelle phase. Toutes les définitions proposées sont incorrectes."
    },
    {
        "id": 35,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "La concordance des résultats entre la comptabilité analytique et la comptabilité générale intègre :",
        "options": [
            "Les charges supplétives en ajout.",
            "Les charges non incorporables en ajout.",
            "Les produits d'exploitation incorporables.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [0],
        "explanation": "La concordance passe par : Résultat analytique + charges non incorporables − charges supplétives ± différences d'incorporation = Résultat comptable."
    },
    {
        "id": 36,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Un rebut est un produit :",
        "options": [
            "Ayant une valeur résiduelle nulle.",
            "Défectueux et impropre à l'usage normal.",
            "Réutilisable sans traitement.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [1],
        "explanation": "Un rebut est un produit défectueux et impropre à l'usage normal, issu du processus de fabrication. Il peut avoir une valeur résiduelle mais ne peut pas être utilisé normalement."
    },
    {
        "id": 37,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "La méthode du coût variable partiel consiste à :",
        "options": [
            "N'incorporer que les charges fixes dans les coûts.",
            "N'incorporer que les charges variables dans les coûts.",
            "Incorporer la totalité des charges directes et indirectes.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [1],
        "explanation": "La méthode du coût variable partiel (direct costing) n'incorpore que les charges variables dans les coûts de revient. Les charges fixes sont traitées comme charges de période."
    },
    {
        "id": 38,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Un marché avec peu d'offreurs et beaucoup de demandeurs est un :",
        "options": [
            "Monopole.",
            "Oligopole.",
            "Concurrence parfaite.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [1],
        "explanation": "Un oligopole est une structure de marché avec peu de vendeurs (offreurs) et beaucoup d'acheteurs (demandeurs). Ex : marché des télécommunications."
    },
    {
        "id": 39,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Quand la demande d'un produit est faiblement élastique au prix, une hausse du prix entraîne généralement :",
        "options": [
            "Une augmentation du chiffre d'affaires.",
            "Une forte baisse des ventes.",
            "Une hausse des coûts fixes.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [0],
        "explanation": "Quand la demande est inélastique (faiblement élastique), la hausse de prix entraîne une légère baisse des quantités mais une hausse du chiffre d'affaires global."
    },
    {
        "id": 40,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "La concurrence déloyale repose principalement sur :",
        "options": [
            "La fraude, le préjudice et le lien de causalité.",
            "La liberté du commerce.",
            "La baisse des ventes.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [0],
        "explanation": "La concurrence déloyale repose sur trois éléments cumulatifs : une faute (fraude), un préjudice subi par la victime, et un lien de causalité entre les deux."
    },
    {
        "id": 41,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Dans la matrice BCG (Boston Consulting Group), un produit avec une faible part de marché relative et un marché à forte croissance est classé comme :",
        "options": [
            "Vedette.",
            "Dilemme.",
            "Poids mort.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [1],
        "explanation": "Dans la matrice BCG, faible part de marché + forte croissance = Dilemme (point d'interrogation). Il faut décider d'investir ou d'abandonner."
    },
    {
        "id": 42,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "La stratégie de domination par les coûts de Porter vise principalement à :",
        "options": [
            "Devenir le producteur avec le coût le plus bas du secteur.",
            "Se concentrer sur une niche de marché très spécifique.",
            "Proposer un produit unique et différencié.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [0],
        "explanation": "La domination par les coûts (cost leadership) vise à produire au coût le plus bas du secteur pour dégager une marge supérieure ou pratiquer des prix inférieurs à la concurrence."
    },
    {
        "id": 43,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Dans l'analyse des 5 forces de Porter, la menace de produits de substitution est forte lorsque :",
        "options": [
            "Les produits alternatifs offrent un meilleur rapport qualité/prix.",
            "Le coût de changement de fournisseur est élevé.",
            "Les barrières à l'entrée sont très élevées.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [0],
        "explanation": "La menace de substitution est forte lorsque des produits alternatifs offrent un meilleur rapport qualité/prix, incitant les clients à basculer vers eux."
    },
    {
        "id": 44,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Un produit en phase de maturité de son cycle de vie se caractérise par :",
        "options": [
            "Une forte croissance des ventes et un nombre réduit de concurrents.",
            "Un pic des ventes et une concurrence intense.",
            "Un lancement publicitaire massif.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [1],
        "explanation": "En phase de maturité, le produit atteint son pic de ventes, la concurrence est intense et les marges commencent à se réduire."
    },
    {
        "id": 45,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Dans la phase de déclin d'un produit, l'entreprise peut choisir :",
        "options": [
            "Un abandon pur et simple.",
            "Une relance par modification du produit.",
            "Une dernière campagne de promotion avant retrait.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [0, 1, 2],
        "explanation": "En phase de déclin, l'entreprise peut abandonner le produit, tenter une relance (modification ou repositionnement), ou mener une dernière campagne promotionnelle avant retrait."
    },
    {
        "id": 46,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "La distribution « sélective » consiste à :",
        "options": [
            "Distribuer le produit dans tous les points de vente possibles.",
            "Confier l'exclusivité à un seul distributeur par zone.",
            "Vendre uniquement par correspondance.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [3],
        "explanation": "La distribution sélective consiste à choisir un nombre limité de distributeurs selon des critères précis de qualité, image et compétence. Aucune des options ne correspond à cette définition."
    },
    {
        "id": 47,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Selon l'approche traditionnelle, en tant qu'unité de répartition, la richesse créée par l'entreprise, appelée valeur ajoutée, sert à :",
        "options": [
            "Uniquement à rémunérer le personnel.",
            "Uniquement à rémunérer les apporteurs de capitaux.",
            "Constituer les bénéfices non distribués de l'entreprise.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [3],
        "explanation": "La valeur ajoutée sert à rémunérer TOUS les partenaires : personnel (salaires), État (impôts), prêteurs (intérêts), actionnaires (dividendes) et à l'autofinancement. Aucune option isolée n'est complète."
    },
    {
        "id": 48,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Le type de liaison dans l'entreprise défini par \"l'autorité de compétence d'une personne sur une autre limitée à son domaine de spécialité\" est :",
        "options": [
            "La liaison hiérarchique.",
            "La liaison fonctionnelle.",
            "La liaison transversale.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [1],
        "explanation": "La liaison fonctionnelle est une autorité limitée à un domaine de spécialité. Ex : le DRH a autorité fonctionnelle sur les questions RH dans tous les services."
    },
    {
        "id": 49,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Une entreprise est dite \"système ouvert\" car :",
        "options": [
            "Elle est en relation constante avec son environnement par des flux d'entrée et de sortie.",
            "Ses décisions sont prises par un groupe d'hommes organisé.",
            "Elle poursuit des buts précis comme la recherche du profit.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [0],
        "explanation": "Une entreprise est un système ouvert car elle échange en permanence avec son environnement : elle reçoit des inputs (matières, capital, travail) et produit des outputs (biens, services)."
    },
    {
        "id": 50,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Dans une structure hiérarchique, l'obligation pour un subordonné d'accomplir les tâches qui lui sont assignées et d'expliquer les résultats non-satisfaisants obtenus est appelée :",
        "options": [
            "L'unité de commandement.",
            "La délégation de l'autorité.",
            "Le principe de la responsabilité.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [2],
        "explanation": "Le principe de la responsabilité oblige le subordonné à accomplir les tâches assignées et à rendre compte des résultats, notamment les résultats non-satisfaisants."
    },
    {
        "id": 51,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Dans une structure « Staff and Line », le rôle principal de l'état-major (staff) est de :",
        "options": [
            "Assurer l'unité de commandement.",
            "Donner des ordres directs aux opérationnels.",
            "Conseiller et observer, sans décider directement.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [2],
        "explanation": "Dans la structure Staff and Line, l'état-major (staff) a un rôle consultatif : il conseille, analyse et observe, sans avoir d'autorité directe sur les opérationnels."
    },
    {
        "id": 52,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "L'environnement général de l'entreprise qui intègre les aspects sociologiques, économiques, juridiques, techniques est appelé :",
        "options": [
            "Macro-environnement.",
            "Micro-environnement.",
            "Environnement concurrentiel.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [0],
        "explanation": "Le macro-environnement (analyse PESTEL) regroupe les facteurs généraux qui influencent l'entreprise : Politiques, Économiques, Sociologiques, Technologiques, Écologiques et Légaux."
    },
    {
        "id": 53,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Dans une Société à Responsabilité Limitée (SARL), la cession de parts sociales à un tiers nécessite :",
        "options": [
            "L'unanimité des associés.",
            "L'agrément des autres associés.",
            "L'autorisation du tribunal de commerce.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [1],
        "explanation": "Dans une SARL, la cession de parts sociales à un tiers extérieur nécessite l'agrément (accord) des autres associés, selon les statuts et la loi."
    },
    {
        "id": 54,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Le fonds de roulement net global (FRNG) est égal :",
        "options": [
            "Actif circulant – Passif circulant.",
            "Capitaux permanents – Actif immobilisé.",
            "Trésorerie active – Trésorerie passive.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [0, 1],
        "explanation": "Le FRNG peut se calculer de deux façons équivalentes : par le bas du bilan (Actif circulant − Passif circulant) ou par le haut du bilan (Capitaux permanents − Actif immobilisé)."
    },
    {
        "id": 55,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Un ratio de liquidité générale supérieur à 1 signifie :",
        "options": [
            "Une insolvabilité.",
            "Un risque élevé.",
            "Une capacité à faire face aux dettes à court terme.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [2],
        "explanation": "Un ratio de liquidité générale > 1 signifie que l'actif circulant couvre le passif circulant, indiquant une capacité à honorer les dettes à court terme."
    },
    {
        "id": 56,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "La dépense fiscale est :",
        "options": [
            "Une dépense supportée par l'État.",
            "Une exonération d'impôt.",
            "Une dépense qui permet le fonctionnement de l'administration fiscale.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [1],
        "explanation": "La dépense fiscale est une exonération ou réduction d'impôt accordée par l'État à certains contribuables, représentant un manque à gagner fiscal pour le Trésor."
    },
    {
        "id": 57,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "L'impôt sur les Sociétés (IS) est un impôt :",
        "options": [
            "Proportionnel en général.",
            "Progressif toujours.",
            "Indirect.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [0],
        "explanation": "L'IS est en général un impôt proportionnel (taux fixe appliqué au bénéfice). Au Maroc, il peut avoir des taux différents selon les tranches, mais il reste principalement proportionnel."
    },
    {
        "id": 58,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "La retenue à la source constitue pour le bénéficiaire du revenu :",
        "options": [
            "Une charge définitive.",
            "Une avance sur l'impôt dû.",
            "Une exonération fiscale.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [0, 1],
        "explanation": "La retenue à la source peut constituer une charge définitive (impôt libératoire) ou une avance sur l'impôt dû selon la nature du revenu et le régime fiscal applicable."
    },
    {
        "id": 59,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Le budget de trésorerie sert à :",
        "options": [
            "Calculer la trésorerie.",
            "Prévoir les flux de trésorerie.",
            "Évaluer les stocks.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [1],
        "explanation": "Le budget de trésorerie est un outil de prévision qui permet d'anticiper les encaissements et décaissements futurs afin de gérer les besoins de financement à court terme."
    },
    {
        "id": 60,
        "category": "محررين قضائيين - Ministère de la Justice (2026)",
        "instruction": "Cochez la ou les bonnes réponses :",
        "question": "Le budget base zéro consiste à :",
        "options": [
            "Reprendre l'ancien budget.",
            "Justifier chaque dépense.",
            "Réduire les coûts fixes.",
            "Toutes les réponses sont fausses."
        ],
        "answer": [1],
        "explanation": "Le budget base zéro (BBZ) oblige chaque responsable à justifier l'intégralité de ses dépenses à partir de zéro, sans se baser sur le budget de l'exercice précédent."
    }
];
