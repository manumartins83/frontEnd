<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER nbNEG" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2etat="inactif" F2para="" F2defaut="" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param maxBoucle="500000" totalAffichages="1000" arrondiAuto="vrai" totalBoucles="5000000" epaisseurLigne="2" epaisseurPoint="2" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#LISTE#tab" algoitem="tab EST_DU_TYPE LISTE"/>
        <item code="1#NOMBRE#nbPOS" algoitem="nbPOS EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#nbNEG" algoitem="nbNEG EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#nb" algoitem="nb EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#i" algoitem="i EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Entrez le nombre de valeurs#0" algoitem="AFFICHER &quot;Entrez le nombre de valeurs&quot;"/>
        <item code="2#nb#pasliste" algoitem="LIRE nb"/>
        <item code="5#nbPOS#0#pasliste" algoitem="nbPOS PREND_LA_VALEUR 0"/>
        <item code="5#nbNEG#0#pasliste" algoitem="nbNEG PREND_LA_VALEUR 0"/>
        <item code="12#i#0#nb-1" algoitem="POUR i ALLANT_DE 0 A nb-1">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="4#Entrez le nombre #0" algoitem="AFFICHER &quot;Entrez le nombre &quot;"/>
            <item code="20#i+1#0" algoitem="AFFICHERCALCUL i+1"/>
            <item code="2#tab#i" algoitem="LIRE tab[i]"/>
            <item code="6#tab[i]>0" algoitem="SI (tab[i]>0) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="5#nbPOS#nbPOS+1#pasliste" algoitem="nbPOS PREND_LA_VALEUR nbPOS+1"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
                <item code="9#sinon" algoitem="SINON">
                    <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                    <item code="5#nbNEG#nbNEG+1#pasliste" algoitem="nbNEG PREND_LA_VALEUR nbNEG+1"/>
                    <item code="11#finsinon" algoitem="FIN_SINON"/>
                </item>
            </item>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="4#Le nombre de valeurs positives est de #0" algoitem="AFFICHER &quot;Le nombre de valeurs positives est de &quot;"/>
        <item code="3#nbPOS#1#pasliste" algoitem="AFFICHER nbPOS"/>
        <item code="4#Le nombre de valeurs négartives est de #0" algoitem="AFFICHER &quot;Le nombre de valeurs négartives est de &quot;"/>
        <item code="3#nbNEG#0#pasliste" algoitem="AFFICHER nbNEG"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
