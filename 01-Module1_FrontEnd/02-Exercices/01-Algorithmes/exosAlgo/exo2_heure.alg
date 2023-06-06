<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="heures PREND_LA_VALEUR 00" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2lignes="" F2para="" F2etat="inactif" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurLigne="2" maxBoucle="500000" arrondiAuto="vrai" nbDecimales="8" totalAffichages="1000" totalBoucles="5000000" epaisseurPoint="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#heures" algoitem="heures EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#minutes" algoitem="minutes EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#secondes" algoitem="secondes EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Entrez les heures :#0" algoitem="AFFICHER &quot;Entrez les heures :&quot;"/>
        <item code="2#heures#pasliste" algoitem="LIRE heures"/>
        <item code="4#Entrez les minutes :#0" algoitem="AFFICHER &quot;Entrez les minutes :&quot;"/>
        <item code="2#minutes#pasliste" algoitem="LIRE minutes"/>
        <item code="4#Entrez les secondes :#0" algoitem="AFFICHER &quot;Entrez les secondes :&quot;"/>
        <item code="2#secondes#pasliste" algoitem="LIRE secondes"/>
        <item code="5#secondes#secondes+1#pasliste" algoitem="secondes PREND_LA_VALEUR secondes+1"/>
        <item code="6#secondes==60" algoitem="SI (secondes==60) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="5#secondes#00#pasliste" algoitem="secondes PREND_LA_VALEUR 00"/>
            <item code="5#minutes#minutes+1#pasliste" algoitem="minutes PREND_LA_VALEUR minutes+1"/>
            <item code="6#minutes==60" algoitem="SI (minutes==60) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="5#minutes#00#pasliste" algoitem="minutes PREND_LA_VALEUR 00"/>
                <item code="5#heures#heures+1#pasliste" algoitem="heures PREND_LA_VALEUR heures+1"/>
                <item code="6#heures==24" algoitem="SI (heures==24) ALORS">
                    <item code="7#debutsi" algoitem="DEBUT_SI"/>
                    <item code="5#heures#00#pasliste" algoitem="heures PREND_LA_VALEUR 00"/>
                    <item code="8#finsi" algoitem="FIN_SI"/>
                </item>
                <item code="8#finsi" algoitem="FIN_SI"/>
            </item>
            <item code="8#finsi" algoitem="FIN_SI"/>
        </item>
        <item code="4#Dans une seconde il sera #0" algoitem="AFFICHER &quot;Dans une seconde il sera &quot;"/>
        <item code="6#heures==0" algoitem="SI (heures==0) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#0#0" algoitem="AFFICHER &quot;0&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
        </item>
        <item code="3#heures#0#pasliste" algoitem="AFFICHER heures"/>
        <item code="4#:#0" algoitem="AFFICHER &quot;:&quot;"/>
        <item code="6#minutes==0" algoitem="SI (minutes==0) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#0#0" algoitem="AFFICHER &quot;0&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
        </item>
        <item code="3#minutes#0#pasliste" algoitem="AFFICHER minutes"/>
        <item code="4#:#0" algoitem="AFFICHER &quot;:&quot;"/>
        <item code="6#secondes==0" algoitem="SI (secondes==0) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#0#0" algoitem="AFFICHER &quot;0&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
        </item>
        <item code="3#secondes#0#pasliste" algoitem="AFFICHER secondes"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
