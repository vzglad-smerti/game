var _ = {

  log: {
    set: function(type, message) {
      var date = new Date();
      switch (type) {
        case "info":
          console.info(date + "   " + message);
          break;

        case "warn":
          console.warn(date + "   " + message);
          break;

        case "error":
          console.error(date + "   " + message);
          break;
      };
    }
  },

  modules: {
    name: function(name) {
      if (_.modules[name] == undefined) {
        _.modules[name] = {};
        return _.modules[name];
      } else {
        console.warn("Конфликт имён " + name);
        return false;
      }
    },

    load: function(name) {
      if (_.modules[name] == undefined) {

        var ret = $.ajax({
          url: "/js/modules/" + name + "/" + name + ".js",
          async: false
        }).responseText;
        if (_.modules[name] == undefined) {
          eval(ret);
        }
      }
      return _.modules[name];
    }
  },

  expansion: {
    name: function(name) {
      if (this[name] == undefined) {
        this[name] = {};
        return this[name];
      } else {
        console.warn("Конфликт имён " + name);
        return false;
      }
    },

    load: function(name) {
      if (this[name] == undefined) {
        var ret = $.ajax({
          url: "/js/kernel/expansion/" + name + "/" + name + ".js",
          async: false
        }).responseText;
        if (this[name] == undefined) {
          eval(ret);
        }
      }
      return this[name];
    }
  },
  css_r: {},
  css_load: function(url) {
    if (this.css_r[url] == undefined) {
      var data = localStorage.getItem(url);
      if (data) {
        $("head").append("<style>" + data + "</style>");
      } else {
        var ret = $.ajax({
          url: url,
          async: false
        }).responseText;

        try {
          localStorage.setItem(url, ret);
        } catch (e) {
          if (e == QUOTA_EXCEEDED_ERR) {
            localStorage.clear();
            localStorage.setItem(url, ret);
          } else {
            _.log.set("error", e);
          }
        }
        $("head").append("<style>" + ret + "</style>");
      }
      this.css_r[url] = 0;
    }
  }
};