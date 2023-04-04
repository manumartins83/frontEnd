<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="FIN_SI" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2defaut="" F2lignes="" F2etat="inactif" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param arrondiAuto="vrai" maxBoucle="500000" epaisseurPoint="2" epaisseurLigne="2" totalBoucles="5000000" nbDecimales="8" totalAffichages="1000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="tab EST_DU_TYPE LISTE" code="1#LISTE#tab"/>
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i"/>
        <item algoitem="nb EST_DU_TYPE NOMBRE" code="1#NOMBRE#nb"/>
        <item algoitem="nbNegatif EST_DU_TYPE NOMBRE" code="1#NOMBRE#nbNegatif"/>
        <item algoitem="nbPositif EST_DU_TYPE NOMBRE" code="1#NOMBRE#nbPositif"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Combien de valeurs voulez-vous entrer ?&quot;" code="4#Combien de valeurs voulez-vous entrer ?#0"/>
        <item algoitem="LIRE nb" code="2#nb#pasliste"/>
        <item algoitem="POUR i ALLANT_DE 0 A nb-1" code="12#i#0#nb-1">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="AFFICHER &quot;Entrez la valeur :&quot;" code="4#Entrez la valeur :#0"/>
            <item algoitem="LIRE tab[i]" code="2#tab#i"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="POUR i ALLANT_DE 0 A nb-1" code="12#i#0#nb-1">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="SI (tab[i]>0) ALORS" code="6#tab[i]>0">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="nbPositif PREND_LA_VALEUR nbPositif+1" code="5#nbPositif#nbPositif+1#pasliste"/>
                <item algoitem="FIN_SI" code="8#finsi"/>
            </item>
            <item algoitem="SI (tab[i]&lt;0) ALORS" code="6#tab[i]&lt;0">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="nbNegatif PREND_LA_VALEUR nbNegatif+1" code="5#nbNegatif#nbNegatif+1#pasliste"/>
                <item algoitem="FIN_SI" code="8#finsi"/>
            </item>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="AFFICHER &quot;Il y a &quot;" code="4#Il y a #0"/>
        <item algoitem="AFFICHER nbNegatif" code="3#nbNegatif#0#pasliste"/>
        <item algoitem="AFFICHER &quot; valeur(s) négative(s)&quot;" code="4# valeur(s) négative(s)#1"/>
        <item algoitem="AFFICHER &quot;Il y a &quot;" code="4#Il y a #0"/>
        <item algoitem="AFFICHER nbPositif" code="3#nbPositif#0#pasliste"/>
        <item algoitem="AFFICHER &quot; valeur(s) positive(s)&quot;" code="4# valeur(s) positive(s)#0"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
