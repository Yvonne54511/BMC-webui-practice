// Creating a datamodel, where "defaults" are showed when there are no datas are fetched
var PowerTelemetry = Backbone.Model.extend({
    defaults: {
        system_total_w: 3016.25,
        psu0_w: 2408,
        psu1_w: 608,
        psu2_w: 0,
        psu0_pout: 2324
    }
});