<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER &quot; €&quot;"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2para="" F2lignes="" F2etat="inactif" F2defaut=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param maxBoucle="500000" epaisseurLigne="2" epaisseurPoint="2" totalBoucles="5000000" totalAffichages="1000" nbDecimales="8" arrondiAuto="vrai"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#prixHT" algoitem="prixHT EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#nbArticles" algoitem="nbArticles EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#TVA" algoitem="TVA EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#prixTTC" algoitem="prixTTC EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Entrez le prix HT :#1" algoitem="AFFICHER &quot;Entrez le prix HT :&quot;"/>
        <item code="2#prixHT#pasliste" algoitem="LIRE prixHT"/>
        <item code="4#Entrez le nombre d'articles :#1" algoitem="AFFICHER &quot;Entrez le nombre d'articles :&quot;"/>
        <item code="2#nbArticles#pasliste" algoitem="LIRE nbArticles"/>
        <item code="4#Entrez la TVA :#1" algoitem="AFFICHER &quot;Entrez la TVA :&quot;"/>
        <item code="2#TVA#pasliste" algoitem="LIRE TVA"/>
        <item code="5#prixTTC#nbArticles*prixHT*(1+TVA/100)#pasliste" algoitem="prixTTC PREND_LA_VALEUR nbArticles*prixHT*(1+TVA/100)"/>
        <item code="4#Le prix des articles TTC est : #0" algoitem="AFFICHER &quot;Le prix des articles TTC est : &quot;"/>
        <item code="3#prixTTC#0#pasliste" algoitem="AFFICHER prixTTC"/>
        <item code="4# €#0" algoitem="AFFICHER &quot; €&quot;"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
