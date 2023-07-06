<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER tab2[j]"/>
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
        <item algoitem="tab2 EST_DU_TYPE LISTE" code="1#LISTE#tab2"/>
        <item algoitem="tab3 EST_DU_TYPE LISTE" code="1#LISTE#tab3"/>
        <item algoitem="j EST_DU_TYPE NOMBRE" code="1#NOMBRE#j"/>
        <item algoitem="k EST_DU_TYPE NOMBRE" code="1#NOMBRE#k"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Tableau 1&quot;" code="4#Tableau 1#1"/>
        <item algoitem="POUR i ALLANT_DE 0 A 3" code="12#i#0#3">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="tab[i] PREND_LA_VALEUR ALGOBOX_ALEA_ENT(1,5)" code="5#tab#ALGOBOX_ALEA_ENT(1,5)#i"/>
            <item algoitem="AFFICHER tab[i]" code="3#tab#1#i"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="AFFICHER &quot;Tableau 2&quot;" code="4#Tableau 2#1"/>
        <item algoitem="POUR j ALLANT_DE 0 A 3" code="12#j#0#3">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="tab2[j] PREND_LA_VALEUR ALGOBOX_ALEA_ENT(1,5)" code="5#tab2#ALGOBOX_ALEA_ENT(1,5)#j"/>
            <item algoitem="AFFICHER tab2[j]" code="3#tab2#1#j"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="AFFICHER &quot;Tableau 3&quot;" code="4#Tableau 3#1"/>
        <item algoitem="POUR k ALLANT_DE 0 A 3" code="12#k#0#3">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="tab3[k] PREND_LA_VALEUR tab[k]+tab2[k]" code="5#tab3#tab[k]+tab2[k]#k"/>
            <item algoitem="AFFICHER tab3[k]" code="3#tab3#1#k"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
