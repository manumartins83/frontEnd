<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="Approximation de la valeur de PI par la méthode de Monte Carlo" courant="approxpi PREND_LA_VALEUR 4*somme/200000" />
    <fonction fctcode="" fctetat="inactif" />
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2" />
    <item algoitem="VARIABLES" code="100#declarationsvariables" >
        <item algoitem="x EST_DU_TYPE NOMBRE" code="1#NOMBRE#x" />
        <item algoitem="y EST_DU_TYPE NOMBRE" code="1#NOMBRE#y" />
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i" />
        <item algoitem="approxpi EST_DU_TYPE NOMBRE" code="1#NOMBRE#approxpi" />
        <item algoitem="somme EST_DU_TYPE NOMBRE" code="1#NOMBRE#somme" />
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo" >
        <item algoitem="somme PREND_LA_VALEUR 0" code="5#somme#0#pasliste" />
        <item algoitem="POUR i ALLANT_DE 1 A 200000" code="12#i#1#200000" >
            <item algoitem="DEBUT_POUR" code="13#debutpour" />
            <item algoitem="x PREND_LA_VALEUR random()" code="5#x#random()#pasliste" />
            <item algoitem="y PREND_LA_VALEUR random()" code="5#y#random()#pasliste" />
            <item algoitem="SI (x*x+y*y&lt;1) ALORS" code="6#x*x+y*y&lt;1" >
                <item algoitem="DEBUT_SI" code="7#debutsi" />
                <item algoitem="somme PREND_LA_VALEUR somme+1" code="5#somme#somme+1#pasliste" />
                <item algoitem="FIN_SI" code="8#finsi" />
            </item>
            <item algoitem="FIN_POUR" code="14#finpour" />
        </item>
        <item algoitem="approxpi PREND_LA_VALEUR 4*somme/200000" code="5#approxpi#4*somme/200000#pasliste" />
        <item algoitem="AFFICHER approxpi" code="3#approxpi#0#pasliste" />
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo" />
</Algo>
