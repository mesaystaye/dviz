window.getNumericCode = function(alpha3Code) {
    return window.countryCodeMapping[alpha3Code] || null;
};


window.countryCodeMapping = {
    "AFG": 4, "ALB": 8, "DZA": 12, "ASM": 16, "AND": 20, "AGO": 24, "AIA": 660, "ATA": 10, "ATG": 28, "ARG": 32,
    "ARM": 51, "ABW": 533, "AUS": 36, "AUT": 40, "AZE": 31, "BHS": 44, "BHR": 48, "BGD": 50, "BRB": 52, "BLR": 112,
    "BEL": 56, "BLZ": 84, "BEN": 204, "BMU": 60, "BTN": 64, "BOL": 68, "BES": 535, "BIH": 70, "BWA": 72, "BVT": 74,
    "BRA": 76, "IOT": 86, "BRN": 96, "BGR": 100, "BFA": 854, "BDI": 108, "CPV": 132, "KHM": 116, "CMR": 120, "CAN": 124,
    "CYM": 136, "CAF": 140, "TCD": 148, "CHL": 152, "CHN": 156, "CXR": 162, "CCK": 166, "COL": 170, "COM": 174,
    "COG": 178, "COD": 180, "COK": 184, "CRI": 188, "HRV": 191, "CUB": 192, "CUW": 531, "CYP": 196, "CZE": 203,
    "CIV": 384, "DNK": 208, "DJI": 262, "DMA": 212, "DOM": 214, "ECU": 218, "EGY": 818, "SLV": 222, "GNQ": 226,
    "ERI": 232, "EST": 233, "ETH": 231, "FLK": 238, "FRO": 234, "FJI": 242, "FIN": 246, "FRA": 250, "GUF": 254,
    "PYF": 258, "ATF": 260, "GAB": 266, "GMB": 270, "GEO": 268, "DEU": 276, "GHA": 288, "GIB": 292, "GRC": 300,
    "GRL": 304, "GRD": 308, "GLP": 312, "GUM": 316, "GTM": 320, "GGY": 831, "GIN": 324, "GNB": 624, "GUY": 328,
    "HTI": 332, "HMD": 334, "VAT": 336, "HND": 340, "HKG": 344, "HUN": 348, "ISL": 352, "IND": 356, "IDN": 360,
    "IRN": 364, "IRQ": 368, "IRL": 372, "IMN": 833, "ISR": 376, "ITA": 380, "JAM": 388, "JPN": 392, "JEY": 832,
    "JOR": 400, "KAZ": 398, "KEN": 404, "KIR": 296, "PRK": 408, "KOR": 410, "KWT": 414, "KGZ": 417, "LAO": 418,
    "LVA": 428, "LBN": 422, "LSO": 426, "LBR": 430, "LBY": 434, "LIE": 438, "LTU": 440, "LUX": 442, "MAC": 446,
    "MKD": 807, "MDG": 450, "MWI": 454, "MYS": 458, "MDV": 462, "MLI": 466, "MLT": 470, "MHL": 584, "MTQ": 474,
    "MRT": 478, "MUS": 480, "MYT": 175, "MEX": 484, "FSM": 583, "MDA": 498, "MCO": 492, "MNG": 496, "MNE": 499,
    "MSR": 500, "MAR": 504, "MOZ": 508, "MMR": 104, "NAM": 516, "NRU": 520, "NPL": 524, "NLD": 528, "NCL": 540,
    "NZL": 554, "NIC": 558, "NER": 562, "NGA": 566, "NIU": 570, "NFK": 574, "MNP": 580, "NOR": 578, "OMN": 512,
    "PAK": 586, "PLW": 585, "PSE": 275, "PAN": 591, "PNG": 598, "PRY": 600, "PER": 604, "PHL": 608, "PCN": 612,
    "POL": 616, "PRT": 620, "PRI": 630, "QAT": 634, "REU": 638, "ROU": 642, "RUS": 643, "RWA": 646, "BLM": 652,
    "SHN": 654, "KNA": 659, "LCA": 662, "MAF": 663, "SPM": 666, "VCT": 670, "WSM": 882, "SMR": 674, "STP": 678,
    "SAU": 682, "SEN": 686, "SRB": 688, "SYC": 690, "SLE": 694, "SGP": 702, "SXM": 534, "SVK": 703, "SVN": 705,
    "SLB": 90,  "SOM": 706, "ZAF": 710, "SGS": 239, "SSD": 728, "ESP": 724, "LKA": 144, "SDN": 729, "SUR": 740,
    "SJM": 744, "SWZ": 748, "SWE": 752, "CHE": 756, "SYR": 760, "TWN": 158, "TJK": 762, "TZA": 834, "THA": 764,
    "TLS": 626, "TGO": 768, "TKL": 772, "TON": 776, "TTO": 780, "TUN": 788, "TUR": 792, "TKM": 795, "TCA": 796,
    "TUV": 798, "UGA": 800, "UKR": 804, "ARE": 784, "GBR": 826, "USA": 840, "UMI": 581, "URY": 858, "UZB": 860,
    "VUT": 548, "VEN": 862, "VNM": 704, "VGB": 92,  "VIR": 850,  "WLF": 876,"ESH": 732, "YEM": 887, "ZMB": 894,
    "ZWE": 716
};

