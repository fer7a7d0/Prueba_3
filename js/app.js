/* ============================================================
   🔹 1. BASE DE DATOS INTERNA
============================================================ */
const baseDatos = {
    108: { producto: "AIRE COMPRIMIDO", tt: "0" },
    122: { producto: "ARGON LIQUIDO EN DEWARS", tt: "214" },
    130: { producto: "M3. OXIGENO LIQUIDO DEWARE", tt: "211" },
    131: { producto: "M3. NITROGENO LIQUIDO DEWARE", tt: "212" },
    133: { producto: "NITROGENO LIQUIDO DEWAR 22 PSI", tt: "212" },
    138: { producto: "M3 NITROGENO DEWAR ABIERTO", tt: "212" },
    141: { producto: "INFRA COLD NUGGET", tt: "0" },
    204: { producto: "OXIDO NITROSO", tt: "0" },
    206: { producto: "M3. OXIGENO MEDICIN.LIQUID.THERMO DW", tt: "211" },
    222: { producto: "ACETILENO KG. MCA INFRA VALVULA CGA", tt: "102" },
    239: { producto: "NITR?GENO INDUSTRIAL MEGADEWAR 230L", tt: "212" },
    246: { producto: "NITROGENO SPARKLASER DEWAR 230L (350PSI)", tt: "212" },
    247: { producto: "NITROGENO LIQ FRESCOPACK DEWAR 230LTS (22 PSI)", tt: "212" },
    270: { producto: "NITROGENO IND. LIQUIDO MINIBULK 230 LTS.", tt: "212" },
    385: { producto: "CO2 INDUSTRIAL LIQUIDO DEWAR 230LTS (350PSI)", tt: "213" },
    386: { producto: "NITROGENO 4.7 LIQ DEWAR 230LTS (350PSI)", tt: "212" },
    387: { producto: "NITROGENO LIQUIDO FRESCOPACK DEWAR 230LTS (350PSI)", tt: "212" },
    388: { producto: "NITROGENO LIQUIDO INDUSTRIAL DEWAR 230LTS (350PSI)", tt: "212" },
    389: { producto: "OXIGENO LIQUIDO SPARK LASER ASISTENCIA DEWAR 230LT", tt: "211" },
    396: { producto: "ARGON INDUSTRIAL LIQUIDO DEWAR 230LTS (350PSI)", tt: "214" },
    397: { producto: "OXIGENO INDUSTRIAL LIQUIDO  DEWAR 230LTS (350PSI)", tt: "211" },
    398: { producto: "OXIGENO MEDICINAL LIQUIDO DEWAR 230 LTS (350PSI)", tt: "211" },
    433: { producto: "BIOXIDO DE CARBONO CON SIFON", tt: "213" },
    443: { producto: "CO2 USP", tt: "213" },
    445: { producto: "BIOXIDO DE CARBONO GASEOSO GRADO USP CIL C/SIFON", tt: "213" },
    446: { producto: "CO2 (BIOXIDO DE CARBONO) CON SIFON 9 KGS", tt: "213" },
    449: { producto: "CO2 FG LIQUIDO DEWAR 230 LTS ( 350 PSI )", tt: "213" },
    486: { producto: "NITROGENO LIQUIDO ULTRA ALTA PUREZA DEWAR 230 LTS", tt: "212" },
    601: { producto: "OXIGENO MEDICINAL USP E", tt: "211" },
    602: { producto: "NITROGENO GRADO MEDICINALLIQUIDO", tt: "212" },
    603: { producto: "NITROGENO GRADO MEDICINAL GASEOSO", tt: "212" },
    604: { producto: "CARGA DE NITROGENO GRADO MEDICINAL LIQUIDO PORTATI", tt: "212" },
    605: { producto: "BIOXIDO DE CARBONO USP (CO2-USP)", tt: "213" },
    607: { producto: "OXIDO NITROSO USP B 27.5", tt: "0" },
    608: { producto: "CARGA DE OXIDO NITROSO USP BT-20 2 KGS", tt: "0" },
    609: { producto: "AIRE MEDICINAL USP GASEOSO", tt: "0" },
    614: { producto: "CARGA DE OXIGENO GASEOSO INDUSTRIAL PORTATIL", tt: "211" },
    625: { producto: "NITROGENO GRADO MEDICINAL LIQUIDO", tt: "212" },
    630: { producto: "CARGA DE CO2 USP BT-20 2.0 KG", tt: "213" },
    631: { producto: "CARGA DE CO2 USP BT-40", tt: "213" },
    632: { producto: "CARGA DE CO2 USP BT-80", tt: "213" },
    640: { producto: "CARGA DE CO2 USP D 1 KGS", tt: "213" },
    641: { producto: "CO2 USP E VALVULA YUGO 2.0 KG", tt: "213" },
    651: { producto: "CARGA DE OXIGENO MEDICINAL USP BT-20", tt: "211" },
    652: { producto: "CARGA DE OXIGENO MEDICINAL USP BT-40", tt: "211" },
    653: { producto: "CARGA DE OXIGENO MEDICINAL USP BT-80", tt: "211" },
    654: { producto: "CARGA DE OXIGENO MEDICINAL USP M", tt: "211" },
    655: { producto: "CARGA DE OXIGENO MEDICINAL USP E TODO EN UNO", tt: "211" },
    658: { producto: "OXIGENO MEDICINAL USP E DE 0.682 M3", tt: "211" },
    659: { producto: "OXIGENO MEDICINAL USP M DE 3.45 M3", tt: "211" },
    660: { producto: "CARGA DE NITROGENO GRADO MEDICINAL", tt: "212" },
    661: { producto: "CARGA DE NITROGENO GRADO MEDICINAL BT-20", tt: "212" },
    663: { producto: "CARGA DE NITROGENO GRADO MEDICINAL BT-80", tt: "212" },
    672: { producto: "NITROGENO GRADO MEDICINAL LIQUIDO THERMO PORT 4 LT", tt: "212" },
    675: { producto: "NITROGENO MEDICINAL L?QUIDO DEWAR 230 LTS (22 PSI)", tt: "212" },
    681: { producto: "CARGA DE AIRE MEDICINAL USP E", tt: "0" },
    690: { producto: "OXIDO NITROSO USP E 2 KGS.", tt: "0" },
    691: { producto: "CARGA DE OXIDO NITROSO USP BT-40 4 KGS.", tt: "0" },
    692: { producto: "CARGA DE OXIDO NITROSO USP 7 KGS.", tt: "0" },
    693: { producto: "CARGA DE OXIDO NITROSO USP BT-80 9 KGS", tt: "0" },
    701: { producto: "CARGA DE OXIGENO 1 M3", tt: "211" },
    702: { producto: "CARGA DE OXIGENO 1.5 M3", tt: "211" },
    703: { producto: "CARGA DE OXIGENO 2.0 M3", tt: "211" },
    704: { producto: "CARGA DE OXIGENO INDUSTRIAL DE 3 M3", tt: "211" },
    710: { producto: "CARGA DE NITROGENO 1 M3", tt: "212" },
    711: { producto: "CARGA DE NITROGENO 1.5 M3", tt: "212" },
    712: { producto: "CARGA DE NITROGENO 2.0 M3", tt: "212" },
    713: { producto: "CARGA DE NITROGENO INDUSTRIAL DE 3 M3", tt: "212" },
    740: { producto: "CARGA DE ARGON 1 M3", tt: "214" },
    741: { producto: "CARGA DE ARGON 2 M3", tt: "214" },
    742: { producto: "CARGA DE ARGON 3 M3", tt: "214" },
    750: { producto: "CARGA DE HIDROGENO 1 M3", tt: "216" },
    760: { producto: "CARGA DE CO2 1 KGS.", tt: "213" },
    761: { producto: "CARGA DE CO2 2 KGS.", tt: "213" },
    762: { producto: "CARGA DE CO2 4 KGS.", tt: "213" },
    766: { producto: "CILINDRO CO2 KOF 20 L.", tt: "213" },
    801: { producto: "RECARGA DE OXIGENO MEDICINAL DE 247 LTS.", tt: "211" },
    802: { producto: "RECARGA DE OXIGENO MEDICINAL DE 415 LTS.", tt: "211" },
    803: { producto: "RECARGA DE OXIGENO MEDICINAL DE 682 LTS.", tt: "211" },
    805: { producto: "RECARGA DE OXIGENO MEDICINAL DE 1725 LTS.", tt: "211" },
    809: { producto: "RECARGA DE OXIGENO MEDICINAL DE 3450 LTS.", tt: "211" },
    811: { producto: "CARGA DE RECARGA DE OXIGENO INFRALIFE .172 LTS", tt: "211" },
    917: { producto: "SULFURO DE HIDROGENO", tt: "0" },
    32005: { producto: "AIRE CERO/UAP", tt: "MZ" },
    32015: { producto: "AIRE EXTRA SECO", tt: "MZ" },
    32016: { producto: "CARGA DE AIRE EXTRASECO (C.MIN.)", tt: "MZ" },
    32020: { producto: "CARGA DE AIRE ULTRA CERO/UPC", tt: "0" },
    32024: { producto: "INFRA AR MIXX ( ARGON GRADO SOLDADURA 6 M3 )", tt: "214" },
    32025: { producto: "INFRA AR MIXX ( ARGON GRADO SOLDADURA )", tt: "214" },
    32026: { producto: "CARGA DE ARGON ULTRA ALTA PUREZA (CA.MIN.)", tt: "214" },
    32027: { producto: "ARGON GRADO BIP", tt: "0" },
    32029: { producto: "ARGON ALTA PUREZA", tt: "214" },
    32030: { producto: "ARGON 4.7 LIQ  DEWAR", tt: "214" },
    32031: { producto: "AR MIXX ARGON GRADO SOLDADURA", tt: "214" },
    32032: { producto: "ARGON 4.8 10 M3 A", tt: "214" },
    32033: { producto: "ARGON ULTRA ALTA PUREZA 10 M3", tt: "214" },
    32035: { producto: "ARGON 4.8 A", tt: "214" },
    32040: { producto: "ARGON ULTRA ALTA PUREZA", tt: "214" },
    32045: { producto: "ARGON ULTRA ALTA PUREZA LIQUIDO", tt: "214" },
    32046: { producto: "CARGA DE ARGON 4.7 (C.M.)", tt: "214" },
    32050: { producto: "CARGA DE BIOXIDO DE CARBONO COLEMAN", tt: "0" },
    32051: { producto: "BIOXIDO DE CARBONO COLEMAN (CA.MIN.)", tt: "0" },
    32055: { producto: "CARGA DE BIOXIDO DE CARBONO EXTRA SECO", tt: "0" },
    32063: { producto: "CARGA DE CARBOGENO 20%", tt: "MZ" },
    32065: { producto: "CARGA DE CARBOGENO 5%", tt: "MZ" },
    32069: { producto: "HELIO INDUSTRIAL 8.5 MTS", tt: "217" },
    32070: { producto: "CARGA DE INFRA FRESCO PACK", tt: "212" },
    32071: { producto: "HELIO INDUSTRIAL 3.5M3", tt: "217" },
    32072: { producto: "HELIO INDUSTRIAL 6M3", tt: "217" },
    32073: { producto: "HELIO INDUSTRIAL 8.5M3", tt: "217" },
    32074: { producto: "HELIO GRADO BIP", tt: "0" },
    32075: { producto: "HELIO GLOBERO 6M", tt: "217" },
    32076: { producto: "HELIO GLOBERO BT-80 2M", tt: "217" },
    32077: { producto: "HELIO GLOBERO DE 8.5M", tt: "217" },
    32079: { producto: "HELIO 4.7 6M3", tt: "217" },
    32080: { producto: "HELIO 4.7 A", tt: "217" },
    32081: { producto: "CARGA DE HELIO 4.7 (C.M.)", tt: "217" },
    32090: { producto: "HELIO 4.8 A", tt: "217" },
    32091: { producto: "CARGA DE HELIO 4.8 (C.M.)", tt: "217" },
    32093: { producto: "HELIO UAP 4.1M3", tt: "217" },
    32094: { producto: "HELIO UAP 6M3", tt: "217" },
    32095: { producto: "HELIO ULTRA ALTA PUREZA", tt: "217" },
    32096: { producto: "CARGA DE HELIO UAP (C.M.)", tt: "217" },
    32098: { producto: "HELIO 4.8 6.0 M3 B", tt: "217" },
    32099: { producto: "HIDROGENO ALTA PUREZA", tt: "216" },
    32100: { producto: "HIDROGENO 4.8 B", tt: "216" },
    32101: { producto: "CARGA DE HIDROGENO 4.8 (C.M.)", tt: "216" },
    32105: { producto: "HIDROGENO EXTRA SECO", tt: "216" },
    32110: { producto: "CARGA DE HIDROGENO CERO/ULTRA ALTA PUREZA", tt: "216" },
    32111: { producto: "CARGA DE HIDROGENO CERO UAP CARGA MINIMA", tt: "216" },
    32115: { producto: "CARGA DE MADUGAS", tt: "0" },
    32117: { producto: "CARGA DE MARADOL PLUS", tt: "0" },
    32120: { producto: "NITROGENO 4.7 A", tt: "212" },
    32121: { producto: "CARGA DE N2 AP CARGA MINIMA", tt: "212" },
    32122: { producto: "NITROGENO GRADO BIP", tt: "0" },
    32123: { producto: "NITROGENO AP 6.0 M3", tt: "212" },
    32125: { producto: "NITROGENO 4.7 LIQ  DEWAR", tt: "212" },
    32129: { producto: "CARGA DE NITROGENO 4.7 A", tt: "212" },
    32135: { producto: "NITROGENO 4.8  A", tt: "212" },
    32136: { producto: "CARGA DE N2 4.8 (C.M.)", tt: "212" },
    32140: { producto: "NITROGENO 4.8 LIQ DEWAR", tt: "212" },
    32145: { producto: "NITROGENO ULTRA ALTA PUREZA", tt: "212" },
    32146: { producto: "CARGA DE N2 UAP (CA.MIN.)", tt: "212" },
    32148: { producto: "NITROGENO UAP 6.0 M3", tt: "212" },
    32150: { producto: "NITROGENO ULTRA ALTA PUREZA LIQUIDO", tt: "212" },
    32151: { producto: "FRESCOPACK LIQUIDO", tt: "212" },
    32152: { producto: "CARGA DE NITROGENO LIQUIDO GRADO ALIMENTICIO", tt: "212" },
    32153: { producto: "FRESCOPACK LIQUIDO TANQUE THERMO", tt: "212" },
    32155: { producto: "OXIDO NITROSO ALTA PUREZA", tt: "0" },
    32156: { producto: "CARGA DE N2O A.P. (CA. MN.)", tt: "0" },
    32159: { producto: "OXIGENO CORTE LASER", tt: "211" },
    32160: { producto: "OXIGENO EXTRA SECO", tt: "211" },
    32162: { producto: "OXIGENO EXTRA SECO 10 M3", tt: "211" },
    32170: { producto: "OXIGENO RESPIRABLE P/AVIACION", tt: "211" },
    32171: { producto: "CARGA DE OXIGENO RESPIRABLE PARA AVIACION FAA", tt: "0" },
    32174: { producto: "HELIO ALTA PUREZA LIQ 250 LTS", tt: "0" },
    32175: { producto: "HELIO ALTA PUREZA LIQ 500 LTS", tt: "0" },
    33031: { producto: "CARGA DE MIX EPA CH4 9PPM / AIRE BAL.", tt: "0" },
    33033: { producto: "O2 15 PPM / AR BAL.", tt: "0" },
    33034: { producto: "CARGA DE O2 5 % / AR BAL.", tt: "0" },
    33040: { producto: "CARGA DE MEZCLA AR 25%/HE 75%", tt: "MZ" },
    33041: { producto: "CARGA DE MEZCLA AR 60% HE 40%", tt: "MZ" },
    33042: { producto: "CARGA DE MEZCLA AR 75%/HE 25%", tt: "MZ" },
    33043: { producto: "CARGA DE MEZCLA 70% AR/HE 30%", tt: "MZ" },
    33055: { producto: "CARGA DE MEZCLA AR 90%/CO2 10%", tt: "MZ" },
    33060: { producto: "CARGA DE MEZCLA AR 65%/H2 35%", tt: "216" },
    33061: { producto: "CARGA DE MEZCLA AR 90%/H2 10%", tt: "216" },
    33062: { producto: "CARGA DE MEZCLA AR 93%/H2 7%", tt: "216" },
    33063: { producto: "CARGA DE MEZCLA AR 96%/H2 4%", tt: "216" },
    33064: { producto: "CARGA DE MEZCLA AR 98%/H2 2%", tt: "216" },
    33065: { producto: "CARGA DE H2 1% / AR BAL.", tt: "216" },
    33070: { producto: "CARGA DE MEZCLA AR 7.5%/CO2 2.5%/HE 90%", tt: "MZ" },
    33072: { producto: "CARGA DE H2 5% / AR BAL.", tt: "216" },
    33090: { producto: "CARGA DE MEZCLA AR 90%/CH4 10%", tt: "0" },
    33091: { producto: "CARGA DE MEZCLA AR 95%/CH4 5%", tt: "0" },
    33093: { producto: "CARGA DE MEZCLA CO2 3.4%/N2 15.6%/HE BAL.", tt: "0" },
    33123: { producto: "CARGA DE C2H4 5PPM / N2 BAL", tt: "0" },
    33148: { producto: "CARGA DE COOKING PACK III (MEZCLA CO2 35%/N2 BAL.)", tt: "MZ" },
    33151: { producto: "CARGA DE CO 800 PPM/H2 800 PPM/O2 2%/N2 BAL.", tt: "0" },
    33167: { producto: "N2 20% / C3H8 BAL", tt: "0" },
    33194: { producto: "CARGA DE COOKING PACK II (MEZCLA CO2 20%/N2  BAL.)", tt: "MZ" },
    33195: { producto: "CARGA DE INFRA COOKING PACK", tt: "MZ" },
    33196: { producto: "CARGA DE COOKING PACK IV", tt: "MZ" },
    33197: { producto: "CARGA DE MEZCLA CO2 5%/N2 BAL", tt: "MZ" },
    33198: { producto: "CARGA DE INFRA PANI PACK", tt: "MZ" },
    33208: { producto: "CO2 40% / CO BAL", tt: "0" },
    33210: { producto: "CARGA DE MEZCLA CO2 10%/H2 5%/N2 BAL", tt: "0" },
    33220: { producto: "CARGA DE MEZCLA CO2 4.5%/HE 82%/N2 13.5%", tt: "0" },
    33221: { producto: "MEZCLA LASER ESP.(CO2 5%/HELIO 40%/N2 55%BAL.)", tt: "MZ" },
    33229: { producto: "CARGA DE CO 2%/CO2 8%/N2 8%/HE BAL.", tt: "0" },
    33249: { producto: "CARGA DE O2 8% / N2 BAL. (CA. MIN.)", tt: "MZ" },
    33261: { producto: "CARGA DE H2 1% / N2 BAL.", tt: "216" },
    33277: { producto: "CARGA DE H2 2% / N2 BAL.", tt: "216" },
    33278: { producto: "CARGA DE H2 10% / N2 BAL.", tt: "216" },
    33281: { producto: "CARGA DE MEZCLA H2 20%/N2 80%", tt: "216" },
    33284: { producto: "CARGA DE MEZCLA H2 4%/N2 96%", tt: "216" },
    33285: { producto: "CARGA DE MEZCLA H2 40%/N2 60%", tt: "216" },
    33286: { producto: "CARGA DE MEZCLA H2 5%/N2 95%", tt: "216" },
    33287: { producto: "CARGA DE MEZCLA H2 50%/N2 50%", tt: "216" },
    33290: { producto: "CARGA DE H2 1%/N2 99%", tt: "216" },
    33299: { producto: "CARGA DE N2 20% / CO2 BAL.", tt: "MZ" },
    33303: { producto: "CARGA DE O2 8%/N2 BAL. (CA.MIN)", tt: "0" },
    33310: { producto: "CARGA DE MEZCLA HE 10%/N2 90%", tt: "MZ" },
    33324: { producto: "CARGA DE O2 10% / N2 BAL.", tt: "0" },
    33331: { producto: "CARGA DE MEZCLA N2 79%/O2 21%", tt: "MZ" },
    33332: { producto: "CARGA DE MEZCLA N2 80%/02 20%", tt: "0" },
    33334: { producto: "CARGA DE MEZCLA N2 92%/O2 8%", tt: "0" },
    33337: { producto: "CARGA DE MEZCLA N2 99%/O2 1%", tt: "0" },
    33341: { producto: "CARGA DE O2 4% / N2 96%", tt: "0" },
    33355: { producto: "CARGA DE HEXAFLORURO DE AZUFRE COMERCIAL LB", tt: "0" },
    33356: { producto: "CARGA DE HEXAFLORURO DE AZUFRE 10KG", tt: "0" },
    33357: { producto: "CARGA DE HEXAFLUORURO DE AZUFRE 1 KG.", tt: "0" },
    33371: { producto: "CARGA DE MEZCLA LASER ROFIN-SINAR DCOXX", tt: "0" },
    33397: { producto: "CARGA DE COUGAR 77-TM", tt: "MZ" },
    33420: { producto: "CARGA DE MEZCLA PARA SOLDAR C-1", tt: "MZ" },
    33421: { producto: "CARGA DE WELDER C-1 (CA.MIN.)", tt: "MZ" },
    33425: { producto: "CARGA DE MEZCLA PARA SOLDAR C-2", tt: "MZ" },
    33426: { producto: "CARGA DE WELDER C-3", tt: "MZ" },
    33435: { producto: "CARGA DE WELDER C-5", tt: "MZ" },
    33445: { producto: "CARGA DE MEZCLA PARA SOLDAR C-7", tt: "MZ" },
    33455: { producto: "CARGA DE WELDER X-1", tt: "MZ" },
    33460: { producto: "CARGA DE DIVERTIGLOBO", tt: "217" },
    33461: { producto: "NO 800 PPM / N2 BAL", tt: "0" },
    33500: { producto: "CARGA DE MEZCLAS VARIAS PARA PRUEBAS", tt: "MZ" },
    33505: { producto: "CARGA DE O2 2% / N2 BAL.", tt: "0" },
    33506: { producto: "CARGA DE O2 10% / N2 BAL.", tt: "0" },
    33604: { producto: "CARGA DE CO 1%/N2 BAL.", tt: "0" },
    34005: { producto: "CARGA DE ARGON 5.5 A", tt: "0" },
    34016: { producto: "CARGA DE BIOXIDO DE CARBONO SUPERCRITICO S/HE", tt: "0" },
    34017: { producto: "CARGA DE BIOXIDO DE CARBONO INVESTIGACION", tt: "0" },
    34045: { producto: "CARGA DE HELIO CROMATOGRAFICO APCI", tt: "217" },
    34055: { producto: "CARGA DE HEXAFLORURO DE AZUFRE COMER. 52 KG.", tt: "0" },
    34060: { producto: "CARGA DE HIDROGENO INVESTIGACION", tt: "0" },
    34087: { producto: "CARGA DE GAS MAPP", tt: "0" },
    34090: { producto: "CARGA DE METANO C.P.", tt: "0" },
    34091: { producto: "CARGA DE METANO ULTRA ALTA PUREZA", tt: "0" },
    34135: { producto: "CARGA DE MONOXIDO DE CARBONO C.P.", tt: "0" },
    34150: { producto: "CARGA DE NITROGENO 5.5 A", tt: "0" },
    34160: { producto: "CARGA DE OXIGENO CERO/ULTRA ALTA PUREZA", tt: "0" },
    34161: { producto: "CARGA DE OXIGENO INVESTIGACION", tt: "0" },
    34162: { producto: "CARGA DE OXIGENO ULTRA PURO DE ACARREO", tt: "0" },
    34170: { producto: "CARGA DE PERFLUOROPROPANO", tt: "0" },
    34175: { producto: "ESTE C?DIGO CAMBIA AL 3000036", tt: "0" },
    34190: { producto: "CARGA DE XENON INVESTIGACION", tt: "0" },
    35000: { producto: "CARGA DE MEZCLA ETO II", tt: "0" },
    35001: { producto: "ACETILENO ABSORCION ATOMICA", tt: "0" },
    35003: { producto: "CARGA DE MEZCLA ETOXI SIGLO XXI", tt: "0" },
    35005: { producto: "CLORO C.P.", tt: "0" },
    35008: { producto: "CARGA DE BIOXIDO DE AZUFRE ANHIDRO", tt: "0" },
    35009: { producto: "CARGA DE MEZCLA ETOXI 10", tt: "0" },
    35050: { producto: "ACETILENO ABSORCION ATOMICA 3 KG", tt: "0" },
    35051: { producto: "ACETILENO ABSORCION ATOMICA 3.5 KG", tt: "0" },
    35052: { producto: "ACETILENO ABSORCION ATOMICA 4 KG", tt: "0" },
    35053: { producto: "ACETILENO ABSORCION ATOMICA 4.5 KG", tt: "0" },
    35054: { producto: "ACETILENO ABSORCION ATOMICA 5 KG", tt: "0" },
    35055: { producto: "ACETILENO ABSORCION ATOMICA 5.5 KG", tt: "0" },
    35056: { producto: "ACETILENO ABSORCION ATOMICA 6 KG", tt: "0" },
    35057: { producto: "ACETILENO ABSORCION ATOMICA 6.5 KG", tt: "0" },
    35058: { producto: "ACETILENO ABSORCION ATOMICA 7 KG", tt: "0" },
    35059: { producto: "ACETILENO ABSORCION ATOMICA 7.5 KG", tt: "0" },
    35060: { producto: "ACETILENO ABSORCION ATOMICA 8 KG", tt: "0" },
    35061: { producto: "ACETILENO ABSORCION ATOMICA 8.5 KG", tt: "0" },
    35062: { producto: "ACETILENO ABSORCION ATOMICA 9 KG", tt: "0" },
    35063: { producto: "ACETILENO ABSORCION ATOMICA 9.5 KG", tt: "0" },
    35064: { producto: "ACETILENO ABSORCION ATOMICA 10 KG", tt: "0" },
    35065: { producto: "ACETILENO ABSORCION ATOMICA 10.5 KG", tt: "0" },
    35066: { producto: "ACETILENO ABSORCION ATOMICA 11 KG", tt: "0" },
    35067: { producto: "ACETILENO ABSORCION ATOMICA 11.5 KG", tt: "0" },
    35068: { producto: "ACETILENO ABSORCION ATOMICA 12 KG", tt: "0" },
    35069: { producto: "ACETILENO ABSORCION ATOMICA 12.5 KG", tt: "0" },
    35102: { producto: "ACETILENO EN RACK DE 16 CIL TIP DMF", tt: "102" },
    36025: { producto: "CARGA DE CO 1000 PPM/N2 BAL.", tt: "0" },
    41008: { producto: "CARGA DE N2 30%/HE BAL.", tt: "MZ" },
    41017: { producto: "CARGA DE CO2 COLEMAN (CA.MIN.)", tt: "0" },
    41034: { producto: "CARGA DE O2 5%/HE BAL.", tt: "0" },
    41067: { producto: "CARGA DE ETHYLENE C.P.", tt: "0" },
    41093: { producto: "NO 800 PPM / N2 BAL", tt: "0" },
    41095: { producto: "CARGA DE NO 45 PPM/N2 BAL.", tt: "0" },
    41155: { producto: "CARGA DE H2 10%/N2 BAL.", tt: "216" },
    41159: { producto: "H2 200 PPM/AIRE BAL.", tt: "0" },
    41166: { producto: "CARGA DE AR 50%/HE 50%", tt: "MZ" },
    41212: { producto: "CARGA DE CO2 3%/N2 BAL.", tt: "0" },
    41231: { producto: "CARGA DE N2 ULTRA ALTA PUREZA (CA.MIN.)", tt: "212" },
    41249: { producto: "CARGA DE PROPANO INSTRUMENTAL 99.5%(CA.MIN.)", tt: "0" },
    41252: { producto: "O2 5 PPM / N2 BAL", tt: "0" },
    41257: { producto: "CARGA DE CH4 100PPM/AIRE ULTRA CERO BAL.", tt: "0" },
    41276: { producto: "NITROGENO LIQ. DEWAR ALTA PRESION", tt: "212" },
    41277: { producto: "CARGA DE HE 30%/N2 BAL.", tt: "MZ" },
    41286: { producto: "CARGA DE CH4 50 PPM/N2 BAL.", tt: "0" },
    41288: { producto: "CARGA DE SO2 50 PPM/N2 BAL.", tt: "0" },
    41316: { producto: "CARGA DE INFRA -FERRO G (10 M3)", tt: "MZ" },
    41317: { producto: "CARGA DE INFRA - FERRO D (9.5 M3)", tt: "MZ" },
    41318: { producto: "CARGA DE INFRA - INOXX MAG (9.5 M3)", tt: "0" },
    41319: { producto: "CARGA DE INFRA -INOXX TAG (9.5 M3)", tt: "216" },
    41320: { producto: "CARGA DE INFRA MIXX 200/25 (10.5 M3)", tt: "MZ" },
    41321: { producto: "CARGA DE INFRA MIXX 200/20 (10 M3)", tt: "MZ" },
    41322: { producto: "CARGA DE INFRA MIXX 200/O5 (9.5 M3)", tt: "MZ" },
    41323: { producto: "CARGA DE INFRA MIXX 200/2 (9.5 M3)", tt: "MZ" },
    41324: { producto: "CARGA DE INFRA MIXX 200/O2 (9.5 M3)", tt: "MZ" },
    41325: { producto: "CARGA DE INFRA MIXX 200/15 (10 M3)", tt: "MZ" },
    41326: { producto: "CARGA DE INFRA MIXX 200/8 (9.5 M3)", tt: "MZ" },
    41327: { producto: "CARGA DE INFRA MIXX 200/10 (10 M3)", tt: "MZ" },
    41328: { producto: "CARGA DE INFRA ALUMIXX 8.5 M3", tt: "MZ" },
    41329: { producto: "CARGA DE INFRA MIXX 200/5 (9.5 M3)", tt: "MZ" },
    41330: { producto: "CARGA DE INFRA MIXX 72 C (9.5 M3)", tt: "MZ" },
    41335: { producto: "CARGA DE INFRA INNOX TAG X-1 (9.0 M3)", tt: "216" },
    41336: { producto: "CARGA DE INFRA MIXX 200/18 (10 M3)", tt: "MZ" },
    41341: { producto: "CARGA DE O2 7%/N2 BAL.", tt: "0" },
    41343: { producto: "CARGA DE N2 7.5%/HE BAL.", tt: "0" },
    41354: { producto: "CARGA DE O2 20% / AR BAL.", tt: "0" },
    41364: { producto: "INFRA EXCIMER LASER MIX EXVTECH-20", tt: "0" },
    41381: { producto: "CARGA DE NO 50 PPM/N2 BAL.", tt: "0" },
    41393: { producto: "INFRA NIDEK PREMIX ES-5000 NDK 1-ARF-1800", tt: "0" },
    41394: { producto: "INFRA NIDEK HELIUM", tt: "0" },
    41424: { producto: "INFRA EXCIMER LASER MIX EXVVISX-A", tt: "0" },
    41425: { producto: "INFRA EXCIMER LASER EXVVISX-HE HELIUM", tt: "0" },
    41436: { producto: "CARGA DE NO 175 PPM/N2 BAL.", tt: "0" },
    41494: { producto: "INFRA EXCIMER LASER MIX EXVTECH2-20", tt: "0" },
    41531: { producto: "CARGA DE CO2 EXTRA SECO (CA.MIN.)", tt: "0" },
    41566: { producto: "CARGA DE NO 300 PPM/CO 300 PPM/N2 BAL.", tt: "0" },
    41616: { producto: "CARGA DE CO2 10%/N2 BAL.", tt: "0" },
    41653: { producto: "CARGA DE CH4 2.5%/N2 BAL.", tt: "0" },
    41662: { producto: "CARGA DE AR 0.2%/O2 BAL.", tt: "0" },
    41674: { producto: "CARGA DE OXIGENO EXTRA SECO (CA.MIN.)", tt: "211" },
    41681: { producto: "HE 20% / AR. BAL.", tt: "MZ" },
    41726: { producto: "CARGA DE O2 5%/N2 BAL.(PRIM)", tt: "0" },
    41755: { producto: "CARGA DE LADAR LASER PREMIX", tt: "0" },
    41784: { producto: "CARGA DE HE 40%/N2 BAL.", tt: "MZ" },
    41814: { producto: "CARGA DE H2 100 PPM/AIRE BAL.", tt: "0" },
    41828: { producto: "CARGA DE CO2 20%/N2 BAL.", tt: "0" },
    41855: { producto: "CARGA DE H2 15%/N2 BAL.", tt: "216" },
    41905: { producto: "CARGA DE H2S 20 PPM/N2 BAL.", tt: "0" },
    41945: { producto: "CARGA DE CO 150 PPM/N2 BAL.", tt: "0" },
    41975: { producto: "CARGA DE N2 40%/HE BAL.", tt: "MZ" },
    41981: { producto: "CARGA DE HE 25%/N2 BAL.", tt: "MZ" },
    42073: { producto: "RED MEAT PACK II", tt: "0" },
    42096: { producto: "CARGA DE CH4 50%/CO2 50%", tt: "0" },
    47007: { producto: "VEGEPACK GRADO ALIMENTICIO (CO2 5% 02 5%/N2 BAL)", tt: "0" },
    50017: { producto: "CO 500 PPM / N2 BAL", tt: "0" },
    50032: { producto: "CARGA DE MP H2 40%/N2 BAL.", tt: "216" },
    50088: { producto: "CARGA DE MP 33.33% CO 33.33% CO2/BAL.", tt: "0" },
    50130: { producto: "HE 50% / N2 BAL", tt: "MZ" },
    50246: { producto: "CARGA DE CH4 20%/N2 BAL.", tt: "0" },
    50300: { producto: "CARGA DE VEGEPACK", tt: "0" },
    50306: { producto: "CARGA DE CH4 50%/CO2 35%/N2 15%", tt: "0" },
    50307: { producto: "CARGA DE CH4 400PPM/O2 15%/N2 BAL.", tt: "0" },
    50319: { producto: "CARGA DE NO 500 PPM/N2 BAL.", tt: "0" },
    50334: { producto: "O2 5.5 % / N2 BAL.", tt: "0" },
    50358: { producto: "CARGA DE NITROWINE (CARGA MINIMA)", tt: "0" },
    50403: { producto: "CARGA DE MP CH4 150 PPM/N2 BAL", tt: "0" },
    50406: { producto: "CARGA DE MP H2 40%/HELIO BAL.", tt: "0" },
    50469: { producto: "CARGA DE H2 5%/N2 BAL. (CARGA MINIMA)", tt: "216" },
    50493: { producto: "CARGA DE CO2 25%/AR BAL", tt: "MZ" },
    50548: { producto: "CARGA DE COOKING PACK (CARG MINIMA)", tt: "MZ" },
    50550: { producto: "CARGA DE PANIPACK (CARGA MINIMA)", tt: "MZ" },
    50568: { producto: "CARGA DE CO2 EXTRASECO DEWAR", tt: "213" },
    50578: { producto: "CARGA DE FRESCOPACK ( CARGA MINIMA)", tt: "212" },
    50584: { producto: "CARGA DE MP LP9 COMP/C3H8 BAL.", tt: "0" },
    50656: { producto: "CARGA DE BIOXIDO DE CARBONO FG 25 KG", tt: "213" },
    50685: { producto: "CARGA DE CO2 25%/AR BAL.(C.M.)", tt: "MZ" },
    50709: { producto: "CARGA DE MEZCLA ESPECIAL 20%/HE 80%/N2", tt: "MZ" },
    50716: { producto: "BIOXIDO DE CARBONO FG 169 KG", tt: "213" },
    50768: { producto: "O2 10% / N2 BAL", tt: "0" },
    50792: { producto: "CARGA DE H2 40% NITROGENO BAL 6.5 M3", tt: "216" },
    50826: { producto: "CO2 5000 PPM / N2 BAL", tt: "0" },
    50832: { producto: "CARGA DE OXIGENO CERO UAP C.M.", tt: "0" },
    50840: { producto: "CARGA DE SO2 2%/O2 BAL.", tt: "0" },
    50865: { producto: "CARGA DE C3H8 300 PPM/AIRE BAL.", tt: "0" },
    50872: { producto: "CARGA DE CO 400 PPM/N2 BAL.", tt: "0" },
    50873: { producto: "CARGA DE CO 70 PPM/N2  BAL.", tt: "0" },
    50874: { producto: "CARGA DE CO 30 PPM/N2 BAL.", tt: "0" },
    50880: { producto: "CARGA DE MIX 59.5 PPM HCL/NE BAL.", tt: "0" },
    50952: { producto: "CARGA DE C3H8 1.5%/H2 BAL", tt: "0" },
    50967: { producto: "CARGA DE CO2 FG  9KG", tt: "213" },
    50983: { producto: "NO 500 PPM / CO2 16% / CO 800 PPM / N2 BAL", tt: "0" },
    50984: { producto: "CARGA DE NO 100 PPM/CO 100 PPM/CO2 2.5%/N2 BAL.", tt: "0" },
    50985: { producto: "CARGA DE MP 02 14%/N2 BAL.", tt: "0" },
    50986: { producto: "CARGA DE C2H6 2.9%/CO 17.8%/CH4 24.3/H2 BAL.", tt: "0" },
    51020: { producto: "C3H8 150 MG / M3 / AIRE BAL", tt: "0" },
    51029: { producto: "CARGA DE CH4 0.8%/H2 BAL.", tt: "0" },
    51052: { producto: "CARGA DE INFRA MIXX 200/25 6M3", tt: "MZ" },
    51062: { producto: "CARGA DE CO 100 PPM/N2 BAL.", tt: "0" },
    51067: { producto: "CARGA DE CO 1.5%/O2 0.25%/H2 0.5%/N2 BAL.", tt: "0" },
    51068: { producto: "CARGA DE CO 1.5%/O2 0.25%/H2 0.5%/N2 BAL. (IMP)", tt: "0" },
    51069: { producto: "CARGA DE CO 0.25%/O1 1%/H2 0.1%/N2 BAL.", tt: "0" },
    51070: { producto: "CARGA DE CO 0.25%/O1 1%/H2 0.1%/N2 BAL. (IMP)", tt: "0" },
    51072: { producto: "CARGA DE SO2 20 PPM/N2 BAL.", tt: "0" },
    51074: { producto: "CO 330 / N2 BAL.", tt: "0" },
    51079: { producto: "CARGA DE SO2 10 PPM/N2 BAL.", tt: "0" },
    51083: { producto: "CARGA DE H2S 50 PPM/N2 BAL.", tt: "0" },
    51085: { producto: "CARGA DE O2 16.5%/N2 BAL.", tt: "0" },
    51087: { producto: "CARGA DE CO2 10.82%/CO 3.9%/H2 1.27%/N2 BAL.", tt: "0" },
    51089: { producto: "CARGA DE MP 5 COMP HES/CO/O2/CH4/N2 79.49 BAL.", tt: "0" },
    51091: { producto: "CARGA DE MP 5 COMP HES/CO/O2/CH4/N2 79.79 BAL.", tt: "0" },
    51097: { producto: "CARGA DE CO 20%/N2 BAL.", tt: "0" },
    51100: { producto: "CARGA DE METANO 12%/N2 BAL.", tt: "0" },
    51125: { producto: "CARGA DE MP 11 COMP/H2S N2 BAL.", tt: "0" },
    51129: { producto: "CARGA DE SPARK LASER HE RESONADOR BIP", tt: "0" },
    51131: { producto: "CARGA DE SPARK LASER N2 RESONANDOR BIP", tt: "0" },
    51132: { producto: "CARGA DE SPARK LASER O2 ASISTENCIA CL", tt: "211" },
    51136: { producto: "CARGA DE SPARK LASER PREMIX III", tt: "0" },
    51141: { producto: "CARGA DE SPARK LASER PREMIX VIII", tt: "0" },
    51157: { producto: "CARGA DE HE 50%/N2 BAL. (A)", tt: "MZ" },
    51170: { producto: "CARGA DE R290 CYL 20 LB", tt: "0" },
    51178: { producto: "CARGA DE SPARK LASER PREMIX I", tt: "0" },
    51179: { producto: "CARGA DE SPARK LASER PREMIX II", tt: "0" },
    51180: { producto: "CARGA DE SPARK LASER PREMIX III", tt: "0" },
    51181: { producto: "CARGA DE SPARK LASER PREMIX IV", tt: "0" },
    51182: { producto: "CARGA DE SPARK LASER PREMIX IX", tt: "0" },
    51183: { producto: "CARGA DE SPARK LASER PREMIX X", tt: "0" },
    51184: { producto: "CARGA DE SPARK LASER PREMIX XI", tt: "0" },
    51185: { producto: "CARGA DE SPARK LASER PREMIX XII", tt: "0" },
    51209: { producto: "GAS PROPANO AP", tt: "0" },
    51245: { producto: "CARGA DE O2 1% AR BALANCE", tt: "0" },
    51248: { producto: "CARGA DE MP 7 COMP H2 (62.5%) BALANCE", tt: "0" },
    51252: { producto: "CARGA DE ETILENO 1.15%/AIRE BAL.", tt: "0" },
    51280: { producto: "CARGA DE CO2 20%/O2 2%/N2 BAL.", tt: "0" },
    51282: { producto: "CARGA DE PROPYLENE 47.72 KG", tt: "0" },
    51294: { producto: "CARGA DE CO2 5%/N2 35%/HE BAL.", tt: "0" },
    51299: { producto: "CARGA DE H2 5%/N2 BAL. (A)", tt: "0" },
    51300: { producto: "CARGA DE MP 8 COMP/CH4(83.33) BAL.", tt: "0" },
    51304: { producto: "SPARK LASER N2 ASISTENCIA DW", tt: "212" },
    51306: { producto: "SPARK LASER O2 ASISTENCIA DW", tt: "211" },
    51321: { producto: "SPARK LASER N2 ASISTENCIA CL", tt: "212" },
    51326: { producto: "CARGA DE O2 25% N2 BALANCE", tt: "0" },
    51332: { producto: "CARGA DE NO 80 PPM/N2 BAL.", tt: "0" },
    51339: { producto: "CARGA DE SPARK LASER HE PROTEC", tt: "217" },
    51340: { producto: "CARGA DE SPARK LASER AR PROTEC", tt: "214" },
    51355: { producto: "CARGA DE CO2 6.5%/O2 5%/N2 BAL.", tt: "0" },
    51376: { producto: "SPARK LASER HE RESONADOR VPR", tt: "217" },
    51377: { producto: "SPARK LASER N2 RESONADOR VPR", tt: "212" },
    51378: { producto: "SPARK LASER CO2 RESONADOR", tt: "0" },
    51380: { producto: "SPARK LASER O2 ASISTENCIA PACK", tt: "0" },
    51381: { producto: "CARGA DE HE 44.5/N2 BAL.", tt: "0" },
    51384: { producto: "CARGA DE CO2 FG C.M.", tt: "213" },
    51399: { producto: "SPARK LASER CO2 RESONADOR-M", tt: "0" },
    51400: { producto: "SPARK LASER O2 ASISTENCIA CL-M", tt: "211" },
    51409: { producto: "SPARK LASER HE PROTECT-M", tt: "217" },
    51410: { producto: "SPARK LASER AR PRTOTECT-M", tt: "214" },
    51413: { producto: "CARGA DE CO 500 PPM/N2 BAL. (C.M.)", tt: "0" },
    51426: { producto: "ARGON 4.8 VPR A", tt: "214" },
    51438: { producto: "CARGA DE O2 0.2%/N2 BAL", tt: "0" },
    51464: { producto: "CARGA DE N2 9%/CO2 25%/O2 BAL.", tt: "0" },
    51473: { producto: "CARGA DE CO50 PPM/H2S 25 PPM/N2 BAL.", tt: "0" },
    51484: { producto: "CARGA DE HYDROGEN SULFIDE 20 LB", tt: "0" },
    51494: { producto: "NITROGENO AP 6000 PSIG CL 44HH", tt: "0" },
    51503: { producto: "CARGA DE CO 33.33%/H2 BAL.", tt: "0" },
    51505: { producto: "CARGA DE CO 800 PPM/N2 BAL.", tt: "0" },
    51506: { producto: "CARGA DE CO 2000 PPM/N2 BAL.", tt: "0" },
    51507: { producto: "CARGA DE O2 3%/CO2 16%/N2 BAL.", tt: "0" },
    51515: { producto: "CARGA DE KRYPTON RESEARCH 99.995 50 LITERS", tt: "0" },
    51516: { producto: "CARGA DE MP 13 COMP METHANE 95.03 BAL.", tt: "0" },
    51526: { producto: "CARGA DE CO 1%/CO2 30%/N2 BAL.", tt: "0" },
    51527: { producto: "C2H4 20 % / AR BAL", tt: "0" },
    51535: { producto: "CARGA DE BIOXIDO DE CARBONO COLEMAN CON SIFON", tt: "213" },
    51552: { producto: "HELIO UAP HELIX BROOKS", tt: "217" },
    51580: { producto: "CARGA DE CO2 3%/AR 97% BAL.", tt: "MZ" },
    51581: { producto: "CARGA DE CO2 BEBIDAS", tt: "213" },
    51624: { producto: "CARGA DE ARGON (AR)ICP 99.999%* A", tt: "214" },
    51628: { producto: "HELIO UAP PARA ARRASTRE", tt: "217" },
    51634: { producto: "CARGA DE INFRA MEET", tt: "0" },
    51662: { producto: "CARGA DE CO2 ICEE", tt: "213" },
    51687: { producto: "CARGA DE N2 10%/O2 BAL.", tt: "0" },
    51688: { producto: "CARGA DE N2 6%/O2 BAL.", tt: "0" },
    51726: { producto: "NO 500 PPM/CO 500 PPM/CO2 5%NITROGENO BAL.", tt: "0" },
    51737: { producto: "SPARKLASER PREMIX XIV", tt: "0" },
    51759: { producto: "CO2 GRADO ALIMENTICIO CON SIFON 9 KG", tt: "213" },
    51770: { producto: "CO4%/CO2 8%/N2 16%/H2 0.4%/HE BAL", tt: "0" },
    51797: { producto: "BIOXIDO DE CARBONO 45.36KG C/PH", tt: "213" },
    51802: { producto: "CO2 FG 20 KGS", tt: "213" },
    51807: { producto: "CO2 EXTRA SECO C/SIFON 25 KG", tt: "213" },
    51812: { producto: "3.5 MICROMOL/MOL O2 BAL. N2", tt: "0" },
    51813: { producto: "5.0 MICROMOL/MOL O2 BAL N2", tt: "0" },
    51814: { producto: "15.0 MICROMOL/MOL O2 BAL N2", tt: "0" },
    51815: { producto: "30.0 MICROMOL/MOL O2 BAL N2", tt: "0" },
    51816: { producto: "60.0 MICROMOL/MOL O2 BAL. N2", tt: "0" },
    51817: { producto: "98.0 MICROMOL/MOL O2 BAL N2", tt: "0" },
    51818: { producto: "0.5 MICROMOL/MOL THC BAL N2", tt: "0" },
    51819: { producto: "3.0 MICROMOL/MOL THC BAL N2", tt: "0" },
    51826: { producto: "20.0 CMOL/MOL CO2 BAL N2", tt: "0" },
    51829: { producto: "99.9 CMOL/MOL CO2 BAL N2", tt: "0" },
    51830: { producto: "2.0 MMOL/MOL H2O BAL N2", tt: "0" },
    51831: { producto: "5.0 MMOL /MOL H2O BAL N2", tt: "0" },
    51833: { producto: "20.0 MMOL/MOL H2O BAL N2", tt: "0" },
    51842: { producto: "2.0 MMOL/MOL CO2 BAL. O2", tt: "0" },
    51843: { producto: "5.0 MMOL/MOL CO BAL O2", tt: "0" },
    51844: { producto: "10.0 MMOL/MOL CO BAL. O2", tt: "0" },
    51845: { producto: "15.0 MMOL/MOL CO BAL. O2", tt: "0" },
    51847: { producto: "20.0 MMOL/MOL  CO2 BAL. O2", tt: "0" },
    51852: { producto: "25 CMOL/MOL CO2 BAL. AR", tt: "0" },
    51861: { producto: "COOKING PACK 10", tt: "MZ" },
    51864: { producto: "SO2 900 KG TON CONTAINER", tt: "0" },
    51872: { producto: "MESP H2 5%/N2 BAL.", tt: "216" },
    51873: { producto: "CO 410 PPM/CO2 4.09%/O2 24.1%/N2 BAL.", tt: "0" },
    51887: { producto: "CO 450 MICROMOL/MOL O2 BAL.", tt: "0" },
    51889: { producto: "H2 30%/N2 BAL. CM", tt: "216" },
    51895: { producto: "H2 35%/AR BAL. (A)", tt: "0" },
    51896: { producto: "H2  5% / N2 BAL", tt: "216" },
    51924: { producto: "CH4 60%/H2S 500 PPM/CO2 BAL.", tt: "0" },
    51927: { producto: "CO2 FG 25 KG C/TUBO SIFON", tt: "0" },
    51928: { producto: "MEZCLA 98% ARGON/2% NITROGENO", tt: "MZ" },
    51954: { producto: "30% HELIO / N2 BAL.", tt: "MZ" },
    51967: { producto: "CH4 200 PPM, N2 BAL CM", tt: "0" },
    51973: { producto: "HE 10%, N2 BAL. (CYL  A)", tt: "MZ" },
    51976: { producto: "H2 40%, ETANO BAL.", tt: "0" },
    52014: { producto: "OXIGENO EXTRA SECO CILINDRO A", tt: "211" },
    52019: { producto: "OXIGENO CERO /  ULTRA ALTA PUREZA", tt: "0" },
    52023: { producto: "CO2 30%, N2 BAL.", tt: "MZ" },
    52024: { producto: "CO 1500 PPM / N2 BAL", tt: "0" },
    52032: { producto: "CO2 4.9 PPM / O2 BAL", tt: "0" },
    52100: { producto: "INFRA AEI ARGON FL", tt: "214" },
    52128: { producto: "INFRA GALVAMIXX", tt: "MZ" },
    52129: { producto: "INFRA GALVAMIXX HS", tt: "0" },
    52146: { producto: "HE ULTRA ALTA PUREZA PLUS", tt: "217" },
    52154: { producto: "HE ULTRA ALTA PUREZA PLUS", tt: "217" },
    52156: { producto: "N2 5 PPM / HE BAL", tt: "0" },
    52158: { producto: "N2 1 PPM / AR BAL", tt: "0" },
    52160: { producto: "N2 16 PPM / AR BAL", tt: "0" },
    52176: { producto: "CO2 50% / AR BAL", tt: "MZ" },
    52182: { producto: "SO2 300 PPM / N2 BAL", tt: "0" },
    52190: { producto: "ETO 40%", tt: "0" },
    52236: { producto: "NO2 150 MG/M3/CO2 30%/O2 2.1%/ N2 BAL", tt: "0" },
    52286: { producto: "CO2 0.6 %/CH4 8 %/CO 24 %/N2 BAL (IMPORTACION)", tt: "0" },
    52291: { producto: "CO2 15% / N2 BAL", tt: "MZ" },
    52293: { producto: "OXIGENO ULTRA PURO DE ACARREO", tt: "0" },
    52313: { producto: "H2S 20 PPM/CO 60  PPM/CH4 1.45 %/O2 15 %/N2 BAL(IM", tt: "0" },
    52327: { producto: "O2 1% / N2 BAL", tt: "0" },
    52346: { producto: "CO2 1600 PPM / CH4 BAL", tt: "0" },
    52423: { producto: "NITROGENO 4.7 30AL", tt: "212" },
    52445: { producto: "N2 1% / O2 BAL.", tt: "0" },
    52471: { producto: "O2 1 PPM / N2 BAL", tt: "0" },
    52479: { producto: "H2S 25 PPM/CO 100 PPM / CH4 2.5%/ O2 18% / N2 BAL", tt: "0" },
    52483: { producto: "H2S 25 PPM / CO 100 PPM / CH4 2.5%/ O2 17%/ N2 BAL", tt: "0" },
    52494: { producto: "R290 100 LB", tt: "0" },
    52516: { producto: "INFRA CAM 2014 ALTA CR", tt: "0" },
    52584: { producto: "HE 20% / N2 BAL", tt: "MZ" },
    52593: { producto: "NO 50 PPM / N2 BAL", tt: "0" },
    52652: { producto: "INFRA ALUMIXX D", tt: "MZ" },
    52680: { producto: "AR MIXX PORTATIL", tt: "214" },
    52708: { producto: "ARGON 4.7 A", tt: "214" },
    52709: { producto: "ARGON 4.7 A", tt: "214" },
    52723: { producto: "O2 2 PPM / HE BAL.", tt: "0" },
    52729: { producto: "INFRA AR MIXX DEWAR", tt: "214" },
    52764: { producto: "INFRA MIXX 200/25 PORTATIL", tt: "MZ" },
    52767: { producto: "SPARK LASER ARGON PROTECT-M 10 M3", tt: "214" },
    52787: { producto: "CARBO MIXX ( CO2 GRADO SOLDADURA )", tt: "213" },
    52823: { producto: "INFRA CARBO MIXX DW ( CO2 LIQUIDO GRADO SOLDADURA)", tt: "213" },
    52834: { producto: "R-410A  1 BOYA / 11.3 KG C/U GS (Kg)", tt: "0" },
    52854: { producto: "CARGA DE SPARK LASER AR PROTEC (10M3)", tt: "214" },
    52855: { producto: "CARGA DE ARGON (AR)ICP 99.999%* A (10M3)", tt: "214" },
    52859: { producto: "H2 10% / AR BAL", tt: "0" },
    52891: { producto: "NO2 10 PPM / AIRE BAL", tt: "0" },
    52958: { producto: "HELIO 4.7 9M3", tt: "217" },
    52959: { producto: "HELIO 4.8 9M3", tt: "217" },
    52960: { producto: "HELIO ULTRA ALTA PUREZA 9M3", tt: "217" },
    52961: { producto: "SPARK LASER HE RESONADOR VPR 9M3", tt: "217" },
    52962: { producto: "SPARK LASER HE PROTECT-M 9M3", tt: "217" },
    52963: { producto: "HELIO UAP HELIX BROOKS 9M3", tt: "217" },
    52964: { producto: "HELIO UAP PARA ARRASTRE 9M3", tt: "217" },
    52965: { producto: "HE ULTRA ALTA PUREZA PLUS 9M3", tt: "217" },
    52981: { producto: "R744 CIL 25 KG C/SIFON", tt: "213" },
    53004: { producto: "CH4 1 % / AIRE BAL EPA", tt: "0" },
    53012: { producto: "H2 3% / HE BAL", tt: "216" },
    53018: { producto: "HEXAFLUORURO DE AZUFRE GRADO DELTA", tt: "0" },
    53021: { producto: "ARGON INDUSTRIAL EN RACK DE 12 CILINDROS DE 9.5 MT", tt: "214" },
    53022: { producto: "ARGON ARMIXX EN RACK DE 12 CILINDROS DE 10 MTS", tt: "214" },
    53023: { producto: "CO2 50% / AR BAL EN RACK DE 12 CILINDROS DE 5.5 MT", tt: "MZ" },
    53024: { producto: "HELIO 4.7 RACK 12 CILINDROS DE 9 M3", tt: "217" },
    53025: { producto: "HIDROGENO EXTRASECO EN RACK DE 12 CILINDROS DE 6 M", tt: "216" },
    53026: { producto: "HIDROGENO INDUSTRIAL EN RACK DE 12 CILINDROS DE 7.", tt: "216" },
    53027: { producto: "INFRA MIXX 200/25 EN RACK DE 12 CILINDROS DE 10.5", tt: "MZ" },
    53028: { producto: "NITROGENO 4.7 RACK 12 CILINDROS DE 9", tt: "212" },
    53029: { producto: "NITROGENO INDUSTRIAL EN RACK DE 12 CILINDROS DE 9", tt: "212" },
    53030: { producto: "SPARK LASER ARGON PROTECT-M EN RACK DE 12 CILINDRO", tt: "214" },
    53031: { producto: "SPARK LASER HE PROTECT-M EN RACK DE 12 CILINDROS D", tt: "217" },
    53032: { producto: "SPARK LASER N2 ASISTENCIA CL EN RACK DE 12 CILINDR", tt: "212" },
    53033: { producto: "SPARK LASER O2 ASISTENCIA PACK EN RACK DE 12 CILIN", tt: "211" },
    53048: { producto: "INOXX MAG X2", tt: "0" },
    53049: { producto: "AIRE CERO VERIFICENTROS", tt: "0" },
    53062: { producto: "C3H8 50 % / N2 BAL", tt: "0" },
    53071: { producto: "1 MMOL/MOL CO BAL O2", tt: "0" },
    53072: { producto: "2.79 MMOL/MOL O2 BAL N2", tt: "0" },
    53078: { producto: "INFRA INOXX TAG X-1 EN RACK DE 12 CIL DE 9.0 M3", tt: "216" },
    53085: { producto: "HELIO INDUSTRIAL RACK DE 12 CIL 8.5M3", tt: "217" },
    53089: { producto: "MEZCLA H2 5% / N2 95% RACK DE 12 CILINDROS 8.5 MTS", tt: "216" },
    53090: { producto: "H2 rack extra seco", tt: "216" },
    53091: { producto: "HIDROGENO 4.8 RACK 12 CILINDROS 6 M3", tt: "216" },
    53092: { producto: "NITROGENO ULTRA ALTA PUREZA  RACK 12 CILINDRO 9 M3", tt: "212" },
    53093: { producto: "OXIGENO INDUSTRIAL EN RACK  12 CILINDROS DE 9.5 M3", tt: "211" },
    53094: { producto: "INFRA MIXX 200/8 EN RACK DE 12 CILINDROS DE 9.5 MT", tt: "MZ" },
    53095: { producto: "INFRA FERRO D EN RACK DE 12 CILINDROS DE 9.5 MTS", tt: "MZ" },
    53096: { producto: "ARGON ULTRA ALTA PUREZA EN RACK 12 CILINDROS 10 MT", tt: "214" },
    53097: { producto: "INFRA MIXX 200/10 EN RACK DE 12 CILINDROS 10 MTS", tt: "MZ" },
    53098: { producto: "INFRA MIXX 200/18 EN RACK DE 12 CILINDROS  10 MTS", tt: "MZ" },
    53099: { producto: "INFRA MIXX 200/5 EN RACK DE 12 CILINDROS 9.5 MTS", tt: "MZ" },
    53100: { producto: "INFRA MIXX 200/O2 EN RACK DE 12 CILINDROS 9.5 MTS", tt: "MZ" },
    53103: { producto: "HELIO ULTRA ALTA PUREZA RACK 12 CILINDROS 9 M3", tt: "217" },
    53115: { producto: "OXIGENO CERO/ULTRA ALTA PUREZA RACK 12 CIL DE 6 M3", tt: "0" },
    53116: { producto: "HELIO PREMIER", tt: "217" },
    53123: { producto: "MEZCLA HE 30 % /N2 BAL EN RACK 12 CILINDROS 8 M3", tt: "MZ" },
    53127: { producto: "R290 LP110/LP239 - 100 LB C/SIFON", tt: "0" },
    53149: { producto: "R290 LP5 - 20 LB", tt: "0" },
    53150: { producto: "R290 LP110/LP239 - 100 LB", tt: "0" },
    53151: { producto: "INFRA MIXX 200/20 EN RACK DE 12 CILINDROS DE 10 M3", tt: "MZ" },
    53179: { producto: "MEZCLA DE H2 3% /  HE BAL EN RACK DE 12 CIL 8.5 M3", tt: "216" },
    53184: { producto: "MEZCLA N2 40% / HE BAL EN RACK 12 CIL DE 6M3", tt: "MZ" },
    53224: { producto: "SO2 100 PPM / N2 BAL", tt: "0" },
    53240: { producto: "ARGON RESEARCH 6.0", tt: "0" },
    53241: { producto: "OXYGEN RESEARCH 5.0", tt: "0" },
    53242: { producto: "O2 8 PPM / N2 BAL", tt: "0" },
    53268: { producto: "ARGON PREMIER", tt: "0" },
    53269: { producto: "NITROGENO PREMIER", tt: "0" },
    53273: { producto: "CRYO H2 40% / N2 BAL B", tt: "0" },
    53373: { producto: "AR 4 % / N2 15 % / O2 BAL", tt: "0" },
    53382: { producto: "EPA O2 10 % / N2 BAL", tt: "0" },
    53389: { producto: "O2 16 % / N2 BAL", tt: "0" },
    53398: { producto: "EPA CO 250 PPM / N2 BALANCE", tt: "0" },
    53432: { producto: "ARMIXX LIQUIDO DEWAR 230 LTS (350 PSI)", tt: "214" },
    53442: { producto: "HELIO PREMIER 6M3", tt: "217" },
    53449: { producto: "CRYO NITROGENO RESEARCH 6.0", tt: "0" },
    53500: { producto: "CRYO N2 850 PPM/ BAL AR", tt: "0" },
    53510: { producto: "INFRA FRESCOPACK 9 M3", tt: "MZ" },
    53589: { producto: "MEZCLA HELIO 50% BALANCE NITR?GENO EN RACK DE 12 C", tt: "MZ" },
    53596: { producto: "EPA_ CO2 3 % / O2 15 % / N2 BAL", tt: "0" },
    53626: { producto: "EPA_ O2 5 % / N2 95 %", tt: "0" },
    53635: { producto: "STD_ Ar 1 %/N2 4 %/ O2 BAL", tt: "0" },
    54005: { producto: "CO2 10% / N2 BAL", tt: "MZ" },
    54026: { producto: "NO2 10 PPM / N2 BAL", tt: "0" },
    54033: { producto: "CO2 3% / N2 BAL", tt: "MZ" },
    54034: { producto: "CO2 6% / N2 BAL", tt: "MZ" },
    101030: { producto: "OXIGENO INDUSTRIAL 3.0 MTS", tt: "211" },
    101060: { producto: "OXIGENO INDUSTRIAL 6 MTS", tt: "211" },
    101095: { producto: "OXIGENO INDUSTRIAL 9.5", tt: "211" },
    101113: { producto: "OXIGENO INDUSTRIAL 9.5 MTS", tt: "211" },
    101114: { producto: "OXIGENO INDUSTRIAL 6 M3", tt: "211" },
    101160: { producto: "OXIGENO INDUSTRIAL 6 M3 VALVULA CGA", tt: "211" },
    101195: { producto: "OXIGENO INDUSTRIAL 9.5 M3 VALVULA CGA", tt: "211" },
    102007: { producto: "Cetileno Medida 3", tt: "102" },
    102012: { producto: "Acetileno Medida 3.5", tt: "102" },
    102017: { producto: "Acetileno Medida 4", tt: "102" },
    102022: { producto: "Acetileno medida 4.5", tt: "102" },
    102027: { producto: "Acetileno Medida 5", tt: "102" },
    102032: { producto: "Acetileno Medida 5.5", tt: "102" },
    102037: { producto: "Acetileno Medida 6", tt: "102" },
    102042: { producto: "Acetileno medida 6.5", tt: "102" },
    102047: { producto: "Acetileno Medida 7", tt: "102" },
    102052: { producto: "ACETILENO MEDIDA 7.5", tt: "102" },
    102076: { producto: "ACETILENO MEDIDA 9.0", tt: "102" },
    102080: { producto: "ACETILENO MEDIDA 8.5", tt: "102" },
    102089: { producto: "ACETILENO MEDIDA 8.0", tt: "102" },
    102111: { producto: "ACETILENO VARIOS", tt: "102" },
    102151: { producto: "ACETILENO MEDIDA 5 KGS.", tt: "102" },
    102153: { producto: "ACETILENO MEDIDA 4 KGS", tt: "102" },
    102207: { producto: "ACETILENO PROP. MED.  2", tt: "102" },
    102213: { producto: "ACETILENO PROP. MED.  3", tt: "102" },
    102218: { producto: "ACETILENO PROP. MED.  3.5", tt: "102" },
    102223: { producto: "ACETILENO PROP. MED.  4", tt: "102" },
    102228: { producto: "ACETILENO PROP. MED.  4.5", tt: "102" },
    102233: { producto: "ACETILENO PROP. MED.  5", tt: "102" },
    102238: { producto: "ACETILENO PROP. MED.  5.5", tt: "102" },
    102243: { producto: "ACETILENO PROP. MED.  6", tt: "102" },
    102248: { producto: "ACETILENO PROP. MED.  6.5", tt: "102" },
    102253: { producto: "ACETILENO PROP. MED.  7", tt: "102" },
    102258: { producto: "ACETILENO PROP. MED. 7.5", tt: "102" },
    102263: { producto: "ACETILENO PROP. MED.  8.0", tt: "102" },
    102268: { producto: "ACETILENO PROP. MED.  8.5", tt: "102" },
    102273: { producto: "ACETILENO PROP. MED.  9.0", tt: "102" },
    102281: { producto: "ACETILENO PROP. MED.  10.0", tt: "102" },
    102522: { producto: "ACETILENO ESP 4.5", tt: "102" },
    102527: { producto: "ACETILENO ESP  5", tt: "102" },
    102532: { producto: "ACETILENO ESP  5.5", tt: "102" },
    102537: { producto: "ACETILENO ESP  6", tt: "102" },
    102542: { producto: "ACETILENO ESP  6.5", tt: "102" },
    102547: { producto: "ACETILENO ESP 7", tt: "102" },
    102601: { producto: "ACETILENO MARRANAS 9.50", tt: "102" },
    102603: { producto: "ACETILENO MARRANAS 10.50", tt: "102" },
    102707: { producto: "ACETILENO 3 KGS VALVULA CGA", tt: "102" },
    102712: { producto: "ACETILENO 3.5 KG VALVULA CGA", tt: "102" },
    102717: { producto: "ACETILENO 4 KGS VALVULA CGA", tt: "102" },
    102722: { producto: "ACETILENO 4.5 KG VALVULA CGA", tt: "102" },
    102727: { producto: "ACETILENO 5 KG VALVULA CGA", tt: "102" },
    102732: { producto: "ACETILENO MEDIDA 5.5 KG VALVULA CGA", tt: "102" },
    102737: { producto: "ACETILENO MEDIDA 6 KG VALVULA CGA", tt: "102" },
    102742: { producto: "ACETILENO MEDIDA 6.5 KG VALVULA CGA", tt: "102" },
    102747: { producto: "ACETILENO MEDIDA 7 KG VALVULA CGA", tt: "102" },
    102752: { producto: "ACETILENO MEDIDA 7.5 KG VALVULA CGA", tt: "102" },
    102776: { producto: "ACETILENO MEDIDA 9 KG VALVULA CGA", tt: "102" },
    102777: { producto: "ACETILENO MEDIDA 9.5 KG VALVULA CGA", tt: "102" },
    102780: { producto: "ACETILENO MEDIDA 8.5 KG VALVULA CGA", tt: "102" },
    102789: { producto: "ACETILENO MEDIDA 8 KG VALVULA CGA", tt: "102" },
    102796: { producto: "ACETILENO MEDIDA 11.5 KG VALVULA CGA", tt: "102" },
    102798: { producto: "ACETILENO MEDIDA 10 KG VALVULA CGA", tt: "102" },
    102799: { producto: "ACETILENO MEDIDA 10.5 KG VALVULA CGA", tt: "102" },
    102800: { producto: "ACETILENO MEDIDA 11 KG VALVULA CGA", tt: "102" },
    103060: { producto: "NITROGENO GAS 6 MTS VAL CGA 580", tt: "212" },
    103090: { producto: "NITROGENO GAS 9 MTS VAL CGA 580", tt: "212" },
    103112: { producto: "NITROGENO GAS 9 MTS.", tt: "212" },
    104060: { producto: "HIDROGENO INDUSTRIAL 6 M3", tt: "216" },
    104075: { producto: "HIDROGENO INDUSTRIAL 7.5 M3", tt: "216" },
    105060: { producto: "ARGON 6 MTS VAL CGA 580", tt: "214" },
    105090: { producto: "ARGON PURO 9 MTS", tt: "214" },
    105095: { producto: "ARGON 9.5 MTS VAL CGA 580", tt: "214" },
    201010: { producto: "OXIGENO MEDICINAL EN CIL. MCA INFRA 10 MTS", tt: "211" },
    201030: { producto: "OXIGENO MEDICINAL EN CIL MCA INFRA 3 MTS", tt: "211" },
    201060: { producto: "OXIGENO MEDICINAL EN CIL MCA INFRA 6 MTS", tt: "211" },
    201085: { producto: "OXIGENO MEDICINAL EN CIL MCA INFRA 8.5 MTS", tt: "211" },
    201095: { producto: "OXIGENO MEDICINAL EN CIL MCA INFRA 9.5 MTS", tt: "211" },
    431008: { producto: "CO2 INDUSTRIAL 8 KGS", tt: "213" },
    431009: { producto: "CO2 INDUSTRIAL 9 KGS", tt: "213" },
    431010: { producto: "CO2 10 KG", tt: "213" },
    431012: { producto: "CO2 INDUSTRIAL 12 KGS", tt: "213" },
    431015: { producto: "CO2 INDUSTRIAL 15 KGS", tt: "213" },
    431016: { producto: "CO2 INDUSTRIAL 16 KGS", tt: "213" },
    431020: { producto: "CO2 INDUSTRIAL 20 KG", tt: "213" },
    431022: { producto: "CO2 INDUSTRIAL 22 KGS", tt: "213" },
    431025: { producto: "CO2 INDUSTRIAL 25 KGS", tt: "213" },
    431030: { producto: "CO2 INDUSTRIAL 30 KGS", tt: "213" },
    431045: { producto: "CO2 INDUSTRIAL 45 KG", tt: "213" },
    432169: { producto: "CO2 DEWAR 169 KGS", tt: "213" },
    700730: { producto: "CARGA DE ACETILENO VAL. CGA 1 KG", tt: "102" },
    700731: { producto: "CARGA DE ACETILENO VAL. CGA 2 KG", tt: "102" },
    700732: { producto: "CARGA DE ACETILENO VAL. CGA 2.7 KG", tt: "102" },
    790730: { producto: "CARGA DE ACETILENO VAL. STD 2019 1 KG", tt: "102" },
    791730: { producto: "CARGA DE ACETILENO VAL.MC 1KG", tt: "102" },
    792730: { producto: "CARGA DE ACETILENO VAL. TIPO L 1KG", tt: "102" },
    3000014: { producto: "EPA SO2 45 PPM / AIRE BAL", tt: "0" },
    3000015: { producto: "EPA O2 22.5 %/ CO2 18% / N2 BAL", tt: "0" },
    3000031: { producto: "GN 14 COMP/BALANCE CH4 ( 93.1777%)", tt: "0" },
    3000036: { producto: "CARGA DE PROPANO GRADO C.P.", tt: "0" },
    3000038: { producto: "Benceno 100 ppb/N2 Bal", tt: "0" },
    3000068: { producto: "CARGA DE R-744 CIL 25 KG", tt: "0" },
    3000079: { producto: "INFRA ALUMIXX 50", tt: "0" },
    3000083: { producto: "HELIO UAP GRADO 6.0 INDURA", tt: "0" },
    3000154: { producto: "EPA O2 4% / N2 BALANCE", tt: "0" },
    3000357: { producto: "CANJE DE OXIGENO MEDICINAL DE 682 LTS.", tt: "211" },
    3000370: { producto: "AR MIXX 4.8 ISO", tt: "214" },
    3000377: { producto: "N - butane instrument_ 99.5 %", tt: "0" },
    3000411: { producto: "STD_ SO2 560 PPM / CO 3450 PPM / NO 1200 PPM / N2", tt: "0" },
    3000412: { producto: "STD CO 20%/ CO2 0.5%/ CH4 5.0%/ H2 40%/ N2 BAL", tt: "0" },
    3000603: { producto: "CRYO_  benceno 50 ppm /acetaldeh?do  500 ppm/  met", tt: "0" },
    3000660: { producto: "HELIO GRADO 6.0 9 M3 A", tt: "217" },
    3000668: { producto: "Mezcla 21% He Balance N2 Cilindro tipo A", tt: "MZ" },
    3000694: { producto: "MEZCLA 5% H2 BALANCE N2 EN RACK CILINDROS DE 6 M3", tt: "216" },
    3000844: { producto: "SIX SPARK LASER NITROGENO", tt: "212" },
    3000986: { producto: "INFRA MIXX 50% He/50% Ar RACK 12 CILINDROS", tt: "MZ" },
    3001007: { producto: "CANISTER CH4 0.05 %/ N2 Bal", tt: "0" },
    3001040: { producto: "N2 5.5 CEM", tt: "0" },
    3001073: { producto: "Mezcla 14 Componentes CO20.972278% Balance Metano", tt: "0" },
    3001215: { producto: "MEZCLA H2 60% VOL/VOL, H2S 25 PPM, N2 BAL CIL. 30", tt: "0" },
    3001286: { producto: "MEGA DEWAR N2 PREENFRIADO BAJA PRESI?N", tt: "212" },
    3001309: { producto: "INFRA Ar MIXX PLUS", tt: "214" },
    3001310: { producto: "INFRA MIXX PLUS 200/20", tt: "MZ" },
    3001313: { producto: "INFRA MIX 200/O5 RACK 12 CIL,(114 M3)", tt: "MZ" },
    3001384: { producto: "INFRA ALUMIXX 25 RACK", tt: "MZ" },
    3001422: { producto: "MEZCLA ETO 50", tt: "0" },
    3001426: { producto: "MEZCLA CO 27%, CO2 BAL CIL A", tt: "0" },
    3001427: { producto: "MEZCLA CO 24%, CO2 BAL CIL A", tt: "0" },
    3001428: { producto: "MEZCLA CO 21%, CO2 BAL CIL A", tt: "0" },
    3001429: { producto: "MEZCLA CO 18%, CO2 BAL CIL A", tt: "0" },
    3001430: { producto: "MEZCLA CO 15%, CO2 BAL CIL A", tt: "0" },
    3001431: { producto: "MEZCLA CO 12%, CO2 BAL CIL A", tt: "0" },
    3001432: { producto: "MEZCLA CO 10%, CO2 BAL CIL A", tt: "0" },
    3001433: { producto: "MEZCLA CO 7%, CO2 BAL CIL A", tt: "0" },
    3001434: { producto: "MEZCLA CO 5%, CO2 BAL CIL A", tt: "0" },
    3001435: { producto: "MEZCLA CO 2%, CO2 BAL CIL A", tt: "0" },
    3001436: { producto: "MEZCLA O2 1%, BAL N2 CIL. A", tt: "0" },
    3001437: { producto: "MEZCLA CH4 8%, H2  BAL. CIL A", tt: "0" },
    3001438: { producto: "MEZCLA CO2 16%, H2 BAL. CIL A", tt: "0" },
    3001439: { producto: "MEZCLA CO 10%, H2 BAL. CIL A", tt: "0" },
    3001443: { producto: "H2 UAP/CERO EN RACK 12 CILINDROS DE  6 M3", tt: "216" },
    3001463: { producto: "MEZCLA N2O 87.54 PPM, O2 BAL. CIL 16 AL", tt: "0" },
    3001471: { producto: "MEZCLA  CO2 9%, N2 BAL CIL. 7AL", tt: "0" },
    3001482: { producto: "MEZCLA CO2 6%, N2 BAL. CIL. B", tt: "0" },
    3001506: { producto: "1 PPM PHOSPHINE, BALANCE NITROGENO", tt: "0" },
    3001512: { producto: "MEZCLA HCL 53.3 PPM, N2 BAL, CIL 30 AL", tt: "0" },
    3001554: { producto: "H2 UAP/CERO EN RACK 12 CILINDROS DE  7.5 M3", tt: "216" },
    3001581: { producto: "MEZCLA CRYO H2 40%, N2 BAL CIL B", tt: "0" },
    3001711: { producto: "MEZCLA C3H8 0.8%, AIRE BAL, CIL 16 AL", tt: "0" },
    3001722: { producto: "HELIO RMI 4.1M3", tt: "217" },

    




};


