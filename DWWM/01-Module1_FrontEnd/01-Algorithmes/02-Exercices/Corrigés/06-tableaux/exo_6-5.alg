<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="FIN_POUR"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2etat="inactif" F2lignes="" F2defaut="" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param epaisseurLigne="2" totalAffichages="1000" epaisseurPoint="2" totalBoucles="5000000" arrondiAuto="vrai" maxBoucle="500000" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#LISTE#tab" algoitem="tab EST_DU_TYPE LISTE"/>
        <item code="1#NOMBRE#i" algoitem="i EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#j" algoitem="j EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="19#Cet algorithme remplit un tableau de 7 valeurs : 1, 3, 5, 7, 9, 11, 13" algoitem="//Cet algorithme remplit un tableau de 7 valeurs : 1, 3, 5, 7, 9, 11, 13"/>
        <item code="5#tab#1#0" algoitem="tab[0] PREND_LA_VALEUR 1"/>
        <item code="12#j#1#6" algoitem="POUR j ALLANT_DE 1 A 6">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="5#tab#tab[j-1]+2#j" algoitem="tab[j] PREND_LA_VALEUR tab[j-1]+2"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="19#Affichage du tableau" algoitem="//Affichage du tableau"/>
        <item code="12#i#0#6" algoitem="POUR i ALLANT_DE 0 A 6">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="3#tab#1#i" algoitem="AFFICHER tab[i]"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
