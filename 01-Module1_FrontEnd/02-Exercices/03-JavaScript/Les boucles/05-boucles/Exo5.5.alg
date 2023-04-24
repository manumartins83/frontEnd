<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER nb" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2defaut="" F2etat="inactif" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurPoint="2" nbDecimales="8" epaisseurLigne="2" arrondiAuto="vrai" totalAffichages="1000" maxBoucle="500000" totalBoucles="5000000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#nb" algoitem="nb EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#i" algoitem="i EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#produit" algoitem="produit EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Entrez une valeur :#0" algoitem="AFFICHER &quot;Entrez une valeur :&quot;"/>
        <item code="2#nb#pasliste" algoitem="LIRE nb"/>
        <item code="4#La table de multiplication de #0" algoitem="AFFICHER &quot;La table de multiplication de &quot;"/>
        <item code="3#nb#0#pasliste" algoitem="AFFICHER nb"/>
        <item code="4# est :#1" algoitem="AFFICHER &quot; est :&quot;"/>
        <item code="12#i#1#10" algoitem="POUR i ALLANT_DE 1 A 10">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="3#nb#0#pasliste" algoitem="AFFICHER nb"/>
            <item code="4# X #0" algoitem="AFFICHER &quot; X &quot;"/>
            <item code="3#i#0#pasliste" algoitem="AFFICHER i"/>
            <item code="4# = #0" algoitem="AFFICHER &quot; = &quot;"/>
            <item code="5#produit#nb*i#pasliste" algoitem="produit PREND_LA_VALEUR nb*i"/>
            <item code="3#produit#1#pasliste" algoitem="AFFICHER produit"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
