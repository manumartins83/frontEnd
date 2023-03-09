<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="Calcul des termes de la suite de syracuse jusqu'à u100 après avoir entré le premier terme." courant="FIN_ALGORITHME" />
    <fonction fctcode="" fctetat="inactif" />
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2" />
    <item algoitem="VARIABLES" code="100#declarationsvariables" >
        <item algoitem="n EST_DU_TYPE NOMBRE" code="1#NOMBRE#n" />
        <item algoitem="u EST_DU_TYPE NOMBRE" code="1#NOMBRE#u" />
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i" />
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo" >
        <item algoitem="LIRE n" code="2#n#pasliste" />
        <item algoitem="u PREND_LA_VALEUR n" code="5#u#n#pasliste" />
        <item algoitem="AFFICHER &quot;0 -> &quot;" code="4#0 -> #0" />
        <item algoitem="AFFICHER u" code="3#u#1#pasliste" />
        <item algoitem="POUR i ALLANT_DE 1 A 100" code="12#i#1#100" >
            <item algoitem="DEBUT_POUR" code="13#debutpour" />
            <item algoitem="SI (u%2==0) ALORS" code="6#u%2==0" >
                <item algoitem="DEBUT_SI" code="7#debutsi" />
                <item algoitem="u PREND_LA_VALEUR u/2" code="5#u#u/2#pasliste" />
                <item algoitem="FIN_SI" code="8#finsi" />
                <item algoitem="SINON" code="9#sinon" >
                    <item algoitem="DEBUT_SINON" code="10#debutsinon" />
                    <item algoitem="u PREND_LA_VALEUR 3*u+1" code="5#u#3*u+1#pasliste" />
                    <item algoitem="FIN_SINON" code="11#finsinon" />
                </item>
            </item>
            <item algoitem="AFFICHER i" code="3#i#0#pasliste" />
            <item algoitem="AFFICHER &quot; -> &quot;" code="4# -> #0" />
            <item algoitem="AFFICHER u" code="3#u#1#pasliste" />
            <item algoitem="FIN_POUR" code="14#finpour" />
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo" />
</Algo>
