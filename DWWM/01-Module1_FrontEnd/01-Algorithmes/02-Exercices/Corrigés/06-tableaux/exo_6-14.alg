<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER &quot; élèves dépassent la moyenne de la classe&quot;"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2etat="inactif" F2defaut="" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param totalAffichages="1000" epaisseurLigne="2" totalBoucles="5000000" epaisseurPoint="2" nbDecimales="8" arrondiAuto="vrai" maxBoucle="500000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#LISTE#tab" algoitem="tab EST_DU_TYPE LISTE"/>
        <item code="1#NOMBRE#Nb" algoitem="Nb EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#i" algoitem="i EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#som" algoitem="som EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#moy" algoitem="moy EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#Nbsup" algoitem="Nbsup EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Entrez le nombre à saisir : #0" algoitem="AFFICHER &quot;Entrez le nombre à saisir : &quot;"/>
        <item code="2#Nb#pasliste" algoitem="LIRE Nb"/>
        <item code="12#i#0#Nb-1" algoitem="POUR i ALLANT_DE 0 A Nb-1">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="4#Entrez le nombre n°#0" algoitem="AFFICHER &quot;Entrez le nombre n°&quot;"/>
            <item code="20#i+1#1" algoitem="AFFICHERCALCUL i+1"/>
            <item code="2#tab#i" algoitem="LIRE tab[i]"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="5#som#0#pasliste" algoitem="som PREND_LA_VALEUR 0"/>
        <item code="12#i#0#Nb-1" algoitem="POUR i ALLANT_DE 0 A Nb-1">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="5#som#som+tab[i]#pasliste" algoitem="som PREND_LA_VALEUR som+tab[i]"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="5#moy#som/Nb#pasliste" algoitem="moy PREND_LA_VALEUR som/Nb"/>
        <item code="5#Nbsup#0#pasliste" algoitem="Nbsup PREND_LA_VALEUR 0"/>
        <item code="12#i#0#Nb-1" algoitem="POUR i ALLANT_DE 0 A Nb-1">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="6#tab[i]>moy" algoitem="SI (tab[i]>moy) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="5#Nbsup#Nbsup+1#pasliste" algoitem="Nbsup PREND_LA_VALEUR Nbsup+1"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
            </item>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="3#Nbsup#0#pasliste" algoitem="AFFICHER Nbsup"/>
        <item code="4# élèves dépassent la moyenne de la classe#0" algoitem="AFFICHER &quot; élèves dépassent la moyenne de la classe&quot;"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
