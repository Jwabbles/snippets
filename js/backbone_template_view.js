var BackboneTemplateView = (function(Backbone, $) {
  'use strict';

  return Backbone.View.extend({
    initialize: function() {
      this.$element = this.$el.find('.element');
    },

    events: {
      'click .element': 'sampleFunction'
    },

    sampleFunction: function() {
      // Inset loveliness here
    }
  });
}(Backbone, jQuery));

$(document).ready(function() {
  var $bacboneTemplate = $('.backbone-template');

  if($bacboneTemplate.length) {
    new BackboneTemplateView({
      el: $bacboneTemplate.get(0)
    });
  }

  // Use this if you have multiple versions of element. Such as an acordian.
  // _.each($bacboneTemplate, function(element) {
  //   new BackboneTemplateView($.extend({
  //     el: element
  //   }));
  // })
});