<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="resultat PREND_LA_VALEUR 0" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2lignes="" F2defaut="" F2para="" F2etat="inactif"/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurLigne="2" totalBoucles="5000000" arrondiAuto="vrai" epaisseurPoint="2" maxBoucle="500000" totalAffichages="1000" nbDecimales="8"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="nb EST_DU_TYPE NOMBRE" code="1#NOMBRE#nb"/>
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i"/>
        <item algoitem="resultat EST_DU_TYPE NOMBRE" code="1#NOMBRE#resultat"/>
        <item algoitem="position EST_DU_TYPE NOMBRE" code="1#NOMBRE#position"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="resultat PREND_LA_VALEUR 0" code="5#resultat#0#pasliste"/>
        <item algoitem="i PREND_LA_VALEUR 1" code="5#i#1#pasliste"/>
        <item algoitem="AFFICHER &quot;Entrez le nombre numéro &quot;" code="4#Entrez le nombre numéro #0"/>
        <item algoitem="AFFICHER i" code="3#i#0#pasliste"/>
        <item algoitem="AFFICHER &quot; : &quot;" code="4# : #0"/>
        <item algoitem="LIRE nb" code="2#nb#pasliste"/>
        <item algoitem="TANT_QUE (nb!=0) FAIRE" code="15#nb!=0">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="i PREND_LA_VALEUR i+1" code="5#i#i+1#pasliste"/>
            <item algoitem="AFFICHER &quot;Entrez le nombre numéro &quot;" code="4#Entrez le nombre numéro #0"/>
            <item algoitem="AFFICHER i" code="3#i#0#pasliste"/>
            <item algoitem="AFFICHER &quot; : &quot;" code="4# : #0"/>
            <item algoitem="LIRE nb" code="2#nb#pasliste"/>
            <item algoitem="SI (nb>resultat) ALORS" code="6#nb>resultat">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="resultat PREND_LA_VALEUR nb" code="5#resultat#nb#pasliste"/>
                <item algoitem="position PREND_LA_VALEUR i" code="5#position#i#pasliste"/>
                <item algoitem="FIN_SI" code="8#finsi"/>
            </item>
            <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
        </item>
        <item algoitem="AFFICHER &quot;Le plus grand de ces nombres est : &quot;" code="4#Le plus grand de ces nombres est : #0"/>
        <item algoitem="AFFICHER resultat" code="3#resultat#1#pasliste"/>
        <item algoitem="AFFICHER &quot;C'était le nombre numéro &quot;" code="4#C'était le nombre numéro #0"/>
        <item algoitem="AFFICHER position" code="3#position#0#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
