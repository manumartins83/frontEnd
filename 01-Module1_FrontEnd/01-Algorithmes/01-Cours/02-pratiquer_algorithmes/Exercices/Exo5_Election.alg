<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER &quot;Ballotage favorable&quot;"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2etat="inactif" F2lignes="" F2para="" F2defaut=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param epaisseurLigne="2" maxBoucle="500000" arrondiAuto="vrai" totalAffichages="1000" epaisseurPoint="2" totalBoucles="5000000" nbDecimales="8"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="scoreA EST_DU_TYPE NOMBRE" code="1#NOMBRE#scoreA"/>
        <item algoitem="scoreB EST_DU_TYPE NOMBRE" code="1#NOMBRE#scoreB"/>
        <item algoitem="scoreC EST_DU_TYPE NOMBRE" code="1#NOMBRE#scoreC"/>
        <item algoitem="scoreD EST_DU_TYPE NOMBRE" code="1#NOMBRE#scoreD"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Entrez le score du candidat A :&quot;" code="4#Entrez le score du candidat A :#0"/>
        <item algoitem="LIRE scoreA" code="2#scoreA#pasliste"/>
        <item algoitem="AFFICHER &quot;Entrez le score du candidat B :&quot;" code="4#Entrez le score du candidat B :#0"/>
        <item algoitem="LIRE scoreB" code="2#scoreB#pasliste"/>
        <item algoitem="AFFICHER &quot;Entrez le score du candidat C :&quot;" code="4#Entrez le score du candidat C :#0"/>
        <item algoitem="LIRE scoreC" code="2#scoreC#pasliste"/>
        <item algoitem="AFFICHER &quot;Entrez le score du candidat D :&quot;" code="4#Entrez le score du candidat D :#0"/>
        <item algoitem="LIRE scoreD" code="2#scoreD#pasliste"/>
        <item algoitem="SI (scoreA>50) ALORS" code="6#scoreA>50">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="AFFICHER &quot;Elu au premier tour&quot;" code="4#Elu au premier tour#0"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
            <item algoitem="SINON" code="9#sinon">
                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                <item algoitem="SI (scoreB>50 OU scoreC>50 OU scoreD>50 OU scoreA&lt;12.5) ALORS" code="6#scoreB>50 OU scoreC>50 OU scoreD>50 OU scoreA&lt;12.5">
                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                    <item algoitem="AFFICHER &quot;Battu !!!&quot;" code="4#Battu !!!#0"/>
                    <item algoitem="FIN_SI" code="8#finsi"/>
                    <item algoitem="SINON" code="9#sinon">
                        <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                        <item algoitem="SI (scoreA>=scoreB ET scoreA>=scoreC ET scoreA>=scoreD) ALORS" code="6#scoreA>=scoreB ET scoreA>=scoreC ET scoreA>=scoreD">
                            <item algoitem="DEBUT_SI" code="7#debutsi"/>
                            <item algoitem="AFFICHER &quot;Ballotage favorable&quot;" code="4#Ballotage favorable#0"/>
                            <item algoitem="FIN_SI" code="8#finsi"/>
                            <item algoitem="SINON" code="9#sinon">
                                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                <item algoitem="AFFICHER &quot;Ballotage défavorable&quot;" code="4#Ballotage défavorable#0"/>
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
