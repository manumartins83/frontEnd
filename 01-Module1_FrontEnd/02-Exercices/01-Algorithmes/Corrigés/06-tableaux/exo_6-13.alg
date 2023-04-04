<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER &quot;Position de cet élément : &quot;"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2lignes="" F2para="" F2etat="inactif"/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param totalAffichages="1000" epaisseurPoint="2" nbDecimales="8" arrondiAuto="vrai" maxBoucle="500000" totalBoucles="5000000" epaisseurLigne="2"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="tab EST_DU_TYPE LISTE" code="1#LISTE#tab"/>
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i"/>
        <item algoitem="N EST_DU_TYPE NOMBRE" code="1#NOMBRE#N"/>
        <item algoitem="posMAX EST_DU_TYPE NOMBRE" code="1#NOMBRE#posMAX"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Saisir une valeur : &quot;" code="4#Saisir une valeur : #0"/>
        <item algoitem="LIRE N" code="2#N#pasliste"/>
        <item algoitem="POUR i ALLANT_DE 0 A N-1" code="12#i#0#N-1">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="AFFICHER &quot;Entrez le nombre n°&quot;" code="4#Entrez le nombre n°#0"/>
            <item algoitem="AFFICHERCALCUL i+1" code="20#i+1#0"/>
            <item algoitem="LIRE tab[i]" code="2#tab#i"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="posMAX PREND_LA_VALEUR 0" code="5#posMAX#0#pasliste"/>
        <item algoitem="POUR i ALLANT_DE 0 A N-1" code="12#i#0#N-1">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="SI (tab[i]>tab[posMAX]) ALORS" code="6#tab[i]>tab[posMAX]">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="posMAX PREND_LA_VALEUR i" code="5#posMAX#i#pasliste"/>
                <item algoitem="FIN_SI" code="8#finsi"/>
            </item>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="AFFICHER &quot;Element le + grand : &quot;" code="4#Element le + grand : #0"/>
        <item algoitem="AFFICHER tab[posMAX]" code="3#tab#1#posMAX"/>
        <item algoitem="AFFICHER &quot;Position de cet élément : &quot;" code="4#Position de cet élément : #0"/>
        <item algoitem="AFFICHER posMAX" code="3#posMAX#0#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
