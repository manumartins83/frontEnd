<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="prixeneuros EST_DU_TYPE NOMBRE"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2etat="inactif" F2lignes="" F2para="" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalBoucles="5000000" epaisseurPoint="2" arrondiAuto="vrai" epaisseurLigne="2" totalAffichages="1000" nbDecimales="8" maxBoucle="500000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="prixenfrancs EST_DU_TYPE NOMBRE" code="1#NOMBRE#prixenfrancs"/>
        <item algoitem="prixeneuros EST_DU_TYPE NOMBRE" code="1#NOMBRE#prixeneuros"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="LIRE prixenfrancs" code="2#prixenfrancs#pasliste"/>
        <item algoitem="prixeneuros PREND_LA_VALEUR prixenfrancs/6.55957" code="5#prixeneuros#prixenfrancs/6.55957#pasliste"/>
        <item algoitem="AFFICHER prixeneuros" code="3#prixeneuros#0#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
