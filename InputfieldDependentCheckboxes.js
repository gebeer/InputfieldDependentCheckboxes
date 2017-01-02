var InputfieldDependentCheckboxes = {

	init: function(settings) {
		this.config = {
			idcbData: null
		};
		$.extend(this.config, settings);

		var self = this;

		$.each($.parseJSON(this.config.idcbData), function(key, value) {
			self.setupActorTargetRelation(value);
		});

	},

	setupActorTargetRelation: function(data) {
		var self = this;
		var actors = this.getInputs(data.idcbActorName);
		var targets = this.getInputs(data.idcbTargetName);

		// init data-attributes and event listeners on targets
		$.each(targets, function() {
			var target = $(this);
			target.data('idcbshowfor', []);
			target.on('idcbchange', function(){
				self.showHide(target);
				// $(this).trigger('change');
			});
		});

		$.each(actors, function(){
			var actor = $(this);
			// add event listener for change and act
			actor.on('change', function() {
				self.toggleActorIdOnTargets($(this), targets);
			});
			actor.trigger('change'); // set targets visibility on page load
		});
	},

	getInputs: function(name) {
		return inputs = $('#wrap_Inputfield_' + name).find('input[type="checkbox"]');
	},

	showHide: function(elem) {
		if(elem.data('idcbshowfor').length) {
			elem.closest('li').css({'display':'block'});
		} else {
			elem.closest('li').css({'display':'none'});
		}
	},

	toggleActorIdOnTargets: function(actor, targets) {
		// get values of targets for this actor
		var actorId = parseInt(actor.val());
		var targetIds = actor.parent('label').data('idcbtargets');
		// get targets for this actor
		var actorTargets = targets.filter(function(index, elem){
			return $.inArray(parseInt($(elem).val()), targetIds) != -1;
		});
		// add/remove actor id to/from target;
		$.each(actorTargets, function(name, index) {
			var target = $(this);
			var targetData = target.data('idcbshowfor');
			// find target and add actor id if actor is checked
			if(actor.is(':checked')) {
				targetData.push(actorId);
			}
			if(!actor.is(':checked')) {
				targetData = $.grep(targetData, function(value) {
  					return value != actorId;
				});
			}
			target.data('idcbshowfor', targetData);
			// trigger change to show/hide target
			target.trigger('idcbchange');
		});
	}

};

$(document).ready(function() {
    InputfieldDependentCheckboxes.init({idcbData: config.idcbData});
});
