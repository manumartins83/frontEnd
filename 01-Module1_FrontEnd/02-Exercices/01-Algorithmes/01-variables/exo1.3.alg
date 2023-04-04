<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="B PREND_LA_VALEUR A-4" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2para="" F2lignes="" F2defaut="" F2etat="inactif"/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurLigne="2" totalAffichages="1000" epaisseurPoint="2" nbDecimales="8" maxBoucle="500000" arrondiAuto="vrai" totalBoucles="5000000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="A EST_DU_TYPE NOMBRE" code="1#NOMBRE#A"/>
        <item algoitem="B EST_DU_TYPE NOMBRE" code="1#NOMBRE#B"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="A PREND_LA_VALEUR 5" code="5#A#5#pasliste"/>
        <item algoitem="B PREND_LA_VALEUR A+4" code="5#B#A+4#pasliste"/>
        <item algoitem="A PREND_LA_VALEUR A+1" code="5#A#A+1#pasliste"/>
        <item algoitem="B PREND_LA_VALEUR A-4" code="5#B#A-4#pasliste"/>
        <item algoitem="AFFICHER A" code="3#A#1#pasliste"/>
        <item algoitem="AFFICHER B" code="3#B#1#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
