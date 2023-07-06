<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="SI ((age>=25 ET dureePermis>=2 ET nbAccidents>2 ET dureeAssurance&lt;5) OU (age>=25 ET dureePermis&lt;2 ET nbAccidents>=2 ET dureeAssurance&lt;5) OU (age&lt;25 ET dureePermis>=2 ET nbAccidents>=2 ET dureeAssurance&lt;5) OU (age&lt;25 ET dureePermis&lt;2 ET nbAccidents>=1 ET dureeAssurance&lt;5)) ALORS" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2etat="inactif" F2para="" F2lignes="" F2defaut=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param epaisseurLigne="2" arrondiAuto="vrai" epaisseurPoint="2" maxBoucle="500000" totalAffichages="1000" totalBoucles="5000000" nbDecimales="8"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="age EST_DU_TYPE NOMBRE" code="1#NOMBRE#age"/>
        <item algoitem="dureePermis EST_DU_TYPE NOMBRE" code="1#NOMBRE#dureePermis"/>
        <item algoitem="nbAccidents EST_DU_TYPE NOMBRE" code="1#NOMBRE#nbAccidents"/>
        <item algoitem="dureeAssurance EST_DU_TYPE NOMBRE" code="1#NOMBRE#dureeAssurance"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Entrez l'âge :&quot;" code="4#Entrez l'âge :#0"/>
        <item algoitem="LIRE age" code="2#age#pasliste"/>
        <item algoitem="AFFICHER &quot;Entrez le nombre d'année(s) de permis :&quot;" code="4#Entrez le nombre d'année(s) de permis :#0"/>
        <item algoitem="LIRE dureePermis" code="2#dureePermis#pasliste"/>
        <item algoitem="AFFICHER &quot;Entrez le nombre d'accident(s) :&quot;" code="4#Entrez le nombre d'accident(s) :#0"/>
        <item algoitem="LIRE nbAccidents" code="2#nbAccidents#pasliste"/>
        <item algoitem="AFFICHER &quot;Entrez le nombre d'année(s) d'assurance :&quot;" code="4#Entrez le nombre d'année(s) d'assurance :#0"/>
        <item algoitem="LIRE dureeAssurance" code="2#dureeAssurance#pasliste"/>
        <item algoitem="SI ((age>=25 ET dureePermis>=2 ET nbAccidents>2 ET dureeAssurance&lt;5) OU (age>=25 ET dureePermis&lt;2 ET nbAccidents>=2 ET dureeAssurance&lt;5) OU (age&lt;25 ET dureePermis>=2 ET nbAccidents>=2 ET dureeAssurance&lt;5) OU (age&lt;25 ET dureePermis&lt;2 ET nbAccidents>=1 ET dureeAssurance&lt;5)) ALORS" code="6#(age>=25 ET dureePermis>=2 ET nbAccidents>2 ET dureeAssurance&lt;5) OU (age>=25 ET dureePermis&lt;2 ET nbAccidents>=2 ET dureeAssurance&lt;5) OU (age&lt;25 ET dureePermis>=2 ET nbAccidents>=2 ET dureeAssurance&lt;5) OU (age&lt;25 ET dureePermis&lt;2 ET nbAccidents>=1 ET dureeAssurance&lt;5)">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="AFFICHER &quot;Assurance refusée&quot;" code="4#Assurance refusée#0"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
            <item algoitem="SINON" code="9#sinon">
                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                <item algoitem="SI ((age>=25 ET dureePermis>=2 ET nbAccidents==2 ET dureeAssurance&lt;5) OU (age>=25 ET dureePermis&lt;2 ET nbAccidents==1 ET dureeAssurance&lt;5) OU (age&lt;25 ET dureePermis>=2 ET nbAccidents==1 ET dureeAssurance&lt;5) OU (age&lt;25 ET dureePermis&lt;2 ET nbAccidents==0 ET dureeAssurance&lt;5)) ALORS" code="6#(age>=25 ET dureePermis>=2 ET nbAccidents==2 ET dureeAssurance&lt;5) OU (age>=25 ET dureePermis&lt;2 ET nbAccidents==1 ET dureeAssurance&lt;5) OU (age&lt;25 ET dureePermis>=2 ET nbAccidents==1 ET dureeAssurance&lt;5) OU (age&lt;25 ET dureePermis&lt;2 ET nbAccidents==0 ET dureeAssurance&lt;5)">
                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                    <item algoitem="AFFICHER &quot;Tarif Rouge&quot;" code="4#Tarif Rouge#0"/>
                    <item algoitem="FIN_SI" code="8#finsi"/>
                    <item algoitem="SINON" code="9#sinon">
                        <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                        <item algoitem="SI ((age>=25 ET dureePermis>=2 ET nbAccidents==2 ET dureeAssurance>=5) OU (age>=25 ET dureePermis>=2 ET nbAccidents==1 ET dureeAssurance&lt;5) OU (age>=25 ET dureePermis&lt;2 ET nbAccidents==0 et dureeAssurance&lt;5) OU (age&lt;25 ET dureePermis>=2 ET nbAccidents==0 et dureeAssurance&lt;5) OU (age&lt;25 ET dureePermis>=2 ET nbAccidents==1 ET dureeAssurance>=5)) ALORS" code="6#(age>=25 ET dureePermis>=2 ET nbAccidents==2 ET dureeAssurance>=5) OU (age>=25 ET dureePermis>=2 ET nbAccidents==1 ET dureeAssurance&lt;5) OU (age>=25 ET dureePermis&lt;2 ET nbAccidents==0 et dureeAssurance&lt;5) OU (age&lt;25 ET dureePermis>=2 ET nbAccidents==0 et dureeAssurance&lt;5) OU (age&lt;25 ET dureePermis>=2 ET nbAccidents==1 ET dureeAssurance>=5)">
                            <item algoitem="DEBUT_SI" code="7#debutsi"/>
                            <item algoitem="AFFICHER &quot;Tarif Orange&quot;" code="4#Tarif Orange#0"/>
                            <item algoitem="FIN_SI" code="8#finsi"/>
                            <item algoitem="SINON" code="9#sinon">
                                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                <item algoitem="SI ((age>=25 ET dureePermis>=2 ET nbAccidents==1 ET dureeAssurance>=5) OU (age>=25 ET dureePermis>=2 ET nbAccidents==0 ET dureeAssurance&lt;5) OU (age&lt;25 ET dureePermis>=2 ET nbAccidents==0 ET dureeAssurance>=5)) ALORS" code="6#(age>=25 ET dureePermis>=2 ET nbAccidents==1 ET dureeAssurance>=5) OU (age>=25 ET dureePermis>=2 ET nbAccidents==0 ET dureeAssurance&lt;5) OU (age&lt;25 ET dureePermis>=2 ET nbAccidents==0 ET dureeAssurance>=5)">
                                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                                    <item algoitem="AFFICHER &quot;Tarif Vert&quot;" code="4#Tarif Vert#0"/>
                                    <item algoitem="FIN_SI" code="8#finsi"/>
                                    <item algoitem="SINON" code="9#sinon">
                                        <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                        <item algoitem="AFFICHER &quot;Tarif Bleu&quot;" code="4#Tarif Bleu#0"/>
                                        <item algoitem="FIN_SINON" code="11#finsinon"/>
                                    </item>
                                </item>
                                <item algoitem="FIN_SINON" code="11#finsinon"/>
                            </item>
                        </item>
                        <item algoitem="FIN_SINON" code="11#finsinon"/>
                    </item>
                </item>
                <item algoitem="FIN_SINON" code="11#finsinon"/>
            </item>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
