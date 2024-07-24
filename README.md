# Szamkitalalo jatek

## Link

TODO

## Leiras

A szamitogep gondol 1 szamra 1 es 100 kozott. A felhasznalo egy input mezobe irja a tipjpjet. A szamitogep minden tippre a kovetkezok egyiket valaszolja:
- a keresett szam kisebb
- a keresett szam nagyobb
-gratulalok eltalaltad

Amint eltalaltad a keresett szamot a jatek veget er. A jatek vegen kiirjuk a tippek szamat.
Barmikor lehet uj jatokot inditani. Ilyenkor a korabbi tippek torlodnek es a szamitogep uj szamot general.

A jatek soran a tippek listaja idorendi sorrendben megjelenik. Felul talalhato a legutolso tipped,
alul pedig az elso tipped.

## Lepesek

1. lepes: Felhasznaloi felulet kialakitasa (HTML, Bootstrap)
2. lepes: Uj jatek inditasa veletlen szam generalasa
3. lepes: Uj jatek inditasa felhasznaloi interfesza alapallapotaba hozasa (korabbi tippek torlese, input mezo tartalmanak torlese)
4. lepes: Tipp bekuldesenek esemenykezelese: kattintas utan alert-tel ird ki, hogy 'klikk'
5. lepes: Bekuldott tipp kinyerese az esemenykezeloben az input mezobol
6. lepes: Hibas tipp formatum eseten hibauzenet. Ha nem tudsz hibas bemenetet megadni, manualisan ellenorizd, hogy tenyleg csak 1 es 100 kozott adhatsz meg egesz szamokat
7. lepes: Helyes tipp osszehasonlitasa a generalt szammal
8. lepes: A tipp eredmenyenek tipplistaban tarolasa es kiirasa a kepernyore (kisebb, nagyobb, eltalaltad)
9. lepes: A jatek befejezese amennyiben a tipp helyes (ne lehessen ujabb tippeket bekuldeni)