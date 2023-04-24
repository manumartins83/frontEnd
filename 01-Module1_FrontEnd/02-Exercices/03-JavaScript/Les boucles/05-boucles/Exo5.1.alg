<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER &quot;Entrez un nombre compris entre 1 et 3 :&quot;" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2etat="inactif" F2para="" F2lignes="" F2defaut=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param epaisseurLigne="2" arrondiAuto="vrai" epaisseurPoint="2" maxBoucle="500000" totalAffichages="1000" totalBoucles="5000000" nbDecimales="8"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="nb EST_DU_TYPE NOMBRE" code="1#NOMBRE#nb"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Entrez un nombre compris entre 1 et 3 :&quot;" code="4#Entrez un nombre compris entre 1 et 3 :#0"/>
        <item algoitem="LIRE nb" code="2#nb#pasliste"/>
        <item algoitem="TANT_QUE (nb&lt;1 OU nb>3) FAIRE" code="15#nb&lt;1 OU nb>3">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="AFFICHER &quot;Réponse incorrect&quot;" code="4#Réponse incorrect#1"/>
            <item algoitem="AFFICHER &quot;Entrez un nombre compris entre 1 et 3 :&quot;" code="4#Entrez un nombre compris entre 1 et 3 :#1"/>
            <item algoitem="LIRE nb" code="2#nb#pasliste"/>
            <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
        </item>
        <item algoitem="AFFICHER &quot;Réponse correct&quot;" code="4#Réponse correct#0"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
