<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="Recherche d'une valeur approchée de la solution de F1(x)=0 sur [1,2] par dichotomie après avoir entré la précision désirée.&#xa;La fonction F1 est définie dans l'onglet &quot;Utiliser une fonction numérique&quot;" courant="FIN_ALGORITHME" />
    <fonction fctcode="x-1-1/x" fctetat="actif" />
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2" />
    <item algoitem="VARIABLES" code="100#declarationsvariables" >
        <item algoitem="precision EST_DU_TYPE NOMBRE" code="1#NOMBRE#precision" />
        <item algoitem="a EST_DU_TYPE NOMBRE" code="1#NOMBRE#a" />
        <item algoitem="b EST_DU_TYPE NOMBRE" code="1#NOMBRE#b" />
        <item algoitem="m EST_DU_TYPE NOMBRE" code="1#NOMBRE#m" />
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo" >
        <item algoitem="a PREND_LA_VALEUR 1" code="5#a#1#pasliste" />
        <item algoitem="b PREND_LA_VALEUR 2" code="5#b#2#pasliste" />
        <item algoitem="LIRE precision" code="2#precision#pasliste" />
        <item algoitem="TANT_QUE (b-a>precision) FAIRE" code="15#b-a>precision" >
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque" />
            <item algoitem="m PREND_LA_VALEUR (a+b)/2" code="5#m#(a+b)/2#pasliste" />
            <item algoitem="SI (F1(m)*F1(b)>0) ALORS" code="6#F1(m)*F1(b)>0" >
                <item algoitem="DEBUT_SI" code="7#debutsi" />
                <item algoitem="b PREND_LA_VALEUR m" code="5#b#m#pasliste" />
                <item algoitem="FIN_SI" code="8#finsi" />
                <item algoitem="SINON" code="9#sinon" >
                    <item algoitem="DEBUT_SINON" code="10#debutsinon" />
                    <item algoitem="a PREND_LA_VALEUR m" code="5#a#m#pasliste" />
                    <item algoitem="FIN_SINON" code="11#finsinon" />
                </item>
            </item>
            <item algoitem="AFFICHER a" code="3#a#0#pasliste" />
            <item algoitem="AFFICHER &quot; &lt; solution &lt; &quot;" code="4# &lt; solution &lt; #0" />
            <item algoitem="AFFICHER b" code="3#b#1#pasliste" />
            <item algoitem="FIN_TANT_QUE" code="17#fintantque" />
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo" />
</Algo>