/* ============================================================
   🔹 2. REFERENCIAS DEL DOM
============================================================ */
const codeInput = document.getElementById('code');
const productInput = document.getElementById('product');
const ttInput = document.getElementById('tt');
const cylindersInput = document.getElementById('cylinders');
const areaInput = document.getElementById('area');
const form = document.getElementById('inventory-form');
const tableContainer = document.getElementById('table-container');
const codeSuggestions = document.getElementById('code-suggestions');

/* ============================================================
   🔹 3. VARIABLES GLOBALES
============================================================ */
let records = [];
let recordId = 1;
let isEditing = false;
let editingRecordId = null;


/* ============================================================
   🔹 4. CONFIGURACIÓN GOOGLE SHEETS
============================================================ */
const SHEETS_URL = "https://script.google.com/macros/s/AKfycbykGMxvUj0VP9uddbC3Bb3GjxR4oV4Xn4o66kQcSklI-qlHcUWEZrdByOvIeKc7X5vA/exec";


/* ============================================================
   🔹 5. GENERADOR DE UID GLOBAL
============================================================ */
function generarUID() {
    const timestamp = Date.now().toString(36);
    const randomPart = Math.random().toString(36).substring(2, 10);
    const extra = crypto.randomUUID ? crypto.randomUUID().split('-')[0] : '';
    return `UID-${timestamp}-${randomPart}-${extra}`;
}


