import 'jquery';
import '@popperjs/core';
import 'bootstrap';

import './index.scss';

export function ProviderButtonOnClick(btn) {
  window.setTimeout(() => ShowSpinner(), 1000);
  document.getElementById('providerUri').value = btn.value;
  RequestHealthCheck();
}

function RequestHealthCheck() {
  var req = new XMLHttpRequest();
  req.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        document.getElementById('external-account').submit();
      } else {
        setTimeout(() => RequestHealthCheck(), 1000);
      }
    }
  };
  req.open('GET', '/healthcheck', true);
  req.send();
}

function ShowSpinner() {
  const main = document.getElementById('main-content');
  var spinnerBackdrop = document.createElement('div');
  spinnerBackdrop.id = 'spinnerBackdrop';
  main.appendChild(spinnerBackdrop);

  var spinner = document.createElement('div');
  spinner.id = 'spinner';

  var spinnerMessage = document.createElement('div');
  spinnerMessage.id = 'spinnerMessage';
  spinnerMessage.innerHTML = 'Server offline.  Warte...';
  spinnerMessage.role = 'alert';

  var spinnerSpinAnimation = document.createElement('div');
  spinnerSpinAnimation.id = 'spinnerSpinAnimation';

  var spinnerBackground = document.createElement('div');
  spinnerBackground.id = 'spinnerBackground';

  spinner.appendChild(spinnerBackground);
  spinner.appendChild(spinnerSpinAnimation);
  spinner.appendChild(spinnerMessage);
  main.appendChild(spinner);

  const buttons = document.getElementsByClassName('btn');
  for (let btn of buttons) {
    btn.disabled = true;
  }
}
