var Currency = {
  rates: {"USD":1.0,"EUR":1.22963,"GBP":1.39462,"CAD":0.763582,"ARS":0.0495995,"AUD":0.771652,"BRL":0.304767,"CLP":0.00164452,"CNY":0.157962,"CYP":0.397899,"CZK":0.0483716,"DKK":0.165337,"EEK":0.0706676,"HKD":0.12751,"HUF":0.00395473,"ISK":0.0100351,"INR":0.0153834,"JMD":0.00785484,"JPY":0.0094376,"LVL":1.57329,"LTL":0.320236,"MTL":0.293496,"MXN":0.0534933,"NZD":0.721876,"NOK":0.129692,"PLN":0.291222,"SGD":0.758944,"SKK":21.5517,"SIT":175.439,"ZAR":0.0834985,"KRW":0.00093499,"SEK":0.121898,"CHF":1.05022,"TWD":0.0342924,"UYU":0.0352113,"MYR":0.255787,"BSD":1.0,"CRC":0.00176264,"RON":0.263703,"PHP":0.0192585,"AED":0.272294,"VEB":0.000100125,"IDR":7.27246e-05,"TRY":0.255063,"THB":0.0320052,"TTD":0.14819,"ILS":0.289185,"SYP":0.00194088,"XCD":0.370734,"COP":0.000350201,"RUB":0.0173822,"HRK":0.165087,"KZT":0.00310044,"TZS":0.000444148,"XPT":949.495,"SAR":0.266667,"NIO":0.0319693,"LAK":0.000120533,"OMR":2.60078,"AMD":0.00208186,"CDF":0.00063674,"KPW":0.00111209,"SPL":6.0,"KES":0.00988142,"ZWD":0.00276319,"KHR":0.000250815,"MVR":0.0638162,"GTQ":0.136286,"BZD":0.496204,"BYR":5.10204e-05,"LYD":0.752559,"DZD":0.00869868,"BIF":0.000567866,"GIP":1.39462,"BOB":0.144196,"XOF":0.00187456,"STD":5.00889e-05,"NGN":0.00277778,"PGK":0.31152,"ERN":0.0666667,"MWK":0.00138232,"CUP":0.0377358,"GMD":0.0211864,"CVE":0.0111511,"BTN":0.0153834,"XAF":0.00187456,"UGX":0.000273448,"MAD":0.108867,"MNT":0.000417973,"LSL":0.0834985,"XAG":16.3338,"TOP":0.446708,"SHP":1.39462,"RSD":0.0104049,"HTG":0.0153657,"MGA":0.000321027,"MZN":0.0161057,"FKP":1.39462,"BWP":0.1044,"HNL":0.0423531,"PYG":0.000180343,"JEP":1.39462,"EGP":0.0569233,"LBP":0.00066335,"ANG":0.56101,"WST":0.3961,"TVD":0.771652,"GYD":0.00481301,"GGP":1.39462,"NPR":0.00956977,"KMF":0.00249942,"IRR":2.65125e-05,"XPD":996.77,"SRD":0.134499,"TMM":5.71429e-05,"SZL":0.0834985,"MOP":0.123796,"BMD":1.0,"XPF":0.0103043,"ETB":0.0362713,"JOD":1.41044,"MDL":0.0604887,"MRO":0.00282885,"YER":0.0040008,"BAM":0.628701,"AWG":0.558659,"PEN":0.305932,"VEF":0.100125,"SLL":0.000130208,"KYD":1.21919,"AOA":0.00466453,"TND":0.41683,"TJS":0.11329,"SCR":0.0721293,"LKR":0.00640923,"DJF":0.0056392,"GNF":0.000110461,"VUV":0.00948407,"SDG":0.0550591,"IMP":1.39462,"GEL":0.409199,"FJD":0.492005,"DOP":0.0200321,"XDR":1.45279,"MUR":0.0298063,"MMK":0.000746268,"LRD":0.00760688,"BBD":0.5,"ZMK":0.0001032,"XAU":1313.9,"VND":4.3921e-05,"UAH":0.0377145,"TMT":0.285714,"IQD":0.000843882,"BGN":0.628701,"KGS":0.0146468,"RWF":0.00117449,"BHD":2.65957,"UZS":0.000122624,"PKR":0.00904404,"MKD":0.020008,"AFN":0.0144781,"NAD":0.0834985,"BDT":0.012046,"AZN":0.588235,"SOS":0.0017094,"QAR":0.274725,"PAB":1.0,"CUC":1.0,"SVC":0.114286,"SBD":0.129299,"ALL":0.00935891,"BND":0.758944,"KWD":3.32668,"GHS":0.226547,"ZMW":0.1032,"XBT":7598.08,"NTD":0.0337206,"BYN":0.510204,"CNH":0.158111,"MRU":0.0282885,"STN":0.0500889},
  convert: function(amount, from, to) {
    return (amount * this.rates[from]) / this.rates[to];
  }
};