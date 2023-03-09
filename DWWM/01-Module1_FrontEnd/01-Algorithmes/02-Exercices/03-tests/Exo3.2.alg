<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="SI ((nb1>0 ET nb2>0) OU (nb1&lt;0 ET nb2&lt;0)) ALORS"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2para="" F2lignes="" F2etat="inactif" F2defaut=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param maxBoucle="500000" epaisseurLigne="2" epaisseurPoint="2" totalBoucles="5000000" totalAffichages="1000" nbDecimales="8" arrondiAuto="vrai"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#nb1" algoitem="nb1 EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#nb2" algoitem="nb2 EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Entrez premier nombre :#0" algoitem="AFFICHER &quot;Entrez premier nombre :&quot;"/>
        <item code="2#nb1#pasliste" algoitem="LIRE nb1"/>
        <item code="4#Entrez deuxième nombre :#0" algoitem="AFFICHER &quot;Entrez deuxième nombre :&quot;"/>
        <item code="2#nb2#pasliste" algoitem="LIRE nb2"/>
        <item code="6#(nb1>0 ET nb2>0) OU (nb1&lt;0 ET nb2&lt;0)" algoitem="SI ((nb1>0 ET nb2>0) OU (nb1&lt;0 ET nb2&lt;0)) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#Le produit est positif#0" algoitem="AFFICHER &quot;Le produit est positif&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
            <item code="9#sinon" algoitem="SINON">
                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                <item code="4#Le produit est négatif#0" algoitem="AFFICHER &quot;Le produit est négatif&quot;"/>
                <item code="11#finsinon" algoitem="FIN_SINON"/>
            </item>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
