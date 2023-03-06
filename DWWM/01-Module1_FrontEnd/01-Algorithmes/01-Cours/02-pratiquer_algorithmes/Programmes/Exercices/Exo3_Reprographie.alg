<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER &quot;Le prix total est de : &quot;" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2lignes="" F2para="" F2etat="inactif" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurLigne="2" maxBoucle="500000" arrondiAuto="vrai" nbDecimales="8" totalAffichages="1000" totalBoucles="5000000" epaisseurPoint="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#nbPhotocop" algoitem="nbPhotocop EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#prixPhotocop" algoitem="prixPhotocop EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Nombre de photocopies :#0" algoitem="AFFICHER &quot;Nombre de photocopies :&quot;"/>
        <item code="2#nbPhotocop#pasliste" algoitem="LIRE nbPhotocop"/>
        <item code="6#nbPhotocop&lt;=10" algoitem="SI (nbPhotocop&lt;=10) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="5#prixPhotocop#nbPhotocop*0.1#pasliste" algoitem="prixPhotocop PREND_LA_VALEUR nbPhotocop*0.1"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
            <item code="9#sinon" algoitem="SINON">
                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                <item code="6#nbPhotocop&lt;=30" algoitem="SI (nbPhotocop&lt;=30) ALORS">
                    <item code="7#debutsi" algoitem="DEBUT_SI"/>
                    <item code="5#prixPhotocop#(nbPhotocop-10)*0.09+1#pasliste" algoitem="prixPhotocop PREND_LA_VALEUR (nbPhotocop-10)*0.09+1"/>
                    <item code="8#finsi" algoitem="FIN_SI"/>
                    <item code="9#sinon" algoitem="SINON">
                        <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                        <item code="5#prixPhotocop#(nbPhotocop-30)*0.08+2.8#pasliste" algoitem="prixPhotocop PREND_LA_VALEUR (nbPhotocop-30)*0.08+2.8"/>
                        <item code="11#finsinon" algoitem="FIN_SINON"/>
                    </item>
                </item>
                <item code="11#finsinon" algoitem="FIN_SINON"/>
            </item>
        </item>
        <item code="4#Le prix total est de : #0" algoitem="AFFICHER &quot;Le prix total est de : &quot;"/>
        <item code="3#prixPhotocop#0#pasliste" algoitem="AFFICHER prixPhotocop"/>
        <item code="4# €#0" algoitem="AFFICHER &quot; €&quot;"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