/* ============================================================
   🔹 6. ENVÍO A GOOGLE SHEETS
============================================================ */
function enviarASheets(registro) {
    fetch(SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registro)
    })
    .then(() => console.log("Envío realizado"))
    .catch(error => console.error("Error:", error));
}


/* ============================================================
   🔹 7. AUTOCOMPLETADO POR CÓDIGO
============================================================ */
codeInput.addEventListener('input', () => {
    const code = parseInt(codeInput.value, 10);

    if (baseDatos[code]) {
        const { producto, tt } = baseDatos[code];

        productInput.value = producto;
        ttInput.value = tt;

        productInput.classList.add('highlight');
        ttInput.classList.add('highlight');
        cylindersInput.focus();

        setTimeout(() => {
            productInput.classList.remove('highlight');
            ttInput.classList.remove('highlight');
        }, 1000);
    } else {
        productInput.value = '';
        ttInput.value = '';
    }
});

/* ============================================================
   🔹 13. GENERAR OPCIONES PARA EL DATALIST DE CÓDIGOS
============================================================ */
function generarOpcionesDatalist() {
    const datalist = document.getElementById('code-suggestions');

    // Limpiar opciones existentes
    datalist.innerHTML = '';

    // Generar nuevas opciones basadas en la baseDatos
    Object.keys(baseDatos).forEach(code => {
        const option = document.createElement('option');
         option.value = code; // El valor del código
         option.textContent = `${code} - ${baseDatos[code].producto}`; // Código y descripción
        datalist.appendChild(option);
    });
}

