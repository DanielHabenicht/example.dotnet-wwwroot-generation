function IdPSelectLanguages() {
    this.langBundles = {
      en: {
        'fatal.divMissing': '<div> specified  as "insertAtDiv" could not be located in the HTML',
        'fatal.noXMLHttpRequest': 'Browser does not support XMLHttpRequest, unable to load IdP selection data',
        'fatal.wrongProtocol':
          'Policy supplied to DS was not "urn:oasis:names:tc:SAML:profiles:SSO:idpdiscovery-protocol:single"',
        'fatal.wrongEntityId': 'entityId supplied by SP did not match configuration',
        'fatal.noData': 'Metadata download returned no data',
        'fatal.loadFailed': 'Failed to download metadata from ',
        'fatal.noparms': 'No parameters to discovery session and no defaultReturn parameter configured',
        'fatal.noReturnURL': 'No URL return parameter provided',
        'fatal.badProtocol': 'Return parameter must start with https:// or http://',
        'fatal.badReturnString': 'Return parameter is not whitelisted',
        'idpPreferred.label': 'Use a suggested selection:',
        'idpEntry.label': "Or enter your organization's name",
        'idpEntry.NoPreferred.label': "Enter your organization's name",
        'idpList.label': 'Or select your organization from the list below',
        'idpList.NoPreferred.label': 'Select your organization from the list below',
        'idpList.defaultOptionLabel': 'Please select your organization...',
        'idpList.showList': 'Allow me to pick from a list',
        'idpList.showSearch': 'Allow me to specify the site',
        'submitButton.label': 'Continue',
        helpText: 'Help',
        defaultLogoAlt: 'DefaultLogo',
        'autoFollow.message': 'Always follows this selection',
        'autoFollow.never': 'Never',
        'autoFollow.time0': 'One day',
        'autoFollow.time1': '3 months',
        'autoFollow.time2': '9 months',
      },
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
        'idpEntry.NoPreferred.label': 'Namen (oder Teile davon) der Institution angeben:',
        'idpList.label': 'Oder w\u00e4hlen Sie Ihre Institution aus einer Liste:',
        'idpList.NoPreferred.label': 'Institution aus folgender Liste w\u00e4hlen:',
        'idpList.defaultOptionLabel': 'W\u00e4hlen Sie Ihre Institution aus...',
        'idpList.showList': 'Institution aus einer Liste w\u00e4hlen',
        'idpList.showSearch': 'Institution selbst angeben',
        'submitButton.label': 'OK',
        helpText: 'Hilfe',
        defaultLogoAlt: 'Standard logo',
        'autoFollow.message': 'Auswahl merken und diesen Dialog nicht mehr anzeigen',
        'autoFollow.never': 'Nicht merken',
        'autoFollow.time0': 'Nur f\u00fcr Heute',
        'autoFollow.time1': 'Drei Monate lang',
        'autoFollow.time2': 'Neun Monate lang',
      },
      ja: {
        'fatal.divMissing': '"insertAtDiv" の ID を持つ <div> が HTML 中に存在しません',
        'fatal.noXMLHttpRequest': 'ブラウザが XMLHttpRequest をサポートしていないので IdP 情報を取得できません',
        'fatal.wrongProtocol':
          'DSへ渡された Policy パラメータが "urn:oasis:names:tc:SAML:profiles:SSO:idpdiscovery-protocol:single" ではありません',
        'fatal.wrongEntityId': 'SP から渡された entityId が設定値と異なります',
        'fatal.noData': 'メタデータが空です',
        'fatal.loadFailed': '次の URL からメタデータをダウンロードできませんでした: ',
        'fatal.noparms': 'DSにパラメータが渡されておらず defaultReturn も設定されていません',
        'fatal.noReturnURL': '戻り URL が指定されていません',
        'fatal.badProtocol': '戻り URL は https:// か http:// で始まらなければなりません',
        'idpPreferred.label': '選択候補の IdP:',
        'idpEntry.label': 'もしくはあなたの所属機関名を入力してください',
        'idpEntry.NoPreferred.label': 'あなたの所属機関名を入力してください',
        'idpList.label': 'もしくはあなたの所属機関を選択してください',
        'idpList.NoPreferred.label': 'あなたの所属機関を一覧から選択してください',
        'idpList.defaultOptionLabel': '所属機関を選択してください...',
        'idpList.showList': '一覧から選択する',
        'idpList.showSearch': '機関名を入力する',
        'submitButton.label': '選択',
        'autoFollow.message': '次の期間選択した機関に自動的に遷移する:',
        'autoFollow.never': '自動遷移しない',
        'autoFollow.time0': '1日',
        'autoFollow.time1': '3か月',
        'autoFollow.time2': '9か月',
        'fatal.badReturnString': '戻り URL が不正です',
        helpText: 'ヘルプ',
        defaultLogoAlt: 'ロゴ未設定',
      },
      'pt-br': {
        'fatal.divMissing': 'A tag <div> com "insertAtDiv" não foi encontrada no arquivo HTML',
        'fatal.noXMLHttpRequest':
          'Seu navegador não suporta "XMLHttpRequest", impossível de carregador os dados do IdP selecionado',
        'fatal.wrongProtocol':
          'A política "Policy" fornecida para o DS não foi "urn:oasis:names:tc:SAML:profiles:SSO:idpdiscovery-protocol:single"',
        'fatal.wrongEntityId': 'entityId oferecido pelo SP não confere com o da configuração',
        'fatal.noData': 'O arquivo de metadados não retornou nada;',
        'fatal.loadFailed': 'Falhou ao realizar download do metadado de ',
        'fatal.noparms': 'Sem parâmetros para sessão de descoberta e sem parâmetro "defaultReturn" configurado',
        'fatal.noReturnURL': 'Não foi definida um endereço (URL) de retorno no parâmetro',
        'fatal.badProtocol': 'Retorno do endereço requisitado deve começar com https:// ou http://',
        'idpPreferred.label': 'Use estas Instituições sugeridas: ',
        'idpEntry.label': 'Ou informe o nome da sua Instituição',
        'idpEntry.NoPreferred.label': 'Informe o nome da sua Instituição',
        'idpList.label': 'Ou selecione sua Instituição através da lista abaixo',
        'idpList.NoPreferred.label': 'Selecione sua Instituição através da lista abaixo',
        'idpList.defaultOptionLabel': 'Por favor, selecione sua Instituição: ',
        'idpList.showList': 'Permitir que eu escolha um IdP através de uma lista',
        'idpList.showSearch': 'Permitir que eu especifique o IdP',
        'submitButton.label': 'Continuar ',
        helpText: 'Ajuda',
        defaultLogoAlt: 'Logo padrão',
      },
    };
  }
  function TypeAheadControl(l, f, j, g, i, b, h, e, a, c, d, k) {
    this.elementList = l;
    this.textBox = f;
    this.origin = j;
    this.submit = g;
    this.results = 0;
    this.alwaysShow = c;
    this.maxResults = d;
    this.ie6hack = a;
    this.maxchars = i;
    this.getName = b;
    this.getEntityId = h;
    this.geticon = e;
    this.getKeywords = k;
  }
  TypeAheadControl.prototype.draw = function (b) {
    var a = this;
    this.dropDown = document.createElement('ul');
    this.dropDown.className = 'IdPSelectDropDown';
    this.dropDown.style.visibility = 'hidden';
    this.dropDown.style.width = this.textBox.offsetWidth;
    this.dropDown.current = -1;
    this.textBox.setAttribute('role', 'listbox');
    document.body.appendChild(this.dropDown);
    this.textBox.setAttribute('role', 'combobox');
    this.textBox.setAttribute('aria-controls', 'IdPSelectDropDown');
    this.textBox.setAttribute('aria-owns', 'IdPSelectDropDown');
    this.dropDown.onmouseover = function (c) {
      if (!c) {
        c = window.event;
      }
      var d;
      if (c.target) {
        d = c.target;
      }
      if (typeof d == 'undefined') {
        d = c.srcElement;
      }
      a.select(d);
    };
    this.dropDown.onmousedown = function (c) {
      if (-1 != a.dropDown.current) {
        a.textBox.value = a.results[a.dropDown.current][0];
      }
    };
    this.textBox.onkeyup = function (c) {
      if (!c) {
        c = window.event;
      }
      a.handleKeyUp(c);
    };
    this.textBox.onkeydown = function (c) {
      if (!c) {
        c = window.event;
      }
      a.handleKeyDown(c);
    };
    this.textBox.onblur = function () {
      a.hideDrop();
    };
    this.textBox.onfocus = function () {
      a.handleChange();
    };
    if (null == b || b) {
      this.textBox.focus();
    }
  };
  TypeAheadControl.prototype.getPossible = function (b) {
    var h = [];
    var j = 0;
    var f = 0;
    var e = 0;
    var g;
    var i;
    b = b.toLowerCase();
    while (f <= this.maxResults && j < this.elementList.length) {
      var a = false;
      var c = this.getName(this.elementList[j]);
      if (c.toLowerCase().indexOf(b) != -1) {
        a = true;
      }
      if (!a && this.getEntityId(this.elementList[j]).toLowerCase().indexOf(b) != -1) {
        a = true;
      }
      if (!a) {
        var d = this.getKeywords(this.elementList[j]);
        if (null != d && d.toLowerCase().indexOf(b) != -1) {
          a = true;
        }
      }
      if (a) {
        h[f] = [c, this.getEntityId(this.elementList[j]), this.geticon(this.elementList[j])];
        f++;
      }
      j++;
    }
    this.dropDown.current = -1;
    return h;
  };
  TypeAheadControl.prototype.handleKeyUp = function (b) {
    var a = b.keyCode;
    if (27 == a) {
      this.textBox.value = '';
      this.handleChange();
    } else {
      if (8 == a || 32 == a || (a >= 46 && a < 112) || a > 123) {
        this.handleChange();
      }
    }
  };
  TypeAheadControl.prototype.handleKeyDown = function (b) {
    var a = b.keyCode;
    if (38 == a) {
      this.upSelect();
    } else {
      if (40 == a) {
        this.downSelect();
      }
    }
  };
  TypeAheadControl.prototype.hideDrop = function () {
    var a = 0;
    if (null !== this.ie6hack) {
      while (a < this.ie6hack.length) {
        this.ie6hack[a].style.visibility = 'visible';
        a++;
      }
    }
    this.dropDown.style.visibility = 'hidden';
    this.textBox.setAttribute('aria-expanded', 'false');
    if (-1 == this.dropDown.current) {
      this.doUnselected();
    }
  };
  TypeAheadControl.prototype.showDrop = function () {
    var a = 0;
    if (null !== this.ie6hack) {
      while (a < this.ie6hack.length) {
        this.ie6hack[a].style.visibility = 'hidden';
        a++;
      }
    }
    this.dropDown.style.visibility = 'visible';
    this.dropDown.style.width = this.textBox.offsetWidth + 'px';
    this.textBox.setAttribute('aria-expanded', 'true');
  };
  TypeAheadControl.prototype.doSelected = function () {
    this.submit.disabled = false;
  };
  TypeAheadControl.prototype.doUnselected = function () {
    this.submit.disabled = true;
    this.textBox.setAttribute('aria-activedescendant', '');
  };
  TypeAheadControl.prototype.handleChange = function () {
    var b = this.textBox.value;
    var a = this.getPossible(b);
    if (0 === b.length || 0 === a.length || (!this.alwaysShow && this.maxResults < a.length)) {
      this.hideDrop();
      this.doUnselected();
      this.results = [];
      this.dropDown.current = -1;
    } else {
      this.results = a;
      this.populateDropDown(a);
      if (1 == a.length) {
        this.select(this.dropDown.childNodes[0]);
        this.doSelected();
      } else {
        this.doUnselected();
      }
    }
  };
  TypeAheadControl.prototype.populateDropDown = function (d) {
    this.dropDown.innerHTML = '';
    var c = 0;
    var a;
    var b;
    var f;
    while (c < d.length) {
      a = document.createElement('li');
      a.id = 'IdPSelectOption' + c;
      f = d[c][0];
      if (null !== d[c][2]) {
        b = document.createElement('img');
        b.src = d[c][2];
        b.width = 16;
        b.height = 16;
        b.alt = '';
        a.appendChild(b);
        if (f.length > this.maxchars - 2) {
          f = f.substring(0, this.maxchars - 2);
        }
        f = ' ' + f;
      } else {
        if (f.length > this.maxchars) {
          f = f.substring(0, this.maxchars);
        }
      }
      a.appendChild(document.createTextNode(f));
      a.setAttribute('role', 'option');
      this.dropDown.appendChild(a);
      c++;
    }
    var e = this.getXY();
    this.dropDown.style.left = e[0] + 'px';
    this.dropDown.style.top = e[1] + 'px';
    this.showDrop();
  };
  TypeAheadControl.prototype.getXY = function () {
    var a = this.textBox;
    var c = 0;
    var b = a.offsetHeight;
    while (a.tagName != 'BODY') {
      c += a.offsetLeft;
      b += a.offsetTop;
      a = a.offsetParent;
    }
    c += a.offsetLeft;
    b += a.offsetTop;
    return [c, b];
  };
  TypeAheadControl.prototype.select = function (b) {
    var a = 0;
    var c;
    this.dropDown.current = -1;
    this.doUnselected();
    while (a < this.dropDown.childNodes.length) {
      c = this.dropDown.childNodes[a];
      if (c == b) {
        c.className = 'IdPSelectCurrent';
        c.setAttribute('aria-selected', 'true');
        this.textBox.setAttribute('aria-activedescendant', 'IdPSelectOption' + a);
        this.doSelected();
        this.dropDown.current = a;
        this.origin.value = this.results[a][1];
        this.origin.textValue = this.results[a][0];
      } else {
        c.setAttribute('aria-selected', 'false');
        c.className = '';
      }
      a++;
    }
    this.textBox.focus();
  };
  TypeAheadControl.prototype.downSelect = function () {
    if (this.results.length > 0) {
      if (-1 == this.dropDown.current) {
        this.dropDown.current = 0;
        this.dropDown.childNodes[0].className = 'IdPSelectCurrent';
        this.dropDown.childNodes[0].setAttribute('aria-selected', 'true');
        this.textBox.setAttribute('aria-activedescendant', 'IdPSelectOption' + 0);
        this.doSelected();
        this.origin.value = this.results[0][1];
        this.origin.textValue = this.results[0][0];
      } else {
        if (this.dropDown.current < this.results.length - 1) {
          this.dropDown.childNodes[this.dropDown.current].className = '';
          this.dropDown.current++;
          this.dropDown.childNodes[this.dropDown.current].className = 'IdPSelectCurrent';
          this.dropDown.childNodes[this.dropDown.current].setAttribute('aria-selected', 'true');
          this.textBox.setAttribute('aria-activedescendant', 'IdPSelectOption' + this.dropDown.current);
          this.doSelected();
          this.origin.value = this.results[this.dropDown.current][1];
          this.origin.textValue = this.results[this.dropDown.current][0];
        }
      }
    }
  };
  TypeAheadControl.prototype.upSelect = function () {
    if (this.results.length > 0 && this.dropDown.current > 0) {
      this.dropDown.childNodes[this.dropDown.current].className = '';
      this.dropDown.current--;
      this.dropDown.childNodes[this.dropDown.current].className = 'IdPSelectCurrent';
      this.dropDown.childNodes[this.dropDown.current].setAttribute('aria-selected', 'true');
      this.textBox.setAttribute('aria-activedescendant', 'IdPSelectOption' + this.dropDown.current);
      this.doSelected();
      this.origin.value = this.results[this.dropDown.current][1];
      this.origin.textValue = this.results[this.dropDown.current][0];
    }
  };
  function IdPSelectUI() {
    var r;
    var W = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var aJ;
    var S;
    var aB;
    var default_language_direct;
    var default_language_map;
    var overwrite_language_map;
    var F;
    var n;
    var y;
    var k;
    var aw;
    var g;
    var t;
    var ab;
    var ah;
    var D;
    var ag;
    var R;
    var h;
    var K;
    var au;
    var N;
    var T;
    var al;
    var ax;
    var aq;
    var showListFirst;
    var af;
    var G;
    var Q;
    var Z;
    var P;
    var IdpEntryTile;
    var IdpListTile;
    var selectionList;
    var IDPContinueButton;
    var IdpSelectionList;
    var IdpSearchField;
  
    var aL = 'idpSelect';
    var aj = 'IdPSelect';
    var ar;
    var B = '';
    var Y = '';
    var aA = [];
    var aG = 'entityID';
    this.draw = function (aP) {
      aJ = document.getElementById(aP.insertAtDiv);
      if (!setParameters(aP)) {
        return;
      }
      if (!aJ) {
        O(getTranslation('fatal.divMissing'));
        return;
      }
      if (null != Q && null != i(Q)) {
        var aM = b();
        if (aM.length != 0) {
          var aO = aG + '=' + encodeURIComponent(aM[0]);
          if (B.indexOf('?') == -1) {
            aO = '?' + aO;
          } else {
            aO = '&' + aO;
          }
          q(aJ, B + aO);
          return;
        }
      }
      if (!f(aP.dataSource)) {
        return;
      }
      aK();
      u(aP.hiddenIdPs);
      r.sort(function (aR, aQ) {
        return aE(aR).localeCompare(aE(aQ));
      });
      var aN = ac();
      aJ.appendChild(aN);
      ar.draw(aP.setFocusTextBox);
    };
    var setParameters = function (uiParams) {
      var aN;
      D = uiParams.preferredIdP;
      ag = uiParams.maxPreferredIdPs;
      R = uiParams.helpURL;
      h = uiParams.ie6Hack;
      K = uiParams.samlIdPCookieTTL;
      al = uiParams.alwaysShow;
      ax = uiParams.maxResults;
      aq = uiParams.ignoreKeywords;
      if (uiParams.showListFirst) {
        showListFirst = uiParams.showListFirst;
      } else {
        showListFirst = false;
      }
      if (uiParams.noWriteCookie) {
        af = uiParams.noWriteCookie;
      } else {
        af = false;
      }
      if (uiParams.ignoreURLParams) {
        G = uiParams.ignoreURLParams;
      } else {
        G = false;
      }
      F = uiParams.defaultLogo;
      n = uiParams.defaultLogoWidth;
      y = uiParams.defaultLogoHeight;
      k = uiParams.minWidth;
      aw = uiParams.minHeight;
      g = uiParams.maxWidth;
      t = uiParams.maxHeight;
      ab = uiParams.bestRatio;
      if (null == uiParams.doNotCollapse) {
        ah = true;
      } else {
        ah = uiParams.doNotCollapse;
      }
      N = uiParams.maxIdPCharsButton;
      au = uiParams.maxIdPCharsDropDown;
      T = uiParams.maxIdPCharsAltTxt;
      Q = uiParams.autoFollowCookie;
      Z = uiParams.autoFollowCookieTTLs;
      var language_key;
      if (typeof navigator == 'undefined') {
        language_key = uiParams.defaultLanguage;
      } else {
        language_key = navigator.language || navigator.userLanguage || uiParams.defaultLanguage;
      }
      language_key = language_key.toLowerCase();
      if (language_key.indexOf('-') > 0) {
        aB = language_key.substring(0, language_key.indexOf('-'));
      }
      var languageBundles = new IdPSelectLanguages();
      default_language_direct = uiParams.defaultLanguage;
      // Add UIParam Dictionary to languageBundles
      if (typeof uiParams.langBundles != 'undefined' && typeof uiParams.langBundles[language_key] != 'undefined') {
        default_language_map = uiParams.langBundles[language_key];
      } else {
        if (typeof languageBundles.langBundles[language_key] != 'undefined') {
          default_language_map = languageBundles.langBundles[language_key];
        } else {
          if (typeof aB != 'undefined') {
            if (typeof uiParams.langBundles != 'undefined' && typeof uiParams.langBundles[aB] != 'undefined') {
              default_language_map = uiParams.langBundles[aB];
            } else {
              if (typeof languageBundles.langBundles[aB] != 'undefined') {
                default_language_map = languageBundles.langBundles[aB];
              }
            }
          }
        }
      }
      if (
        typeof uiParams.langBundles != 'undefined' &&
        typeof uiParams.langBundles[uiParams.defaultLanguage] != 'undefined'
      ) {
        overwrite_language_map = uiParams.langBundles[uiParams.defaultLanguage];
      } else {
        overwrite_language_map = languageBundles.langBundles[uiParams.defaultLanguage];
      }
      if (!overwrite_language_map) {
        O('No languages work');
        return false;
      }
      if (!default_language_map) {
        s('No language support for ' + language_key);
        default_language_map = overwrite_language_map;
      }
      if (uiParams.testGUI) {
        return true;
      }
      var aY = 'urn:oasis:names:tc:SAML:profiles:SSO:idpdiscovery-protocol:single';
      var a1;
      var a2 = false;
      var aR;
      var aU;
      var aQ = window;
      while (null !== aQ.parent && aQ !== aQ.parent) {
        aQ = aQ.parent;
      }
      var aW = aQ.location;
      var aS = aW.search;
      if (G || null == aS || 0 == aS.length || aS.charAt(0) != '?') {
        if (null == uiParams.defaultReturn && !G) {
          O(getTranslation('fatal.noparms'));
          return false;
        }
        aN = uiParams.myEntityID;
        B = uiParams.defaultReturn;
        if (null != uiParams.defaultReturnIDParam) {
          aG = uiParams.defaultReturnIDParam;
        }
      } else {
        aS = aS.substring(1);
        aR = aS.split('&');
        if (aR.length === 0) {
          O(getTranslation('fatal.noparms'));
          return false;
        }
        for (a1 = 0; a1 < aR.length; a1++) {
          aU = aR[a1].split('=');
          if (aU.length != 2) {
            continue;
          }
          if (aU[0] == 'entityID') {
            aN = decodeURIComponent(aU[1]);
          } else {
            if (aU[0] == 'return') {
              B = decodeURIComponent(aU[1]);
            } else {
              if (aU[0] == 'returnIDParam') {
                aG = decodeURIComponent(aU[1]);
              } else {
                if (aU[0] == 'policy') {
                  aY = decodeURIComponent(aU[1]);
                } else {
                  if (aU[0] == 'isPassive') {
                    a2 = aU[1].toUpperCase() == 'TRUE';
                  }
                }
              }
            }
          }
        }
      }
      var aM;
      if (null == uiParams.allowableProtocols) {
        aM = ['urn:oasis:names:tc:SAML:profiles:SSO:idpdiscovery-protocol:single'];
      } else {
        aM = uiParams.allowableProtocols;
      }
      var a0 = false;
      for (var a1 = 0; a1 < aM.length; a1++) {
        var aZ = aM[a1];
        if (aY == aZ) {
          a0 = true;
          break;
        }
      }
      if (!a0) {
        O(getTranslation('fatal.wrongProtocol'));
        return false;
      }
      if (uiParams.myEntityID !== null && uiParams.myEntityID != aN) {
        O(getTranslation('fatal.wrongEntityId') + '"' + aN + '" != "' + uiParams.myEntityID + '"');
        return false;
      }
      if (null === B || B.length === 0) {
        O(getTranslation('fatal.noReturnURL'));
        return false;
      }
      if (!ao(B)) {
        O(getTranslation('fatal.badProtocol'));
        return false;
      }
      if (!e(uiParams.returnWhiteList, B)) {
        ae(getTranslation('fatal.badReturnString'));
        return false;
      }
      if (a2) {
        var aP = b();
        var aV = document.getElementById(parmsSupplied.insertAtDiv);
        if (aP.length == 0) {
          q(aV, B);
          return false;
        } else {
          var aO = aG + '=' + encodeURIComponent(aP[0]);
          if (B.indexOf('?') == -1) {
            aO = '?' + aO;
          } else {
            aO = '&' + aO;
          }
          q(aV, B + aO);
          return false;
        }
      }
      a1 = B.indexOf('?');
      if (a1 < 0) {
        Y = B;
        return true;
      }
      Y = B.substring(0, a1);
      aS = B.substring(a1 + 1);
      aR = aS.split('&');
      for (a1 = 0; a1 < aR.length; a1++) {
        aU = aR[a1].split('=');
        if (aU.length != 2) {
          continue;
        }
        aU[1] = decodeURIComponent(aU[1]);
        aA.push(aU);
      }
      return true;
    };
    var aK = function () {
      var aO = [];
      var aN;
      for (aN = 0; aN < r.length; ) {
        var aM = z(r[aN]);
        if (null == aO[aM]) {
          aO[aM] = aM;
          aN = aN + 1;
        } else {
          r.splice(aN, 1);
        }
      }
    };
    var u = function (aO) {
      if (null == aO || 0 == aO.length) {
        return;
      }
      var aN;
      var aM;
      for (aN = 0; aN < aO.length; aN++) {
        for (aM = 0; aM < r.length; aM++) {
          if (z(r[aM]) == aO[aN]) {
            r.splice(aM, 1);
            break;
          }
        }
      }
    };
    var ao = function (aN) {
      if (null === aN) {
        return false;
      }
      var aM = '://';
      var aO = aN.indexOf(aM);
      if (aO < 0) {
        return false;
      }
      aN = aN.substring(0, aO);
      if (aN == 'http' || aN == 'https') {
        return true;
      }
      return false;
    };
    var e = function (aM, aN) {
      if (null == aM) {
        return true;
      }
      for (var aO = 0; aO < aM.length; aO++) {
        var aP = new RegExp(aM[aO]);
        if (aP.test(aN)) {
          return true;
        }
      }
      return false;
    };
    var aI = function () {
      if (null == navigator) {
        return false;
      }
      var aM = navigator.appName;
      if (null == aM) {
        return false;
      }
      return aM == 'Microsoft Internet Explorer';
    };
    var q = function (aN, aO) {
      var aM = document.createElement('a');
      aM.href = aO;
      aN.appendChild(aM);
      aM.click();
    };
    var f = function (aP) {
      var aO = null;
      try {
        aO = new XMLHttpRequest();
      } catch (aN) {}
      if (null == aO) {
        try {
          aO = new ActiveXObject('Microsoft.XMLHTTP');
        } catch (aN) {}
      }
      if (null == aO) {
        try {
          aO = new ActiveXObject('MSXML2.XMLHTTP.3.0');
        } catch (aN) {}
      }
      if (null == aO) {
        O(getTranslation('fatal.noXMLHttpRequest'));
        return false;
      }
      if (aI()) {
        aP += '?random=' + Math.random() * 1000000;
      }
      aO.open('GET', aP, false);
      if (typeof aO.overrideMimeType == 'function') {
        aO.overrideMimeType('application/json');
      }
      aO.send(null);
      if (aO.status == 200) {
        var aM = aO.responseText;
        if (aM === null) {
          O(getTranslation('fatal.noData'));
          return false;
        }
        r = JSON.parse(aM);
      } else {
        O(getTranslation('fatal.loadFailed') + aP);
        return false;
      }
      return true;
    };
    var ad = function (aM) {
      for (var aN = 0; aN < r.length; aN++) {
        if (z(r[aN]) == aM) {
          return r[aN];
        }
      }
      return null;
    };
    var H = function (aT, aN) {
      var aS = function (aW) {
        var aU = null;
        var aV;
        if (null == aT.Logos) {
          return null;
        }
        for (aV in aT.Logos) {
          if (
            aT.Logos[aV].lang == aW &&
            aT.Logos[aV].width != null &&
            aT.Logos[aV].width >= k &&
            aT.Logos[aV].height != null &&
            aT.Logos[aV].height >= aw
          ) {
            if (aU === null) {
              aU = aT.Logos[aV];
            } else {
              me = Math.abs(ab - Math.log(aT.Logos[aV].width / aT.Logos[aV].height));
              him = Math.abs(ab - Math.log(aU.width / aU.height));
              if (him > me) {
                aU = aT.Logos[aV];
              }
            }
          }
        }
        return aU;
      };
      var aP = null;
      var aO = document.createElement('img');
      am(aO, 'IdPImg');
      aP = aS(S);
      if (null === aP && typeof aB != 'undefined') {
        aP = aS(aB);
      }
      if (null === aP) {
        aP = aS(null);
      }
      if (null === aP) {
        aP = aS(default_language_direct);
      }
      if (null === aP) {
        if (!aN) {
          return null;
        }
        aO.src = F;
        aO.width = n;
        aO.height = y;
        aO.alt = getTranslation('defaultLogoAlt');
        return aO;
      }
      aO.src = aP.value;
      var aQ = aE(aT);
      if (aQ.length > T) {
        aQ = aQ.substring(0, T) + '...';
      }
      aO.alt = aQ;
      var aM = aP.width;
      var aR = aP.height;
      if (aM > g) {
        aR = (g / aM) * aR;
        aM = g;
      }
      if (aR > t) {
        aM = (t / aR) * aM;
        aR = t;
      }
      aO.setAttribute('width', aM);
      aO.setAttribute('height', aR);
      return aO;
    };
    var ac = function () {
      var referenceNode = ap('IdPSelector');
      var aM;
      aM = aC(referenceNode);
      CreateEntryTile(referenceNode, aM);
      CreateListTile(referenceNode, aM);
      if (null != Q) {
        C(referenceNode);
      }
      return referenceNode;
    };
    var M = function (aO, aV, aN) {
      var aM = ap(undefined, 'PreferredIdPButton');
      var aU = document.createElement('a');
      var aT = aG + '=' + encodeURIComponent(z(aO));
      var aP = B;
      var aR = H(aO, aN);
      if (aP.indexOf('?') == -1) {
        aT = '?' + aT;
      } else {
        aT = '&' + aT;
      }
      aU.href = aP + aT;
      aU.onclick = function () {
        aH(z(aO));
      };
      if (null != aR) {
        var aW = ap(undefined, 'PreferredIdPImg');
        aW.appendChild(aR);
        aU.appendChild(aW);
      }
      var aS = ap(undefined, 'TextDiv');
      var aQ = aE(aO);
      if (aQ.length > N) {
        aQ = aQ.substring(0, N) + '...';
      }
      aM.title = aQ;
      aS.appendChild(document.createTextNode(aQ));
      aU.appendChild(aS);
      aM.appendChild(aU);
      return aM;
    };
    var aF = function (aM, aP) {
      var aO = ap(undefined, 'TextDiv');
      var aN = document.createTextNode(getTranslation(aP));
      aO.appendChild(aN);
      aM.appendChild(aO);
    };
    var a = function (aM, aO) {
      if (null === aO || 0 === aO.length || '-' == aO.value) {
        return;
      }
      var aN = 0;
      while (aN < aM.options.length) {
        if (aM.options[aN].value == aO) {
          aM.options[aN].selected = true;
          break;
        }
        aN++;
      }
    };
    var aC = function (aR) {
      var aQ = L();
      if (0 === aQ.length) {
        return false;
      }
      var aM = ah;
      for (var aO = 0; aO < ag && aO < aQ.length; aO++) {
        if (aQ[aO] && H(aQ[aO], false)) {
          aM = true;
        }
      }
      var aP;
      if (aM) {
        aP = ap('PreferredIdPTile');
      } else {
        aP = ap('PreferredIdPTileNoImg');
      }
      aF(aP, 'idpPreferred.label');
      for (var aO = 0; aO < ag && aO < aQ.length; aO++) {
        if (aQ[aO]) {
          var aN = M(aQ[aO], aO, aM);
          aP.appendChild(aN);
        }
      }
      aR.appendChild(aP);
      return true;
    };
    var createForm = function () {
      var aN = document.createElement('form');
      IdpEntryTile.appendChild(aN);
      aN.action = Y;
      aN.method = 'GET';
      aN.setAttribute('autocomplete', 'OFF');
      var aM = 0;
      for (aM = 0; aM < aA.length; aM++) {
        var aO = document.createElement('input');
        aO.setAttribute('type', 'hidden');
        aO.name = aA[aM][0];
        aO.value = aA[aM][1];
        aN.appendChild(aO);
      }
      return aN;
    };
    var CreateEntryTile = function (referenceNode, aN) {
      IdpEntryTile = ap('IdPEntryTile');
      if (showListFirst) {
        IdpEntryTile.style.display = 'none';
      }
      var label = document.createElement('label');
      label.setAttribute('for', aL + 'Input');
      if (aN) {
        aF(label, 'idpEntry.label');
      } else {
        aF(label, 'idpEntry.NoPreferred.label');
      }
      var searchForm = createForm();
      searchForm.appendChild(label);
      var searchField = document.createElement('input');
      searchForm.appendChild(searchField);
      searchField.type = 'text';
      l(searchField, 'Input');
      var hiddenProviderUriField = document.createElement('input');
      hiddenProviderUriField.setAttribute('type', 'hidden');
      searchForm.appendChild(hiddenProviderUriField);
      hiddenProviderUriField.name = aG;
      hiddenProviderUriField.value = '-';
      IdpSearchField = searchField;
      var aP = switchBetweenSelectAndSearchField('Select');
      aP.disabled = true;
      searchForm.appendChild(aP);
      searchForm.onsubmit = function () {
        if (
          null === hiddenProviderUriField.value ||
          0 === hiddenProviderUriField.value.length ||
          '-' == hiddenProviderUriField.value
        ) {
          return false;
        }
        searchField.value = hiddenProviderUriField.textValue;
        aH(hiddenProviderUriField.value);
        return true;
      };
      ar = new TypeAheadControl(r, searchField, hiddenProviderUriField, aP, au, aE, z, ak, h, al, ax, I);
      var IdPSelectSearchDropDownToggle = document.createElement('a');
      IdPSelectSearchDropDownToggle.appendChild(document.createTextNode(getTranslation('idpList.showList')));
      IdPSelectSearchDropDownToggle.href = '#';
      am(IdPSelectSearchDropDownToggle, 'DropDownToggle');
      IdPSelectSearchDropDownToggle.onclick = function () {
        IdpEntryTile.style.display = 'none';
        a(selectionList, hiddenProviderUriField.value);
        IdpListTile.style.display = '';
        IdpSelectionList.focus();
        return false;
      };
      IdpEntryTile.appendChild(IdPSelectSearchDropDownToggle);
      x(IdpEntryTile);
      referenceNode.appendChild(IdpEntryTile);
    };
    var CreateListTile = function (aM, aP) {
      IdpListTile = ap('IdPListTile');
      if (!showListFirst) {
        IdpListTile.style.display = 'none';
      }
      var aT = document.createElement('label');
      aT.setAttribute('for', aL + 'Selector');
      if (aP) {
        aF(aT, 'idpList.label');
      } else {
        aF(aT, 'idpList.NoPreferred.label');
      }
      selectionList = document.createElement('select');
      l(selectionList, 'Selector');
      selectionList.name = aG;
      IdpListTile.appendChild(selectionList);
      var defaultOption = createOption('-', getTranslation('idpList.defaultOptionLabel'));
      defaultOption.selected = true;
      selectionList.appendChild(defaultOption);
      var aO;
      for (var aQ = 0; aQ < r.length; aQ++) {
        aO = r[aQ];
        defaultOption = createOption(z(aO), aE(aO));
        selectionList.appendChild(defaultOption);
      }
      var aN = createForm();
      aN.appendChild(aT);
      aN.appendChild(selectionList);
      aN.onsubmit = function () {
        if (selectionList.selectedIndex < 1) {
          return false;
        }
        aH(selectionList.options[selectionList.selectedIndex].value);
        return true;
      };
      IdpSelectionList = selectionList;
      var aR = switchBetweenSelectAndSearchField('List');
      IDPContinueButton = aR;
      aN.appendChild(aR);
      IdpListTile.appendChild(aN);
      var IdPSelectListSelectionDropDownToggle = document.createElement('a');
      IdPSelectListSelectionDropDownToggle.appendChild(document.createTextNode(getTranslation('idpList.showSearch')));
      IdPSelectListSelectionDropDownToggle.href = '#';
      am(IdPSelectListSelectionDropDownToggle, 'DropDownToggle');
      IdPSelectListSelectionDropDownToggle.onclick = function () {
        IdpEntryTile.style.display = '';
        IdpListTile.style.display = 'none';
        IdpSearchField.focus();
        return false;
      };
      IdpListTile.appendChild(IdPSelectListSelectionDropDownToggle);
      x(IdpListTile);
      aM.appendChild(IdpListTile);
    };
    var C = function (aP) {
      var aN = 'IdPSelectAutoDisp';
      autoDispatchTile = ap(undefined, 'autoDispatchArea');
      autoDispatchTile.appendChild(document.createTextNode(getTranslation('autoFollow.message')));
      var aM = document.createElement('input');
      aM.setAttribute('type', 'radio');
      aM.setAttribute('checked', 'checked');
      aM.setAttribute('name', aN);
      aM.onclick = function () {
        E(0);
      };
      div = ap(undefined, 'autoDispatchTile');
      div.appendChild(aM);
      div.appendChild(document.createTextNode(getTranslation('autoFollow.never')));
      autoDispatchTile.appendChild(div);
      var aO;
      for (aO = 0; aO < Z.length; aO++) {
        aM = document.createElement('input');
        aM.setAttribute('type', 'radio');
        aM.setAttribute('name', aN);
        aM.life = Z[aO];
        aM.onclick = function () {
          var aQ = this.life;
          E(aQ);
        };
        div = ap(undefined, 'autoDispatchTile');
        div.appendChild(aM);
        div.appendChild(document.createTextNode(getTranslation('autoFollow.time' + aO)));
        autoDispatchTile.appendChild(div);
      }
      aP.appendChild(autoDispatchTile);
    };
    var switchBetweenSelectAndSearchField = function (aN) {
      var aM = document.createElement('input');
      aM.setAttribute('type', 'submit');
      aM.value = getTranslation('submitButton.label');
      aM.title = getTranslation('submitButton.title');
      l(aM, aN + 'Button');
      return aM;
    };
    var x = function (aN) {
      var aM = document.createElement('a');
      aM.href = R;
      aM.appendChild(document.createTextNode(getTranslation('helpText')));
      am(aM, 'HelpButton');
      aN.appendChild(aM);
    };
    var ap = function (aO, aM) {
      var aN = document.createElement('div');
      if (undefined !== aO) {
        l(aN, aO);
      }
      if (undefined !== aM) {
        am(aN, aM);
      }
      return aN;
    };
    var createOption = function (aN, aO) {
      var aM = document.createElement('option');
      aM.value = aN;
      if (aO.length > au) {
        aO = aO.substring(0, au);
      }
      aM.appendChild(document.createTextNode(aO));
      return aM;
    };
    var l = function (aN, aM) {
      aN.id = aL + aM;
    };
    var am = function (aN, aM) {
      aN.setAttribute('class', aj + aM);
    };
    var aD = function (aM) {
      return document.getElementById(aL + aM);
    };
    var aH = function (aM) {
      J(aM);
      at(P);
    };
    var getTranslation = function (translationKey) {
      var translation = overwrite_language_map[translationKey];
      if (!translation) {
        translation = default_language_map[translationKey];
      }
      if (!translation) {
        translation = 'Missing message for ' + translationKey;
      }
      return translation;
    };
    var z = function (aM) {
      return aM.entityID;
    };
    var ak = function (aO) {
      var aM;
      if (null == aO.Logos) {
        return null;
      }
      for (aM = 0; aM < aO.Logos.length; aM++) {
        var aN = aO.Logos[aM];
        if (aN.height == '16' && aN.width == '16') {
          if (
            null == aN.lang ||
            S == aN.lang ||
            (typeof aB != 'undefined' && aB == aN.lang) ||
            default_language_direct == aN.lang
          ) {
            return aN.value;
          }
        }
      }
      return null;
    };
    var aE = function (aN) {
      var aM = ay(aN.DisplayNames);
      if (null !== aM) {
        return aM;
      }
      s('No Name entry in any language for ' + z(aN));
      return z(aN);
    };
    var I = function (aN) {
      if (aq || null == aN.Keywords) {
        return null;
      }
      var aM = ay(aN.Keywords);
      return aM;
    };
    var ay = function (aM) {
      var aN;
      for (aN in aM) {
        if (aM[aN].lang == S) {
          return aM[aN].value;
        }
      }
      if (typeof aB != 'undefined') {
        for (aN in aM) {
          if (aM[aN].lang == aB) {
            return aM[aN].value;
          }
        }
      }
      for (aN in aM) {
        if (aM[aN].lang == null) {
          return aM[aN].value;
        }
      }
      for (aN in aM) {
        if (aM[aN].lang == default_language_direct) {
          return aM[aN].value;
        }
      }
      return null;
    };
    var L = function () {
      var aQ = [];
      var aP = 0;
      var aO;
      var aN;
      if (null != D) {
        for (aO = 0; aO < D.length && aO < ag; aO++) {
          aQ[aO] = ad(D[aO]);
          aP++;
        }
      }
      P = b();
      for (aO = aP, aN = 0; aN < P.length && aO < ag; aN++) {
        var aM = ad(P[aN]);
        if (typeof aQ.indexOf === 'undefined') {
          aQ.push(aM);
          aO++;
        } else {
          if (aQ.indexOf(aM) === -1) {
            aQ.push(aM);
            aO++;
          }
        }
      }
      return aQ;
    };
    var J = function (aM) {
      var aN = [];
      while (0 !== P.length) {
        var aO = P.pop();
        if (aO != aM) {
          aN.unshift(aO);
        }
      }
      aN.unshift(aM);
      P = aN;
      return;
    };
    var E = function (aO) {
      var aM;
      if (aO > 0) {
        var aN = new Date();
        var cookieTTL = aO * 24 * 60 * 60 * 1000;
        aM = new Date(aN.getTime() + cookieTTL);
      } else {
        aM = new Date(0);
      }
      document.cookie = Q + '=1;path=/;expires=' + aM.toUTCString();
    };
    var i = function (aO) {
      var aQ, aN;
      var aR;
      aR = document.cookie.split(';');
      for (aQ = 0; aQ < aR.length; aQ++) {
        var aP = aR[aQ];
        var aM = aP.indexOf('=');
        var aS = aP.substring(0, aM);
        if (aO == aS.replace(/^\s+|\s+$/g, '')) {
          return aP.substring(aM + 1);
        }
      }
      return null;
    };
    var b = function () {
      var aM = [];
      var aN;
      var aO = i('_saml_idp');
      if (aO != null) {
        aO = aO.replace(/^\s+|\s+$/g, '');
        aO = aO.replace('+', '%20');
        aO = aO.split('%20');
        for (aN = aO.length; aN > 0; aN--) {
          if (0 === aO[aN - 1].length) {
            continue;
          }
          var aP = av(decodeURIComponent(aO[aN - 1]));
          if (aP.length > 0) {
            aM.push(aP);
          }
        }
      }
      return aM;
    };
    var at = function (aR) {
      var aO = [];
      var aQ = aR.length;
      if (af) {
        return;
      }
      if (aQ > 5) {
        aQ = 5;
      }
      for (var aP = aQ; aP > 0; aP--) {
        if (aR[aP - 1].length > 0) {
          aO.push(encodeURIComponent(w(aR[aP - 1])));
        }
      }
      var aM = null;
      if (K) {
        var aN = new Date();
        var cookieTTL = K * 24 * 60 * 60 * 1000;
        aM = new Date(aN.getTime() + cookieTTL);
      }
      document.cookie =
        '_saml_idp=' + aO.join('%20') + '; path = /' + (aM === null ? '' : '; expires=' + aM.toUTCString());
    };
    var w = function (aV) {
      var aM = '',
        aQ,
        aO,
        aN,
        aU,
        aT,
        aS,
        aR;
      for (var aP = 0; aP < aV.length; ) {
        aQ = aV.charCodeAt(aP++);
        aO = aV.charCodeAt(aP++);
        aN = aV.charCodeAt(aP++);
        aU = aQ >> 2;
        aT = ((aQ & 3) << 4) + (aO >> 4);
        aS = ((aO & 15) << 2) + (aN >> 6);
        aR = aN & 63;
        if (isNaN(aO)) {
          aS = aR = 64;
        } else {
          if (isNaN(aN)) {
            aR = 64;
          }
        }
        aM += W.charAt(aU) + W.charAt(aT) + W.charAt(aS) + W.charAt(aR);
      }
      return aM;
    };
    var av = function (aP) {
      var aN = '',
        aW,
        aU,
        aS,
        aV,
        aT,
        aR,
        aQ;
      var aO = 0;
      var aM = /[^A-Za-z0-9\+\/\=]/g;
      aP = aP.replace(/[^A-Za-z0-9\+\/\=]/g, '');
      do {
        aV = W.indexOf(aP.charAt(aO++));
        aT = W.indexOf(aP.charAt(aO++));
        aR = W.indexOf(aP.charAt(aO++));
        aQ = W.indexOf(aP.charAt(aO++));
        aW = (aV << 2) | (aT >> 4);
        aU = ((aT & 15) << 4) | (aR >> 2);
        aS = ((aR & 3) << 6) | aQ;
        aN = aN + String.fromCharCode(aW);
        if (aR != 64) {
          aN = aN + String.fromCharCode(aU);
        }
        if (aQ != 64) {
          aN = aN + String.fromCharCode(aS);
        }
        aW = aU = aS = '';
        aV = aT = aR = aQ = '';
      } while (aO < aP.length);
      return aN;
    };
    var ae = function (aN) {
      if (aJ) {
        var aM = document.createTextNode(aN);
        aJ.appendChild(aM);
      } else {
        alert('FATAL (NoDiv):' + aN);
      }
    };
    var O = function (aM) {
      alert('FATAL - DISCO UI:' + aM);
      if (aJ) {
        ae(aM);
      }
    };
    var s = function () {};
  }
  new IdPSelectUI().draw(new IdPSelectUIParms());
  