<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="Encadrement de racine de a par la méthode de babylone" courant="AFFICHER &quot; &lt;= racine &lt;= &quot;" />
    <fonction fctcode="" fctetat="inactif" />
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2" />
    <item algoitem="VARIABLES" code="100#declarationsvariables" >
        <item algoitem="x EST_DU_TYPE NOMBRE" code="1#NOMBRE#x" />
        <item algoitem="y EST_DU_TYPE NOMBRE" code="1#NOMBRE#y" />
        <item algoitem="a EST_DU_TYPE NOMBRE" code="1#NOMBRE#a" />
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo" >
        <item algoitem="LIRE a" code="2#a#pasliste" />
        <item algoitem="x PREND_LA_VALEUR 1" code="5#x#1#pasliste" />
        <item algoitem="y PREND_LA_VALEUR a" code="5#y#a#pasliste" />
        <item algoitem="TANT_QUE (abs(y-x)>1e-8) FAIRE" code="15#abs(y-x)>1e-8" >
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque" />
            <item algoitem="x PREND_LA_VALEUR (x+y)/2" code="5#x#(x+y)/2#pasliste" />
            <item algoitem="y PREND_LA_VALEUR a/x" code="5#y#a/x#pasliste" />
            <item algoitem="SI (x&lt;y) ALORS" code="6#x&lt;y" >
                <item algoitem="DEBUT_SI" code="7#debutsi" />
                <item algoitem="AFFICHER x" code="3#x#0#pasliste" />
                <item algoitem="AFFICHER &quot; &lt; racine &lt; &quot;" code="4# &lt; racine &lt; #0" />
                <item algoitem="AFFICHER y" code="3#y#1#pasliste" />
                <item algoitem="FIN_SI" code="8#finsi" />
                <item algoitem="SINON" code="9#sinon" >
                    <item algoitem="DEBUT_SINON" code="10#debutsinon" />
                    <item algoitem="AFFICHER y" code="3#y#0#pasliste" />
                    <item algoitem="AFFICHER &quot; &lt;= racine &lt;= &quot;" code="4# &lt;= racine &lt;= #0" />
                    <item algoitem="AFFICHER x" code="3#x#1#pasliste" />
                    <item algoitem="FIN_SINON" code="11#finsinon" />
                </item>
            </item>
            <item algoitem="FIN_TANT_QUE" code="17#fintantque" />
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo" />
</Algo>
