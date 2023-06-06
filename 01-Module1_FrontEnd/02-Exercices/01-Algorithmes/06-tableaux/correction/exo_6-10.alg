<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="//On suppose que tab1 et tab2 comptent N éléments et qu'ils sont déja saisis"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2etat="inactif" F2lignes="" F2defaut="" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param epaisseurLigne="2" totalAffichages="1000" epaisseurPoint="2" totalBoucles="5000000" arrondiAuto="vrai" maxBoucle="500000" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#LISTE#tab1" algoitem="tab1 EST_DU_TYPE LISTE"/>
        <item code="1#LISTE#tab2" algoitem="tab2 EST_DU_TYPE LISTE"/>
        <item code="1#LISTE#tab3" algoitem="tab3 EST_DU_TYPE LISTE"/>
        <item code="1#NOMBRE#i" algoitem="i EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#N" algoitem="N EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="19#On suppose que tab1 et tab2 comptent N éléments et qu'ils sont déja saisis" algoitem="//On suppose que tab1 et tab2 comptent N éléments et qu'ils sont déja saisis"/>
        <item code="5#N#tab1.length#pasliste" algoitem="N PREND_LA_VALEUR tab1.length"/>
        <item code="12#i#0#N-1" algoitem="POUR i ALLANT_DE 0 A N-1">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="5#tab3#tab1[i]+tab2[i]#i" algoitem="tab3[i] PREND_LA_VALEUR tab1[i]+tab2[i]"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
