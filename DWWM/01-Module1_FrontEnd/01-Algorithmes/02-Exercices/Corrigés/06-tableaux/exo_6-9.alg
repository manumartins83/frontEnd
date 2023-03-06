<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="//On récupère la longueur du tableau"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2etat="inactif" F2lignes="" F2defaut="" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param epaisseurLigne="2" totalAffichages="1000" epaisseurPoint="2" totalBoucles="5000000" arrondiAuto="vrai" maxBoucle="500000" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#LISTE#tab" algoitem="tab EST_DU_TYPE LISTE"/>
        <item code="1#NOMBRE#sum" algoitem="sum EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#i" algoitem="i EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#N" algoitem="N EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="19#On récupère la longueur du tableau" algoitem="//On récupère la longueur du tableau"/>
        <item code="5#N#tab.length#pasliste" algoitem="N PREND_LA_VALEUR tab.length"/>
        <item code="5#sum#0#pasliste" algoitem="sum PREND_LA_VALEUR 0"/>
        <item code="12#i#0#N-1" algoitem="POUR i ALLANT_DE 0 A N-1">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="5#sum#sum + tab[i]#pasliste" algoitem="sum PREND_LA_VALEUR sum + tab[i]"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="4#La somme des éléments du tableau : #0" algoitem="AFFICHER &quot;La somme des éléments du tableau : &quot;"/>
        <item code="3#sum#0#pasliste" algoitem="AFFICHER sum"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
