(function ($) {
  // make sure to call .chosen() on the element before calling this
  $.fn.extend({
    chosenDynamic: function (options) {

      if (typeof options !== 'object') options = {};
      if (typeof options.debounce !== 'number') options.debounce = 500;

      // loop over all the dom elements
      return this.each(function () {

        var select = $(this);
        var chosenContainer = select.next('.chosen-container');

        // return early if we're not dealing with a chosen element
        if (chosenContainer.length === 0) return;

        var dynamicOptionValue = "", updateTimeout = null;

        // find the input
        chosenContainer.find('.chosen-search input').on('keyup', function () {

          var value = this.value, input = $(this);

          // only add the option if one with the same name doesn't already exist
          if (select.find('option[value="' + value + '"]').length == 0) {

            // clear the old timeout
            if (updateTimeout) window.clearTimeout(updateTimeout);

            // remove the old dynamic option
            select.find('option[value="' + dynamicOptionValue + '"]').remove();

            // add the new option
            select.prepend($('<option>').val(value).html(value));

            // save the name of the dynamic option, which we use to delete it later
            dynamicOptionValue = this.value;

            // update the selected value, we also need to set the inputs
            // value here as well, as it gets cleared on "chosen:updated"
            // we also need to dispatch the keyup event, so that matched options get shown
            updateTimeout = window.setTimeout(function () {
              select.val(value);
              select.trigger('chosen:updated');
              input.val(value);
              input.trigger('keyup');
            }, options.debounce);
          }
        });
      });
    }
  });
})(jQuery);