window.countryNameMapping = {
    "004": "Afghanistan",
    "008": "Albania",
    "012": "Algeria",
    "016": "American Samoa",
    "020": "Andorra",
    "024": "Angola",
    "660": "Anguilla",
    "010": "Antarctica",
    "028": "Antigua and Barbuda",
    "032": "Argentina",
    "051": "Armenia",
    "533": "Aruba",
    "036": "Australia",
    "040": "Austria",
    "031": "Azerbaijan",
    "044": "Bahamas",
    "048": "Bahrain",
    "050": "Bangladesh",
    "052": "Barbados",
    "112": "Belarus",
    "056": "Belgium",
    "084": "Belize",
    "204": "Benin",
    "060": "Bermuda",
    "064": "Bhutan",
    "068": "Bolivia",
    "535": "Bonaire",
    "070": "Bosnia and Herzegovina",
    "072": "Botswana",
    "074": "Bouvet Island",
    "076": "Brazil",
    "086": "British Indian Ocean Territory",
    "096": "Brunei Darussalam",
    "100": "Bulgaria",
    "854": "Burkina Faso",
    "108": "Burundi",
    "132": "Cabo Verde",
    "116": "Cambodia",
    "120": "Cameroon",
    "124": "Canada",
    "136": "Cayman Islands",
    "140": "Central African Republic",
    "148": "Chad",
    "152": "Chile",
    "156": "China",
    "162": "Christmas Island",
    "166": "Cocos Islands",
    "170": "Colombia",
    "174": "Comoros",
    "178": "Congo",
    "180": "Congo",
    "184": "Cook Islands",
    "188": "Costa Rica",
    "191": "Croatia",
    "192": "Cuba",
    "531": "Curaçao",
    "196": "Cyprus",
    "203": "Czech Republic",
    "384": "Côte d'Ivoire",
    "208": "Denmark",
    "262": "Djibouti",
    "212": "Dominica",
    "214": "Dominican Republic",
    "218": "Ecuador",
    "818": "Egypt",
    "222": "El Salvador",
    "226": "Equatorial Guinea",
    "232": "Eritrea",
    "233": "Estonia",
    "231": "Ethiopia",
    "238": "Falkland Islands",
    "234": "Faroe Islands",
    "242": "Fiji",
    "246": "Finland",
    "250": "France",
    "254": "French Guiana",
    "258": "French Polynesia",
    "260": "French Southern Territories",
    "266": "Gabon",
    "270": "Gambia",
    "268": "Georgia",
    "276": "Germany",
    "288": "Ghana",
    "292": "Gibraltar",
    "300": "Greece",
    "304": "Greenland",
    "308": "Grenada",
    "312": "Guadeloupe",
    "316": "Guam",
    "320": "Guatemala",
    "831": "Guernsey",
    "324": "Guinea",
    "624": "Guinea-Bissau",
    "328": "Guyana",
    "332": "Haiti",
    "334": "Heard Island and McDonald Islands",
    "336": "Holy See",
    "340": "Honduras",
    "344": "Hong Kong",
    "348": "Hungary",
    "352": "Iceland",
    "356": "India",
    "360": "Indonesia",
    "364": "Iran",
    "368": "Iraq",
    "372": "Ireland",
    "833": "Isle of Man",
    "376": "Israel",
    "380": "Italy",
    "388": "Jamaica",
    "392": "Japan",
    "832": "Jersey",
    "400": "Jordan",
    "398": "Kazakhstan",
    "404": "Kenya",
    "296": "Kiribati",
    "408": "Korea",
    "410": "Korea",
    "414": "Kuwait",
    "417": "Kyrgyzstan",
    "418": "Lao",
    "428": "Latvia",
    "422": "Lebanon",
    "426": "Lesotho",
    "430": "Liberia",
    "434": "Libya",
    "438": "Liechtenstein",
    "440": "Lithuania",
    "442": "Luxembourg",
    "446": "Macao",
    "807": "Macedonia",
    "450": "Madagascar",
    "454": "Malawi",
    "458": "Malaysia",
    "462": "Maldives",
    "466": "Mali",
    "470": "Malta",
    "584": "Marshall Islands",
    "474": "Martinique",
    "478": "Mauritania",
    "480": "Mauritius",
    "175": "Mayotte",
    "484": "Mexico",
    "583": "Micronesia",
    "498": "Moldova",
    "492": "Monaco",
    "496": "Mongolia",
    "499": "Montenegro",
    "500": "Montserrat",
    "504": "Morocco",
    "508": "Mozambique",
    "104": "Myanmar",
    "516": "Namibia",
    "520": "Nauru",
    "524": "Nepal",
    "528": "Netherlands",
    "540": "New Caledonia",
    "554": "New Zealand",
    "558": "Nicaragua",
    "562": "Niger",
    "566": "Nigeria",
    "570": "Niue",
    "574": "Norfolk Island",
    "580": "Northern Mariana Islands",
    "578": "Norway",
    "512": "Oman",
    "586": "Pakistan",
    "585": "Palau",
    "275": "Palestine",
    "591": "Panama",
    "598": "Papua New Guinea",
    "600": "Paraguay",
    "604": "Peru",
    "608": "Philippines",
    "612": "Pitcairn",
    "616": "Poland",
    "620": "Portugal",
    "630": "Puerto Rico",
    "634": "Qatar",
    "638": "Réunion",
    "642": "Romania",
    "643": "Russia",
    "646": "Rwanda",
    "652": "Saint Barthélemy",
    "654": "Saint Helena",
    "659": "Saint Kitts and Nevis",
    "662": "Saint Lucia",
    "663": "Saint Martin",
    "666": "Saint Pierre and Miquelon",
    "670": "Saint Vincent and the Grenadines",
    "882": "Samoa",
    "674": "San Marino",
    "678": "Sao Tome and Principe",
    "682": "Saudi Arabia",
    "686": "Senegal",
    "688": "Serbia",
    "690": "Seychelles",
    "694": "Sierra Leone",
    "702": "Singapore",
    "534": "Sint Maarten",
    "703": "Slovakia",
    "705": "Slovenia",
    "090": "Solomon Islands",
    "706": "Somalia",
    "710": "South Africa",
    "239": "South Georgia and the South Sandwich Islands",
    "728": "South Sudan",
    "724": "Spain",
    "144": "Sri Lanka",
    "729": "Sudan",
    "740": "Suriname",
    "744": "Svalbard and Jan Mayen",
    "748": "Swaziland",
    "752": "Sweden",
    "756": "Switzerland",
    "760": "Syrian Arab Republic",
    "158": "Taiwan",
    "762": "Tajikistan",
    "834": "Tanzania",
    "764": "Thailand",
    "626": "Timor-Leste",
    "768": "Togo",
    "772": "Tokelau",
    "776": "Tonga",
    "780": "Trinidad and Tobago",
    "788": "Tunisia",
    "792": "Turkey",
    "795": "Turkmenistan",
    "796": "Turks and Caicos Islands",
    "798": "Tuvalu",
    "800": "Uganda",
    "804": "Ukraine",
    "784": "United Arab Emirates",
    "826": "United Kingdom",
    "840": "United States",
    "581": "United States Minor Outlying Islands",
    "858": "Uruguay",
    "860": "Uzbekistan",
    "548": "Vanuatu",
    "862": "Venezuela",
    "704": "Viet Nam",
    "092": "Virgin Islands",
    "850": "Virgin Islands",
    "876": "Wallis and Futuna",
    "732": "Western Sahara",
    "887": "Yemen",
    "894": "Zambia",
    "716": "Zimbabwe"
};
