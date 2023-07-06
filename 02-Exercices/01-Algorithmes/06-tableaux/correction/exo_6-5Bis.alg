<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="//Affichage des valeurs"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2defaut="" F2etat="inactif" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalBoucles="5000000" totalAffichages="1000" epaisseurLigne="2" maxBoucle="500000" nbDecimales="8" epaisseurPoint="2" arrondiAuto="vrai"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="tab EST_DU_TYPE LISTE" code="1#LISTE#tab"/>
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i"/>
        <item algoitem="j EST_DU_TYPE NOMBRE" code="1#NOMBRE#j"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="//Cet algorithme remplit un tableau de 7 valeurs : 1, 3, 5, 7, 9, 11, 13" code="19#Cet algorithme remplit un tableau de 7 valeurs : 1, 3, 5, 7, 9, 11, 13"/>
        <item algoitem="tab[0] PREND_LA_VALEUR 1" code="5#tab#1#0"/>
        <item algoitem="AFFICHER tab[0]" code="3#tab#1#0"/>
        <item algoitem="POUR j ALLANT_DE 1 A 6" code="12#j#1#6">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="tab[j] PREND_LA_VALEUR tab[j-1]+2" code="5#tab#tab[j-1]+2#j"/>
            <item algoitem="//Affichage des valeurs" code="19#Affichage des valeurs"/>
            <item algoitem="AFFICHER tab[j]" code="3#tab#1#j"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
