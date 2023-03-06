<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER &quot;Ecrire le nouveau tableau :&quot;"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2etat="inactif" F2para="" F2lignes="" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurLigne="2" totalBoucles="5000000" epaisseurPoint="2" maxBoucle="500000" nbDecimales="8" arrondiAuto="vrai" totalAffichages="1000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#nb" algoitem="nb EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#i" algoitem="i EST_DU_TYPE NOMBRE"/>
        <item code="1#LISTE#T1" algoitem="T1 EST_DU_TYPE LISTE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Entrez le nombre de valeurs#0" algoitem="AFFICHER &quot;Entrez le nombre de valeurs&quot;"/>
        <item code="2#nb#pasliste" algoitem="LIRE nb"/>
        <item code="12#i#0#nb-1" algoitem="POUR i ALLANT_DE 0 A nb-1">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="4#Entrez le nombre #0" algoitem="AFFICHER &quot;Entrez le nombre &quot;"/>
            <item code="20#i+1#0" algoitem="AFFICHERCALCUL i+1"/>
            <item code="2#T1#i" algoitem="LIRE T1[i]"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="4#Ecrire le nouveau tableau :#1" algoitem="AFFICHER &quot;Ecrire le nouveau tableau :&quot;"/>
        <item code="12#i#0#nb-1" algoitem="POUR i ALLANT_DE 0 A nb-1">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="5#T1#T1[i]+1#i" algoitem="T1[i] PREND_LA_VALEUR T1[i]+1"/>
            <item code="3#T1#0#i" algoitem="AFFICHER T1[i]"/>
            <item code="4#     #0" algoitem="AFFICHER &quot;     &quot;"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
