<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="LIRE nb" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2etat="inactif" F2para="" F2lignes="" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalAffichages="1000" epaisseurLigne="2" nbDecimales="8" arrondiAuto="vrai" maxBoucle="500000" epaisseurPoint="2" totalBoucles="5000000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="nb EST_DU_TYPE NOMBRE" code="1#NOMBRE#nb"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Entrez un nombre compris entre 10 et 20 :&quot;" code="4#Entrez un nombre compris entre 10 et 20 :#0"/>
        <item algoitem="LIRE nb" code="2#nb#pasliste"/>
        <item algoitem="TANT_QUE (nb&lt;10 OU nb>20) FAIRE" code="15#nb&lt;10 OU nb>20">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="TANT_QUE (nb>20) FAIRE" code="15#nb>20">
                <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
                <item algoitem="AFFICHER &quot;Réponse incorrect&quot;" code="4#Réponse incorrect#1"/>
                <item algoitem="AFFICHER &quot;Entrez un nombre plus petit que 20 :&quot;" code="4#Entrez un nombre plus petit que 20 :#1"/>
                <item algoitem="LIRE nb" code="2#nb#pasliste"/>
                <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
            </item>
            <item algoitem="TANT_QUE (nb&lt;10) FAIRE" code="15#nb&lt;10">
                <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
                <item algoitem="AFFICHER &quot;Réponse incorrect&quot;" code="4#Réponse incorrect#1"/>
                <item algoitem="AFFICHER &quot;Entrez un nombre plus grand que 10 :&quot;" code="4#Entrez un nombre plus grand que 10 :#1"/>
                <item algoitem="LIRE nb" code="2#nb#pasliste"/>
                <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
            </item>
            <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
        </item>
        <item algoitem="AFFICHER &quot;Réponse correct&quot;" code="4#Réponse correct#0"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
