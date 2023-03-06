<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER &quot;Non impossable&quot;" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2lignes="" F2para="" F2etat="inactif" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurLigne="2" maxBoucle="500000" arrondiAuto="vrai" nbDecimales="8" totalAffichages="1000" totalBoucles="5000000" epaisseurPoint="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#age" algoitem="age EST_DU_TYPE NOMBRE"/>
        <item code="1#CHAINE#sexe" algoitem="sexe EST_DU_TYPE CHAINE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Entrez l'âge :#0" algoitem="AFFICHER &quot;Entrez l'âge :&quot;"/>
        <item code="2#age#pasliste" algoitem="LIRE age"/>
        <item code="4#Entrez le sexe (H/M) :#0" algoitem="AFFICHER &quot;Entrez le sexe (H/M) :&quot;"/>
        <item code="2#sexe#pasliste" algoitem="LIRE sexe"/>
        <item code="6#(sexe==&quot;H&quot; ET age>20) OU (sexe==&quot;F&quot; ET age>=18 ET age&lt;=35)" algoitem="SI ((sexe==&quot;H&quot; ET age>20) OU (sexe==&quot;F&quot; ET age>=18 ET age&lt;=35)) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#Impossable#0" algoitem="AFFICHER &quot;Impossable&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
            <item code="9#sinon" algoitem="SINON">
                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                <item code="4#Non impossable#0" algoitem="AFFICHER &quot;Non impossable&quot;"/>
                <item code="11#finsinon" algoitem="FIN_SINON"/>
            </item>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
