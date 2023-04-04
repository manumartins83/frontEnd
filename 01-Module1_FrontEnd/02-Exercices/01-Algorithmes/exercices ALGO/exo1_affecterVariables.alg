<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="b PREND_LA_VALEUR a+2"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2para="" F2defaut="" F2etat="inactif" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" totalAffichages="1000" maxBoucle="500000" totalBoucles="5000000" epaisseurPoint="2" nbDecimales="8" epaisseurLigne="2"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="a EST_DU_TYPE NOMBRE" code="1#NOMBRE#a"/>
        <item algoitem="b EST_DU_TYPE NOMBRE" code="1#NOMBRE#b"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="a PREND_LA_VALEUR 6" code="5#a#6#pasliste"/>
        <item algoitem="b PREND_LA_VALEUR a+2" code="5#b#a+2#pasliste"/>
        <item algoitem="a PREND_LA_VALEUR a-1" code="5#a#a-1#pasliste"/>
        <item algoitem="b PREND_LA_VALEUR a+2" code="5#b#a+2#pasliste"/>
        <item algoitem="AFFICHER a" code="3#a#1#pasliste"/>
        <item algoitem="AFFICHER b" code="3#b#1#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
