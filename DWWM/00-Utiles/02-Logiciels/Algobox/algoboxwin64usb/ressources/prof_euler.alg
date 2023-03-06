<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="Construction approchée d'une fonction f par la méthode d'Euler sur [0,1] avec f'(x)=1/(1+x*x) et f'(0)=0&#xa;Affichage de la courbe&#xa;f' est définie dans l'onglet &quot;Utiliser une fonction numérique&quot;" courant="FIN_ALGORITHME" />
    <fonction fctcode="1/(1+x*x)" fctetat="actif" />
    <repere repetat="actif" repcode="0#1#0#1#0.1#0.1" />
    <item algoitem="VARIABLES" code="100#declarationsvariables" >
        <item algoitem="h EST_DU_TYPE NOMBRE" code="1#NOMBRE#h" />
        <item algoitem="xA EST_DU_TYPE NOMBRE" code="1#NOMBRE#xA" />
        <item algoitem="yA EST_DU_TYPE NOMBRE" code="1#NOMBRE#yA" />
        <item algoitem="xB EST_DU_TYPE NOMBRE" code="1#NOMBRE#xB" />
        <item algoitem="yB EST_DU_TYPE NOMBRE" code="1#NOMBRE#yB" />
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo" >
        <item algoitem="h PREND_LA_VALEUR 0.05" code="5#h#0.05#pasliste" />
        <item algoitem="xA PREND_LA_VALEUR 0" code="5#xA#0#pasliste" />
        <item algoitem="yA PREND_LA_VALEUR 0" code="5#yA#0#pasliste" />
        <item algoitem="TANT_QUE (xA&lt;1) FAIRE" code="15#xA&lt;1" >
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque" />
            <item algoitem="xB PREND_LA_VALEUR xA+h" code="5#xB#xA+h#pasliste" />
            <item algoitem="yB PREND_LA_VALEUR yA+h*F1(xA)" code="5#yB#yA+h*F1(xA)#pasliste" />
            <item algoitem="AFFICHER xB" code="3#xB#0#pasliste" />
            <item algoitem="AFFICHER &quot; ; &quot;" code="4# ; #0" />
            <item algoitem="AFFICHER yB" code="3#yB#1#pasliste" />
            <item algoitem="TRACER_SEGMENT (xA,yA)->(xB,yB)" code="51#xA#yA#xB#yB#Rouge" />
            <item algoitem="xA PREND_LA_VALEUR xB" code="5#xA#xB#pasliste" />
            <item algoitem="yA PREND_LA_VALEUR yB" code="5#yA#yB#pasliste" />
            <item algoitem="FIN_TANT_QUE" code="17#fintantque" />
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo" />
</Algo>
