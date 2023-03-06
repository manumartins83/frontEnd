<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="Le point A est sur l'axe des abscisses et son abscisse est égale à 3. Pour tout autre point M, d'abscisse x, situé sur l'axe des abscisses, on cherche à déterminer la distance AM." courant="AFFICHER distance" />
    <fonction fctcode="" fctetat="inactif" />
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2" />
    <item algoitem="VARIABLES" code="100#declarationsvariables" >
        <item algoitem="x EST_DU_TYPE NOMBRE" code="1#NOMBRE#x" />
        <item algoitem="distance EST_DU_TYPE NOMBRE" code="1#NOMBRE#distance" />
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo" >
        <item algoitem="LIRE x" code="2#x#pasliste" />
        <item algoitem="SI (x>=3) ALORS" code="6#x>=3" >
            <item algoitem="DEBUT_SI" code="7#debutsi" />
            <item algoitem="distance PREND_LA_VALEUR x-3" code="5#distance#x-3#pasliste" />
            <item algoitem="FIN_SI" code="8#finsi" />
            <item algoitem="SINON" code="9#sinon" >
                <item algoitem="DEBUT_SINON" code="10#debutsinon" />
                <item algoitem="distance PREND_LA_VALEUR 3-x" code="5#distance#3-x#pasliste" />
                <item algoitem="FIN_SINON" code="11#finsinon" />
            </item>
        </item>
        <item algoitem="AFFICHER &quot;La distance AM est égale à &quot;" code="4#La distance AM est égale à #0" />
        <item algoitem="AFFICHER distance" code="3#distance#0#pasliste" />
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo" />
</Algo>
