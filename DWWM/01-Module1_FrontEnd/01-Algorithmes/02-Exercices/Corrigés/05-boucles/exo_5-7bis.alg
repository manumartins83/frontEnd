<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER &quot;C'était le nombre numéro &quot;"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2etat="inactif" F2defaut="" F2lignes=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param totalBoucles="5000000" arrondiAuto="vrai" epaisseurLigne="2" nbDecimales="8" maxBoucle="500000" totalAffichages="1000" epaisseurPoint="2"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="n EST_DU_TYPE NOMBRE" code="1#NOMBRE#n"/>
        <item algoitem="plusGrand EST_DU_TYPE NOMBRE" code="1#NOMBRE#plusGrand"/>
        <item algoitem="cpt EST_DU_TYPE NOMBRE" code="1#NOMBRE#cpt"/>
        <item algoitem="position EST_DU_TYPE NOMBRE" code="1#NOMBRE#position"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="plusGrand PREND_LA_VALEUR 0" code="5#plusGrand#0#pasliste"/>
        <item algoitem="cpt PREND_LA_VALEUR 1" code="5#cpt#1#pasliste"/>
        <item algoitem="TANT_QUE (cpt&lt;=5) FAIRE" code="15#cpt&lt;=5">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="LIRE n" code="2#n#pasliste"/>
            <item algoitem="SI (n>plusGrand) ALORS" code="6#n>plusGrand">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="plusGrand PREND_LA_VALEUR n" code="5#plusGrand#n#pasliste"/>
                <item algoitem="position PREND_LA_VALEUR cpt" code="5#position#cpt#pasliste"/>
                <item algoitem="FIN_SI" code="8#finsi"/>
            </item>
            <item algoitem="cpt PREND_LA_VALEUR cpt+1" code="5#cpt#cpt+1#pasliste"/>
            <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
        </item>
        <item algoitem="AFFICHER &quot;Le plus grand de ces nombres est : &quot;" code="4#Le plus grand de ces nombres est : #0"/>
        <item algoitem="AFFICHER plusGrand" code="3#plusGrand#1#pasliste"/>
        <item algoitem="AFFICHER &quot;C'était le nombre numéro &quot;" code="4#C'était le nombre numéro #0"/>
        <item algoitem="AFFICHER position" code="3#position#0#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
