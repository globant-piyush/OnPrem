var orgComponent = function() {
  this.siteName = element(by.css("input[name='sitename']"));
  this.editBtn = element(by.css('.table.table-striped tbody tr[ng-repeat] td.org-actions span.icon.icon-edit'));
  this.exportBtn = element(by.css('.org-actions .icon-edit .sticon.sticon-export-fat'));
  this.advancedOption = element(by.css(".super-admin-tab [data-target='#su-advanced']"));
  this.occupancyIcon = element(by.css(".exclamation-mark.occupancy-info"));
  
  this.realTimeOff = element(by.xpath("//div[contains(@class,'option')]//h3[contains(text(),'Realtime traffic')]/parent::div//span[@class='ui-switch']"));
  this.realTimeOn = element(by.xpath("//div[contains(@class,'option')]//h3[contains(text(),'Realtime traffic')]/parent::div//span[@class='ui-switch chosen']"));
  this.occupancyOff = element(by.xpath("//div[contains(@class,'option')]//h3[contains(text(),'Occupancy')]/parent::div//span[@class='ui-switch']"));
  this.occupancyOn = element(by.xpath("//div[contains(@class,'option')]//h3[contains(text(),'Occupancy')]/parent::div//span[@class='ui-switch chosen']"));
  this.toolTip = element(by.css('.tooltip.in.am-fade'));

};
module.exports = new orgComponent();
