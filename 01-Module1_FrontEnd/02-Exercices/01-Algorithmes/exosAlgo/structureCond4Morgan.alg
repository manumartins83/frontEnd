<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="SI (permis==&quot;O&quot; OU permis==&quot;o&quot; ET experience>=2) ALORS" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2defaut="" F2lignes="" F2etat="inactif"/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param maxBoucle="500000" totalBoucles="5000000" epaisseurLigne="2" epaisseurPoint="2" arrondiAuto="vrai" nbDecimales="8" totalAffichages="1000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#experience" algoitem="experience EST_DU_TYPE NOMBRE"/>
        <item code="1#CHAINE#permis" algoitem="permis EST_DU_TYPE CHAINE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#A t-il le permis (O/N) ?#0" algoitem="AFFICHER &quot;A t-il le permis (O/N) ?&quot;"/>
        <item code="2#permis#pasliste" algoitem="LIRE permis"/>
        <item code="4#Combien a t-il d'année(s) d'expérience ?#0" algoitem="AFFICHER &quot;Combien a t-il d'année(s) d'expérience ?&quot;"/>
        <item code="2#experience#pasliste" algoitem="LIRE experience"/>
        <item code="6#permis==&quot;O&quot; OU permis==&quot;o&quot; ET experience>=2" algoitem="SI (permis==&quot;O&quot; OU permis==&quot;o&quot; ET experience>=2) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#Embauche autorisée !#0" algoitem="AFFICHER &quot;Embauche autorisée !&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
            <item code="9#sinon" algoitem="SINON">
                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                <item code="4#Embauche impossible !#0" algoitem="AFFICHER &quot;Embauche impossible !&quot;"/>
                <item code="11#finsinon" algoitem="FIN_SINON"/>
            </item>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
