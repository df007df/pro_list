class Admin::LogController < ApplicationController
	layout 'admin'
	def index


	end	


	def list
		@pro = Pro.find(params[:id])

		@rows = params[:rows]


	end	

end	