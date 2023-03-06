<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="Le salaire annuel d'un employé dans une entreprise était de 24000 euros pour l'année 2000. Pour chacune des années suivantes, ce salaire annuel a augmente de 2% auquel s'est ajouté une prime annuelle de 100 euros. Déterminer un algorithme qui donne le salaire annuel de l'employé  pour l'année 2000+n ." courant="AFFICHER &quot;Le salaire est égal à &quot;" />
    <fonction fctcode="" fctetat="inactif" />
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2" />
    <item algoitem="VARIABLES" code="100#declarationsvariables" >
        <item algoitem="n EST_DU_TYPE NOMBRE" code="1#NOMBRE#n" />
        <item algoitem="salaire EST_DU_TYPE NOMBRE" code="1#NOMBRE#salaire" />
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i" />
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo" >
        <item algoitem="salaire PREND_LA_VALEUR 24000" code="5#salaire#24000#pasliste" />
        <item algoitem="LIRE n" code="2#n#pasliste" />
        <item algoitem="SI (n>=1) ALORS" code="6#n>=1" >
            <item algoitem="DEBUT_SI" code="7#debutsi" />
            <item algoitem="POUR i ALLANT_DE 1 A n" code="12#i#1#n" >
                <item algoitem="DEBUT_POUR" code="13#debutpour" />
                <item algoitem="salaire PREND_LA_VALEUR salaire+2/100*salaire+100" code="5#salaire#salaire+2/100*salaire+100#pasliste" />
                <item algoitem="FIN_POUR" code="14#finpour" />
            </item>
            <item algoitem="AFFICHER &quot;Le salaire est égal à &quot;" code="4#Le salaire est égal à #0" />
            <item algoitem="AFFICHER salaire" code="3#salaire#0#pasliste" />
            <item algoitem="FIN_SI" code="8#finsi" />
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo" />
</Algo>
