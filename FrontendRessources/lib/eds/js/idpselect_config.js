/** @class IdP Selector UI */
export default function IdPSelectUIParms() {
    //
    // Adjust the following to fit into your local configuration
    //
    this.alwaysShow = true; // If true, this will show results as soon as you start typing
    this.dataSource = '/account/providers'; // Where to get the data from

    this.defaultLanguage = 'de'; // Language to use if the browser local doesnt have a bundle
    // From https://uxwing.com/homepage-icon/
    this.defaultLogo = '/images/eds/default.png'; // Replace with your own logo
    this.defaultLogoWidth = 80;
    this.defaultLogoHeight = 80;
    this.defaultReturn = null; // If non null, then the default place to send users who are not

    // Approaching via the Discovery Protocol for example
    //this.defaultReturn = "https://example.org/Shibboleth.sso/DS?SAMLDS=1&target=https://example.org/secure";
    this.defaultReturnIDParam = null;

    // this.returnWhiteList = [ "^https:\/\/example\.org\/Shibboleth\.sso\/Login.*$" , "^https:\/\/example\.com\/Shibboleth\.sso\/Login.*$" ];
    this.returnWhiteList = [
        '^https://localhost(:[0-9]+)/[Aa]ccount(/)?.*$',
        '^https://host.testcontainers.internal(:[0-9]+)/[Aa]ccount(/)?.*$'
    ];

    this.helpURL = 'https://wiki.shibboleth.net/confluence/display/SHIB2/DSRoadmap';
    this.ie6Hack = null; // An array of structures to disable when drawing the pull down (needed to

    // handle the ie6 z axis problem
    this.insertAtDiv = 'idpSelect'; // The div where we will insert the data
    this.maxResults = 10; // How many results to show at once or the number at which to

    // start showing if alwaysShow is false
    this.myEntityID = null; // If non null then this string must match the string provided in the DS parms
    this.preferredIdP = null; // Array of entityIds to always show
    this.hiddenIdPs = null; // Array of entityIds to delete
    this.ignoreKeywords = false; // Do we ignore the <mdui:Keywords/> when looking for candidates
    this.showListFirst = false; // Do we start with a list of IdPs or just the dropdown
    this.samlIdPCookieTTL = 730; // in days
    this.setFocusTextBox = true; // Set to false to supress focus
    this.testGUI = false;

    this.autoFollowCookie = null; //  If you want auto-dispatch, set this to the cookie name to use
    this.autoFollowCookieTTLs = [1, 60, 270]; // Cookie life (in days).  Changing this requires changes to idp_select_languages

    //
    // Language support.
    //
    // The minified source provides "en", "de", "pt-br" and "jp".
    //
    // Override any of these below, or provide your own language
    //
    this.langBundles = {
        de: {
            'fatal.divMissing': 'Das notwendige Div Element fehlt',
            'fatal.noXMLHttpRequest':
                'Ihr Webbrowser unterst\u00fctzt keine XMLHttpRequests, IdP-Auswahl kann nicht geladen werden',
            'fatal.wrongProtocol':
                'DS bekam eine andere Policy als "urn:oasis:names:tc:SAML:profiles:SSO:idpdiscovery-protocol:single"',
            'fatal.wrongEntityId': 'Die entityId ist nicht korrekt',
            'fatal.noData': 'Heruntergeladene Metadata waren leer',
            'fatal.loadFailed': 'Metadaten konnten nicht heruntergeladen werden: ',
            'fatal.noparms': "Parameter f\u00fcr das Discovery Service oder 'defaultReturn' fehlen",
            'fatal.noReturnURL': 'URL return Parmeter fehlt',
            'fatal.badProtocol': 'return Request muss mit https:// oder http:// beginnen',
            'fatal.badReturnString': 'Return Parameter ist nicht auf Positivliste enthalten',
            'idpPreferred.label': 'Vorherige Auswahl:',
            'idpEntry.label': 'Oder geben Sie den Namen (oder Teile davon) an:',
            'idpEntry.NoPreferred.label': 'Namen der Organisation (oder Teile davon) angeben:',
            'idpList.label': 'Oder w\u00e4hlen Sie Ihre Organisation aus einer Liste:',
            'idpList.NoPreferred.label': 'Organisation aus folgender Liste w\u00e4hlen:',
            'idpList.defaultOptionLabel': 'W\u00e4hlen Sie Ihre Organisation aus...',
            'idpList.showList': 'Organisation aus einer Liste w\u00e4hlen',
            'idpList.showSearch': 'Organisation selbst angeben',
            'submitButton.label': 'Anmelden',
            'submitButton.title': 'Mit ausgewählter Organisation anmelden',
            helpText: 'Hilfe',
            defaultLogoAlt: 'Standard logo',
            'autoFollow.message': 'Auswahl merken und diesen Dialog nicht mehr anzeigen',
            'autoFollow.never': 'Nicht merken',
            'autoFollow.time0': 'Nur f\u00fcr Heute',
            'autoFollow.time1': 'Drei Monate lang',
            'autoFollow.time2': 'Neun Monate lang',
        },
    };

    //
    // The following should not be changed without changes to the css.  Consider them as mandatory defaults
    //
    this.maxPreferredIdPs = 3;
    this.maxIdPCharsButton = 33;
    this.maxIdPCharsDropDown = 58;
    this.maxIdPCharsAltTxt = 60;

    this.minWidth = 20;
    this.minHeight = 20;
    this.maxWidth = 115;
    this.maxHeight = 69;
    this.bestRatio = Math.log(80 / 60);
}
