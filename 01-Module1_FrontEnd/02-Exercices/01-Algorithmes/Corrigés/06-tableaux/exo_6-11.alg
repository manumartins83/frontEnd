<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER &quot;Le schtroumpf est de : &quot;"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2etat="inactif" F2lignes="" F2para="" F2defaut=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param arrondiAuto="vrai" totalBoucles="5000000" maxBoucle="500000" epaisseurPoint="2" totalAffichages="1000" epaisseurLigne="2" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#LISTE#T1" algoitem="T1 EST_DU_TYPE LISTE"/>
        <item code="1#LISTE#T2" algoitem="T2 EST_DU_TYPE LISTE"/>
        <item code="1#NOMBRE#i" algoitem="i EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#j" algoitem="j EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#N1" algoitem="N1 EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#N2" algoitem="N2 EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#sum" algoitem="sum EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#T1#4#0" algoitem="T1[0] PREND_LA_VALEUR 4"/>
        <item code="5#T1#8#1" algoitem="T1[1] PREND_LA_VALEUR 8"/>
        <item code="5#T1#7#2" algoitem="T1[2] PREND_LA_VALEUR 7"/>
        <item code="5#T1#12#3" algoitem="T1[3] PREND_LA_VALEUR 12"/>
        <item code="5#T2#3#0" algoitem="T2[0] PREND_LA_VALEUR 3"/>
        <item code="5#T2#6#1" algoitem="T2[1] PREND_LA_VALEUR 6"/>
        <item code="5#sum#0#pasliste" algoitem="sum PREND_LA_VALEUR 0"/>
        <item code="5#N1#T1.length#pasliste" algoitem="N1 PREND_LA_VALEUR T1.length"/>
        <item code="5#N2#T2.length#pasliste" algoitem="N2 PREND_LA_VALEUR T2.length"/>
        <item code="12#i#0#N2-1" algoitem="POUR i ALLANT_DE 0 A N2-1">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="12#j#0#N1-1" algoitem="POUR j ALLANT_DE 0 A N1-1">
                <item code="13#debutpour" algoitem="DEBUT_POUR"/>
                <item code="5#sum#sum + T2[i]*T1[j]#pasliste" algoitem="sum PREND_LA_VALEUR sum + T2[i]*T1[j]"/>
                <item code="14#finpour" algoitem="FIN_POUR"/>
            </item>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="4#Le schtroumpf est de : #0" algoitem="AFFICHER &quot;Le schtroumpf est de : &quot;"/>
        <item code="3#sum#1#pasliste" algoitem="AFFICHER sum"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
