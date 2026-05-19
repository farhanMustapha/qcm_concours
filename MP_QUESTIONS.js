const MP_QUESTIONS = [
    {
        id: 1,
        category: "Marchés Publics",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q1 - Quel est l'outil principal de réalisation des achats publics ?",
        options: [
            "Le contrat de travail",
            "Le marché public",
            "La régie directe",
            "Aucun réponse"
        ],
        answer: [1],
        explanation: "Le marché public est le contrat écrit conclu à titre onéreux entre un acheteur public (maître d'ouvrage) et un opérateur économique (titulaire) pour répondre aux besoins de l'acheteur en matière de travaux, de fournitures ou de services."
    },
    {
        id: 2,
        category: "Marchés Publics",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q2 - Quel principe vise à assurer la transparence dans les choix du maître d'ouvrage ?",
        options: [
            "L'égalité d'accès aux commandes publiques",
            "La confidentialité des procédures",
            "Le profit du prestataire",
            "L'exclusivité territoriale"
        ],
        answer: [0],
        explanation: "Le principe d'égalité d'accès aux commandes publiques garantit que tous les candidats potentiels bénéficient des mêmes informations et des mêmes chances de remporter le marché, assurant ainsi la transparence et la non-discrimination dans les procédures de passation."
    },
    {
        id: 3,
        category: "Marchés Publics",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q3 - Qui est l'autorité qui passe le marché avec l'entrepreneur ou le fournisseur ?",
        options: [
            "Le Maître d'œuvre",
            "Le Maître d'ouvrage (MO)",
            "L'attributaire",
            "Le Trésorier Général"
        ],
        answer: [1],
        explanation: "Le Maître d'ouvrage (MO) est la personne morale de droit public pour le compte de laquelle les travaux, fournitures ou services sont réalisés. C'est lui qui conclut le marché avec l'entrepreneur ou le fournisseur, engage les dépenses et réceptionne les prestations."
    },
    {
        id: 4,
        category: "Marchés Publics",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q4 - Comment appelle-t-on le concurrent dont l'offre est retenue AVANT la notification de l'approbation ?",
        options: [
            "Le titulaire",
            "L'attributaire",
            "Le signataire",
            "Le prestataire"
        ],
        answer: [1],
        explanation: "L'attributaire est le concurrent dont l'offre a été retenue par la commission d'appel d'offres, mais avant que la décision ne lui soit notifiée officiellement. Une fois l'approbation notifiée, il devient le titulaire du marché."
    },
    {
        id: 5,
        category: "Marchés Publics",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q5 - Quel document contient la décomposition par poste des prestations et indique le prix applicable ?",
        options: [
            "L'acte d'engagement",
            "Le bordereau des prix",
            "Le cahier des prescriptions spéciales (CPS)",
            "Le certificat administratif"
        ],
        answer: [1],
        explanation: "Le bordereau des prix est le document qui liste de façon détaillée toutes les prestations du marché, poste par poste, avec les prix unitaires correspondants. Il permet de calculer le montant total du marché et sert de base pour l'établissement des décomptes de paiement lors de l'exécution."
    },
    {
        id: 6,
        category: "Marchés Publics",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q6 - Un \"Titulaire\" est défini comme :",
        options: [
            "Un concurrent ayant déposé une offre",
            "L'attributaire auquel l'approbation du marché a été notifiée",
            "L'agent chargé du suivi des travaux",
            "Le sous-traitant agréé"
        ],
        answer: [1],
        explanation: "Le titulaire est l'attributaire à qui l'approbation du marché a été officiellement notifiée. Cette notification marque la naissance juridique du contrat et lui confère tous les droits et obligations liés au marché. Avant la notification, ce même concurrent n'est que 'l'attributaire'."
    },
    {
        id: 7,
        category: "Marchés Publics",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q7 - Qu'est-ce qu'un \"Maître d'ouvrage délégué\" ?",
        options: [
            "Un bureau d'études privé",
            "Une entité publique à laquelle sont confiées certaines missions du MO",
            "Le représentant légal de l'entreprise titulaire",
            "Le contrôleur financier"
        ],
        answer: [1],
        explanation: "Le Maître d'ouvrage délégué (MOD) est une entité publique (or organisme habilité) à qui le Maître d'ouvrage confie par convention certaines de ses attributions : lancement des appels d'offres, suivi de l'exécution, réception des travaux. La responsabilité globale reste toutefois au Maître d'ouvrage délégataire."
    },
    {
        id: 8,
        category: "Marchés Publics",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q8 - Quel marché utilise-t-on quand la quantité et le rythme d'exécution ne peuvent être déterminés à l'avance ?",
        options: [
            "Marché reconductible",
            "Marché-cadre",
            "Marché à tranches conditionnelles",
            "Marché alloti"
        ],
        answer: [1],
        explanation: "Le marché-cadre est utilisé lorsqu'il est impossible de déterminer à l'avance la quantité exacte ou le rythme des prestations à réaliser. Il fixe les prix unitaires et les conditions générales, et les commandes sont passées progressivement via des bons de commande au fur et à mesure des besoins, dans la limite d'un montant maximum prédéfini."
    },
    {
        id: 9,
        category: "Marchés Publics",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q9 - Dans un marché-cadre, le maximum des prestations ne peut dépasser combien de fois le minimum ?",
        options: [
            "1,5 fois",
            "2 fois",
            "3 fois",
            "4 fois"
        ],
        answer: [2],
        explanation: "Dans un marché-cadre, le volume maximum des prestations ne peut pas dépasser 3 fois le volume minimum. Cette règle garantit un équilibre contractuel et évite que le marché ne devienne un véhicule d'achats illimités sans mise en concurrence."
    },
    {
        id: 10,
        category: "Marchés Publics",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q10 - Quel type de marché est divisé en une tranche ferme et des tranches conditionnelles ?",
        options: [
            "Marché reconductible",
            "Marché à tranches conditionnelles",
            "Marché de conception-réalisation",
            "Marché au pourcentage"
        ],
        answer: [1],
        explanation: "Le marché à tranches conditionnelles est un marché composé d'une tranche ferme (dont l'exécution is certaine dès la notification) et d'une ou plusieurs tranches conditionnelles (dont l'exécution est subordonnée à une décision ultérieure du maître d'ouvrage). Il permet de planifier un projet en plusieurs étapes tout en gardant la flexibilité budgétaire."
    },
    {
        id: 11,
        category: "Marchés Publics",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q11 - Un marché de \"conception-réalisation\" porte sur :",
        options: [
            "Uniquement la maintenance",
            "À la fois la conception du projet et l'exécution des travaux",
            "Uniquement l'achat de fournitures",
            "La surveillance du chantier"
        ],
        answer: [1],
        explanation: "Le marché de conception-réalisation est un marché global qui confie à un titulaire unique à la fois la mission de maîtrise d'œuvre (conception, études) et la réalisation des travaux. Il permet une meilleure coordination entre concepteurs et exécutants et un engagement global sur les résultats."
    },
    {
        id: 12,
        category: "Marchés Publics",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q12 - Le \"dialogue compétitif\" permet au maître d'ouvrage de :",
        options: [
            "Négocier une réduction de prix après l'attribution",
            "Développer des solutions répondant à ses besoins avec les candidats admis",
            "Annuler un marché sans justification",
            "Choisir systématiquement l'offre la moins chère"
        ],
        answer: [1],
        explanation: "Le dialogue compétitif est une procédure utilisée pour les projets complexes où le maître d'ouvrage ne peut pas définir seul les solutions techniques. Il dialogue avec les candidats admis pour développer conjointement des solutions répondant à ses besoins, puis invite les participants à soumettre leurs offres finales sur la base des solutions rétenues."
    },
    {
        id: 13,
        category: "Marchés Publics",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q13 - Un marché est dit \"alloti\" lorsque :",
        options: [
            "Les travaux, fournitures ou services sont divisés en lots",
            "Il est attribué à une seule personne physique",
            "Il n'y a pas de mise en concurrence",
            "Le prix est révisable chaque mois"
        ],
        answer: [0],
        explanation: "L'allotissement consiste à diviser les prestations d'un marché en plusieurs lots pouvant être attribués à des titulaires distincts. Cette technique favorise l'accès des PME aux marchés publics et permet une meilleure mise en concurrence en évitant la domination d'un seul opérateur sur l'ensemble du marché."
    },
    {
        id: 14,
        category: "Marchés Publics",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q14 - Dans quel marché un prix forfaitaire couvre l'ensemble des prestations ?",
        options: [
            "Marché à prix unitaires",
            "Marché à prix global",
            "Marché à prix au pourcentage",
            "Marché à prix révisable"
        ],
        answer: [1],
        explanation: "Le marché à prix global (ou forfaitaire) est celui où un prix unique et définitif rémunère l'ensemble des prestations, quelles que soient les quantités réellement exécutées. Le titulaire supporte le risque des quantités, ce qui l'incite à optimiser son organisation et à respecter les délais."
    },
    {
        id: 15,
        category: "Marchés Publics",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q15 - Dans quel cas peut-on recourir au marché négocié ?",
        options: [
            "Lorsque le montant est inférieur à 500 000 DH",
            "Dans des cas exceptionnels prévus par la réglementation (urgence impérieuse, prestataire unique, secret défense...)",
            "Pour tous les marchés de services",
            "Systématiquement pour les marchés de fournitures"
        ],
        answer: [1],
        explanation: "Le marché négocié est une procédure dérogatoire à l'appel d'offres, utilisée uniquement dans des cas strictement prévus par les textes : urgence impérieuse résultant de circonstances imprévisibles, prestataire unique en situation de monopole, travaux complémentaires imprévus, ou motifs liés à la sécurité nationale. Le maître d'ouvrage négocie directement avec un ou plusieurs candidats."
    },
    {
        id: 16,
        category: "Marchés Publics",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q16 - Qu'est-ce que le Maître d'Ouvrage Délégué (MOD) ?",
        options: [
            "L'entreprise chargée d'exécuter les travaux",
            "Une entité à laquelle le maître d'ouvrage transfère certaines de ses attributions pour la réalisation d'un projet",
            "Le bureau d'études chargé de la conception du projet",
            "L'autorité de contrôle des marchés publics"
        ],
        answer: [1],
        explanation: "Le Maître d'Ouvrage Délégué (MOD) est une entité (organisme public or personne morale de droit privé) à laquelle le maître d'ouvrage confie, par convention, tout ou partie de ses attributions relatives à un projet : lancement des appels d'offres, signature des marchés, suivi de l'exécution, réception des prestations."
    },
    {
        id: 17,
        category: "Marchés Publics",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q17 - Quelle est la sanction principale d'un marché public passé en violation des règles de mise en concurrence ?",
        options: [
            "Une simple mise en garde adressée au maître d'ouvrage",
            "La nullité du marché et d'éventuelles sanctions pénales ou disciplinaires",
            "Un remboursement partiel au soumissionnaire évincé",
            "La résiliation unilatérale du marché par le titulaire"
        ],
        answer: [1],
        explanation: "Le non-respect des règles de passation des marchés publics peut entraîner : la nullité juridique du contrat, des sanctions pénales pour les agents responsables (infractions aux règles de concurrence, favoritisme), des sanctions disciplinaires, et l'engagement de la responsabilité pécuniaire des ordonnateurs. Le contrôle est assuré par la Cour des Comptes et les juridictions financières."
    },
    {
        id: 18,
        category: "Marchés Publics",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q18 - Qu'est-ce qu'un avenant dans un marché public ?",
        options: [
            "Un document de présentation des offres techniques",
            "Un acte contractuel modificatif permettant d'adapter le marché initial en cours d'exécution",
            "Un rapport de contrôle de l'exécution du marché",
            "Un bon de commande pour les petites fournitures"
        ],
        answer: [1],
        explanation: "L'avenant is un acte juridique qui modifie les clauses d'un marché public en cours d'exécution (augmentation ou diminution des quantités, modification technique, prolongation de délai). Il doit être conclu avant la réception des prestations, ne peut pas changer la nature du marché, et est soumis aux mêmes règles d'approbation que le marché initial."
    },
    {
        id: 19,
        category: "Marchés Publics",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q19 - Quel est le rôle du contrôleur d'État dans les marchés publics ?",
        options: [
            "Exécuter les travaux à la place du titulaire en cas de défaillance",
            "Viser les marchés et les engagements de dépenses pour s'assurer de leur régularité et de la disponibilité des crédits",
            "Concevoir les projets de construction",
            "Représenter les soumissionnaires lors des séances d'ouverture des plis"
        ],
        answer: [1],
        explanation: "Le Contrôleur d'État est un représentant du ministère des finances chargé du contrôle préalable de la régularité des engagements financiers de l'État. Pour les marchés publics, il appose son visa sur les marchés et les ordres de service, s'assurant de la disponibilité des crédits budgétaires et de la conformité aux règles d'engagement des dépenses."
    },
    {
        id: 20,
        category: "Marchés Publics",
        instruction: "Cochez la ou les bonnes réponses :",
        question: "Q20 - Qu'est-ce que le dossier de consultation dans un appel d'offres ?",
        options: [
            "Le rapport d'évaluation des offres rédigé par la commission",
            "L'ensemble des documents remis aux candidats définissant les besoins du maître d'ouvrage et les conditions de la consultation",
            "Le contrat définitif signé avec le titulaire",
            "Le procès-verbal de la séance d'ouverture des plis"
        ],
        answer: [1],
        explanation: "Le dossier de consultation (ou dossier d'appel d'offres) est l'ensemble des documents fournis aux candidats pour leur permettre de préparer leurs offres. Il comprend notamment : le règlement de consultation, le CPS (Cahier des Prescriptions Spéciales), le CCAG applicable, les plans et spécifications techniques, ainsi que les formulaires de candidature."
    }
];
