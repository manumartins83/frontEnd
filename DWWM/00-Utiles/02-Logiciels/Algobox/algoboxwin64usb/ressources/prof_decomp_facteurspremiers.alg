<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="Décomposition en facteurs premiers d'un entier positif (&lt;400000)" courant="AFFICHER puissance" />
    <fonction fctcode="" fctetat="inactif" />
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2" />
    <item algoitem="VARIABLES" code="100#declarationsvariables" >
        <item algoitem="n EST_DU_TYPE NOMBRE" code="1#NOMBRE#n" />
        <item algoitem="diviseur EST_DU_TYPE NOMBRE" code="1#NOMBRE#diviseur" />
        <item algoitem="nbfacteurs EST_DU_TYPE NOMBRE" code="1#NOMBRE#nbfacteurs" />
        <item algoitem="a EST_DU_TYPE NOMBRE" code="1#NOMBRE#a" />
        <item algoitem="puissance EST_DU_TYPE NOMBRE" code="1#NOMBRE#puissance" />
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo" >
        <item algoitem="LIRE n" code="2#n#pasliste" />
        <item algoitem="AFFICHER n" code="3#n#0#pasliste" />
        <item algoitem="AFFICHER &quot;=&quot;" code="4#=#0" />
        <item algoitem="a PREND_LA_VALEUR n" code="5#a#n#pasliste" />
        <item algoitem="nbfacteurs PREND_LA_VALEUR 0" code="5#nbfacteurs#0#pasliste" />
        <item algoitem="POUR diviseur ALLANT_DE 2 A floor(n/2)" code="12#diviseur#2#floor(n/2)" >
            <item algoitem="DEBUT_POUR" code="13#debutpour" />
            <item algoitem="SI (a%diviseur==0) ALORS" code="6#a%diviseur==0" >
                <item algoitem="DEBUT_SI" code="7#debutsi" />
                <item algoitem="nbfacteurs PREND_LA_VALEUR nbfacteurs+1" code="5#nbfacteurs#nbfacteurs+1#pasliste" />
                <item algoitem="puissance PREND_LA_VALEUR 1" code="5#puissance#1#pasliste" />
                <item algoitem="a PREND_LA_VALEUR a/diviseur" code="5#a#a/diviseur#pasliste" />
                <item algoitem="TANT_QUE (a%diviseur==0) FAIRE" code="15#a%diviseur==0" >
                    <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque" />
                    <item algoitem="puissance PREND_LA_VALEUR puissance+1" code="5#puissance#puissance+1#pasliste" />
                    <item algoitem="a PREND_LA_VALEUR a/diviseur" code="5#a#a/diviseur#pasliste" />
                    <item algoitem="FIN_TANT_QUE" code="17#fintantque" />
                </item>
                <item algoitem="SI (nbfacteurs>1) ALORS" code="6#nbfacteurs>1" >
                    <item algoitem="DEBUT_SI" code="7#debutsi" />
                    <item algoitem="AFFICHER &quot; * &quot;" code="4# * #0" />
                    <item algoitem="FIN_SI" code="8#finsi" />
                </item>
                <item algoitem="AFFICHER diviseur" code="3#diviseur#0#pasliste" />
                <item algoitem="AFFICHER &quot;^&quot;" code="4#^#0" />
                <item algoitem="AFFICHER puissance" code="3#puissance#0#pasliste" />
                <item algoitem="FIN_SI" code="8#finsi" />
            </item>
            <item algoitem="FIN_POUR" code="14#finpour" />
        </item>
        <item algoitem="SI (nbfacteurs==0) ALORS" code="6#nbfacteurs==0" >
            <item algoitem="DEBUT_SI" code="7#debutsi" />
            <item algoitem="AFFICHER n" code="3#n#0#pasliste" />
            <item algoitem="FIN_SI" code="8#finsi" />
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo" />
</Algo>
