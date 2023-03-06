<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="SI (nom1&lt;nom2 ET nom2&lt;nom3) ALORS"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2para="" F2lignes="" F2etat="inactif" F2defaut=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param maxBoucle="500000" epaisseurLigne="2" epaisseurPoint="2" totalBoucles="5000000" totalAffichages="1000" nbDecimales="8" arrondiAuto="vrai"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#CHAINE#nom1" algoitem="nom1 EST_DU_TYPE CHAINE"/>
        <item code="1#CHAINE#nom2" algoitem="nom2 EST_DU_TYPE CHAINE"/>
        <item code="1#CHAINE#nom3" algoitem="nom3 EST_DU_TYPE CHAINE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Entrez le premier nom :#0" algoitem="AFFICHER &quot;Entrez le premier nom :&quot;"/>
        <item code="2#nom1#pasliste" algoitem="LIRE nom1"/>
        <item code="4#Entrez le deuxième nom :#0" algoitem="AFFICHER &quot;Entrez le deuxième nom :&quot;"/>
        <item code="2#nom2#pasliste" algoitem="LIRE nom2"/>
        <item code="4#Entrez le troisième nom :#0" algoitem="AFFICHER &quot;Entrez le troisième nom :&quot;"/>
        <item code="2#nom3#pasliste" algoitem="LIRE nom3"/>
        <item code="6#nom1&lt;nom2 ET nom2&lt;nom3" algoitem="SI (nom1&lt;nom2 ET nom2&lt;nom3) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#Les noms sont rangés dans l'ordre alphabétique#0" algoitem="AFFICHER &quot;Les noms sont rangés dans l'ordre alphabétique&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
            <item code="9#sinon" algoitem="SINON">
                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                <item code="4#Les noms ne sont pas rangés dans l'ordre alphabétique#0" algoitem="AFFICHER &quot;Les noms ne sont pas rangés dans l'ordre alphabétique&quot;"/>
                <item code="11#finsinon" algoitem="FIN_SINON"/>
            </item>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
