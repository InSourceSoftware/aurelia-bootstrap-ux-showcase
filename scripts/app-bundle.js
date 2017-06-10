define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);

      this.value = 'Change me';
      this.checked = false;

      this.message = 'Aurelia Bootstrap UX Showcase';
    }

    App.prototype.onSubmit = function onSubmit() {
      console.log('submitted');
    };

    App.prototype.onClick = function onClick() {
      console.log('clicked');
    };

    return App;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources').plugin('aurelia-bootstrap-ux');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"page-header\">\n          <h1>${message}</h1>\n        </div>\n        <form submit.trigger=\"onSubmit()\">\n          <fieldset>\n            <legend>Log In</legend>\n            <div bs-well bs-inline-form>\n              <bs-input bs-form-group name=\"username\" type=\"text\" label=\"User Name\" sr-only=\"true\" placeholder=\"Username\" value=\"\"></bs-input>\n              <bs-input bs-form-group name=\"password\" type=\"password\" label=\"Password\" sr-only=\"true\" placeholder=\"Password\" value=\"\"></bs-input>\n              <bs-submit bs-form-group type=\"primary\" block=\"true\">Submit</bs-submit>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Form Components</legend>\n            <div bs-well>\n              <bs-input bs-form-group name=\"text1\" type=\"text\" label=\"Text 1\" placeholder=\"Some text...\" value.bind=\"value\" size=\"lg\"></bs-input>\n              <span bs-form-group>${value}</span>\n              <bs-input bs-form-group name=\"text2\" type=\"text\" label=\"Text 2\" placeholder=\"Some text...\" value=\"\" disabled=\"disabled\"></bs-input>\n              <bs-input bs-form-group name=\"text3\" type=\"text\" label=\"Text 3\" placeholder=\"Some text...\" value=\"This input is readonly and small\" size=\"sm\" readonly=\"readonly\"></bs-input>\n              <bs-input bs-form-group name=\"text4\" type=\"text\" label=\"Text 4\" placeholder=\"Some text...\" value=\"\" helptext=\"A block of help text.\"></bs-input>\n              <bs-textarea bs-form-group name=\"textarea\" label=\"Textarea\" helptext=\"Please fill in this textarea.\" value=\"Some text...\"></bs-textarea>\n              <bs-select bs-form-group name=\"select1\" label=\"Single Select\" placeholder=\"Select one...\" value=\"\" options.bind=\"[1,2,3]\"></bs-select>\n              <bs-select bs-form-group name=\"select2\" label=\"Multi Select\" multiple=\"true\" options.bind=\"[1,2,3]\"></bs-select>\n              <bs-checkbox bs-form-group name=\"checkbox1\" label=\"Checkbox 1\" value=\"1\" checked.bind=\"checked\"></bs-checkbox>\n              <div bs-form-group>\n                <span class=\"glyphicon glyphicon-${checked ? 'ok' : 'remove'}\"></span> ${checked ? 'Checked' : 'Not Checked'}\n              </div>\n              <bs-checkbox bs-form-group name=\"checkbox1\" label=\"Checkbox 2\" helptext=\"A block of help text.\" value=\"2\" checked=\"checked\" disabled=\"disabled\"></bs-checkbox>\n              <div bs-form-group>\n                <bs-checkbox name=\"checkbox2\" label=\"Checkbox 3\" value=\"1\" inline=\"true\"></bs-checkbox>\n                <bs-checkbox name=\"checkbox2\" label=\"Checkbox 4\" value=\"2\" inline=\"true\" checked=\"checked\" disabled=\"disabled\"></bs-checkbox>\n              </div>\n              <bs-radio bs-form-group name=\"radio1\" label=\"Radio 1\" model=\"1\" value=\"1\"></bs-radio>\n              <bs-radio bs-form-group name=\"radio1\" label=\"Radio 2\" model=\"2\" value=\"2\" checked=\"checked\"></bs-radio>\n              <bs-radio bs-form-group name=\"radio1\" label=\"Radio 3\" model=\"3\" value=\"3\" disabled=\"disabled\"></bs-radio>\n              <div bs-form-group>\n                <bs-radio name=\"radio2\" label=\"Radio 4\" model=\"1\" value=\"1\" inline=\"true\"></bs-radio>\n                <bs-radio name=\"radio2\" label=\"Radio 5\" model=\"2\" value=\"2\" inline=\"true\" checked=\"checked\"></bs-radio>\n                <bs-radio name=\"radio2\" label=\"Radio 6\" model=\"3\" value=\"3\" inline=\"true\" disabled=\"disabled\"></bs-radio>\n              </div>\n              <div bs-form-group>\n                <bs-button type=\"default\" click.trigger=\"onClick()\">Default</bs-button>\n                <bs-button type=\"primary\" click.trigger=\"onClick()\">Primary</bs-button>\n                <bs-button type=\"success\" icon=\"ok-sign\" click.trigger=\"onClick()\">Success</bs-button>\n                <bs-button type=\"info\" icon=\"info-sign\" click.trigger=\"onClick()\">Info</bs-button>\n                <bs-button type=\"warning\" icon=\"exclamation-sign\" click.trigger=\"onClick()\">Warning</bs-button>\n                <bs-button type=\"danger\" icon=\"ban-circle\" click.trigger=\"onClick()\">Danger</bs-button>\n                <bs-button type=\"link\" icon=\"link\" click.trigger=\"onClick()\">Link</bs-button>\n              </div>\n            </div>\n          </fieldset>\n          <fieldset>\n            <legend>Components</legend>\n            <div bs-well bs-button-toolbar>\n              <div bs-button-group>\n                <bs-button icon=\"align-left\"></bs-button>\n                <bs-button icon=\"align-center\"></bs-button>\n                <bs-button icon=\"align-right\"></bs-button>\n                <bs-button icon=\"align-justify\"></bs-button>\n              </div>\n              <div bs-button-group>\n                <bs-button>1</bs-button>\n                <bs-button>2</bs-button>\n                <bs-button>3</bs-button>\n                <bs-button>4</bs-button>\n              </div>\n            </div>\n            <div bs-well bs-button-toolbar>\n              <bs-button size=\"lg\" type=\"default\" click.trigger=\"onClick()\">Large</bs-button>\n              <bs-button size=\"md\" type=\"default\" click.trigger=\"onClick()\">Medium</bs-button>\n              <bs-button size=\"sm\" type=\"default\" click.trigger=\"onClick()\">Small</bs-button>\n              <bs-button size=\"xs\" type=\"default\" click.trigger=\"onClick()\">Extra Small</bs-button>\n            </div>\n            <div bs-well bs-button-toolbar>\n              <div bs-button-group>\n                <bs-button type=\"default\" active=\"true\" click.trigger=\"onClick()\">Default</bs-button>\n                <bs-button type=\"primary\" disabled=\"disabled\" click.trigger=\"onClick()\">Primary</bs-button>\n                <bs-button type=\"success\" icon=\"ok-sign\" click.trigger=\"onClick()\">Success</bs-button>\n                <bs-button type=\"info\" icon=\"info-sign\" click.trigger=\"onClick()\">Info</bs-button>\n                <bs-button type=\"warning\" icon=\"exclamation-sign\" click.trigger=\"onClick()\">Warning</bs-button>\n                <bs-button type=\"danger\" icon=\"ban-circle\" click.trigger=\"onClick()\">Danger</bs-button>\n              </div>\n            </div>\n            <div bs-well bs-button-toolbar>\n              <div bs-button-group>\n                <bs-drop-button type=\"default\" click.trigger=\"onClick()\">Default</bs-drop-button>\n                <ul bs-dropdown-menu>\n                  <li><a href=\"#\">Action</a></li>\n                  <li><a href=\"#\">Another action</a></li>\n                  <li><a href=\"#\">Something else here</a></li>\n                  <li role=\"separator\" class=\"divider\"></li>\n                  <li><a href=\"#\">Separated link</a></li>\n                </ul>\n              </div>\n              <div bs-button-group>\n                <bs-drop-button type=\"primary\" click.trigger=\"onClick()\">Primary</bs-drop-button>\n                <ul bs-dropdown-menu>\n                  <li><a href=\"#\">Action</a></li>\n                  <li><a href=\"#\">Another action</a></li>\n                  <li><a href=\"#\">Something else here</a></li>\n                  <li role=\"separator\" class=\"divider\"></li>\n                  <li><a href=\"#\">Separated link</a></li>\n                </ul>\n              </div>\n              <div bs-button-group>\n                <bs-drop-button type=\"success\" click.trigger=\"onClick()\">Success</bs-drop-button>\n                <ul bs-dropdown-menu>\n                  <li><a href=\"#\">Action</a></li>\n                  <li><a href=\"#\">Another action</a></li>\n                  <li><a href=\"#\">Something else here</a></li>\n                  <li role=\"separator\" class=\"divider\"></li>\n                  <li><a href=\"#\">Separated link</a></li>\n                </ul>\n              </div>\n              <div bs-button-group>\n                <bs-drop-button type=\"info\" click.trigger=\"onClick()\">Info</bs-drop-button>\n                <ul bs-dropdown-menu>\n                  <li><a href=\"#\">Action</a></li>\n                  <li><a href=\"#\">Another action</a></li>\n                  <li><a href=\"#\">Something else here</a></li>\n                  <li role=\"separator\" class=\"divider\"></li>\n                  <li><a href=\"#\">Separated link</a></li>\n                </ul>\n              </div>\n              <div bs-button-group>\n                <bs-drop-button type=\"warning\" click.trigger=\"onClick()\">Warning</bs-drop-button>\n                <ul bs-dropdown-menu>\n                  <li><a href=\"#\">Action</a></li>\n                  <li><a href=\"#\">Another action</a></li>\n                  <li><a href=\"#\">Something else here</a></li>\n                  <li role=\"separator\" class=\"divider\"></li>\n                  <li><a href=\"#\">Separated link</a></li>\n                </ul>\n              </div>\n              <div bs-button-group>\n                <bs-drop-button type=\"danger\" click.trigger=\"onClick()\">Danger</bs-drop-button>\n                <ul bs-dropdown-menu>\n                  <li><a href=\"#\">Action</a></li>\n                  <li><a href=\"#\">Another action</a></li>\n                  <li><a href=\"#\">Something else here</a></li>\n                  <li role=\"separator\" class=\"divider\"></li>\n                  <li><a href=\"#\">Separated link</a></li>\n                </ul>\n              </div>\n            </div>\n            <div bs-well bs-button-toolbar>\n              <div bs-button-group>\n                <bs-button type=\"default\" click.trigger=\"onClick()\">Default</bs-button>\n                <bs-drop-button type=\"default\"></bs-drop-button>\n                <ul bs-dropdown-menu>\n                  <li><a href=\"#\">Action</a></li>\n                  <li><a href=\"#\">Another action</a></li>\n                  <li><a href=\"#\">Something else here</a></li>\n                  <li role=\"separator\" class=\"divider\"></li>\n                  <li><a href=\"#\">Separated link</a></li>\n                </ul>\n              </div>\n              <div bs-button-group>\n                <bs-button type=\"primary\" click.trigger=\"onClick()\">Primary</bs-button>\n                <bs-drop-button type=\"primary\"></bs-drop-button>\n                <ul bs-dropdown-menu>\n                  <li><a href=\"#\">Action</a></li>\n                  <li><a href=\"#\">Another action</a></li>\n                  <li><a href=\"#\">Something else here</a></li>\n                  <li role=\"separator\" class=\"divider\"></li>\n                  <li><a href=\"#\">Separated link</a></li>\n                </ul>\n              </div>\n              <div bs-button-group>\n                <bs-button type=\"success\" click.trigger=\"onClick()\">Success</bs-button>\n                <bs-drop-button type=\"success\"></bs-drop-button>\n                <ul bs-dropdown-menu>\n                  <li><a href=\"#\">Action</a></li>\n                  <li><a href=\"#\">Another action</a></li>\n                  <li><a href=\"#\">Something else here</a></li>\n                  <li role=\"separator\" class=\"divider\"></li>\n                  <li><a href=\"#\">Separated link</a></li>\n                </ul>\n              </div>\n              <div bs-button-group>\n                <bs-button type=\"info\" click.trigger=\"onClick()\">Info</bs-button>\n                <bs-drop-button type=\"info\"></bs-drop-button>\n                <ul bs-dropdown-menu>\n                  <li><a href=\"#\">Action</a></li>\n                  <li><a href=\"#\">Another action</a></li>\n                  <li><a href=\"#\">Something else here</a></li>\n                  <li role=\"separator\" class=\"divider\"></li>\n                  <li><a href=\"#\">Separated link</a></li>\n                </ul>\n              </div>\n              <div bs-button-group>\n                <bs-button type=\"warning\" click.trigger=\"onClick()\">Warning</bs-button>\n                <bs-drop-button type=\"warning\"></bs-drop-button>\n                <ul bs-dropdown-menu>\n                  <li><a href=\"#\">Action</a></li>\n                  <li><a href=\"#\">Another action</a></li>\n                  <li><a href=\"#\">Something else here</a></li>\n                  <li role=\"separator\" class=\"divider\"></li>\n                  <li><a href=\"#\">Separated link</a></li>\n                </ul>\n              </div>\n              <div bs-button-group>\n                <bs-button type=\"danger\" click.trigger=\"onClick()\">Danger</bs-button>\n                <bs-drop-button type=\"danger\"></bs-drop-button>\n                <ul bs-dropdown-menu>\n                  <li><a href=\"#\">Action</a></li>\n                  <li><a href=\"#\">Another action</a></li>\n                  <li><a href=\"#\">Something else here</a></li>\n                  <li role=\"separator\" class=\"divider\"></li>\n                  <li><a href=\"#\">Separated link</a></li>\n                </ul>\n              </div>\n            </div>\n          </fieldset>\n        </form>\n      </div>\n    </div>\n  </div>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map