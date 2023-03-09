<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="Problème du duc de toscane (simulation de 100000 lancers de 3 dés)&#xa;Tracé du diagramme en bâtons des fréquences observées" courant="POUR i ALLANT_DE 1 A 100000" />
    <fonction fctcode="" fctetat="inactif" />
    <repere repetat="actif" repcode="2#19#0#15#1#1" />
    <item algoitem="VARIABLES" code="100#declarationsvariables" >
        <item algoitem="issue EST_DU_TYPE LISTE" code="1#LISTE#issue" />
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i" />
        <item algoitem="somme EST_DU_TYPE NOMBRE" code="1#NOMBRE#somme" />
        <item algoitem="propor EST_DU_TYPE NOMBRE" code="1#NOMBRE#propor" />
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo" >
        <item algoitem="POUR i ALLANT_DE 3 A 18" code="12#i#3#18" >
            <item algoitem="DEBUT_POUR" code="13#debutpour" />
            <item algoitem="issue[i] PREND_LA_VALEUR 0" code="5#issue#0#i" />
            <item algoitem="FIN_POUR" code="14#finpour" />
        </item>
        <item algoitem="POUR i ALLANT_DE 1 A 100000" code="12#i#1#100000" >
            <item algoitem="DEBUT_POUR" code="13#debutpour" />
            <item algoitem="somme PREND_LA_VALEUR floor(6*random()+1)+floor(6*random()+1)+floor(6*random()+1)" code="5#somme#floor(6*random()+1)+floor(6*random()+1)+floor(6*random()+1)#pasliste" />
            <item algoitem="issue[somme] PREND_LA_VALEUR issue[somme]+1" code="5#issue#issue[somme]+1#somme" />
            <item algoitem="FIN_POUR" code="14#finpour" />
        </item>
        <item algoitem="POUR i ALLANT_DE 3 A 18" code="12#i#3#18" >
            <item algoitem="DEBUT_POUR" code="13#debutpour" />
            <item algoitem="propor PREND_LA_VALEUR issue[i]/1000" code="5#propor#issue[i]/1000#pasliste" />
            <item algoitem="AFFICHER i" code="3#i#0#pasliste" />
            <item algoitem="AFFICHER &quot; -> &quot;" code="4# -> #0" />
            <item algoitem="AFFICHER propor" code="3#propor#1#pasliste" />
            <item algoitem="TRACER_SEGMENT (i,0)->(i,propor)" code="51#i#0#i#propor#Rouge" />
            <item algoitem="FIN_POUR" code="14#finpour" />
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo" />
</Algo>
