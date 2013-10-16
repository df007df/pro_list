class Pro < ActiveRecord::Base
	validates_presence_of :name, :localhost
	validates_uniqueness_of :name, :message => "项目名称必须唯一", :on => :create
	validates_format_of :url, :localhost,
						:with =>  /(http|https):\/\/(:?).*/ix,
						:message => "请填写合法的项目地址"


end
