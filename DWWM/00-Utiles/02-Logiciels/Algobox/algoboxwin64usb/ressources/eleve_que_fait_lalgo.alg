<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="Que fait cet algorithme?" courant="AFFICHER m" />
    <fonction fctcode="" fctetat="inactif" />
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2" />
    <item algoitem="VARIABLES" code="100#declarationsvariables" >
        <item algoitem="a EST_DU_TYPE NOMBRE" code="1#NOMBRE#a" />
        <item algoitem="b EST_DU_TYPE NOMBRE" code="1#NOMBRE#b" />
        <item algoitem="m EST_DU_TYPE NOMBRE" code="1#NOMBRE#m" />
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo" >
        <item algoitem="LIRE a" code="2#a#pasliste" />
        <item algoitem="LIRE b" code="2#b#pasliste" />
        <item algoitem="SI (a&lt;b) ALORS" code="6#a&lt;b" >
            <item algoitem="DEBUT_SI" code="7#debutsi" />
            <item algoitem="m PREND_LA_VALEUR b" code="5#m#b#pasliste" />
            <item algoitem="FIN_SI" code="8#finsi" />
            <item algoitem="SINON" code="9#sinon" >
                <item algoitem="DEBUT_SINON" code="10#debutsinon" />
                <item algoitem="m PREND_LA_VALEUR a" code="5#m#a#pasliste" />
                <item algoitem="FIN_SINON" code="11#finsinon" />
            </item>
        </item>
        <item algoitem="AFFICHER m" code="3#m#0#pasliste" />
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo" />
</Algo>
