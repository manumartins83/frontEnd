<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="Dans l'algorithme suivant, montrer que l'on pourrait exprimer y directement en fonction de x avec une instruction ne comportant qu'une seule opération." courant="AFFICHER y" />
    <fonction fctcode="" fctetat="inactif" />
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2" />
    <item algoitem="VARIABLES" code="100#declarationsvariables" >
        <item algoitem="a EST_DU_TYPE NOMBRE" code="1#NOMBRE#a" />
        <item algoitem="b EST_DU_TYPE NOMBRE" code="1#NOMBRE#b" />
        <item algoitem="c EST_DU_TYPE NOMBRE" code="1#NOMBRE#c" />
        <item algoitem="d EST_DU_TYPE NOMBRE" code="1#NOMBRE#d" />
        <item algoitem="x EST_DU_TYPE NOMBRE" code="1#NOMBRE#x" />
        <item algoitem="y EST_DU_TYPE NOMBRE" code="1#NOMBRE#y" />
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo" >
        <item algoitem="LIRE x" code="2#x#pasliste" />
        <item algoitem="a PREND_LA_VALEUR x+2" code="5#a#x+2#pasliste" />
        <item algoitem="b PREND_LA_VALEUR a*a" code="5#b#a*a#pasliste" />
        <item algoitem="c PREND_LA_VALEUR x-2" code="5#c#x-2#pasliste" />
        <item algoitem="d PREND_LA_VALEUR c*c" code="5#d#c*c#pasliste" />
        <item algoitem="y PREND_LA_VALEUR (b-d)/4" code="5#y#(b-d)/4#pasliste" />
        <item algoitem="AFFICHER y" code="3#y#0#pasliste" />
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo" />
</Algo>
