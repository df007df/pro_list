class Pro < ActiveRecord::Base
	validates_uniqueness_of :name, :message => "项目名称必须唯一", :on => :create
	validates_format_of :url, 
						:with =>  /(^$)|(^(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(([0-9]{1,5})?\/.*)?$)/ix,
						:message => "请填写合法的项目地址"


end
