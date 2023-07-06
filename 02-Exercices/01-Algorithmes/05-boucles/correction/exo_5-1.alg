<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER &quot;nombre erroné. Recommencé à nouveau&quot;"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2etat="inactif" F2para="" F2defaut="" F2lignes=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param nbDecimales="8" epaisseurLigne="2" epaisseurPoint="2" maxBoucle="500000" arrondiAuto="vrai" totalAffichages="1000" totalBoucles="5000000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#choix" algoitem="choix EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="15#choix&lt;1 OU choix>3" algoitem="TANT_QUE (choix&lt;1 OU choix>3) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="2#choix#pasliste" algoitem="LIRE choix"/>
            <item code="6#choix&lt;1 OU choix > 3" algoitem="SI (choix&lt;1 OU choix > 3) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="4#nombre erroné. Recommencé à nouveau#0" algoitem="AFFICHER &quot;nombre erroné. Recommencé à nouveau&quot;"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
            </item>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
        <item code="4#nombre OK#0" algoitem="AFFICHER &quot;nombre OK&quot;"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
