<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="Courbe représentative d'une fonction&#xa;(la fonction et le repère sont définies dans les onglets &quot;utiliser une fonction numérique&quot; et &quot;dessiner dans un repère&quot;)" courant="TANT_QUE (xdepart&lt;4) FAIRE" />
    <fonction fctcode="pow(x,3)-3*pow(x,2)" fctetat="actif" />
    <repere repetat="actif" repcode="-2#4#-10#10#1#1" />
    <item algoitem="VARIABLES" code="100#declarationsvariables" >
        <item algoitem="pas EST_DU_TYPE NOMBRE" code="1#NOMBRE#pas" />
        <item algoitem="xdepart EST_DU_TYPE NOMBRE" code="1#NOMBRE#xdepart" />
        <item algoitem="xfin EST_DU_TYPE NOMBRE" code="1#NOMBRE#xfin" />
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo" >
        <item algoitem="pas PREND_LA_VALEUR 0.1" code="5#pas#0.1#pasliste" />
        <item algoitem="xdepart PREND_LA_VALEUR -2" code="5#xdepart#-2#pasliste" />
        <item algoitem="TANT_QUE (xdepart&lt;4) FAIRE" code="15#xdepart&lt;4" >
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque" />
            <item algoitem="xfin PREND_LA_VALEUR xdepart+pas" code="5#xfin#xdepart+pas#pasliste" />
            <item algoitem="TRACER_SEGMENT (xdepart,F1(xdepart))->(xfin,F1(xfin))" code="51#xdepart#F1(xdepart)#xfin#F1(xfin)#Rouge" />
            <item algoitem="xdepart PREND_LA_VALEUR xfin" code="5#xdepart#xfin#pasliste" />
            <item algoitem="FIN_TANT_QUE" code="17#fintantque" />
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo" />
</Algo>
