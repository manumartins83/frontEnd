<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="Calcul de la somme des entiers de 1 à N&#xa;(initiation à POUR DE A)" courant="POUR i ALLANT_DE 1 A N" />
    <fonction fctcode="" fctetat="inactif" />
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2" />
    <item algoitem="VARIABLES" code="100#declarationsvariables" >
        <item algoitem="somme EST_DU_TYPE NOMBRE" code="1#NOMBRE#somme" />
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i" />
        <item algoitem="N EST_DU_TYPE NOMBRE" code="1#NOMBRE#N" />
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo" >
        <item algoitem="somme PREND_LA_VALEUR 0" code="5#somme#0#pasliste" />
        <item algoitem="LIRE N" code="2#N#pasliste" />
        <item algoitem="POUR i ALLANT_DE 1 A N" code="12#i#1#N" >
            <item algoitem="DEBUT_POUR" code="13#debutpour" />
            <item algoitem="somme PREND_LA_VALEUR somme+i" code="5#somme#somme+i#pasliste" />
            <item algoitem="FIN_POUR" code="14#finpour" />
        </item>
        <item algoitem="AFFICHER &quot;La somme est égale à &quot;" code="4#La somme est égale à #0" />
        <item algoitem="AFFICHER somme" code="3#somme#0#pasliste" />
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo" />
</Algo>
