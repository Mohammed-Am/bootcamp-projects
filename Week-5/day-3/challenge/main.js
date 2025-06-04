  class CurrencyConverter {
            constructor() {
                this.apiKey = 'a00fac213017b8904aadc258';
                this.baseUrl = 'https://v6.exchangerate-api.com/v6';
                
                this.elements = {
                    form: document.getElementById('converterForm'),
                    amount: document.getElementById('amount'),
                    fromCurrency: document.getElementById('fromCurrency'),
                    toCurrency: document.getElementById('toCurrency'),
                    switchBtn: document.getElementById('switchBtn'),
                    convertBtn: document.getElementById('convertBtn'),
                    result: document.getElementById('result'),
                    resultAmount: document.getElementById('resultAmount'),
                    resultRate: document.getElementById('resultRate'),
                    error: document.getElementById('error'),
                    loading: document.getElementById('loading')
                };

                this.currencies = {};
                this.init();
            }

            async init() {
                await this.loadSupportedCurrencies();
                this.bindEvents();
            }

            async loadSupportedCurrencies() {
                try {
                    
                    let data = null;
                    
                    try {
                        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
                        if (response.ok) {
                            data = await response.json();
                        }
                    } catch (e) {
                        console.log('Primary API failed, trying alternative...');
                    }
                    
                    if (!data) {
                        try {
                            const response = await fetch('https://api.fxratesapi.com/latest?base=USD');
                            if (response.ok) {
                                data = await response.json();
                            }
                        } catch (e) {
                            console.log('Alternative API failed, using fallback data...');
                        }
                    }
                    
                    if (data && data.rates) {
                        this.currencies = data.rates;
                        this.currencies[data.base || 'USD'] = 1;
                    } else {
                        this.currencies = this.getFallbackCurrencies();
                    }

                    this.populateCurrencyDropdowns();
                } catch (error) {
                    console.error('Error loading currencies:', error);
                    this.currencies = this.getFallbackCurrencies();
                    this.populateCurrencyDropdowns();
                }
            }

            populateCurrencyDropdowns() {
                const sortedCurrencies = Object.keys(this.currencies).sort();
                
                this.elements.fromCurrency.innerHTML = '';
                this.elements.toCurrency.innerHTML = '';

                sortedCurrencies.forEach(currency => {
                    const option1 = new Option(currency, currency);
                    const option2 = new Option(currency, currency);
                    
                    this.elements.fromCurrency.add(option1);
                    this.elements.toCurrency.add(option2);
                });

                
                this.elements.fromCurrency.value = 'USD';
                this.elements.toCurrency.value = 'EUR';
            }

            bindEvents() {
                this.elements.form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.convertCurrency();
                });

                this.elements.switchBtn.addEventListener('click', () => {
                    this.switchCurrencies();
                });

                this.elements.amount.addEventListener('input', () => {
                    if (this.elements.amount.value && this.elements.fromCurrency.value && this.elements.toCurrency.value) {
                        this.convertCurrency();
                    }
                });

                [this.elements.fromCurrency, this.elements.toCurrency].forEach(select => {
                    select.addEventListener('change', () => {
                        if (this.elements.amount.value && this.elements.fromCurrency.value && this.elements.toCurrency.value) {
                            this.convertCurrency();
                        }
                    });
                });
            }

            getFallbackCurrencies() {
                return {
                    'USD': 1.0,      // US Dollar (base)
                    'EUR': 0.85,     // Euro
                    'GBP': 0.73,     // British Pound
                    'JPY': 110.0,    // Japanese Yen
                    'AUD': 1.35,     // Australian Dollar
                    'CAD': 1.25,     // Canadian Dollar
                    'CHF': 0.92,     // Swiss Franc
                    'CNY': 6.45,     // Chinese Yuan
                    'SEK': 8.85,     // Swedish Krona
                    'NZD': 1.42,     // New Zealand Dollar
                    'MXN': 20.15,    // Mexican Peso
                    'SGD': 1.35,     // Singapore Dollar
                    'HKD': 7.85,     // Hong Kong Dollar
                    'NOK': 8.65,     // Norwegian Krone
                    'KRW': 1180.0,   // South Korean Won
                    'TRY': 8.45,     // Turkish Lira
                    'RUB': 75.0,     // Russian Ruble
                    'INR': 74.5,     // Indian Rupee
                    'BRL': 5.25,     // Brazilian Real
                    'ZAR': 14.85,    // South African Rand
                    'PLN': 3.95,     // Polish Zloty
                    'ILS': 3.25,     // Israeli Shekel
                    'DKK': 6.35,     // Danish Krone
                    'CZK': 21.85,    // Czech Koruna
                    'HUF': 295.0,    // Hungarian Forint
                    'BGN': 1.66,     // Bulgarian Lev
                    'RON': 4.15,     // Romanian Leu
                    'HRK': 6.42,     // Croatian Kuna
                    'THB': 31.5,     // Thai Baht
                    'MYR': 4.15,     // Malaysian Ringgit
                    'PHP': 50.5,     // Philippine Peso
                    'IDR': 14250.0,  // Indonesian Rupiah
                    'VND': 23150.0,  // Vietnamese Dong
                    'AED': 3.67,     // UAE Dirham
                    'SAR': 3.75,     // Saudi Riyal
                    'QAR': 3.64,     // Qatari Riyal
                    'KWD': 0.30,     // Kuwaiti Dinar
                    'BHD': 0.38,     // Bahraini Dinar
                    'OMR': 0.38,     // Omani Rial
                    'JOD': 0.71,     // Jordanian Dinar
                    'LBP': 1507.5,   // Lebanese Pound
                    'EGP': 15.75,    // Egyptian Pound
                    'MAD': 8.95,     // Moroccan Dirham
                    'TND': 2.75,     // Tunisian Dinar
                    'DZD': 133.5,    // Algerian Dinar
                    'LYD': 4.45,     // Libyan Dinar
                    'GHS': 5.85,     // Ghanaian Cedi
                    'NGN': 411.5,    // Nigerian Naira
                    'KES': 108.5,    // Kenyan Shilling
                    'UGX': 3550.0,   // Ugandan Shilling
                    'TZS': 2315.0,   // Tanzanian Shilling
                    'ZMW': 16.25,    // Zambian Kwacha
                    'BWP': 11.15,    // Botswana Pula
                    'NAD': 14.85,    // Namibian Dollar
                    'SZL': 14.85,    // Swazi Lilangeni
                    'LSL': 14.85,    // Lesotho Loti
                    'MUR': 42.5,     // Mauritian Rupee
                    'SCR': 21.35,    // Seychellois Rupee
                    'MGA': 3950.0,   // Malagasy Ariary
                    'XOF': 558.5,    // West African CFA Franc
                    'XAF': 558.5,    // Central African CFA Franc
                    'KMF': 418.5,    // Comorian Franc
                    'DJF': 177.5,    // Djiboutian Franc
                    'SOS': 575.0,    // Somali Shilling
                    'ETB': 44.25,    // Ethiopian Birr
                    'ERN': 15.0,     // Eritrean Nakfa
                    'SDG': 55.5,     // Sudanese Pound
                    'SSP': 130.0,    // South Sudanese Pound
                    'CDF': 1995.0,   // Congolese Franc
                    'AOA': 655.0,    // Angolan Kwanza
                    'XPF': 101.5,    // CFP Franc
                    'FJD': 2.08,     // Fijian Dollar
                    'PGK': 3.52,     // Papua New Guinean Kina
                    'TOP': 2.28,     // Tongan Pa'anga
                    'WST': 2.58,     // Samoan Tala
                    'VUV': 112.5,    // Vanuatu Vatu
                    'SBD': 8.05,     // Solomon Islands Dollar
                    'NCR': 101.5,    // New Caledonian Franc
                    'TVD': 1.42,     // Tuvaluan Dollar
                    'KID': 1.42,     // Kiribati Dollar
                    'NRD': 1.42,     // Nauruan Dollar
                    'CKD': 1.42,     // Cook Islands Dollar
                    'NUD': 1.42      // Niuean Dollar
                };
            }

            async convertCurrency() {
                const amount = parseFloat(this.elements.amount.value);
                const fromCurrency = this.elements.fromCurrency.value;
                const toCurrency = this.elements.toCurrency.value;

                if (!amount || !fromCurrency || !toCurrency) {
                    this.showError('Please fill in all fields');
                    return;
                }

                if (fromCurrency === toCurrency) {
                    this.showResult(amount, amount, 1, fromCurrency, toCurrency);
                    return;
                }

                this.showLoading(true);
                this.hideError();
                this.hideResult();

                try {
                    let rate = null;
                    
                    try {
                        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
                        if (response.ok) {
                            const data = await response.json();
                            rate = data.rates[toCurrency];
                        }
                    } catch (e) {
                        console.log('Live rates unavailable, using fallback calculation...');
                    }

                    if (!rate && this.currencies[fromCurrency] && this.currencies[toCurrency]) {
                        const fromRate = this.currencies[fromCurrency];
                        const toRate = this.currencies[toCurrency];
                        rate = toRate / fromRate;
                    }

                    if (!rate) {
                        throw new Error('Exchange rate not available');
                    }

                    const convertedAmount = amount * rate;
                    this.showResult(amount, convertedAmount, rate, fromCurrency, toCurrency);

                } catch (error) {
                    this.showError('Failed to convert currency. Please try again.');
                    console.error('Conversion error:', error);
                } finally {
                    this.showLoading(false);
                }
            }

            switchCurrencies() {
                const fromValue = this.elements.fromCurrency.value;
                const toValue = this.elements.toCurrency.value;

                this.elements.fromCurrency.value = toValue;
                this.elements.toCurrency.value = fromValue;

                if (this.elements.amount.value) {
                    this.convertCurrency();
                }
            }

            showResult(originalAmount, convertedAmount, rate, fromCurrency, toCurrency) {
                this.elements.resultAmount.textContent = 
                    `${convertedAmount.toFixed(2)} ${toCurrency}`;
                this.elements.resultRate.textContent = 
                    `1 ${fromCurrency} = ${rate.toFixed(4)} ${toCurrency}`;
                
                this.elements.result.classList.add('show');
            }

            hideResult() {
                this.elements.result.classList.remove('show');
            }

            showError(message) {
                this.elements.error.textContent = message;
                this.elements.error.style.display = 'block';
            }

            hideError() {
                this.elements.error.style.display = 'none';
            }

            showLoading(show) {
                this.elements.loading.style.display = show ? 'block' : 'none';
                this.elements.convertBtn.disabled = show;
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            new CurrencyConverter();
        });