// Llamar a la función al cargar la página
document.addEventListener('DOMContentLoaded', generarOpcionesDatalist);

/* ============================================================
   🔹 8. SUBMIT DEL FORMULARIO (CREATE / UPDATE)
============================================================ */
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const area = areaInput.value;
    const code = codeInput.value;
    const product = productInput.value;
    const tt = ttInput.value;
    const cylinders = cylindersInput.value;
    const currentDate = new Date().toLocaleDateString('en-CA'); // Formato ISO (YYYY-MM-DD)

    const submitButton = form.querySelector('button[type="submit"]');

    /* =========================
       🔹 UPDATE
    ========================= */
    if (isEditing && editingRecordId !== null) {

        const record = records.find(r => r.id === editingRecordId);

        if (record) {
            record.name = name;
            record.area = area;
            record.code = code;
            record.product = product;
            record.tt = tt;
            record.cylinders = cylinders;

            record.action = "update";
            enviarASheets(record);

            // Enfocar y resaltar el registro actualizado
            updateTable(); // Asegurarse de que la tabla esté actualizada
            const filas = document.querySelectorAll('#table-container tbody tr');
            filas.forEach(fila => {
                if (fila.children[0].textContent == record.id) {
                    fila.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    fila.classList.add('highlight');
                    setTimeout(() => fila.classList.remove('highlight'), 2000);
                }
            });
        }

        isEditing = false;
        editingRecordId = null;
        submitButton.textContent = 'Enviar';
    }

    /* =========================
       🔹 CREATE
    ========================= */
    else {

        const newRecord = {
            id: recordId++,
            uid: generarUID(),
            date: currentDate,
            name,
            area,
            code,
            product,
            tt,
            cylinders
        };

        newRecord.action = "create";
        records.push(newRecord);
        enviarASheets(newRecord);
        codeInput.focus();
    }

    updateTable();

    codeInput.value = '';
    productInput.value = '';
    ttInput.value = '';
    cylindersInput.value = '';
    

});


