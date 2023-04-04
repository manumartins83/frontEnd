<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="somme PREND_LA_VALEUR ALGOBOX_SOMME(tab,0,3)"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2etat="inactif" F2defaut="" F2para="" F2lignes=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param arrondiAuto="vrai" totalBoucles="5000000" nbDecimales="8" totalAffichages="1000" epaisseurLigne="2" epaisseurPoint="2" maxBoucle="500000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="tab EST_DU_TYPE LISTE" code="1#LISTE#tab"/>
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i"/>
        <item algoitem="somme EST_DU_TYPE NOMBRE" code="1#NOMBRE#somme"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="POUR i ALLANT_DE 0 A 3" code="12#i#0#3">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="tab[i] PREND_LA_VALEUR ALGOBOX_ALEA_ENT(1,99)" code="5#tab#ALGOBOX_ALEA_ENT(1,99)#i"/>
            <item algoitem="AFFICHER tab[i]" code="3#tab#1#i"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="somme PREND_LA_VALEUR ALGOBOX_SOMME(tab,0,3)" code="5#somme#ALGOBOX_SOMME(tab,0,3)#pasliste"/>
        <item algoitem="AFFICHER &quot;La somme totale est de : &quot;" code="4#La somme totale est de : #0"/>
        <item algoitem="AFFICHER somme" code="3#somme#0#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
