<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="PGCD de deux entiers positifs par la méthode d'Euclide" courant="TANT_QUE (B!=0) FAIRE" />
    <fonction fctcode="" fctetat="inactif" />
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2" />
    <item algoitem="VARIABLES" code="100#declarationsvariables" >
        <item algoitem="A EST_DU_TYPE NOMBRE" code="1#NOMBRE#A" />
        <item algoitem="B EST_DU_TYPE NOMBRE" code="1#NOMBRE#B" />
        <item algoitem="R EST_DU_TYPE NOMBRE" code="1#NOMBRE#R" />
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo" >
        <item algoitem="LIRE A" code="2#A#pasliste" />
        <item algoitem="LIRE B" code="2#B#pasliste" />
        <item algoitem="AFFICHER &quot;Le PGCD de &quot;" code="4#Le PGCD de #0" />
        <item algoitem="AFFICHER A" code="3#A#0#pasliste" />
        <item algoitem="AFFICHER &quot; et &quot;" code="4# et #0" />
        <item algoitem="AFFICHER B" code="3#B#0#pasliste" />
        <item algoitem="AFFICHER &quot; est : &quot;" code="4# est : #0" />
        <item algoitem="TANT_QUE (B!=0) FAIRE" code="15#B!=0" >
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque" />
            <item algoitem="R PREND_LA_VALEUR A%B" code="5#R#A%B#pasliste" />
            <item algoitem="A PREND_LA_VALEUR B" code="5#A#B#pasliste" />
            <item algoitem="B PREND_LA_VALEUR R" code="5#B#R#pasliste" />
            <item algoitem="FIN_TANT_QUE" code="17#fintantque" />
        </item>
        <item algoitem="AFFICHER A" code="3#A#0#pasliste" />
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo" />
</Algo>
