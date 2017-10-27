var CONFIRM_TEXT = '确定';
var CANCEL_TEXT = '取消';

var defaults = {
  title: '提示',
  message: '',
  confirmButtonText: CONFIRM_TEXT,
  cancelButtonText: CANCEL_TEXT,
  isShowMessageBox:false,
  type:''
}

import Vue from 'vue';
import msgboxVue from './MessageBox.vue';

var MessageBoxConstructor = Vue.extend(msgboxVue);
var currentMsg, instance;

var merge = function(target) {
  for (var i = 1, j = arguments.length; i < j; i++) {
    var source = arguments[i];
    for (var prop in source) {
      if (source.hasOwnProperty(prop)) {
        var value = source[prop];
        if (value !== undefined) {
          target[prop] = value;
        }
      }
    }
  }

  return target;
};

var initInstance = function() {
  instance = new MessageBoxConstructor({
    el: document.createElement('div')
  });
};

var showNextMsg = function(options) {
  if (!instance) {
    initInstance();
  }
  if (typeof options ==='object') {
    options = merge({}, defaults, options);
    for (var prop in options) {
      if (options.hasOwnProperty(prop)) {
        instance[prop] = options[prop];
      }
    }
    document.body.appendChild(instance.$el);
  }
};

var MessageBox = function(options) {
  if (typeof options === 'string') {
    options = {
      title: options
    };
    if (arguments[1]) {
      options.message = arguments[1];
    }
    if (arguments[2]) {
      options.type = arguments[2];
    }
  }
  showNextMsg(options);
}

MessageBox.confirm = function(message, title, options) {
  if (typeof title === 'object') {
    options = title;
    title = '';
  }
  return MessageBox(merge({
    title: title,
    message: message,
    isShowMessageBox:true,
    type:'confirm'
  }, options));
};
MessageBox.alert = function(message, title, options) {
  if (typeof title === 'object') {
    options = title;
    title = '';
  }
  return MessageBox(merge({
    title: title,
    message: message,
    isShowMessageBox:true,
    type:'alert'
  }, options));
};


MessageBox.close = function() {
  if (!instance) return;
};

export default MessageBox;
export {
  MessageBox
};
