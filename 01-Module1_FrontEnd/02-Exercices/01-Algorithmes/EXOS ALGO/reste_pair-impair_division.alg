<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="nb EST_DU_TYPE NOMBRE" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2para="" F2etat="inactif" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" nbDecimales="8" totalBoucles="5000000" totalAffichages="1000" epaisseurLigne="2" maxBoucle="500000" epaisseurPoint="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#nb" algoitem="nb EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="2#nb#pasliste" algoitem="LIRE nb"/>
        <item code="6#nb%2!=0" algoitem="SI (nb%2!=0) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#le nombre saisi #0" algoitem="AFFICHER &quot;le nombre saisi &quot;"/>
            <item code="3#nb#0#pasliste" algoitem="AFFICHER nb"/>
            <item code="4# est impair#0" algoitem="AFFICHER &quot; est impair&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
            <item code="9#sinon" algoitem="SINON">
                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                <item code="4#le nombre saisi #0" algoitem="AFFICHER &quot;le nombre saisi &quot;"/>
                <item code="3#nb#0#pasliste" algoitem="AFFICHER nb"/>
                <item code="4# est pair#0" algoitem="AFFICHER &quot; est pair&quot;"/>
                <item code="11#finsinon" algoitem="FIN_SINON"/>
            </item>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
