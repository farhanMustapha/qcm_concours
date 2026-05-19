const CHARGES_QUESTIONS= [

    {
      "id": 1,
      "question": "1-Cadeaux non publicitaires 20000.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 20000,
        "colonne": "reintegration",
        "explication": "الغرض من هاد cadeaux ماشي إشهار "
      }
    },
    {
      "id": 2,
      "question": "2-Cadeaux publicitaires dont la V.U > 100 dh.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": null,
        "colonne": "reintegration",
        "explication": "قيمة unite فاتت 100 درهم "
      }
    },
    {
      "id": 3,
      "question": "3-Dons aux œuvres sociales > 2% du C.A (HT).\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": null,
        "colonne": "reintegration",
        "explication": "باش  التبرعات تكون deductible  خاص هاد الشرط ما تفوتش 2 في الألف من رقم المعاملات TTC (شامل للضريبة) ديال الشركة فداك العام.\n\nشنو نوع هاد التبرعات؟  \nهما التبرعات اللي كتقدمهم الشركة لـ:\n- جمعيات خيرية وأعمال اجتماعية\n- مؤسسات عمومية (بحال المستشفيات، المدارس العمومية...)\n- مؤسسات خاصة مرخصة كتخدم لأهداف اجتماعية\n\nمثال:  \nإلى شركة دارت CA TTC ديال 5.000.000 درهم، يمكن تخصم تبرعات حتى لـ 10.000 درهم (2‰ من CA TTC). \n\nملاحظة: خاص التبرع يكون موثق ويستوفي الشروط باش تقبله الضرائب."
      }
    },
    {
      "id": 4,
      "question": "4-Primes d’assurance vie contractées au profit de l’entreprise à la tête de son dirigeant.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": null,
        "colonne": "reintegration",
        "explication": null
      }
    },
    {
      "id": 5,
      "question": "5-Salaires ne correspondant pas à un travail effectif.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": null,
        "colonne": "reintegration",
        "explication": "كتعنِي أن salaire تعطى لواحد موظف شبح ، متلا patron داير salaire لمدام ديالو ولكن هيا أصلا مكتجيش تخدم كت تاخد salaire بدون عمل فعلي ."
      }
    },
    {
      "id": 6,
      "question": "6-Achats sans factures et les charges non justifiées.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": null,
        "colonne": "reintegration",
        "explication": "non justifiées et sans facture"
      }
    },
    {
      "id": 7,
      "question": "7-Acquisitions des immobilisations enregistrées parmi les charges.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": null,
        "colonne": "reintegration",
        "explication": "il s'agit d'une immobilisation"
      }
    },
    {
      "id": 8,
      "question": "8-l'IS (impot sur societe ), la CM (cotisation minimal ) et les acomptes provisionnels dont la somme est 15630 dh.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 15630,
        "colonne": "reintegration",
        "explication": "sont des taxes"
      }
    },
    {
      "id": 9,
      "question": "9-Tantièmes ordinaires.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": null,
        "colonne": "reintegration",
        "explication": "Tantième ordinaire هو مبلغ مالي كيتعطى كتعويض إضافي لأعضاء مجلس الإدارة أو المسيرين فشركة، من بعد توزيع الأرباح.\n\nTantième ordinaire هو بحال \"بريم\" كتعطيها الشركة للمسيرين ديالها من الربح، كتشجيع أو مكافأة على الخدمة ديالهم، ولكن ماشي بحال الأجر الشهري، هادي كتكون غير مرة فالسنة من بعد ما يتوزعو الأرباح.\n\nمثال:\nشركة حققات ربح 1 مليون درهم، وقرر الجمع العام يخصص 50 ألف درهم كمكافأة للمسيرين، هاد 50 ألف كيتسمى tantième ordinaire."
      }
    },
    {
      "id": 10,
      "question": "10-Amendes, pénalités et majorations estimer a 1500 dh.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 1500,
        "colonne": "reintegration",
        "explication": "sont des pénalités la ste doit assumer ses reponsabilite et respecter les delais et la loi "
      }
    },
    {
      "id": 11,
      "question": "11-La différence du règlement en espèces des dépenses dont le montant dépasse 5.000 dh.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": null,
        "colonne": "reintegration",
        "explication": "toujour verifier si la tva est recuperable ou pas si oui il faut faire la difference entre le montant payer HT avec HT de 5000 cad 5000/(1+taux tva)"
      }
    },
    {
      "id": 12,
      "question": "12-Intérêts pour le compte courant d’associé si :\n\n1-Capital social non totalement libéré.\n2-Montant des avances > Capital social.\n3-Taux appliqué > Taux autorisé.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": null,
        "colonne": "reintegration",
        "explication": null
      }
    },
    {
      "id": 13,
      "question": "13-Retenue à la source sur les intérêts financiers reçus lorsqu’ils sont déclarés en montant net.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": null,
        "colonne": "reintegration",
        "explication": null
      }
    },
    {
      "id": 14,
      "question": "14-Amortissements du véhicule de tourisme si :\n\n1-V.O (TTC) > 300.000 dh.\n2-Taux > 20%.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": null,
        "colonne": "reintegration",
        "explication": null
      }
    },
    {
      "id": 15,
      "question": "15- Dotations aux amortissements des immobilisations non amortissables.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": null,
        "colonne": "reintegration",
        "explication": null
      }
    },
    {
      "id": 16,
      "question": "16- Dotations aux provisions si :\n\n1-Dotation non individualisée et précisée.\n2-Dotation pour des risques assurables.\n3-Dotation pour immobilisations amortissables.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": null,
        "colonne": "reintegration",
        "explication": null
      }
    },
    {
      "id": 17,
      "question": "17- Réintégration du montant de la TVA si la charge est déductible en HT mais elle est comptabilisée en TTC.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": null,
        "colonne": "reintegration",
        "explication": null
      }
    },
    {
      "id": 18,
      "question": "18- Charges constatées d’avance.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": null,
        "colonne": "reintegration",
        "explication": "Elle est devenue une créance, donc elle constitue un élément du bilan et non du compte de produits et charges (CPC)."
      }
    },
    {
      "id": 19,
      "question": "19- un paiement en espèces estimé à 8 500 DH TTC dont 20% de TVA.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 2916.67,
        "colonne": "reintegration",
        "explication": null
      }
    },
    {
      "id": 20,
      "question": "20- les charges non courante 300 dh.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 300,
        "colonne": "reintegration",
        "explication": null
      }
    },
    {
      "id": 21,
      "question": "21- Paiement en espèces d'une facture dont le montant figurant sur la facture est de 3 998,61 DH, mais le montant sorti de la caisse est de 4 000 DH.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 1.39,
        "colonne": "reintegration",
        "explication": null
      }
    },
    {
      "id": 22,
      "question": "22- la CM (cotisation minimal ) 1340 dh.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 3000,
        "colonne": "reintegration",
        "explication": null
      }
    },
    {
      "id": 23,
      "question": "23- Dépense non justifiée estimée à 3 500 DH.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 3500,
        "colonne": "reintegration",
        "explication": null
      }
    },
    {
      "id": 24,
      "question": "24- un resultat comptable avant impot benificiaire 164 700 dh.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 164700,
        "colonne": "reintegration",
        "explication": null
      }
    },
    {
      "id": 25,
      "question": "25- Provision pour créances douteuses concernant le client RACHDI en cessation de paiement 8000 DH.\n\n",
      "correct_answer": {
        "type": "deductible",
        "montant": null,
        "colonne": "",
        "explication": "نعتبرها deductible حقاش individualise يعني مذكور إسم client "
      }
    },
    {
      "id": 26,
      "question": "26- Une provision pour risque d’incendie 15 000 DH. La société est son propre assureur.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 15000,
        "colonne": "reintegration",
        "explication": "car normalement les sociétés doivent payer ou ils ont déja l'assurance "
      }
    },
    {
      "id": 27,
      "question": "27- Provision pour faire face à la hausse des prix des matières 1ères 40 000 DH.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 40000,
        "colonne": "reintegration",
        "explication": null
      }
    },
    {
      "id": 28,
      "question": "28- Des intérêts de compte courant d’associé (CCA) de 50 000 dh, le montant du compte est de 500 000 dh, le taux fixé par le ministère de finance est de 4 %.\ncapital totalement liberee.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 30000,
        "colonne": "reintegration",
        "explication": "فهاد لحالة comptable سجل 50000 ديال interet \ncca عندنا فيه 500000 يعني comptable طبق taux ديال 10 %\nفي حين taux المسموح به هو 4% إذن \n50000 - 500000 * 4 %=30000 هي لي غادي نديرو ليها reintegration \nحقاش taux applique > taux autorise "
      }
    },
    {
      "id": 29,
      "question": "29- Les droits de douane de 26 000 relative à l’importation d’un matériel de l’étranger.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 26000,
        "colonne": "reintegration",
        "explication": null
      }
    },
    {
      "id": 30,
      "question": "30-Amortissement annuel de 75 000 dh relative à une voiture de tourisme.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 15000,
        "colonne": "reintegration",
        "explication": "plafonne a 60 000 dh donc 75000-60000 = 15 000 dh a reintegrer"
      }
    },
    {
      "id": 31,
      "question": "31- Un achat de 18 000 réglé en espèce.(tva récupérable)\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 13833.33,
        "colonne": "reintegration",
        "explication": "Si la TVA est récupérable, alors le montant à réintégrer serait de 13 833,33 DH, calculé comme suit : 18 000 DH − (5 000 DH / 1,2)."
      }
    },
    {
      "id": 32,
      "question": "32- Un achat de 18 000 réglé en espèce.(tva non récupérable)\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 13000,
        "colonne": "reintegration",
        "explication": "Si la TVA est non récupérable, alors le montant à réintégrer serait de 13 000 DH, calculé comme suit : 18 000 DH − 5 000 ."
      }
    },
    {
      "id": 33,
      "question": "33-Indemnité de rachat d’un camion ayant fait l’objet d’un crédit-bail : 24 000.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 24000,
        "colonne": "reintegration",
        "explication": "Il s'agit d'un achat, car la société a versé une indemnité de rachat. Le camion doit normalement être enregistré en classe 2 parmi les immobilisations. Par conséquent, cette indemnité doit être réintégrée."
      }
    },
    {
      "id": 34,
      "question": "34- Frais de missions d’un directeur commercial pour un voyage de travail : 26 000 Dh.\n\n",
      "correct_answer": {
        "type": "deductible",
        "montant": null,
        "colonne": "",
        "explication": null
      }
    },
    {
      "id": 35,
      "question": "35- Cadeaux publicitaires :15 valises portant le nom de la société à 800 Dh TTC/unité.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 12000,
        "colonne": "reintegration",
        "explication": "فهاد الحالة unite فاتت 100 درهم إذن ناخد \n15 *800 =12000 غادي ندير ليها reintegration "
      }
    },
    {
      "id": 36,
      "question": "36- Cadeaux publicitaires :140 T-shirts à 80 Dh TTC/unité ne portant aucune information sur la société.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 11200,
        "colonne": "reintegration",
        "explication": "فهاد حالة عندنا cadeaux  لي مافيهمش logo ديال شركة إذن غادي ندير reintegration ل 140 *80 =11200 درهم "
      }
    },
    {
      "id": 37,
      "question": "37- Cadeaux publicitaires :120 casquettes portant le logo de la société à 70 Dh TTC/unité.\n\n",
      "correct_answer": {
        "type": "deductible",
        "montant": null,
        "colonne": "",
        "explication": "il respecte les deux conditions : porte le logo de la ste et ne dépasse pas 100 / unité  "
      }
    },
    {
      "id": 38,
      "question": "38-Taxe sur les véhicules (Vignette) d’une voiture au nom du directeur Général : 9 000 Dh.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 9000,
        "colonne": "reintegration",
        "explication": "Cette taxe n’a aucun lien avec l’activité de la société, car elle concerne une voiture immatriculée au nom du directeur. Il s’agit donc d’une taxe relative à un véhicule personnel, qui doit être réintégrée. "
      }
    },
    {
      "id": 39,
      "question": "39- Accompte previsionnels de l'IS 120 000 dh.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 120000,
        "colonne": "reintegration",
        "explication": " Il s’agit d’une taxe et non d’une charge."
      }
    },
    {
      "id": 40,
      "question": "40- Les salaires se sont atteints 880 100 (dont 60 000dh est versé au fils des membres du conseil administrative).\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 60000,
        "colonne": "reintegration",
        "explication": "Le salaire du fils des membres du conseil (60 000 dh) est à réintégrer car il s'agit d'une rémunération liée à un lien familial non justifié ."
      }
    },
    {
      "id": 41,
      "question": "41- Intérêt du compte courant d’associés créditeur au 31/12/2020 de 2 800 000dh, et rémunéré au taux de 10.5%. Le taux autorisé en 2015 est de 6.5%.\nle capital entierement libere 1 800 000\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 177000,
        "colonne": "reintegration",
        "explication": "conditions:-le capital entierement libere\nle capital<le capital associer\nle taux autorise<le taux applique\nle montant a reintegrer est la difference entre 2 800 000*10.5% - 1 800 000*6.5% = 177 000"
      }
    },
    {
      "id": 42,
      "question": "42- Prêt du personnel, 120 000dh versé en espèce.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 120000,
        "colonne": "reintegration",
        "explication": "Les prêts accordés au personnel ne constituent pas une charge déductible fiscalement."
      }
    },
    {
      "id": 43,
      "question": "43- Tantièmes ordinaires, 35 000dh.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 35000,
        "colonne": "reintegration",
        "explication": "Les tantièmes ne sont pas déductibles fiscalement."
      }
    },
    {
      "id": 44,
      "question": "44- Dividendes versés 59 000dh.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 59000,
        "colonne": "reintegration",
        "explication": "Les dividendes ne sont pas déductibles car ils constituent une distribution de résultat."
      }
    },
    {
      "id": 45,
      "question": "45- Pénalité sur exécution d’un contrat d’achat, 4 200 dh.\n\n",
      "correct_answer": {
        "type": "deductible",
        "montant": null,
        "colonne": "",
        "explication": null
      }
    },
    {
      "id": 46,
      "question": "46- Taxe des spécial sur les véhicules : 18 800 concerne les voitures et camionnette de l’entreprise 1200 dh  (contrat de bail jusqu’à 2022).\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 1200,
        "colonne": "reintegration",
        "explication": "il s'agit d'un contrat de bail cad n'est pas a la propriete de la ste "
      }
    },
    {
      "id": 47,
      "question": "47- Taxe de services communaux 40 000 dh (dont 10% concerne un bâtiment qui a fait objet d’un contrat de credit bail).\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 4000,
        "colonne": "reintegration",
        "explication": "90% de la taxe est déductible, les 10% relatifs à un contrat de credit bail doivent être réintégrés."
      }
    },
    {
      "id": 48,
      "question": "48- Emballage récupérable, 12 000 dh.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 12000,
        "colonne": "reintegration",
        "explication": "Les emballages récupérables doivent être immobilisés, donc non déductibles en charges."
      }
    },
    {
      "id": 49,
      "question": "49- Achat d’une photocopieuse pour 45 600 dh.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 45600,
        "colonne": "reintegration",
        "explication": " il s'agit d'une immobilisation."

      }
    },
    {
      "id": 50,
      "question": "50- Prime d’assurance vie 5 800dh il concerne l'exercice N-1 .\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 5800,
        "colonne": "reintegration",
        "explication": "deductible s'il concerne l'exercice N ."
      }
    },
    {
      "id": 51,
      "question": "51- Taxe d’habitation concernant une villa mise à la disposition du PDG 2 000dh.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 2000,
        "colonne": "reintegration",
        "explication": "Les dépenses liées à l’habitation personnelle ne sont pas déductibles."
      }
    },
    {
      "id": 52,
      "question": "52- Acompte provisionnel de l’IS : 162 600\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 162600,
        "colonne": "reintegration",
        "explication": "Il s’agit d’un impôt (element de la class 3 ) et non d’une charge déductible."
      }
    },
    {
      "id": 53,
      "question": "53- L’entreprise a distribué 2500 cadeaux publicitaires porte le logo de la ste : montant total 239 400 dh TTC.\n\n",
      "correct_answer": {
        "type": "deductible",
        "montant": null,
        "colonne": "",
        "explication": "sont deductible si leur valeur unitaire ne depasse pas 100 dh et porte le logo de la ste 239400/2500=95,76."
      }
    },
    {
      "id": 54,
      "question": "54- Provision pour risques divers, 11 900 dh\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 11900,
        "colonne": "reintegration",
        "explication": "Les provisions pour risques divers ne sont pas déductibles sauf justification légale et comptable aussi il faut mentionne le client cad individualise."
      }
    },
    {
      "id": 55,
      "question": "55- Provision pour créance douteuse et litigieuse, calculée sur une créance HT du client Mehdi.\n\n",
      "correct_answer": {
        "type": "deductible",
        "montant": null,
        "colonne": "",
        "explication": "Si la créance est bien justifiée et comptabilisée correctement, la provision est déductible car il est précise et individualise."
      }
    },
    {
      "id": 56,
      "question": "56- Provision pour risque d’incendie, 5 000dh.\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 5000,
        "colonne": "reintegration",
        "explication": "Provision non admise fiscalement car les risques ne sont pas certains et probables."
      }
    },
    {
      "id": 57,
      "question": "57- Achat d’une photocopieuse pour 45 600 dh. (amorti Linéaire : 4 ans).\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 11400,
        "colonne": "deduction",
        "explication": "La dotation annuelle à l’amortissement (45600 / 4) est la seule charge déductible a deduire."

      }
    },
    {
      "id": 58,
      "question": "58 - Frais de déplacement du DRH, 14 200 DH HT suite à une mission à l'étranger (TVA 20%).\n\n",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 2840,
        "colonne": "deduction",
        "explication": "Normalement, cette dépense devait être enregistrée en TTC, mais le comptable n’a pas pris en compte la TVA. Il faut donc la deduire pour régulariser la situation."
      }
    },
    {
      "id": 59,
      "question": "59 - Achats de marchandises comptabilisés en TTC : 15000 dont 20% de TVA",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 2500,
        "colonne": "reintegration",
        "explication": "la tva n'est pas une charge ,sur le CPC il faut le montant HT donc ( 15 000 / 1,2 ) = 2 500 DH ."
      }
    },
    {
      "id": 60,
      "question": "60 - Commissions payées 01/09/2017 au fournisseur CHARBA : 14000",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 14000,
        "colonne": "reintegration",
        "explication": "Charge afférente à un exercice antérieur."
      }
    },
    {
      "id": 61,
      "question": "61 - Cadeaux publicitaires à la clientèle (95 dh l’unité) : 9350",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 9350,
        "colonne": "reintegration",
        "explication": "Montant unitaire < 100 dh mais y a aucun indiction s'il porte le logo de la ste ou non donc non déductible selon la réglementation fiscale marocaine."
      }
    },
    {
      "id": 62,
      "question": "62 - Dons octroyés aux Associations d’utilité publique : 10940",
      "correct_answer": {
        "type": "deductible",
        "montant": null,
        "colonne": "",
        "explication": "Dons à des associations reconnues d’utilité publique sont déductibles dans la limite prévue par la loi."
      }
    },

    {
      "id": 63,
      "question": "63 - Achats d’ordinateurs payés par chèque (HT) : 7500",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 7500,
        "colonne": "reintegration",
        "explication": "الحاسوب  خاص اتسجل في class 2 لانه عبارة على immobilisation "
      }
    },
    {
      "id": 64,
      "question": "64 - Avance de 9000 dh ,au fournisseur payée par chèque sur une commande qui sera livrée et facturée en 2018",
      "correct_answer": {
        "type": "non_deductible",
        "montant": 9000,
        "colonne": "reintegration",
        "explication": "تسبيق ماعندوش علاقة ب cpc يعني charge constate d'avance مندخلوها ف  les charges حتى 2018\nزائد les creances كي دخلو ف claas 3  "
      }
    }

  ]