/* ============================================================
   🔹 9. ACTUALIZAR TABLA
============================================================ */
function updateTable() {

    if (!records.length) {
        tableContainer.innerHTML = '';
        return;
    }

    if (!tableContainer.querySelector('table')) {
        const table = document.createElement('table');

        table.innerHTML = `
            <thead>
                <tr>
                    <th>ID</th>
                    <th class="hidden">UID</th>
                    <th class="hidden">Fecha</th>
                    <th class="hidden">Nombre</th>
                    <th class="hidden">Área</th>
                    <th>Código</th>
                    <th>Producto</th>
                    <th class="hidden">TT</th>
                    <th>Cilindros</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody></tbody>
        `;

        tableContainer.appendChild(table);
    }

    const tbody = tableContainer.querySelector('tbody');
    tbody.innerHTML = '';

    // Mostrar los registros en orden inverso
    records.slice().reverse().forEach(record => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${record.id}</td>
            <td class="hidden">${record.uid}</td>
            <td class="hidden">${record.date}</td>
            <td class="hidden">${record.name}</td>
            <td class="hidden">${record.area}</td>
            <td>${record.code}</td>
            <td>${record.product}</td>
            <td class="hidden">${record.tt}</td>
            <td>${record.cylinders}</td>
            <td>
                <button onclick="editRecord(${record.id})">✏️</button>
                <button onclick="deleteRecord(${record.id})">🗑️</button>
            </td>
        `;

        tbody.appendChild(row);
    });
}


/* ============================================================
   🔹 10. EDITAR REGISTRO
============================================================ */
function editRecord(id) {

    const record = records.find(r => r.id === id);

    if (!record) return;

    // Mostrar el formulario si está oculto
    const formContainer = document.querySelector('.form-container');
    formContainer.style.display = 'block';

    // Rellenar los campos del formulario con los datos del registro
    document.getElementById('name').value = record.name;
    areaInput.value = record.area;
    codeInput.value = record.code;
    productInput.value = record.product;
    ttInput.value = record.tt;
    cylindersInput.value = record.cylinders;

    // Resaltar el formulario para indicar que está en modo edición
    formContainer.classList.add('editing-mode');

    isEditing = true;
    editingRecordId = id;

    form.querySelector('button[type="submit"]').textContent = 'Actualizar';

    // Enfocar el campo de code del formulario
    document.getElementById('code').focus();
}

// Eliminar la clase de edición cuando se envíe el formulario
form.addEventListener('submit', () => {
    const formContainer = document.querySelector('.form-container');
    formContainer.classList.remove('editing-mode');
});



/* ============================================================
   🔹 11. ELIMINAR REGISTRO
============================================================ */
function deleteRecord(id) {

    const recordIndex = records.findIndex(r => r.id === id);
    if (recordIndex === -1) return;

    const recordToDelete = records[recordIndex];

    enviarASheets({
        action: "delete",
        uid: recordToDelete.uid
    });

    records.splice(recordIndex, 1);
    updateTable();
}

/* ============================================================
   🔹 12. BOTÓN DE DESCARGA CSV (NUEVA FUNCIONALIDAD)
   ⚠️ No modifica lógica existente
============================================================ */

// Crear botón dinámicamente (NO modifica HTML existente)
const downloadButton = document.getElementById("download-btn");
downloadButton.textContent = "Descargar CSV";
downloadButton.id = "download-btn";
downloadButton.style.display = "none"; // Inicialmente oculto

// Insertarlo debajo de la tabla
tableContainer.parentNode.insertBefore(downloadButton, tableContainer.nextSibling);


/* ============================================================
   🔹 CONTROL DINÁMICO DE VISIBILIDAD
============================================================ */
function actualizarVisibilidadBoton() {

    const tablaExiste = tableContainer.querySelector('table');
    const hayRegistros = records.length > 0;

    if (tablaExiste && hayRegistros) {
        downloadButton.style.display = "block";
    } else {
        downloadButton.style.display = "none";
    }
}


/* ============================================================
   🔹 OBSERVADOR DE CAMBIOS EN EL DOM
   (No altera updateTable existente)
============================================================ */
const observer = new MutationObserver(() => {
    actualizarVisibilidadBoton();
});

observer.observe(tableContainer, { childList: true, subtree: true });


/* ============================================================
   🔹 GENERAR CSV (SIN UID)
============================================================ */
function generarCSV() {

    if (!records.length) return;

    // Encabezados SIN UID
    const headers = ["ID", "Fecha", "Nombre", "Área", "Código", "Producto", "TT", "Cilindros"];

    const rows = records.map(record => [
        record.id,
        record.date,
        record.name,
        record.area,
        record.code,
        record.product,
        record.tt,
        record.cylinders
    ]);

    let csvContent = headers.join(",") + "\n";

    rows.forEach(row => {
        csvContent += row.join(",") + "\n";
    });

    return csvContent;
}


/* ============================================================
   🔹 GENERAR NOMBRE DINÁMICO DEL ARCHIVO
============================================================ */
function generarNombreArchivo() {

    const fecha = new Date().toLocaleDateString("sv-SE"); 
    // sv-SE devuelve formato YYYY-MM-DD

    const area = "Área " + areaInput.value || "AREA";
    const nombre = document.getElementById("name").value || "XX";

    const iniciales = nombre
        .split(" ")
        .map(p => p.charAt(0).toUpperCase())
        .join("");

    return `Inventario_${fecha}_${area}_${iniciales}.csv`;
}


/* ============================================================
   🔹 EVENTO DESCARGA
============================================================ */
downloadButton.addEventListener("click", () => {

    const csv = generarCSV();
    if (!csv) return;

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = generarNombreArchivo();
    link.click();

    // 🔹 Reiniciar completamente después de descargar
    form.reset();
    records = [];
    recordId = 1;
    tableContainer.innerHTML = "";
    downloadButton.style.display = "none";
});


