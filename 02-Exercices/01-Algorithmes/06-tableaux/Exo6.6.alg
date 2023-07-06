<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER tab[i]"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2defaut="" F2para="" F2etat="inactif"/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalBoucles="5000000" arrondiAuto="vrai" epaisseurPoint="2" nbDecimales="8" totalAffichages="1000" epaisseurLigne="2" maxBoucle="500000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#LISTE#tab" algoitem="tab EST_DU_TYPE LISTE"/>
        <item code="1#NOMBRE#i" algoitem="i EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#tab#1#0" algoitem="tab[0] PREND_LA_VALEUR 1"/>
        <item code="5#tab#1#1" algoitem="tab[1] PREND_LA_VALEUR 1"/>
        <item code="12#i#2#7" algoitem="POUR i ALLANT_DE 2 A 7">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="5#tab#tab[i-1]+tab[i-2]#i" algoitem="tab[i] PREND_LA_VALEUR tab[i-1]+tab[i-2]"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="12#i#0#7" algoitem="POUR i ALLANT_DE 0 A 7">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="3#tab#1#i" algoitem="AFFICHER tab[i]"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
