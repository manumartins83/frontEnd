<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="Tableau des images d'une fonction sur un intervalle avec un pas de 0.1&#xa;(initiation à TANT QUE)" courant="AFFICHER y" />
    <fonction fctcode="" fctetat="inactif" />
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2" />
    <item algoitem="VARIABLES" code="100#declarationsvariables" >
        <item algoitem="x EST_DU_TYPE NOMBRE" code="1#NOMBRE#x" />
        <item algoitem="y EST_DU_TYPE NOMBRE" code="1#NOMBRE#y" />
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo" >
        <item algoitem="x PREND_LA_VALEUR 1" code="5#x#1#pasliste" />
        <item algoitem="TANT_QUE (x&lt;=2) FAIRE" code="15#x&lt;=2" >
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque" />
            <item algoitem="y PREND_LA_VALEUR x-1-1/x" code="5#y#x-1-1/x#pasliste" />
            <item algoitem="AFFICHER x" code="3#x#0#pasliste" />
            <item algoitem="AFFICHER &quot; -> &quot;" code="4# -> #0" />
            <item algoitem="AFFICHER y" code="3#y#1#pasliste" />
            <item algoitem="x PREND_LA_VALEUR x+0.1" code="5#x#x+0.1#pasliste" />
            <item algoitem="FIN_TANT_QUE" code="17#fintantque" />
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo" />
</Algo>
