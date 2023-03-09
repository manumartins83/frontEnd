<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="SI ((mois==1 OU mois==3 OU mois==5 OU mois==7 OU mois==8 OU mois==10 OU mois==12) ET jour&lt;=31 ET jour>=1) ALORS" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2defaut="" F2etat="inactif" F2para="" F2lignes=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param nbDecimales="8" epaisseurLigne="2" epaisseurPoint="2" arrondiAuto="vrai" maxBoucle="500000" totalBoucles="5000000" totalAffichages="1000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="jour EST_DU_TYPE NOMBRE" code="1#NOMBRE#jour"/>
        <item algoitem="mois EST_DU_TYPE NOMBRE" code="1#NOMBRE#mois"/>
        <item algoitem="annee EST_DU_TYPE NOMBRE" code="1#NOMBRE#annee"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Entrez le numéro du jour :&quot;" code="4#Entrez le numéro du jour :#0"/>
        <item algoitem="LIRE jour" code="2#jour#pasliste"/>
        <item algoitem="AFFICHER &quot;Entrez le numéro du mois :&quot;" code="4#Entrez le numéro du mois :#0"/>
        <item algoitem="LIRE mois" code="2#mois#pasliste"/>
        <item algoitem="AFFICHER &quot;Entrez le numéro de l'année :&quot;" code="4#Entrez le numéro de l'année :#0"/>
        <item algoitem="LIRE annee" code="2#annee#pasliste"/>
        <item algoitem="SI ((mois==1 OU mois==3 OU mois==5 OU mois==7 OU mois==8 OU mois==10 OU mois==12) ET jour&lt;=31 ET jour>=1) ALORS" code="6#(mois==1 OU mois==3 OU mois==5 OU mois==7 OU mois==8 OU mois==10 OU mois==12) ET jour&lt;=31 ET jour>=1">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="AFFICHER &quot;Date valide&quot;" code="4#Date valide#0"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
            <item algoitem="SINON" code="9#sinon">
                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                <item algoitem="SI ((mois==4 OU mois==6 OU mois==9 OU mois==11) ET jour&lt;=30 ET jour>=1) ALORS" code="6#(mois==4 OU mois==6 OU mois==9 OU mois==11) ET jour&lt;=30 ET jour>=1">
                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                    <item algoitem="AFFICHER &quot;Date valide&quot;" code="4#Date valide#0"/>
                    <item algoitem="FIN_SI" code="8#finsi"/>
                    <item algoitem="SINON" code="9#sinon">
                        <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                        <item algoitem="SI (mois==2 ET jour&lt;=28 ET jour>=1) ALORS" code="6#mois==2 ET jour&lt;=28 ET jour>=1">
                            <item algoitem="DEBUT_SI" code="7#debutsi"/>
                            <item algoitem="AFFICHER &quot;Date valide&quot;" code="4#Date valide#0"/>
                            <item algoitem="FIN_SI" code="8#finsi"/>
                            <item algoitem="SINON" code="9#sinon">
                                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                <item algoitem="SI (mois==2 ET jour&lt;=29 ET jour>=1 ET (annee%4==0 OU annee%400==0 ET annee%100!=0)) ALORS" code="6#mois==2 ET jour&lt;=29 ET jour>=1 ET (annee%4==0 OU annee%400==0 ET annee%100!=0)">
                                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                                    <item algoitem="AFFICHER &quot;Date valide&quot;" code="4#Date valide#0"/>
                                    <item algoitem="FIN_SI" code="8#finsi"/>
                                    <item algoitem="SINON" code="9#sinon">
                                        <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                        <item algoitem="AFFICHER &quot;Date non valide&quot;" code="4#Date non valide#0"/>
                                        <item algoitem="FIN_SINON" code="11#finsinon"/>
                                    </item>
                                </item>
                                <item algoitem="FIN_SINON" code="11#finsinon"/>
                            </item>
                        </item>
                        <item algoitem="FIN_SINON" code="11#finsinon"/>
                    </item>
                </item>
                <item algoitem="FIN_SINON" code="11#finsinon"/>
            </item>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
